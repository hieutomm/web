import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import AuthRepository from "../../../infrastructure/repositories/user_repository.js";
import LoginUseCase from "../../../usecases/auth/login_usecase.js";

import "./login.css";
import Header from "../Header/Header";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const repo = new AuthRepository();
      const loginUseCase = new LoginUseCase(repo);

      const response = await loginUseCase.execute(email, password);

      console.log("📦 Login response:", response);

      if (response) {
        // ✅ LƯU TOKEN
        if (response.token) {
          localStorage.setItem("token", response.token);
        }

        // ✅ LƯU USER_ID
        if (response.userId) {
          localStorage.setItem("userId", response.userId);
        }

        // ✅ LƯU USER INFO
        const userInfo = {
          userId: response.userId,
          username: response.username,
          email: response.email,
          role: response.role
        };
        localStorage.setItem("user", JSON.stringify(userInfo));

        window.dispatchEvent(new Event("userUpdated"));

        alert("Đăng nhập thành công!");

        // ✅ KIỂM TRA REDIRECT PATH
        const redirectPath = localStorage.getItem("redirectAfterLogin");
        
        if (redirectPath) {
          localStorage.removeItem("redirectAfterLogin");
          navigate(redirectPath);
        } else {
          // ✅ SỬA: response.role thay vì response.user?.role
          if (response.role === "admin") {
            navigate("/admin");
          } else {
            navigate("/");
          }
        }
      }
    } catch (error) {
      console.error("❌ Login error:", error);
      alert("Lỗi đăng nhập: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main">
      <Header />

      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">Đăng nhập</h2>

          <form onSubmit={handleSubmit}>
            <div className="login-field">
              <label className="login-label">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="login-input"
                placeholder="Nhập email của bạn"
                required
              />
            </div>

            <div className="login-field">
              <label className="login-label">Mật khẩu:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="login-input"
                placeholder="Nhập mật khẩu"
                required
              />
            </div>

            <div className="login-options">
              <label>
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                Ghi nhớ đăng nhập
              </label>

              <Link to="/forgot-password">Quên mật khẩu?</Link>
            </div>

            <button className="login-button" type="submit" disabled={loading}>
              {loading ? "Đang đăng nhập..." : "Đăng nhập"}
            </button>
          </form>

          <p className="register-link">
            Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;