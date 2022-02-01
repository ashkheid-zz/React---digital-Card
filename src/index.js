import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import App from './App';

//#region Creating root element inside the <body> tag
//Creating <div> element
const rootElement = document.createElement('div');

//assigning #root id to it
rootElement.setAttribute('id', 'root');

//appending to <body>
document.body.append(rootElement);
//#endregion

ReactDOM.render(<App />, rootElement);
