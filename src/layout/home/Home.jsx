import React from "react";
import {
  Carousel,
  Container,
  Row,
  Card,
  CardGroup,
  Col,
} from "react-bootstrap";
import M1 from "../../img/M1.jpg";
import M2 from "../../img/M2.jpg";
import M3 from "../../img/M3.jpg";
import M4 from "../../img/M4.png";
import M5 from "../../img/M5.jpeg";
import M6 from "../../img/M6.jpeg";
import "./Home.css";

export const Home = () => {
  return (
    <Container fluid>
      <Row className="d-flex justify-content-center homeDesign">
        <Col sm={10} className="d-flex flex-column align-items-center">
          <Carousel fade className="mt-5">
            <Carousel.Item interval={4000}>
              <img className="d-block w-100" src={M1} alt="M1" />
              <Carousel.Caption>
                <h3>UN DENTISTA CERCA DE TI</h3>
                <h5>
                  Los dos mejores experimentados y cualificados odontólogos,
                  cerca de ti.
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img className="d-block w-100" src={M2} alt="M2" />
              <Carousel.Caption>
                <h3>MEJOR EXPERIENCIA</h3>
                <h5>
                  Prevención, ortodoncia, odontopediatría, implantes y estértica
                  dental
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={4000}>
              <img className="d-block w-100" src={M3} alt="M3" />
              <Carousel.Caption>
                <h3>ÚLTIMA TECNOLOGÍA</h3>
                <h5>
                  Diagnóstico 3D, implantología avanzada y ortodoncia invisible.
                </h5>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="mt-3">
            <h1>Tratamientos dentales con la mejor calidad</h1>
            </div>
            <CardGroup className="gap-3 mt-3">
              <Card border="dark">
                <Card.Img variant="top" src={M4} />
                <Card.Body>
                  <Card.Title>IMPLANTES</Card.Title>
                  <Card.Text>
                    Una solución fija para reemplazar la falta de dientes o por
                    si quieres sustituir tu prótesis removible
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="dark">
                <Card.Img variant="top" src={M5} />
                <Card.Body>
                  <Card.Title>BLANQUEAMIENTO</Card.Title>
                  <Card.Text>
                    Devuelve luminosidad a tus dientes y recupera su color
                    natural con un blanqueamiento dental.
                  </Card.Text>
                </Card.Body>
              </Card>
              <Card border="dark">
                <Card.Img variant="top" src={M6} />
                <Card.Body>
                  <Card.Title>ORTODONCIAS</Card.Title>
                  <Card.Text>
                    Corrige la posición de los dientes para tener una sonrisa
                    bonita y mejorar tu forma de masticar.
                  </Card.Text>
                </Card.Body>
              </Card>
            </CardGroup>
        </Col>
      </Row>
    </Container>
  );
};
