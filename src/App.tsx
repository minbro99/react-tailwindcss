import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Header from './components/Header';
import Supporter from './components/Supporter';

import LearnMore from "./pages/LearnMore";
import Login from './pages/Login';
import MyProfile from './pages/MyProfile';
import Setting from './pages/MyProfile';

const App: React.FC = () => {
  return(
    <>
    <Router>
    {/* <Main />      */}
    <NavBar />
    <Header />
    <Routes>
      <Route path="/learnmore" element={<LearnMore />} />
      <Route path="/login" element={<Login />} />
      <Route path="/myprofile" element={<MyProfile />} />
      <Route path="/setting" element={<Setting />} />
    </Routes>
    <Supporter />
    </Router>
    </>
  );
}

export default App;
