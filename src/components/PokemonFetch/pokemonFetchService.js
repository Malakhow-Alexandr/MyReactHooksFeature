export const pokemonFetchServise = name => {
  return fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then(resp => {
    if (!resp.ok) {
      throw new Error(`Pokemon ${name} does not exist!`);
    }
    return resp.json();
  });
};
