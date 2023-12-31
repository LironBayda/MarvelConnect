/*import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(

  <React.StrictMode  >
    <App/>
  </React.StrictMode>

)
*/

import App from './App'
import './index.css'

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);