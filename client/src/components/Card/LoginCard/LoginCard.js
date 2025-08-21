import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./LoginCard.css";

const LoginCard = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setError("");
      const res = await axios.post("http://localhost:5000/api/auth/login", formData);

      localStorage.setItem("token", res.data.token);

      alert("Login successful");
      navigate("/dashboard");
    } catch (err) {
      setError(err.response?.data?.msg || "Login failed");
    }
  };

  return (
    <div className="login__card__container">
      <div className="login__card">
        <div className="login__header">
          <h1>Login</h1>
        </div>

        <div className="login__inputs">
          <div className="email__input__container input__container">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="password__input__container input__container">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="**********"
              value={formData.password}
              onChange={handleChange}
            />
          </div>

          <div className="login__button__container">
            <button onClick={handleSubmit}>LOGIN</button>
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>

        <div className="login__other__actions">
          <div className="login__forgot__password">Forgot password?</div>
          <div className="login__new__account">
            Don't have account? <Link to="/account/register">Create account</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
