import React from "react";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Stock from "./pages/Stock";
import "./assets/css.css";

function App() {
  return (
    <div id="background">
      <Header />
      <Stock />
      <Footer />
    </div>
  );
}

export default App;
