import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Lapras from '../assets/131.png';
import Gyarados from '../assets/130.png';
import Pikachu from '../assets/25.png';
import Charizard from '../assets/6.png';
import Salamence from '../assets/373.png';
import Eevee from '../assets/133.png';
import Greninja from '../assets/658.png';
import Mewtwo from '../assets/150.png';
import Lucario from '../assets/448.png';
import Snorlax from '../assets/143.png';
import Dragonite from '../assets/149.png';
import Charmander from '../assets/4.png';

const pokemons = [
  { name: 'Lapras', img: Lapras },
  { name: 'Gyarados', img: Gyarados },
  { name: 'Dragonite', img: Dragonite },
  { name: 'Pikachu', img: Pikachu },
  { name: 'Charizard', img: Charizard },
  { name: 'Charmander', img: Charmander },
  { name: 'Salamence', img: Salamence },
  { name: 'Eevee', img: Eevee },
  { name: 'Greninja', img: Greninja },
  { name: 'Mewtwo', img: Mewtwo },
  { name: 'Lucario', img: Lucario },
  { name: 'Snorlax', img: Snorlax },
];

function Acceuil() {
  const navigate = useNavigate();
  const [rotationAngle, setRotationAngle] = useState(0);
  const [centerPokemonIndex, setCenterPokemonIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setRotationAngle((prev) => prev + 360 / pokemons.length);
      setCenterPokemonIndex((prev) => (prev + 1) % pokemons.length);
    }, 4000);
    return () => clearInterval(intervalId);
  }, []);

  const handleStart = () => {
    navigate('/pokedex');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] to-[#141432] flex flex-col items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/background-city.png')] bg-cover bg-center opacity-10 animate-pulse"></div>

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg"
        alt="Pokémon Logo"
        className="w-64 mb-8 drop-shadow-[0_0_35px_#00ccff] animate-fade-in-up"
      />

      <div className="relative w-full max-w-5xl h-[400px] sm:h-[350px] mb-8">
        {pokemons.map((pokemon, index) => {
          const baseAngle = (index / pokemons.length) * 360;
          const radius = 150;
          const currentAngle = baseAngle + rotationAngle;
          const x = radius * Math.cos((currentAngle * Math.PI) / 180);
          const y = radius * Math.sin((currentAngle * Math.PI) / 180);

          return (
            <img
              key={index}
              src={pokemon.img}
              alt={pokemon.name}
              className="absolute w-12 lg:w-20 drop-shadow-[0_0_20px_cyan] hover:scale-110 transition-transform duration-700"
              style={{
                left: `calc(50% + ${x}px - 40px)`,
                top: `calc(50% + ${y}px - 40px)`,
                transition: 'transform 2s ease-in-out',
              }}
            />
          );
        })}

        <img
          src={pokemons[centerPokemonIndex].img}
          alt={pokemons[centerPokemonIndex].name}
          className="absolute left-1/2 top-1/2 w-32 lg:w-40 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_0_35px_violet] transition-all duration-1000 scale-110"
        />
      </div>

      <button
        onClick={handleStart}
        className="bg-gradient-to-r from-yellow-400 via-pink-600 to-indigo-600 text-white text-lg sm:text-xl font-bold px-10 py-4 rounded-2xl shadow-xl transition-all hover:scale-105 hover:shadow-pink-500 drop-shadow-[0_0_25px_#ff00cc] animate-bounce"
      >
        START YOUR ADVENTURE
      </button>
    </div>
  );
}

export default Acceuil;


