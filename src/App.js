import React, { Component } from 'react';
import Navigation from './Components/Navigation';
import Header from './Components/Header';
import Router from './Components/Router';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <Router/>
          
        </header>
      </div>


    );
  }
}

export default App;
