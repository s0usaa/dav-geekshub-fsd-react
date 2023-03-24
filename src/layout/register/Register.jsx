import React, { useEffect, useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { InputText } from "../../components/inputtext/InputText";
import { validate } from "../../helpers/useful";
import { registerUser } from "../../services/apiCalls";
import './Register.css'

export const Register = () => {
  const navigate = useNavigate();

  const [credenciales, setCredenciales] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
  });

  const [valiCredenciales, setValiCredenciales] = useState({
    nameVali: false,
    surnameVali: false,
    phoneVali: false,
    emailVali: false,
    passwordVali: false,
  });

  const [credencialesError, setCredencialesError] = useState({
    nameError: "",
    surnameError: "",
    phoneError: "",
    emailError: "",
    passwordError: "",
  });

  const [registerAct, setRegisterAct] = useState(false);

  const inputHandler = (e) => {
    setCredenciales((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    console.log(valiCredenciales);
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

  const registerPatient = () => {
    registerUser(credenciales)
      .then(() => {
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => console.log(error));
  };

  return (
    <Container className="registerMain">
      <Row className="registerDesign d-flex justify-content-center align-items-center">
        <Col xs={12} sm={6}>
          <Form>
            <Form.Group className="mb-1" controlId="formBasicName">
              <Form.Label>Nombre</Form.Label>
              <InputText
                className={credencialesError.nameError === "" ? "mb-4" : "mb-4"}
                type={"text"}
                name={"name"}
                placeholder={"Introduce tu nombre"}
                required={true}
                maxLenght={18}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <Form.Text className="text-danger">
                {credencialesError.nameError}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicSurname">
              <Form.Label>Apellido</Form.Label>
              <InputText
                className={credencialesError.surnameError === "" ? "mb-4" : "mb-4"}
                type={"text"}
                name={"surname"}
                placeholder={"Introduce tu apellido"}
                required={true}
                maxLenght={30}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <Form.Text className="text-danger">
                {credencialesError.surnameError}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicPhone">
              <Form.Label>Telefono</Form.Label>
              <InputText
                className={credencialesError.phoneError === "" ? "mb-4" : "mb-4"}
                type={"text"}
                name={"phone"}
                placeholder={"Introduce tu telefono"}
                required={true}
                // maxLenght={10}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <Form.Text className="text-danger">
                {credencialesError.phoneError}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <InputText
                className={credencialesError.emailError === "" ? "mb-4" : "mb-4"}
                type={"email"}
                name={"email"}
                placeholder={"Introduce tu email"}
                required={true}
                maxLenght={50}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <Form.Text className="text-danger">
                {credencialesError.emailError}
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-1" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <InputText
                className={credencialesError.passwordError === "" ? "mb-4" : "mb-4"}
                type={"password"}
                name={"password"}
                placeholder={"Introduce tu password"}
                required={true}
                maxLenght={18}
                changeFunction={(e) => inputHandler(e)}
                blurFunction={(e) => checkError(e)}
              />
              <Form.Text className="text-danger">
                {credencialesError.passwordError}
              </Form.Text>
            </Form.Group>
          </Form>
          <div
              className={
                registerAct
                  ? "registerSendDeac registerSendAct"
                  : "registerSendDeac"
              }
              onClick={registerAct ? registerPatient : () => {}}
            >
              Register!
            </div>
        </Col>
      </Row>
    </Container>
  );
};
