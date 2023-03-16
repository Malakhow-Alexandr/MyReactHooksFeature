import colors from '../colors.json';

import SignupForm from './SingupForm/SignupForm';
import ColorPicker from './ColorPicker/ColorPicker';
import Counter from './Counter/Counter';
import { Clock } from './Clock/Clock';
import { PokemonBoard } from './PokemonFetch/PokemonBoard';
import { CounterUseReducer } from './CounterUseReducer/CounterUsereducer';
import { Friends } from './Friends/Friends';
import { AbortHttpsBoard } from './AbortHttp/AbortHttpBoard';
import { AbortButton } from './AbortHttpButton/AbortButton';
import { DogBoard } from './Dogs/DogsBoard';

export const App = () => {
  return (
    <div
      className="bobr"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        fontSize: 15,
      }}
    >
      <SignupForm />
      <ColorPicker options={colors} />
      <Counter />
      <Clock />
      <PokemonBoard />
      <CounterUseReducer />
      <Friends />
      <AbortHttpsBoard />
      <AbortButton />
      <DogBoard />
    </div>
  );
};
