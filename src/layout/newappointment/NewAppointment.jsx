import React, { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputText } from "../../components/inputtext/InputText";
import { createCitas } from "../../services/apiCalls";
import { userData } from "../userSlice";
import "./NewAppointment.css";

export const NewAppointment = () => {
  const navigate = useNavigate();
  const [welcome, setWelcome] = useState("");

  const reduxCredentials = useSelector(userData);
  const [newAppointment, setNewAppointment] = useState({
    doctor_id: "",
    date: "",
    hour: "",
  });

  const inputHandler = (e) => {
    setNewAppointment((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const createAppointment = () => {
    createCitas(newAppointment, reduxCredentials.credentials.token)
      .then((resultado) => {
        console.log(resultado);
        setNewAppointment(resultado.data);
        setWelcome(
          `Cita creada correctamente para el dia: ${newAppointment.date}`
        );
        setTimeout(() => {
          navigate("/appointmentweb");
        }, 2500);
      })
      .catch((error) => {
        setNewAppointment(error.message);
      });
  };

  return (
    <Container>
      <Row className="appointmentDivs">
        <Col lg={6} sm={12}>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicDoctor">
              <Form.Label>Doctor</Form.Label>
              <InputText
                className={""}
                type={"number"}
                name={"doctor_id"}
                placeholder={"Selecciona tu doctor"}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicDate">
              <Form.Label>Fecha</Form.Label>
              <InputText
                className={""}
                type={"text"}
                name={"date"}
                placeholder={"Selecciona tu doctor"}
                changeFunction={(e) => inputHandler(e)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicHour">
              <Form.Label>Hora</Form.Label>
              <InputText
                className={""}
                type={"text"}
                name={"hour"}
                placeholder={"Selecciona tu doctor"}
                changeFunction={(e) => inputHandler(e)}
              />
            </Form.Group>
            <Button variant="dark" onClick={createAppointment}>
              Pedir Cita
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
