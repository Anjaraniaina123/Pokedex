// App.js
import './App.css';
import React, { useState, useEffect } from 'react';
import Acceuil from './pages/Acceuil';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=20';

  useEffect(() => {
    const fetchPokemons = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        setPokemons(data.results);
      } catch (error) {
        console.error("Échec de la récupération des Pokémons:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPokemons();
  }, []);

  return (
    <div className="font-sans">
      <Routes>
        <Route path="/" element={<Acceuil pokemons={pokemons} isLoading={isLoading} />} />
      </Routes>
    </div>
  );
}

export default App;