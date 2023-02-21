import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API } from '../API';
import { init_api } from '../API';
import { nanoid } from '@reduxjs/toolkit';



function SurveyDemo() {
    const [answer, setAnswer] = useState(null);
    const [currentQuestion, setCurrentQuestion] = useState();
    const [questions, setQuestions] = useState([]);
    const [submittedAnswer, setSubmittedAnswer] = useState(null);
    const [id, setId] = useState(1);

    const handleChange = (event) => {
        setAnswer(parseInt(event.target.value, 10));
    }

    const fetchSurveyQuestions = async () => {
        init_api();
        try {
            const promise = API.get(`/api/survey/${id}/`);
            promise.then((response) => {
                const res = response.data;
                console.log(res)
                setQuestions(res);
            });
            
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        setSubmittedAnswer(answer)
       
    }, [answer])

    useEffect(() => {
        fetchSurveyQuestions();
        },[id]);
   


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (answer === null) {
            return;
        }
        const data = {
            questionID: questions.question,
            userID: nanoid,
            answer: submittedAnswer
        };
        
        try {
            console.log('to try!')
            await API.post('/api/CareerSurveyOneAnswers/', data);
            setAnswer(null);
            setId((prevID) => prevID + 1);
          
            
        } catch (error) {
            console.error(error);
        }
    };
  

    return (
        <div>
          <h1>Survey Demo</h1>
          <form onSubmit={handleSubmit}>
            <h2>{questions.question}</h2>
            <label>
            <input
            type="radio"
            name="answer"
            value={0}
            checked={answer === 0}
            onChange={handleChange}
            />
            No
            <input 
            type="radio"
            name="answer"
            value={1}
            checked={answer === 1}
            onChange={handleChange}
            />
            Yes
            </label>
            <button type="submit">Submit</button>
            </form>
          </div>
    )
}

export default SurveyDemo;




  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  

  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  