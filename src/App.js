import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './Main';


class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
      <Main/>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
