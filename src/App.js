import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';

function App(){
  return(
    <div className="App">
      <nav className="nav">
        <a href='#' className='nav-item'>Home Page</a>
        <a href='#' className='nav-item'>About Me</a>
      </nav>
      <Routes>
        <Route exact path="/" element={HomePage} />
        <Route path="/about" element={AboutPage} />
      </Routes>
    </div>
  );
}
 
export default App;