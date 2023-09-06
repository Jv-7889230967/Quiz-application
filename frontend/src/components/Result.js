import React, { useEffect} from 'react';
import './Result.css';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Result = (props) => {
  const userData = JSON.parse(localStorage.getItem('user'));
  const navigate = useNavigate(); 
  useEffect(()=>{
   const Score=async(req,res)=>{
  try {
    const response=await axios.post("http://localhost:5000/api/user/score",{
      name:userData.name,
      email:userData.email,
      score:props.score
    })
    if(response)
    {
      console.log(response.data);
    }  
  } 
  catch (error) {
    console.log(error);
  }
   }
   Score();
  })


  


  const onRestart = () => {
    navigate("/home");
    console.log("restarted");
  };

  return (
    <div className='result-container'>
      <h1 className='title text-light' style={{ color: 'white' }}>RESULTS</h1>
      <div className='result flex-center'>
        <div className='details-container'>
          <div className='details'>
            <span style={{ color: 'white' }}>Name:</span>
            <span style={{ color: 'white', marginLeft: '5px' }}>{userData.name}</span>
          </div>
          <div className='details'>
            <span style={{ color: 'white' }}>Email:</span>
            <span style={{ color: 'white', marginLeft: '5px' }}>{userData.email}</span>
          </div>
        </div>
        {/* <div className='flex'>
          <span className='label' style={{ color: 'white', width: '100px' }}>Score</span>
          <span className='value bold' style={{ color: 'white', flex: '1' }}>Daily Tuition</span>
        </div> */}
        <div className='flex'>
          <span className='label' style={{ color: 'white', width: '100px' }}>Max Marks</span>
          <span className='value' style={{ color: 'white', flex: '1' }}>5</span>
        </div>
        <div className='flex'>
          <span className='label' style={{ color: 'white', width: '100px' }}>Total Question</span>
          <span className='value bold' style={{ color: 'white', flex: '1', marginRight: '10px' }}>05</span>
        </div>
        <div className='flex'>
          <span className='label' style={{ color: 'white', width: '100px' }}>Your Score</span>
          <span className='value bold' style={{ color: 'white', flex: '1' }}>{props.score}</span>
        </div>
      </div>
      <div className='start'>
        <Button variant="contained" color="success" onClick={onRestart}>
          Start Again
        </Button>
      </div>
    </div>
  );
}

export default Result;
