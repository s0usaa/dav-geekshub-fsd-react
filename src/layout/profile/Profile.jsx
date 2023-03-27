import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Card, Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { getProfile } from '../../services/apiCalls';
import { userData } from '../userSlice';
import './Profile.css'

export const Profile = () => {

  const reduxCredentials = useSelector(userData)

  const [userProfile, setUserProfile] = useState({
    name: "",
    surname: "",
    phone: "",
    email: ""
  });

  useEffect(()=>{
    if(userProfile.name === ""){
      getProfile(reduxCredentials.credentials.token)
      .then((respuesta)=>{
        console.log(respuesta);
        setUserProfile({
          name: respuesta.data.name,
          surname: respuesta.data.surname,
          phone: respuesta.data.phone,
          email: respuesta.data.email
        })
      })
      .catch((error)=> console.log(error));
    }
  },[userProfile])

  return (
    <Container fluid>
      <Row className='profileDesign align-items-center d-flex justify-content-center'>
        <Col className='profileCol' sm={12} lg={6}>
        <Col sm={12} lg={8} className="mb-4 text-dark">
        <h2>Informacion de contacto</h2>
        </Col>
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Nombre
        </Form.Label>
        <Col sm="10" lg={8}>
          <Form.Control type="text" placeholder={userProfile.name} readOnly/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Apellido
        </Form.Label>
        <Col sm="10" lg={8}>
          <Form.Control type="text" placeholder={userProfile.surname} readOnly/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Telefono
        </Form.Label>
        <Col sm="10" lg={8}>
          <Form.Control type="text" placeholder={userProfile.phone} readOnly/>
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10" lg={8}>
          <Form.Control type="text" placeholder={userProfile.email} readOnly/>
        </Col>
      </Form.Group>
        </Form>
        </Col>
      </Row>
    </Container>
  )
}
