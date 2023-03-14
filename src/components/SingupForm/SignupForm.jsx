import { useLocalStorage } from 'hooks/useLocalStorage';
// import css from './SignupForm.module.css';

export default function SignupForm() {
  const [email, setEmail] = useLocalStorage('email', '');
  const [password, setPassword] = useLocalStorage('password', '');

  return (
    <form className="css.form" autoComplete="off">
      <label className="css.label">
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
        />
      </label>

      <label>
        <span>Password</span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={event => setPassword(event.target.value)}
        />
      </label>

      <button type="submit">Register</button>
    </form>
  );
}
