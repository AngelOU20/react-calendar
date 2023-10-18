import React from 'react';
import ReactDOM from 'react-dom/client';
import { CalendarApp } from './CalendarApp.jsx';
import { BrowserRouter } from 'react-router-dom';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <CalendarApp />
    </BrowserRouter>
  </React.StrictMode>
);
