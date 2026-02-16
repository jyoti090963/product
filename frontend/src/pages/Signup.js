import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import '../login.css';

function Signup() {

    const [signupInfo, setSignupInfo] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignupInfo({ ...signupInfo, [name]: value });
    };

    const handleSignup = async (e) => {
        e.preventDefault();

        const { name, email, password } = signupInfo;

        if (!name || !email || !password) {
            return handleError("All fields are required");
        }

        try {
            const response = await fetch("https://product-lac-ten.vercel.app/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(signupInfo)
            });

            const result = await response.json();

            if (!response.ok) {
                return handleError(result.message || "Signup failed");
            }

            // 👇 agar backend token bhejta hai
            if (result.jwtToken) {
                localStorage.setItem("token", result.jwtToken);
                localStorage.setItem("loggedInUser", result.name);
                handleSuccess("Account created & logged in");
                setTimeout(() => navigate("/homep"), 1000);
            }
            else {
                handleSuccess("Signup successful");
                setTimeout(() => navigate("/login"), 1500);
            }


        } catch (err) {
            handleError(err.message);
        }
    };

    return (
        <div className="auth-page">
            <form onSubmit={handleSignup} className="auth-box">

                <h1>Signup</h1>

                <div className="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={signupInfo.name}
                        onChange={handleChange}
                    />
                </div>

                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={signupInfo.email}
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
                            value={signupInfo.password}
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

                <button type="submit" className="submit-btn">Signup</button>

                <div className="bottom-text">
                    Already have an account?
                    <Link to="/login"> Login</Link>
                </div>

            </form>

            <ToastContainer />
        </div>
    );
}

export default Signup;
