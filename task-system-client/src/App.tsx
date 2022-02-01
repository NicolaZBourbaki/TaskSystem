import React from 'react';
import './App.css';
import { Routes, Route, HashRouter } from "react-router-dom";
import Navbar from './Components/navbar/Navbar';
import Login from './Components/register/Login';
import SignUp from './Components/register/SignUp';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <HashRouter>
        <Routes>
        <Route path="/" element={Navbar}></Route>
          <Route path="/login" element={Login}></Route>
          <Route path="/signup" element={SignUp}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;