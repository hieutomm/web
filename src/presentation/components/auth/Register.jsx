import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthRepository from "../../../infrastructure/repositories/user_repository.js";
import RegisterUseCase from "../../../usecases/auth/register_usecase.js";

import "./register.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Mật khẩu xác nhận không khớp!");
      return;
    }

    try {
      setLoading(true);

      const repo = new AuthRepository();
      const registerUseCase = new RegisterUseCase(repo);

      await registerUseCase.execute({
        username: name,
        email,
        password,
        role: "user",
      });

      alert("Đăng ký thành công!");
      navigate("/login");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2 className="register-title">Đăng ký</h2>

        <form onSubmit={handleSubmit}>
          <div className="register-field">
            <label className="register-label">Họ và tên:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="register-input"
              placeholder="Nhập họ và tên"
              required
            />
          </div>

          <div className="register-field">
            <label className="register-label">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="register-input"
              placeholder="Nhập email của bạn"
              required
            />
          </div>

          <div className="register-field">
            <label className="register-label">Mật khẩu:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="register-input"
              placeholder="Nhập mật khẩu"
              required
            />
          </div>

          <div className="register-field">
            <label className="register-label">Xác nhận mật khẩu:</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="register-input"
              placeholder="Nhập lại mật khẩu"
              required
            />
          </div>

          <button className="register-button" type="submit" disabled={loading}>
            {loading ? "Đang đăng ký..." : "Đăng ký"}
          </button>
        </form>

        <p className="login-link">
          Đã có tài khoản? <Link to="/login">Đăng nhập ngay</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
