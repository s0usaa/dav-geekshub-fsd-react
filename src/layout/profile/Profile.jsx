import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
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
      <Row className='profileDesign'>
        <Col className='d-flex flex-column align-items-center justify-content-center'>
        <div className='profileDivs'>Nombre</div>
        <div>{userProfile.name}</div>
        <div className='profileDivs'>Apellido</div>
        <div>{userProfile.surname}</div>
        <div className='profileDivs'>Telefono</div>
        <div>{userProfile.phone}</div>
        <div className='profileDivs'>Email</div>
        <div>{userProfile.email}</div>
        </Col>
      </Row>
    </Container>
  )
}
