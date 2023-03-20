import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { InputText } from "../../components/inputtext/InputText";
import "./Login.css";
import { validate } from "../../helpers/useful";
import { logMe } from "../../services/apiCalls";
import { useDispatch, useSelector } from "react-redux";
import { login, userData } from "../userSlice";
import { useNavigate } from "react-router-dom";
import { decodeToken } from 'react-jwt'

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const credentialsRdx = useSelector(userData);

  const [credenciales, setCredenciales] = useState({
    email: "",
    password: "",
  });

  const [credencialesError, setCredencialesError] = useState({
    emailError: "",
    passwordError: "",
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    emailVali: false,
    passwordVali: false,
  });

  useEffect(() => {
    if (credentialsRdx.credentials.token) {
      //Si No token...login redirect
      navigate("/login");
    }
  }, []);

  const [registerAct, setRegisterAct] = useState(false);
  const [welcome, setWelcome] = useState("");

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    for (let error in credencialesError) {
      if (credencialesError[error] !== "") {
        setRegisterAct(false);
        return;
      }
    }
    for (let vacio in credenciales) {
      if (credenciales[vacio] === "") {
        setRegisterAct(false);
        return;
      }
    }
    for (let validated in valiCredenciales) {
      if (valiCredenciales[validated] === false) {
        setRegisterAct(false);
        return;
      }
    }
    setRegisterAct(true);
  });

  const checkError = (e) => {
    let error = "";

    let checked = validate(e.target.name, e.target.value, e.target.required);

    error = checked.message;

    setValiCredenciales((prevState) => ({
      ...prevState,
      [e.target.name + "Vali"]: checked.validated,
    }));

    setCredencialesError((prevState) => ({
      ...prevState,
      [e.target.name + "Error"]: error,
    }));
  };

  const logeame = () => {
    logMe(credenciales)
      .then((respuesta) => {
        let decodificado = decodeToken(respuesta.data)
        console.log(decodificado);
        let datosBackend = {
          token: respuesta.data,
          usuario: decodificado
        };
        //Este es el momento en el que guardo en REDUX
        dispatch(login({ credentials: datosBackend }));

         //Una vez nos hemos logeado...mostramos mensaje de bienvenida...
         setWelcome(`Bienvenid@ de nuevo ${datosBackend.usuario.name}`);

         //Redirección a Home
 
         setTimeout(() => {
           navigate("/");
         }, 3000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid>
      {welcome !=='' ? 
      (
        <Row className="loginInputs d-flex justify-content-center align-items-center my-4">
          <Col xs={12} sm={6}>
            <div>{welcome}</div>
          </Col>
        </Row>
      ) : (
        <Row className="loginInputs d-flex justify-content-center align-items-center my-4">
        <Col className="" xs={12} sm={6}>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <InputText
            className={
              credencialesError.nameError === ""
                ? "mb-4"
                : "mb-4"
            }
            type={"email"}
            name={"email"}
            placeholder={"Introduce tu email"}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
          />
          <Form.Text className="text-danger">{credencialesError.emailError}</Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword2">
            <Form.Label>Password</Form.Label>
          <InputText
            className={
              credencialesError.nameError === ""
                ? "mb-4"
                : "mb-4"
            }
            type={"password"}
            name={"password"}
            placeholder={"Introduce tu password"}
            required={true}
            changeFunction={(e) => inputHandler(e)}
            blurFunction={(e) => checkError(e)}
          />
          <Form.Text className="text-danger">{credencialesError.passwordError}</Form.Text>
          </Form.Group>
          <div
            className={
              registerAct
                ? "registerSendDeac registerSendAct"
                : "registerSendDeac"
            }
            onClick={registerAct ? logeame : () => {}}
          >
            Log in!
          </div>
        </Col>
      </Row>
      )
      }
      
    </Container>
  );
};
