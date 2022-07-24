import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import HeaderPersonalInfo from './main-page/headerLinkedin/HeaderPersonalInfo';


function App() {
  return (
    <BrowserRouter>
      <HeaderPersonalInfo></HeaderPersonalInfo>
    </BrowserRouter>
  );
}

export default App;
