import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Header from './components/Header';
import Supporter from './components/Supporter';
import Home from './components/Home';


import Login from './pages/Login';
import MyProfie from './pages/MyProfile';
import LearnMore from './pages/LearnMore';




const App: React.FC = () => {
  return(
    <>
    <Router>
    <Main />
    
    <NavBar />
    <Header />    
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/myprofile" element={<MyProfie />} />
      <Route path="/home" element={<Home />} />
      <Route path="/learnmore" element={<LearnMore />} />
    </Routes>
    <Supporter />
    </Router>
    </>
  );
}

export default App;