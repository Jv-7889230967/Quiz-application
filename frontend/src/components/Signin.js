import React, { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Alert from '@mui/material/Alert';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Signin = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); // Define the error state

  const handlesubmit = async (req, res) => {
    try {
      setLoading(true);

      const response = await axios.post('http://localhost:5000/api/user/create', {
        name: name,
        email: email,
        password: password,
        role: role,
      });

      if (response) {
        console.log(response.data);
        navigate('/home');
      }
    } catch (error) {
      console.log(error);
      setError("Error while creating account");
    } finally { 
      setLoading(false);
    }
  };

  return (
    <div  className="container">
      {error && <Alert severity="error">{error}</Alert>}
      <h2 style={{color:'white'}} className="h">Create Account</h2>
      <div className="input">
        <input
          type="name"
          placeholder="Enter name"
          name="name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Signup as</InputLabel>
          <Select style={{backgroundColor:'white'}}
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={role}
            onChange={(e) => {
              setRole(e.target.value);
            }}
            label="Age"
          >
            <MenuItem value="student">Student</MenuItem>
            <MenuItem value="teacher">Teacher</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>
      </div>
      <div className="button">
        <Button
          onClick={handlesubmit}
          disabled={loading}
          variant="contained"
          color="success"
          style={{ marginTop: '20px', width: '10vw' }}
        >
          {loading ? 'Creating...' : 'Signup'}
        </Button>
      </div>
      <div className="tag-container">
        <p style={{color:'white'}}>Already have an account</p>
        <a href="/">Sign in</a>
      </div>
    </div>
  );
};

export default Signin;
