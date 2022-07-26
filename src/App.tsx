import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.scss';
import HeaderSlider from './main-page/header-slider/HeaderSlider';
import HeaderCategories from './main-page/header_categories/HeaderCategories';
import HeaderPersonalInfo from './main-page/header_linkedin/HeaderPersonalInfo';


function App() {
  return (
    <BrowserRouter>
      <HeaderPersonalInfo></HeaderPersonalInfo>
      <HeaderCategories></HeaderCategories>
      <HeaderSlider></HeaderSlider>
    </BrowserRouter>
  );
}

export default App;
