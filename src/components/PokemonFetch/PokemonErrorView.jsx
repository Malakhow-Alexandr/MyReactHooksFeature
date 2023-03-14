import errorPic from './error.jpg';

export const PokemonFallbackView = ({ message }) => {
  return (
    <div>
      <p>{message}</p>
      <img src={errorPic} width="200" alt="error pic" />
    </div>
  );
};
