import React from 'react';
import ReactDOM from 'react-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Header from './Header';

const mockedUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockedUseNavigate,
}));

it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Header />, div);
});

it("renders header text correctly", () => {
    render(<Header></Header>);

    const headerElement = screen.getByTestId('header');

    expect(headerElement).toHaveTextContent('PERSONALITY TEST');
});

it("should call the navigate function when the header is clicked", () => {
    render(<Header/>);

    const headerElement = screen.getByTestId('header');
    fireEvent.click(headerElement);
    
    expect(mockedUseNavigate).toHaveBeenCalled();
    expect(mockedUseNavigate).toHaveBeenCalledTimes(1);
});