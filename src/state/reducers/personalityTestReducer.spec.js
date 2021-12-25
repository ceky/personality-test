import '@testing-library/jest-dom/extend-expect';

import reducer from './personalityTestReducer';
import { saveQuestions } from '../action-creators/questions';
import { addAnswer } from '../action-creators/answer';

const initialState = {
    questions: [],
    answers: []
};

const questions = [
    {
      question: 'Q1',
      answers: [
        { answer: 'Don’t dare to interrupt them', extroversionLevel: 3 },
        { answer: 'Think it’s more important to give them some of your time; work can wait', extroversionLevel: 7 }
      ]
    },
    {
      question: 'Q2',
      answers: [
        { answer: 'Look at your watch every two minutes', extroversionLevel: 1 },
        { answer: 'Bubble with inner anger, but keep quiet', extroversionLevel: 2 }
      ]
    }
];

it("should populate the questions", () => {    
    const reducerWithQuestions = reducer(initialState, saveQuestions(questions));

    expect(reducerWithQuestions.questions).toBe(questions);
});

it("should add an answer correctly", () => {
    const reducerWithAnswers = reducer(initialState, addAnswer(questions[0].answers[0]));

    expect(reducerWithAnswers.answers).toHaveLength(1);

    const reducerWithTwoAnswers = reducer(reducerWithAnswers, addAnswer(questions[1].answers[0]));
    expect(reducerWithTwoAnswers.answers).toHaveLength(2);
});