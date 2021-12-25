import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import { useNavigate } from 'react-router-dom';
import './HomePage.css';

export default function HomePage() {
  const navigate = useNavigate();

  function onClickStart() {
    navigate('/questions');
  }

  return (
    <div>
      <Header />

      <main>
        <h1>Test: Are you an introvert or an extrovert?</h1>
        <h3>
          So do you consider yourself more of an introvert or an extrovert? Take
          this test and find out.
        </h3>
        <button type="button" onClick={onClickStart}>
          Start Test
        </button>
      </main>

      <Footer />
    </div>
  );
}
