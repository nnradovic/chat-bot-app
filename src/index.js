import React from 'react';
import ReactDOM from 'react-dom';
import './css/Index.css';
import App from './App';
import io from 'socket.io-client';
import {SocketProvider} from 'socket.io-react';
import SOCKET_URL from './shared/constants';

const socket = io.connect(SOCKET_URL);
// socket.on('bot message', msg => console.log(msg));
const DOMNode = document.getElementById('root')

ReactDOM.render(
    <SocketProvider socket={socket}>
        <App />
     </SocketProvider>,
      DOMNode);
  