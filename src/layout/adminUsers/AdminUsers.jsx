import React, { useEffect, useState } from "react";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { bringUsers } from "../../services/apiCalls";
//Uso de redux
import { useDispatch, useSelector } from "react-redux";
import { addChoosen } from "../detailSlice";
import { userData } from "../userSlice";
import "./AdminUsers.css";

export const AdminUsers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const reduxCredentials = useSelector(userData);

  useEffect(() => {
    if (users.length === 0) {
      bringUsers(reduxCredentials.credentials.token)
        .then((result) => {
          console.log(result);
          setUsers(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [users]);

  const selected = (persona) => {
    dispatch(addChoosen({ choosenObject: persona }));
    setTimeout(() => {
      navigate("/detail");
    }, 500);
  };

  return (
    <Container fluid>
      <Row className="adminusersDesign align-items-center d-flex justify-content-center text-center">
        {users.length > 0 ? (
          <Col sm={4} lg={2}>
            {users.map((persona) => {
              return (
                <ListGroup>
                <ListGroup.Item as="li" onClick={() => selected(persona)} key={persona.id} action>
                  {persona.name}
                </ListGroup.Item>
                </ListGroup>
              );
            })}
          </Col>
        ) : (
          <div>Estan Viniendo</div>
        )}
      </Row>
    </Container>
  );
};
