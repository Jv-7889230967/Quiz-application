import React from 'react'
import './Quiz.css';
import Question from './Question';



const Quiz = () => {
    
  return (
    <div className='quiz-container'>
      <h1 className='title text-light' style={{color:'white'}}>QUIZ-APPLICATION</h1>
      <Question/>

    </div>
  )
}

export default Quiz