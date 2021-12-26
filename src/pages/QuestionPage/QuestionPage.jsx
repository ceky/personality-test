import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getQuestions } from '../../services/questions';
import { saveQuestions } from '../../state/action-creators/questions';
import Question from '../../components/question/Question';
import './QuestionPage.css';

export default function QuestionPage() {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setQuestions(getQuestions());
  }, []);

  useEffect(() => {
    dispatch(saveQuestions(questions));
  }, [questions]);

  function onSelectAnswer() {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion === questions.length - 1) {
      navigate('/result');
    }
  }

  return (
    <div>
      <main>
        <p className="question">
          Question {currentQuestion + 1} of {questions.length}
        </p>
        {questions.length && (
          <Question
            question={questions[currentQuestion].question}
            answers={questions[currentQuestion].answers}
            selectAnswer={onSelectAnswer}
          />
        )}
      </main>
    </div>
  );
}
