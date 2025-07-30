import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ For redirecting
import './Login.css'; // Your CSS file

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate(); // ✅ useNavigate hook for redirection

  const handleToggle = () => {
    setIsLogin(!isLogin);
    setFormData({ name: '', email: '', password: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password || (!isLogin && !formData.name)) {
      alert("Please fill all required fields");
      return;
    }

    if (isLogin) {
      alert(`✅ Logged in with: ${formData.email}`);
    } else {
      alert(`✅ Signed up with: ${formData.name} (${formData.email})`);
    }

    // Redirect to home or dashboard after login
    navigate('/');
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
