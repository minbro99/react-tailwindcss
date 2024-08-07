import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Main from './components/Main';

import Home from './pages/Home';
import { Login } from "./pages/Login";

const App: React.FC = () => {
  return(
    <>
    
    <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </Router>
    </>
  );
}

export default App;
