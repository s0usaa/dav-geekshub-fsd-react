import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { detailData } from '../detailSlice';

import './Detail.css';

export const Detail = () => {

  //Conexion a RDX en modo lectura
  const detailRedux = useSelector(detailData);

  useEffect(()=>{
    console.log(detailRedux.choosenObject?.data.name, "potatoe")
  },[]);

  return (
    <Container fluid className='detailDesign'>
            <Row>
                <Col>
                    {detailRedux?.choosenObject?.data.name}
                </Col>
                {/* <Col>
                    {detailRedux?.choosenObject?.email}
                </Col> */}
            </Row>
        </Container>
  )
}
