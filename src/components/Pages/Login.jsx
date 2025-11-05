import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Login.css';
import { Button } from '../Button';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // ربط الـ context

    const handleLogin = (e) => {
        e.preventDefault();

        // التحقق من صحة المدخلات
        if (!email || !password) {
            setError('يرجى إدخال البريد الإلكتروني وكلمة المرور');
            return;
        }

        if (!email.includes('@')) {
            setError('يرجى إدخال بريد إلكتروني صالح');
            return;
        }

        if (password.length < 6) {
            setError('كلمة المرور يجب أن تكون 6 أحرف على الأقل');
            return;
        }

        // تسجيل الدخول
        setError('');
        const userData = { email };
        login(userData);
        navigate('/'); // توجيه المستخدم بعد تسجيل الدخول
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h2 className="login-title">تسجيل الدخول</h2>
                <p className="login-subtitle">مرحباً بعودتك 👋</p>

                <form onSubmit={handleLogin}>
                    <input
                        type="email"
                        placeholder="البريد الإلكتروني"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="كلمة المرور"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    {error && <p className="error-message">{error}</p>}

                    <Button className="btn-primary" type="submit">
                        تسجيل الدخول
                    </Button>
                </form>

                <div className="login-links">
                    <p>
                        ليس لديك حساب؟ <a href="/register">سجّل الآن</a>
                    </p>
                    <p>
                        <a href="/forgot-password">نسيت كلمة المرور؟</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
