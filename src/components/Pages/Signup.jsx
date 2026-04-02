import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Signup.css'
import { Button } from '../Button';
import { useAuth } from '../Context/AuthContext';
import { useTranslation } from "react-i18next";

const Signup = () => {
    const { t } = useTranslation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    const handleSignup = (e) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
            setError(t("signup.errors.required"));
            return;
        }

        if (!email.includes('@')) {
            setError(t("signup.errors.invalid_email"));
            return;
        }

        if (password.length < 6) {
            setError(t("signup.errors.password_length"));
            return;
        }

        if (password !== confirmPassword) {
            setError(t("signup.errors.password_match"));
            return;
        }

        const userData = { email };
        login(userData);
        navigate('/');
    };

    return (
        <div className="signup-container">
            <div className="signup-card">

                <h2 className="signup-title">
                    {t("signup.title")}
                </h2>

                <p className="signup-subtitle">
                    {t("signup.subtitle")}
                </p>

                <form onSubmit={handleSignup}>

                    <input
                        type="email"
                        placeholder={t("signup.email")}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder={t("signup.password")}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input
                        type="password"
                        placeholder={t("signup.confirm_password")}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {error && <p className="error-message">{error}</p>}

                    <Button className="btn-primary" type="submit">
                        {t("signup.button")}
                    </Button>

                </form>

                <div className="signup-links">
                    <p>
                        {t("signup.have_account")}{" "}
                        <a href="/login">{t("signup.login")}</a>
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Signup;