import React from 'react';
import './style/App.css';
import BackgroundImage from './images/flag-company-name-2.jpg'
import LandingPage from './containers/LandingPage';

function App() {
  return (
    <div className="App">
      <div className="company-name-container">
          <img className="background-image" src={BackgroundImage} alt="background flag" height="300" width="1400px"></img>
      </div>
      <LandingPage />
    </div>
  );
}

export default App;
