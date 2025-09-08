import React, { useState } from 'react';
import LandingPage from './components/LandingPage.jsx';
import MainPage from './components/MainPage.jsx';

function App() {
  const [currentPage, setCurrentPage] = useState('landing');

  const navigateToMain = () => {
    setCurrentPage('main');
  };

  const navigateToLanding = () => {
    setCurrentPage('landing');
  };

  return (
    <div className="app">
      {currentPage === 'landing' ? (
        <LandingPage onEnter={navigateToMain} />
      ) : (
        <MainPage onBack={navigateToLanding} />
      )}
    </div>
  );
}

export default App;