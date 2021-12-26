import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import './reset.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from './pages/QuestionPage/QuestionPage';
import ResultsPage from './pages/ResultsPage/ResultsPage';
import { store } from './state/store';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="questions" element={<QuestionPage />} />
          <Route path="result" element={<ResultsPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
