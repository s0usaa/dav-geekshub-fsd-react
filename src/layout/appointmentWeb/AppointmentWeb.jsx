import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAppointment } from "../../services/apiCalls";
import { userData } from "../userSlice";
import "./AppointmentWeb.css";

export const AppointmentWeb = () => {
  const reduxCredentials = useSelector(userData);

  const [userAppointment, setUserAppointment] = useState([]);

  useEffect(() => {
    if (userAppointment.length === 0) {
      getAppointment(reduxCredentials.credentials.token)
        .then((respuesta) => {
          setUserAppointment(respuesta.data);
        })
        .catch((error) => console.log(error));
    }
  }, [userAppointment]);

  console.log(userAppointment);
  return (
    <Container fluid>
      <Row className="appointmentDesign align-items-center d-flex justify-content-center">
        <Col sm={12} lg={6} >
          {userAppointment.map((citas) => {
            return (
              <Col className="appointmentCol">
                <Form key={citas.id}>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2">
                        Doctor
                      </Form.Label>
                      <Col sm="10" lg={8} className="mt-2" >
                        <Form.Control
                          type="text"
                          placeholder={citas.doctor_id}
                          readOnly
                         />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2">
                        Fecha
                      </Form.Label>
                      <Col sm="10" lg={8}>
                        <Form.Control
                          type="text"
                          placeholder={citas.date}
                          readOnly
                        />
                      </Col>
                    </Form.Group>
                    <Form.Group
                      as={Row}
                      className="mb-3"
                      controlId="formPlaintextPassword"
                    >
                      <Form.Label column sm="2">
                        Hora
                      </Form.Label>
                      <Col sm="10" lg={8} className="mb-2" >
                        <Form.Control
                          type="text"
                          placeholder={citas.hour}
                          readOnly
                        />
                      </Col>
                    </Form.Group>
                    
                </Form>
                </Col>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
