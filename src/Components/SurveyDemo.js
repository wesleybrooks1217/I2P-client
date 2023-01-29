import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SurveyDemo() {
  const [survey, setSurvey] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/survey/')
      .then(res => setSurvey(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <h1>Survey</h1>
      {survey.map((question, index) => (
        <div key={index}>
          <p>{question.text}</p>
          <input type="text" placeholder="Your answer" />
        </div>
      ))}
      <button>Submit</button>
    </div>
  );
}

export default SurveyDemo;