import { ImSpinner } from 'react-icons/im';
import { PokemonDataView } from './PokemonDataView';
import loadingPic from './loading.jpg';

export const PokemonPendingView = ({ pokemonName }) => {
  const pokemon = {
    name: pokemonName,
    sprites: {
      other: {
        'official-artwork': {
          front_default: loadingPic,
        },
      },
    },
    stats: [],
  };

  return (
    <div>
      <ImSpinner
        size="32"
        style={{ animation: 'icon-spin 2s infinite linear' }}
      />
      <br />
      <PokemonDataView pokemon={pokemon} />
    </div>
  );
};
