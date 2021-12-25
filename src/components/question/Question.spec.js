import React from 'react';
import ReactDOM from 'react-dom';

import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Question from './Question';

const mockedUseDispatch = jest.fn();
const mockedSelectAnswer = jest.fn(); 
const answers = [
    {
        answer: 'Don’t dare to interrupt them',
        extroversionLevel: 3,
    },
    {
        answer:
        'Think it’s more important to give them some of your time; work can wait',
        extroversionLevel: 7,
    }
];

jest.mock('react-redux', () => ({
  useDispatch: () => mockedUseDispatch
}));

beforeEach(() => {
    render(<Question answers={answers} selectAnswer={mockedSelectAnswer}/>);
});


it("render the component correctly", () => {
    const mainElement = screen.getByTestId('question-main');

    expect(mainElement).toBeInTheDocument();
});

describe('answers', () => {
    it("should render all the answers", () => {    
        const answersContainerElement = screen.getAllByTestId('answers');
        
        expect(answersContainerElement.length).toBe(1);
        expect(answersContainerElement).toHaveLength(1);
    
        const answersElement = screen.getAllByTestId('answer');
        
        expect(answersElement.length).toBe(2);
        expect(answersElement).toHaveLength(2);
    });
    
    it("should populate the answers correctly", () => {
        const answerElement = screen.getByText('Think it’s more important to give them some of your time; work can wait');
        
        expect(answerElement).toBeInTheDocument();
    });
    
    it("should respond to click on answer", () => {        
        const answerElement = screen.getByText('Don’t dare to interrupt them');
        fireEvent.click(answerElement);

        expect(mockedSelectAnswer).toHaveBeenCalled();
    });

    it("should call onClickAnswer with the correct parameter", () => {        
        const answerElement = screen.getByText('Don’t dare to interrupt them');
        fireEvent.click(answerElement);

        expect(mockedSelectAnswer).toHaveBeenCalledWith(answers[0]);
    });
});

