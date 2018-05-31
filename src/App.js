import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import {socketConnect,} from 'socket.io-react';


class App extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
      <Main socket={this.props.socket}/>
      </div>
      </React.Fragment>
    );
  }
}

export default socketConnect(App);
