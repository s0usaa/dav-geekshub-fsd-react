import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { InputText } from "../../components/inputtext/InputText";
import { createCitas } from "../../services/apiCalls";
import { userData } from "../userSlice";
import "./NewAppointment.css";
import dayjs from "dayjs";
import setMinutes from "date-fns/setMinutes";
import setHours from "date-fns/setHours";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const NewAppointment = () => {
  const navigate = useNavigate();
  const [welcome, setWelcome] = useState("");
  const [date, setDate] = useState(null)
  const reduxCredentials = useSelector(userData);
  const [horas, setHoras] = useState(setHours(setMinutes(new Date(),0),9));

  // const [doctor, setDoctor] = useState("");
  
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

  console.log(newAppointment);

  const createAppointment = () => {
    createCitas(newAppointment, reduxCredentials.credentials.token)
      .then((resultado) => {
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
      {welcome !== "" ? (
        <Row className="newAppointmentDesign d-flex justify-content-center align-items-center">
          <Col xs={10} sm={6} className="loginCol">
            <h1>{welcome}</h1>
          </Col>
        </Row>
      ) : (
      <Row className="newAppointmentDesign d-flex align-items-center justify-content-center">
        <Col xs={10} lg={6} sm={12} className="newAppointmentDiv">
        <h1 className="mb-4">Pide tu cita</h1>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicDoctor">
              <Form.Label>Doctor</Form.Label>
              <InputText
                className={""}
                type={"number"}
                name={"doctor_id"}
                placeholder={"Selecciona el doctor 1 o 2"}
                maxLenght={1}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e)=> (e)}
              />
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicDate">
              <Form.Label>Fecha</Form.Label>
              <DatePicker
              selected={date}
              onChange={(fecha)=>setDate(fecha)}
              dateFormat="dd/MM/yyyy"
              timeInputLabel="Fecha:"
              minDate={new Date()}
              placeholderText="Selecciona una fecha"
              />
              {/* <InputText
                className={""}
                type={"date"}
                name={"date"}
                placeholder={"Selecciona tu doctor"}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e)=> (e)}
              /> */}
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicHour">
              <Form.Label>Hora</Form.Label>
              <DatePicker
              selected={horas}
              onChange={(hora) => setHoras(hora)}
              showTimeSelect
              showTimeSelectOnly
              timeIntervals={30}
              timeCaption="Hora"
              timeFormat="HH:mm"
              minTime={setHours(setMinutes(new Date(),0),9)}
              maxTime={setHours(setMinutes(new Date(),30), 20)}
              dateFormat="HH:mm"
              placeholderText="Selecciona una hora"
              />
              {/* <InputText
                className={""}
                type={"time"}
                name={"hour"}
                placeholder={"Selecciona tu doctor"}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e)=> (e)}
              /> */}
            </Form.Group>
            <div className="loginSendDeac loginSendAct m-3" onClick={createAppointment}>
              Pedir Cita
            </div>
          </Form>
        </Col>
      </Row>
      )}
    </Container>
  );
};
