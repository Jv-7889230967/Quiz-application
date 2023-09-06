import React from 'react'
import {useNavigate} from 'react-router-dom'; 
import Button from '@mui/material/Button';
import Navbar from './Navbar';
import './Home.css';
const Home = () => {
  const navigate=useNavigate();
  return (
  <>
    <Navbar/>
    <div className='home-container'>
      <h1 style={{color:'white'}}>Quiz Application</h1>
      <ol>
        <li>You will be asked some questions</li>
        <li>Each question has three optoins to choose</li>
        <li>You will be awarded marks on the basis of that</li>
        <li>Result will be declared after completion of the quiz</li>
      </ol>
       <div className='start'>
       <Button variant="contained" onClick={()=>{navigate("/quiz")}}>Start QUiz</Button>
       </div>
    </div>
    </>
  )
}

export default Home