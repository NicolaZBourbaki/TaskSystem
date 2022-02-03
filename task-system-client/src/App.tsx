import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, HashRouter, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Login from './Components/Register/Login';
import SignUp from './Components/Register/SignUp';
import Header from './Components/Main/Main';
import About from './Components/About/About';
import Create from './Components/Crud/Create';
import RegistrationComplete from './Components/RegistrationComplete/RegistrationComplete';
import Index from './Components/Crud/index.component';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Header/>} />
          <Route path="/Main" element={<Header/>} />
          <Route path="/Tasks" element={<Index/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Signup" element={<SignUp/>} />
          <Route path="/Create" element={<Create/>} />
          <Route path="/Profile" element={<Header/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;