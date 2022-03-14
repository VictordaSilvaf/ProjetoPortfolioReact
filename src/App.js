import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Novidades from "./pages/Novidades";
import SobreMim from "./pages/SobreMim";
import Projetos from "./pages/Projetos";

import Footer from "./layout/Footer/Footer";
import Banner from "./layout/Banner/Banner";
import Navbar from "./layout/Navbar/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Banner />

      <div className="conteudo">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/novidades" element={<Novidades />}></Route>
          <Route path="/sobreMim" element={<SobreMim />}></Route>
          <Route path="/projetos" element={<Projetos />}></Route>
        </Routes>
      </div>

      <Footer />
    </Router>
  );
}

export default App;
