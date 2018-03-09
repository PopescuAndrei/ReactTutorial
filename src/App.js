import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Main/>
      </div>
    );
  }
}

export default App;