import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
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
          console.log(respuesta, "estoy akii");
          setUserAppointment(respuesta.data);
        })
        .catch((error) => console.log(error));
    }
  }, [userAppointment]);

  // const appointments = (citas) =>{
  //   dispach(addChoosen({
  //     choosenObject: persona }))
  //     console.log(citas);
  // }
  console.log(userAppointment);
  return (
    <Container fluid>
      <Row className="appointmentDesign">
        <Col className="d-flex flex-column align-items-center justify-content-center">
          {userAppointment.map((citas) => {
            return (
              <>
              
                <div key={citas.id}>
                  <div>{citas.id}</div>
                  {/* <div>{citas.date}</div>
                  <div>{citas.doctor_id}</div>
                  <div>{citas.hour}</div> */}
                </div>
              </>
            );
          })}
        </Col>
      </Row>
    </Container>
  );
};
