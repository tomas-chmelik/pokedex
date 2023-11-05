import React from 'react';
import { BrowserRouter, Routes, Route, Link, HashRouter } from 'react-router-dom';
import './css/App.css';
import PokemonList from './PokemonList';
import About from './About';

function App() {
  return (
    <HashRouter>
      <header className="header">
        <h1>Pokedex</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </nav>
      </header>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PokemonList />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </HashRouter>
  );
}

export default App;
