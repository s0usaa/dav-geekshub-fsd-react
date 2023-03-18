import React, { useState, useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { InputText } from "../../components/inputtext/InputText";
import "./Login.css";
import { validate } from "../../helpers/useful";
import { logMe } from "../../services/apiCalls";
import { useDispatch } from "react-redux";
import { login } from "../userSlice";

export const Login = () => {
  const dispatch = useDispatch();

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

  const [registerAct, setRegisterAct] = useState(false);

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
        let datosBackend = {
          token: respuesta.data.token,
          usuario: respuesta.data
        };

        console.log(datosBackend);
        //Este es el momento en el que guardo en REDUX
        dispatch(login({ credentials: datosBackend }));
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container fluid>
      <Row className="loginInputs d-flex justify-content-center align-items-center my-4">
        <Col className="" xs={12} sm={6}>
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
          <div
            className={
              registerAct
                ? "registerSendDeac registerSendAct"
                : "registerSendDeac"
            }
            onClick={registerAct ? logeame : () => {}}
          >
            Register me!
          </div>
        </Col>
      </Row>
    </Container>
  );
};
