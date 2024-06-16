import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

const Logout = () => {
  const handleLogout = async () => {
    await signOut(auth);
    console.log("User signed out!");
  };
  return (
    <div className="logout-button">
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Logout;
