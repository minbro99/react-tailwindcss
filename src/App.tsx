import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './components/Main';
import Header from './components/Header';

import Home from './pages/Home';
import { Login } from "./pages/Login";
import LearnMore from './pages/LearnMore';
import LoginSuccess from './pages/LoginSuccess'

const App: React.FC = () => {
  return(
    <>
    
    <Router>
    <Routes>
      <Route path="/header" element={<Header/>} />
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/learnmore" element={<LearnMore/>} />
      <Route path="/loginsuccess" element={<LoginSuccess />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
