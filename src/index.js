import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
import { StateProvoder } from "./Stateprovider";
import reducer, { initialState } from "./Reducer";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
      <StateProvoder initialState={initialState} reducer={reducer}>
        <App />
      </StateProvoder>
    </BrowserRouter>
);

