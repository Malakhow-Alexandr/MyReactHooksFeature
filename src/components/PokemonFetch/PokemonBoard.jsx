import { useState } from 'react';
import { PokemonForm } from './PokemonForm';
import { PokemonInfo } from './PokemonInfo';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const PokemonBoard = () => {
  const [pokemonName, setPokemonName] = useState('');

  return (
    <div
      style={{
        maxWidth: 900,
        margin: '0 auto',
        padding: 20,
        marginBottom: '60px',
      }}
    >
      <PokemonForm onSubmit={setPokemonName} />
      <PokemonInfo pokemonName={pokemonName} />
      <ToastContainer position="top-right" autoClose={3000} theme="dark" />
    </div>
  );
};
