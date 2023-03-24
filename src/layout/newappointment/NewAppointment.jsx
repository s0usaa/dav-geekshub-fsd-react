import React, { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { InputText } from '../../components/inputtext/InputText';
import { createCitas } from '../../services/apiCalls';
import { userData } from '../userSlice';

export const NewAppointment = () => {

const navigate = useNavigate();
const [welcome, setWelcome] = useState("");
const reduxCredentials = useSelector(userData)
const [newAppointmet, setNewAppointment] = useState({
    doctor_id: "",
    // patient_id: reduxCredentials.credentials,
    date: "",
    hour: ""
})

// console.log(reduxCredentials.credentials);

const inputHandler = (e) => {
    setNewAppointment((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value
    }));
}
console.log(newAppointmet);

const checkError = (e) => {

}

const createAppointment = ()=> {
    createCitas(newAppointmet, reduxCredentials.credentials.token)
    .then(resultado =>{
        setNewAppointment(resultado.data)
        setWelcome(`Cita creada correctamente para el dia: ${newAppointmet.date}`)
        setTimeout(()=>{
            navigate('/appointmentweb');
        },2500);
    })
    .catch(error =>{
        setNewAppointment(error.message)
    })
}

  return (
    <Container>
        <Row>
            <Col>
            <Form>
            <Form.Group className="mb-1" controlId="formBasicDoctor">
              <Form.Label>Doctor</Form.Label>
              <InputText
                className={""}
                type={"number"}
                name={"doctor_id"}
                placeholder={"Selecciona tu doctor"}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicDate">
              <Form.Label>Fecha</Form.Label>
              <InputText
                className={""}
                type={"date"}
                name={"date"}
                placeholder={"Selecciona tu doctor"}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicHour">
              <Form.Label>Hora</Form.Label>
              <InputText
                className={""}
                type={"time"}
                name={"hour"}
                placeholder={"Selecciona tu doctor"}
                required={true}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              </Form.Group>
              <Button variant="primary" onClick={createAppointment}>
                    New Date
                </Button>
            </Form>
            </Col>
        </Row>
    </Container>
  )
}
