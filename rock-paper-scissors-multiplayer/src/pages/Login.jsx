import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username) {
      localStorage.setItem("suit_username", username);
      Swal.fire({
        title: `Welcome, ${username}!`,
        text: "Enjoy your game!",
        icon: "success"
      });
      navigate("/");
    } else {
      Swal.fire({
        title: "Username cannot be empty",
        text: "Please insert your username!",
        icon: "error"
      });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-color1">
      <h1 className="text-2xl mb-4 text-color2">Login</h1>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="p-2 border border-color3 rounded mb-4 text-color2"
      />
      <button
        onClick={handleLogin}
        className="bg-color2 text-color4 hover:bg-color3 hover:text-color1 px-4 py-2 rounded dark:text-color4 dark:hover:text-color2"
      >
        Login
      </button>
    </div>
  );
};

export default Login;
