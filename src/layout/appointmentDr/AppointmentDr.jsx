import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
      <Row className="appointmentDesignDr">
        <Col className="d-flex flex-column align-items-center justify-content-center">
          {doctorAppointment.map((citas) => {
            return (
              <>
                <div key={citas.id}>
                  <div className="appointmentDivDr">Paciente</div>
                  <div>{citas.patient_id}</div>
                  <div className="appointmentDivDr">Fecha</div>
                  <div>{citas.date}</div>
                  <div className="appointmentDivDr">Hora</div>
                  <div>{citas.hour}</div>
                </div>
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
