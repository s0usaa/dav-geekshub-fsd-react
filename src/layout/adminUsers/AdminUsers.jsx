import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { bringUsers } from '../../services/apiCalls';
//Uso de redux
import { useDispatch, useSelector } from 'react-redux';
import { addChoosen } from '../detailSlice';
import { userData } from '../userSlice';
import './AdminUsers.css';

export const AdminUsers = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);

  const reduxCredentials = useSelector(userData);

  useEffect(() => {
    if (users.length === 0) {  
      bringUsers(reduxCredentials.credentials.token)
        .then((result) => {
          console.log(result);
          setUsers(result.data);
        })
        .catch((error) => console.log(error));
    }
  }, [users]);

  const selected = (persona) => {
        
    //Primero guardo en RDX los datos escogidos...

    dispatch(addChoosen({ choosenObject: persona }))
    console.log(persona);
    setTimeout(()=>{
        navigate("/detail");
    },500)
}

  return (
    <Container fluid className='adminusersDesign'>
      <Row>
        {users.length > 0 ? 
        (<div>
            {users.map(persona =>{
              return (<div onClick={()=>selected(persona)}
              key={persona.id}>
                {persona.name}
                </div>)
              })
            }
        </div>) 
        : 
        (<div>Estan Viniendo</div>)
        }
      </Row>
    </Container>
  )
}
