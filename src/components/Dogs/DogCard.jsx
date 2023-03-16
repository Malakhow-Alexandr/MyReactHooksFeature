export const Dog = ({ dog }) => {
  return (
    <div>
      <img src={dog.url} alt={dog.breeds[0].name} width="300px" />
      <p>Name: {dog.breeds[0].name}</p>
      <p>Bred for: {dog.breeds[0].bred_for}</p>
      <p>Temperament: {dog.breeds[0].temperament}</p>
    </div>
  );
};
