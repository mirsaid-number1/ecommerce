//tools
import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Navbar from "./Navbar";
import Home from "./components/Home";
//styles import
import "./App.css";
import "./styles/main.css";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Home />
    </div>
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Login />} />
    //     <Route path="register" element={<Register />} />
    //     <Route path="verification" element={<Verification />} />
    //     <Route path="personal" element={<Personal />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
