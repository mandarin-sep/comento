import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Stock from "./pages/Stock";
import Login from "./components/Login";
import "./assets/css.css";

function App() {
  return (
    <div id="background">
      <Header />
      <Routes>
        <Route path="/" element={<Stock />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
