import axios from 'axios';

const root = "http://localhost:4000/"

//Logueo
export const logMe = async (body) => {

    return await axios.post(`${root}login`, body);
}

//Traer Usuarios siendo Admin
export const bringUsers = async (token) => {
    let config = {
      headers: { 
        'Authorization': 'Bearer '+ token,  
      }
    };

    return await axios.get(`${root}adminuser`, config);
}

//Registro usuario
export const registerUser = async (body) => {

  return await axios.post(`${root}register`, body);
}

//Ver perfil Usuario
export const getProfile = async (token) => {
  let config = {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  }
  return await axios.get(`${root}profile`, config);
}

//Ver citas Usuario
export const getAppointment = async (token) =>{
  console.log(token, "hola soyy token");
  let config = {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  }
  return await axios.get(`${root}appointment`, config);
}

//Crear citas Usuario
export const createCitas = async (body, token) => {
  let config = {
    headers: {
      'Authorization' : `Bearer ${token}`
    }
  }
  return await axios.post(`${root}appointment`, body, config);
}