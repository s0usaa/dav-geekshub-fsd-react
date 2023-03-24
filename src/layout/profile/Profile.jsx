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
          name: respuesta.data,
          surname: respuesta.data,
          phone: respuesta.data,
          email: respuesta.data
        })
      })
      .catch((error)=> console.log(error));
    }
  },[userProfile])

  return (
    <Container>
      <Row className='profileDesign'>
        <Col>
        <div>{userProfile.name}</div>
        <div>{userProfile.surname}</div>
        <div>{userProfile.phone}</div>
        <div>{userProfile.email}</div>
        </Col>
      </Row>
    </Container>
  )
}
