import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // ✅ import axios
import './Login.css';

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, password } = formData;

    if (!email || !password || (!isLogin && !name)) {
      alert("Please fill all required fields");
      return;
    }

    try {
      if (isLogin) {
        // 🔁 LOGIN
        const res = await axios.post("http://localhost:5000/login", { email, password });
        if (res.data.success) {
          alert("✅ Login successful");
          navigate('/');
        } else {
          alert("❌ Login failed: " + res.data.message);
        }
      } else {
        // 🆕 SIGNUP
        const res = await axios.post("http://localhost:5000/signup", { name, email, password });
        alert(res.data.message);
        if (res.data.success) {
          setIsLogin(true); // Switch to login view
        }
      }
    } catch (err) {
      console.error("Error:", err);
      alert("❌ Something went wrong");
    }
  };

  return (
    <div className="auth-container">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        )}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <p className="toggle-text">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
        <span className="toggle-link" onClick={handleToggle}>
          {isLogin ? ' Sign up here' : ' Login here'}
        </span>
      </p>
    </div>
  );
}

export default Login;
