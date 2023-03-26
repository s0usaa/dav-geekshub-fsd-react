import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './Footer.css'

export const Footer = () => {
  return (
      <Container fluid>
        <Row className='bg-dark footerDesign text-white d-flex flex-column align-items-center'>
          <Col> 
            <p>Calle Falsa 123, Aspen - MassaChuches</p>
          </Col>
          <Col>
          <p>clinicadental@dentclinic.com</p>
          </Col>
          <Col>
          <p>555-553487</p>
          </Col>
        </Row>
      </Container>
  )
}