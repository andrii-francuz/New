import React from 'react';
import logo from './logo.svg';
import './App.css';
import PropTypes from 'prop-types';
import Fcomponent from './Fcomponent';
import Ccomponent from './Ccomponent';
import Menu from './Menu';
import Newfcomponent from './Newfcomponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Fcomponent name="Enter your name"/>
        <Ccomponent/>
        <Newfcomponent/>
        <Menu/>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
