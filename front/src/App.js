import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import Sinopsis from './pages/Sinopsis';
import Contacto from './pages/Contacto';
import Autores from './pages/Autores';


function App() {
  return (
    <div className="App">
     
     <Header />
     <BrowserRouter>
     <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Sinopsis" element={<Sinopsis />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/Autores" element={<Autores />} />

      </Routes>
     </BrowserRouter>
     <Footer />
    </div>
  );
}

export default App;
