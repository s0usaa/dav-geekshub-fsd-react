import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getAppointment } from '../../services/apiCalls';
import { userData } from '../userSlice';
import './AppointmentWeb.css';

export const AppointmentWeb = () => {

const reduxCredentials = useSelector(userData)

const [userAppointment, setUserAppointment] = useState({
  doctor: "",
  date: "",
  hour: ""
})

useEffect(()=>{
  if(userAppointment.date === ""){
    getAppointment(reduxCredentials.credentials.token)
    .then((respuesta)=>{
      console.log(respuesta, "estoy akii");
      setUserAppointment({
        doctor: respuesta.data.doctor_id,
        date: respuesta.data.date,
        hour: respuesta.data.hour
      })
      console.log(respuesta, "Que es lo que pasaaaa");
    })
    .catch((error)=> console.log(error));
  }
},[userAppointment])

  return (
    <Container fluid>
      <Row className='appointmentDesign'>
        <Col className='d-flex flex-column align-items-center justify-content-center'>
        <div className='appointmentDivs'>Doctor</div>
        <div>{userAppointment.doctor}</div>
        <div className='appointmentDivs'>Fecha</div>
        <div>{userAppointment.date}</div>
        <div className='appointmentDivs'>Hora</div>
        <div>{userAppointment.hour}</div>
        </Col>
      </Row>
    </Container>
  )
}
