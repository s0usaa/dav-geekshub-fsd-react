import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getAppointmentDr } from "../../services/apiCalls";

import { userData } from "../userSlice";
import "./AppointmentDr.css";

export const AppointmentDr = () => {
  const reduxCredentials = useSelector(userData);

  const [doctorAppointment, setDoctorAppointment] = useState([]);

  useEffect(() => {
    if (doctorAppointment.length === 0) {
      getAppointmentDr(reduxCredentials.credentials.token)
        .then((respuesta) => {
          setDoctorAppointment(respuesta.data);
        })
        .catch((error) => console.log(error));
    }
  }, [doctorAppointment]);

  console.log(doctorAppointment);
  return (
    <Container fluid>
      <Row className="appointmentDesignDr d-flex align-items-center justify-content-center">
        <Col xs={12} sm={8} lg={6}>
          <h3 className="text-center mb-3">CITAS DEL DOCTOR</h3>
          {doctorAppointment.map((citas) => {
            return (
              <Form key={citas.id}> 
              <div className="appointmentDivDr">
                  <Form.Group as={Row} controlId="formPlaintextPassword">
                    <Form.Label column sm="2" className="mx-2">
                      Paciente
                    </Form.Label>
                    <Col className="mt-2">
                      <Form.Control
                        type="text"
                        placeholder={citas.patient_id}
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
