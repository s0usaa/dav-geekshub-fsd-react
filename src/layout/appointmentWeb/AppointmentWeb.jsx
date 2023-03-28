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

  return (
    <Container fluid>
      <Row className="appointmentDesign align-items-center d-flex justify-content-center mt-5">
        <Col xs={12} sm={8} lg={6}>
          <h3 className="text-center mt-3">MIS CITAS</h3>
          {userAppointment.map((citas) => {
            return (
              <Form key={citas.id}>
                <div className="appointmentDiv">
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className="mx-2">
                      Doctor
                    </Form.Label>
                    <Col className="mt-2">
                      <Form.Control
                        type="text"
                        placeholder={citas.doctor_id}
                        readOnly
                      />
                    </Col>
                  </Form.Group>
                  <Form.Group
                    as={Row}
                    className="mb-2"
                    controlId="formPlaintextPassword"
                  >
                    <Form.Label column sm="2" className="mx-2">
                      Fecha
                    </Form.Label>
                    <Col>
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
                    <Form.Label column sm="2" className="mx-2">
                      Hora
                    </Form.Label>
                    <Col className="mb-2">
                      <Form.Control
                        type="text"
                        placeholder={citas.hour}
                        readOnly
                      />
                    </Col>
                  </Form.Group>
                </div>
              </Form>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
