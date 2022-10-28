import "../styles/styles.css";
import { useState, ChangeEvent } from "react";
export const RegisterPage = () => {
  const [registerData, setRegisterData] = useState({
    name: "Alejandro",
    email: "alm@gmail.com",
    password: "12345",
    confirmPassword: "12345",
  });

  const { name, email, password, confirmPassword } = registerData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name, e.target.value);
  };

  return (
    <div>
      <h1>RegisterPage</h1>
      <form>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={password}
          onChange={onChange}
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={onChange}
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegisterPage;
