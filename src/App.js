//tools
import React,{} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//components
import Navbar from "./Navbar";
import Home from "./components/Home";
import Contact from './components/Contact';
import Hot_Deals from "./components/Hot_Deals";
import Product from "./components/Product";
//styles import
import "./App.css";
import "./styles/main.css";
import Bottom from "./Bottom";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="hot_deals" element={<Hot_Deals />} />
        <Route path="product" element={<Product />} />
      </Routes>
      <Bottom />
    </BrowserRouter>
    );
}

export default App;
