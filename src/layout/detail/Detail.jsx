import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { detailData } from "../detailSlice";

import "./Detail.css";

export const Detail = () => {
  const detailRedux = useSelector(detailData);

  useEffect(() => {}, []);

  return (
    <Container fluid>
      <Row className="detailDesign d-flex align-items-center justify-content-center">
        <Col className="detailCol" xs={10} lg={6}>
          <h2 className="mb-4 text-center">Informacion del Usuario</h2>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Nombre
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={detailRedux.choosenObject.name}
                  readOnly
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Apellido
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={detailRedux.choosenObject.surname}
                  readOnly
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Telefono
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={detailRedux.choosenObject.phone}
                  readOnly
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formPlaintextName">
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  placeholder={detailRedux.choosenObject.email}
                  readOnly
                />
              </Col>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
