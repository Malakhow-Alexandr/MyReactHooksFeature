import { useState } from 'react';

import { toast } from 'react-toastify';

export const PokemonForm = ({ onSubmit }) => {
  const [pokemonName, setPokemonName] = useState('');

  const handleNameChange = event => {
    setPokemonName(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (pokemonName.trim() === '') {
      toast.error('🦇 please enter pokemon name!', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
      return;
    }
    onSubmit(pokemonName);
    setPokemonName('');
  };

  return (
    <form
      style={{ display: 'flex', gap: 5, marginBottom: '20px' }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="pokemonName"
        value={pokemonName}
        onChange={handleNameChange}
      />
      <button
        type="submit"
        style={{
          width: 100,
          height: 30,
          display: 'flex',
          alignItems: 'center',
        }}
      >
        Find
      </button>
    </form>
  );
};
