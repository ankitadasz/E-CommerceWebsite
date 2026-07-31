import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Auth.css";
import { useAuth } from "../Context/AuthContext";

export const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setMessage("");

    if (isLogin) {
      const result = await login(email, password);

      if (!result.success) {
        setMessage(result.message);
        return;
      }

      navigate("/");
    } else {
      const result = await register(name, email, password);

      if (!result.success) {
        setMessage(result.message);
        return;
      }

      navigate("/");
    }
  };

  const changeMode = () => {
    setIsLogin((prev) => !prev);
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 className="auth-logo">ANKÉ</h1>

        <div className="auth-toggle">
          <button
            className={`auth-toggle-btn ${isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(true);
              setMessage("");
            }}
            type="button"
          >
            Login
          </button>

          <button
            className={`auth-toggle-btn ${!isLogin ? "active" : ""}`}
            onClick={() => {
              setIsLogin(false);
              setMessage("");
            }}
            type="button"
          >
            Register
          </button>
        </div>

        <div className="auth-heading">
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>

          <p>
            {isLogin
              ? "Login to continue shopping with ANKÉ"
              : "Create your ANKÉ account"}
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Name</label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
          )}

          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {message && (
            <p className="auth-message">
              {message}
            </p>
          )}

          <button type="submit" className="auth-submit">
            {isLogin ? "Login" : "Register"}
          </button>
        </form>

        <p className="auth-switch-text">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            className="auth-switch-link"
            onClick={changeMode}
          >
            {isLogin ? "Register" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
};