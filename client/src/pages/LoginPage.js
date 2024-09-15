import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginPage.css';
function LoginPage() {
    const [passwordVisible, setPasswordVisible] = useState(false);
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userId === 'local' && password === 'pass') {
            navigate('/home');
        }
        else {
            alert('Invalid credentials');
        }
        console.log('Login Submitted:', { userId, password });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h1>Login</h1>
                <p>By signing in you are agreeing to our <Link to="/privacy">Term and privacy policy</Link></p>
                <div className="form-toggle">
                    <Link to="/login" className="active">Login</Link>
                   
                </div>
                <p>Use "local" as username and "pass" as password to login.</p>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="User Name"
                            value={userId}
                            onChange={(e) => setUserId(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group password-group">
                        <input
                            type={passwordVisible ? 'text' : 'password'}
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <span className="password-toggle" onClick={togglePasswordVisibility}>
                            {passwordVisible ? '🙈' : '👁️'} {/* Toggle icon */}
                        </span>
                    </div>

                    {/* <div className="options">
                        <label>
                            <input type="checkbox" /> Remember password
                        </label>
                        <Link to="/forgot-password" className="forgot-password">Forget password?</Link>
                    </div> */}

                    <button type="submit" className="login-btn">Login</button>
                </form>

                {/* <div className="social-login">
                    <p>Or connect with</p>
                    <div className="social-icons">
                        <Link to="#"><i className="fab fa-facebook"></i></Link>
                        <Link to="#"><i className="fab fa-instagram"></i></Link>
                        <Link to="#"><i className="fab fa-pinterest"></i></Link>
                        <Link to="#"><i className="fab fa-linkedin"></i></Link>
                    </div>
                </div> */}

                {/* <div className="fingerprint">
                    <img src="/fingerprint-icon.png" alt="Fingerprint Login" />
                </div> */}
            </div>
        </div>
    );
}

export default LoginPage;
