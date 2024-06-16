import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const SignupPage = () => {
  const handleSignup = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const credentials = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("User signed up: ", credentials.user);
    e.target.reset();
  };
  return (
    <div className="form-div">
      <h2>Sign Up</h2>
      <form className="form" onSubmit={handleSignup}>
        <div className="input-field">
          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
  );
};

export default SignupPage;
