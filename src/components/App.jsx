import colors from '../colors.json';

import SignupForm from './SingupForm/SignupForm';
import ColorPicker from './ColorPicker/ColorPicker';
import Counter from './Counter/Counter';
import { Clock } from './Clock/Clock';

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
    </div>
  );
};
