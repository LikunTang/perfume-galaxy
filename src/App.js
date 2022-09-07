import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import Explore from './components/pages/Explore';
import Articles from './components/pages/Articles';
import Gifts from './components/pages/Gifts';
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/gifts" element={<Gifts />} />
          <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;