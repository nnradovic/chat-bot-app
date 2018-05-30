import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { SocketProvider } from 'socket.io-react';
import io from 'socket.io-client';
 

 
const socket = io.connect(process.env.SOCKET_URL);
socket.on('message', msg => console.log(msg));
 
const DOMNode = document.getElementById('renderTarget')



ReactDOM.render(
    <SocketProvider socket={socket}><App />
     </SocketProvider>, document.getElementById('root'));
registerServiceWorker();
