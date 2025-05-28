import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="main">
      <header className="title">
        <h1>ברוכה הבאה 💻</h1>
      </header>

      <div className="buttonGroup">
        <button className="button" onClick={() => navigate('/tasks')}>
          ניהול משימות
        </button>
        <button className="button" onClick={() => navigate('/names')}>
          ניהול שמות
        </button>
      </div>
    </div>
  );
}

export default Home;
