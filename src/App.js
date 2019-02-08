import React, { Component } from 'react';
import Router from './Components/Router';
import './App.css';


export default class App extends Component {
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
