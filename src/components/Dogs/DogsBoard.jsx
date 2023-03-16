import { useState } from 'react';
import { fetchDogByBreed } from './dogApiService';
import { BreedSelect } from './Dogs';
import { Dog } from './DogCard';
import DogSkeleton from './DogSkeleton';

export const DogBoard = () => {
  const [dog, setDog] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchDog = async breedId => {
    try {
      setIsLoading(true);
      setError(null);
      const dog = await fetchDogByBreed(breedId);
      setDog(dog);
    } catch (error) {
      setError('Sorry, we have no data about your dog...');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <BreedSelect onSelect={fetchDog} />
      {isLoading && <DogSkeleton />}
      {error && <p>{error}</p>}
      {dog && !isLoading && <Dog dog={dog} />}
    </div>
  );
};
