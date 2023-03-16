import { useState, useEffect } from 'react';
import { SelectStyled } from './Dogs.styled';
import { fetchBreeds } from './dogApiService';

export const BreedSelect = ({ onSelect }) => {
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getBreeds() {
      try {
        setIsLoading(true);
        setError(null);
        const breeds = await fetchBreeds();
        setBreeds(breeds);
      } catch (error) {
        setError('somthing wrong, please reload page!');
      } finally {
        setIsLoading(false);
      }
    }

    getBreeds();
  }, []);

  const options = breeds.map(breed => ({
    label: breed.name,
    value: breed.id,
  }));

  return (
    <div>
      <SelectStyled
        options={options}
        isLoading={isLoading}
        onChange={option => onSelect(option.value)}
      />
      {error && <p>{error}</p>}
    </div>
  );
};
