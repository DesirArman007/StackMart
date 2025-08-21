import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./RegisterCard.css";

const RegisterCard = () => {
  const [formData, setFormData] = useState({ firstName:"", lastName:"", email:"", password:"" });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:5000/api/auth/register", formData);
      alert("Account created!");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div className="register__card__container">
      <div className="register__card">
        <h1>Create Account</h1>
        <input name="firstName" placeholder="First name" onChange={handleChange} />
        <input name="lastName" placeholder="Last name" onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button onClick={handleSubmit}>Create Account</button>
        <div>Already have account? <Link to="/account/login">Login</Link></div>
      </div>
    </div>
  );
};

export default RegisterCard;
