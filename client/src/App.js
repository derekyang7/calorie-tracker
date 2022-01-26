import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import { GlobalProvider } from "./context/GlobalContext";

function App() {

  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
