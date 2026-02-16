import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import '../login.css';

function Login({ setIsAuthenticated }) {

    const [loginInfo, setLoginInfo] = useState({
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();

        const { email, password } = loginInfo;

        if (!email || !password) {
            return handleError("Email and password are required");
        }

        try {
            const response = await fetch("http://localhost:8080/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(loginInfo)
            });

            const result = await response.json();

            if (!response.ok) {
                return handleError(result.message || "Login failed");
            }

            const { jwtToken, name } = result;

            // 🔐 SAVE LOGIN DATA
            localStorage.setItem("token", jwtToken);
            localStorage.setItem("loggedInUser", name);

            // ⭐ IMPORTANT (app ko batana user login ho gaya)
            setIsAuthenticated(true);

            handleSuccess("Login successful");

            // redirect to main page
            setTimeout(() => navigate("/home"), 1000);

        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div className="auth-page">
            <form onSubmit={handleLogin} className="auth-box">

                <h1>Login</h1>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={loginInfo.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Password</label>

                    <div className="password-wrapper">
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            placeholder="Enter your password"
                            value={loginInfo.password}
                            onChange={handleChange}
                        />
                        <button
                            type="button"
                            className="toggle-btn"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>

                <button type="submit" className="submit-btn">Login</button>

                <div className="bottom-text">
                    Don't have an account?
                    <Link to="/signup"> Signup</Link>
                </div>

            </form>

            <ToastContainer />
        </div>
    );
}

export default Login;
