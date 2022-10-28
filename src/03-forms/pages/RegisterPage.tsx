import "../styles/styles.css";

export const RegisterPage = () => {
  return (
    <div>
      <h1>RegisterPage</h1>
      <form>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="User Name"
        />
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirm Password"
        />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default RegisterPage;
