import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Header from './components/Header';
import Supporter from './components/Supporter';
import {HomeLogin} from './components/HomeLogin';

import LearnMore from "./pages/LearnMore";

import MyProfile from './pages/MyProfile';
import Setting from './pages/MyProfile';
import ShoppingCart from "./pages/Shoppingcart";
import Home from './pages/Home';
import IdFind from "./pages/IdFind";


const App: React.FC = () => {
  return(
    <>
    <HomeLogin />
    <Router>
    
    {/* <Main />      */}
    <NavBar />
    <Header />
    <Routes>
      
      <Route path="/learnmore" element={<LearnMore />} />
      <Route path="/home" element={<Home />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/setting" element={<Setting />} />
      <Route path="/shoppingcart" element={<ShoppingCart />} />
      <Route path="/idfid" element={<IdFind />} />
    </Routes>
    <Supporter />
    </Router>
    </>
  );
}

export default App;
