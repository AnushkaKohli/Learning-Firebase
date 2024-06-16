import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const Login = () => {
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const email = e.target.email.value;
      const password = e.target.password.value;
      const credentials = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in: ", credentials.user);
    } catch (error) {
      console.error("Error signing in: ", error);
    }
  };
  return (
    <div className="form-div">
      <h2>Login</h2>
      <form className="form" onSubmit={handleLogin}>
        <div className="input-field">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
