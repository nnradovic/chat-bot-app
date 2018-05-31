import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



import io from 'socket.io-client';
import {SocketProvider} from 'socket.io-react';

const socket = io.connect(`https://react-test-task-back.herokuapp.com/`);
// socket.on('bot message', msg => console.log(msg));
const DOMNode = document.getElementById('root')

ReactDOM.render(
    <SocketProvider socket={socket}>
        <App />
     </SocketProvider>,
      DOMNode);
  