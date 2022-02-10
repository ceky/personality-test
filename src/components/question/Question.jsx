import React from 'react';
import { useDispatch } from 'react-redux';

import './Question.css';
import { addAnswer } from '../../state/action-creators/answer';

export default function Question({ question, answers, selectAnswer }) {
  const dispatch = useDispatch();

  function onClickAnswer(answer) {
    selectAnswer(answer);
    dispatch(addAnswer(answer));
  }

  return (
    <div data-testid="question-main" className="question-container">
      <h1>{question}</h1>
      <ul data-testid="answers">
        {answers.map((answer, key) => (
          <li
            data-testid="answer"
            key={key}
            onClick={() => onClickAnswer(answer)}
          >
            {answer.answer}
          </li>
        ))}
      </ul>
    </div>
  );
}
