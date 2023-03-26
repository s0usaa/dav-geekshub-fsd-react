import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { userData, userout } from "../layout/userSlice";

export const NavbarWeb = () => {
  const datosCredencialesRedux = useSelector(userData);
  const dispatch = useDispatch();

  const logout = ()=>{
    dispatch(userout({credentials:{}, token:""}))
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          Clinica Dental
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            {!datosCredencialesRedux.credentials.usuario ? (
              <>
                <Nav.Link as={Link} to={"/register"}>
                  Register
                </Nav.Link>
                <Nav.Link as={Link} to={"/login"}>
                  Login
                </Nav.Link>
              </>
            ) : datosCredencialesRedux.credentials.usuario.roleId === 1 ? (
              <>
                <NavDropdown title='Admin'>
                  <NavDropdown.Item as={Link} to={"/users"} >Usarios
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link  as={Link} to={"/"} onClick={()=>logout()}>
                  Logout
                </Nav.Link>
              </>
            ): datosCredencialesRedux.credentials.usuario.roleId === 2 ? (
              <>
              <NavDropdown title='Doctor'>
                  <NavDropdown.Item as={Link} to={"/appointmentDr"} >Citas Dr
                  </NavDropdown.Item>
              </NavDropdown>
                <Nav.Link  as={Link} to={"/"} onClick={()=>logout()}>
                  Logout
                </Nav.Link>
              </>
            ): datosCredencialesRedux.credentials.usuario.roleId === 3 ? (
              <>
              <Nav.Link as={Link} to={"/appointment/create"}>
                  Pedir cita
                </Nav.Link>
              <Nav.Link as={Link} to={"/appointmentweb"}>
                  Citas
                </Nav.Link>
              <Nav.Link as={Link} to={"/profile"}>
                  Perfil
                </Nav.Link>
                <Nav.Link as={Link} to={"/"} onClick={()=>logout()} >
                  Logout
                </Nav.Link>
              </>
            ): (
              <Nav.Link  as={Link} to={"/"} onClick={()=>logout()}>
                  Logout
                </Nav.Link>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
