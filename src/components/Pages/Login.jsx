import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Login.css';
import { Button } from '../Button';
import { useAuth } from '../Context/AuthContext';
import { useTranslation } from "react-i18next";

const Login = () => {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleLogin = (e) => {
        e.preventDefault();

        if (!email || !password) {
            setError(t("login.errors.required"));
            return;
        }

        if (!email.includes('@')) {
            setError(t("login.errors.invalid_email"));
            return;
        }

        if (password.length < 6) {
            setError(t("login.errors.password_length"));
            return;
        }

        setError('');
        const userData = { email };
        login(userData);
        navigate('/');
    };

    return (
        <div className="login-container">
            <div className="login-card">

                <h2 className="login-title">
                    {t("login.title")}
                </h2>

                <p className="login-subtitle">
                    {t("login.subtitle")}
                </p>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        placeholder={t("login.email")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder={t("login.password")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="error-message">{error}</p>}

                    <Button className="btn-primary" type="submit">
                        {t("login.button")}
                    </Button>

                </form>

                <div className="login-links">
                    <p>
                        {t("login.no_account")}{" "}
                        <a href="/signup">{t("login.signup")}</a>
                    </p>

                    <p>
                        <a href="/forgot-password">
                            {t("login.forgot")}
                        </a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Login;