import React, { Component } from 'react';
import './App.css';
import Main from './Main';
import {socketConnect,} from 'socket.io-react';
import  Footer  from './Footer';


class App extends Component {


  render() {
    return (
      <React.Fragment>
        <div className="container-fluid">
      <Main socket={this.props.socket}/>
      <Footer/>
      </div>
      </React.Fragment>
    );
  }
}

export default socketConnect(App);
