import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Header.css';

export default function Header() {
  const navigate = useNavigate();

  function onClickHeader() {
    navigate('/');
  }
  return (
    <header data-testid="header" onClick={onClickHeader}>
      PERSONALITY TEST
    </header>
  );
}
