import React, { useState } from 'react'
import Button from '@mui/material/Button';
import axios from 'axios';
import './Login.css';
import { Alert } from '@mui/material';
import {useNavigate} from 'react-router-dom';


const Login = () => {
  const navigate=useNavigate();
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const handlesubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/user/login", {
        email: email,
        password: password
      });
      if(response)
      {
        const name=response.data.name;
        const role=response.data.role;
        console.log(response.data);
        localStorage.setItem('user', JSON.stringify({name , email ,role}));
        navigate("/home");

      }

    } catch (error) {
      console.log(error);
      setError("Error while logging in");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className='container'>
      {error && <Alert severity="error">{error}</Alert>}
      <h2 className='header'>Signin</h2>
      <div className='input'>
     <input type='email' placeholder='Enter email' name='email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
     <input type='password' placeholder='Enter password' name='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
   </div>
      <div className='button'>
     
      <Button
          onClick={handlesubmit}
          disabled={loading} 
          variant="contained"
          color="success"
          style={{ marginTop: '20px', width: '10vw' }}
        >
          {loading ? 'Logging In...' : 'Login'}
        </Button>
        </div>
        <div className='tag-container'>
        <p style={{color:'white'}}>Dont have a account</p>
        <a href='/signup'>signup</a>
        </div>
    </div>
  )
}

export default Login