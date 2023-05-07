import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {App} from './App';
import { BrowserRouter } from 'react-router-dom';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='https://anastasiia2302.github.io/Test-Card-Tweet/' >
    <App />
    </BrowserRouter>
  </React.StrictMode>
);


