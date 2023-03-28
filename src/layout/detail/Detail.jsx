import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { detailData } from "../detailSlice";

import "./Detail.css";

export const Detail = () => {
  //Conexion a RDX en modo lectura
  const detailRedux = useSelector(detailData);

  useEffect(() => {
    console.log(detailRedux.choosenObject.name);
  }, []);

  return (
    <Container fluid className="detailDesign">
      <Row
        className="detailRow d-flex flex-column align-items-center justify-content-center"
        lg={6}
      >
        <Form.Label htmlFor="inputPassword5">Nombre</Form.Label>
        <Col className="mb-2">{detailRedux.choosenObject.name}</Col>
        <Form.Label htmlFor="inputPassword5">Apellido</Form.Label>
        <Col className="mb-2">{detailRedux.choosenObject.surname}</Col>
        <Form.Label htmlFor="inputPassword5">Telefono</Form.Label>
        <Col className="mb-2">{detailRedux.choosenObject.phone}</Col>
        <Form.Label htmlFor="inputPassword5">Email</Form.Label>
        <Col className="mb-2">{detailRedux.choosenObject.email}</Col>
      </Row>
    </Container>
  );
};
