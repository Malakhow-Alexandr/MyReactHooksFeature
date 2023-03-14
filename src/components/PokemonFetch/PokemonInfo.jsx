import { useState, useEffect } from 'react';
import { PokemonFallbackView } from './PokemonErrorView';
import { PokemonDataView } from './PokemonDataView';
import { PokemonPendingView } from './PokemonPendingView';
import { pokemonFetchServise } from './pokemonFetchService';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const PokemonInfo = ({ pokemonName }) => {
  const [pokemon, setPokemon] = useState(null);
  const [error, setError] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);

  useEffect(() => {
    if (!pokemonName) {
      return;
    }
    setStatus(Status.PENDING);

    pokemonFetchServise(pokemonName)
      .then(pokemon => {
        setPokemon(pokemon);
        setStatus(Status.RESOLVED);
      })
      .catch(error => {
        setError(error);
        setStatus(Status.REJECTED);
      });
  }, [pokemonName]);

  if (status === Status.IDLE) {
    return <div>Please enter pokemon name</div>;
  }
  if (status === Status.PENDING) {
    return <PokemonPendingView pokemonName={pokemonName} />;
  }
  if (status === Status.REJECTED) {
    return <PokemonFallbackView message={error.message} />;
  }
  if (status === Status.RESOLVED) {
    return <PokemonDataView pokemon={pokemon} />;
  }
};
