import { useState } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";

const Register = () => {
  const [userCreated, setUserCreated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const CreateUser = async (username, password, email) => {
    try {
      const response = await axios.post("/register", {
        email: email,
        password: password,
        nickname: username,
      });
      setUserCreated(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    CreateUser(username, password, email);
  };

  return (
    <>
      <div className={userCreated ? "hidden" : ""}>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username:</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Register</button>
          <Link to="/auth">I have an account</Link>
        </form>
      </div>

      <div className={userCreated ? "" : "hidden"}>
        <p>User {username} created !</p>
        <a href="#"> Login </a>
      </div>
    </>
  );
};

export default Register;
