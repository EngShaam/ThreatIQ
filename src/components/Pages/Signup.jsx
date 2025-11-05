import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Style/Signup.css'
import { Button } from '../Button';
import { useAuth } from '../Context/AuthContext';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth(); // سنستخدم نفس الـ context لتسجيل المستخدم الجديد

    const handleSignup = (e) => {
        e.preventDefault();

        // التحقق من المدخلات
        if (!email || !password || !confirmPassword) {
            setError('يرجى إدخال جميع الحقول');
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

        if (password !== confirmPassword) {
            setError('كلمتا المرور غير متطابقتين');
            return;
        }

        // حفظ المستخدم (محاكاة)
        const userData = { email };
        login(userData);
        navigate('/'); // العودة للصفحة الرئيسية بعد التسجيل
    };

    return (
        <div className="signup-container">
            <div className="signup-card">
                <h2 className="signup-title">إنشاء حساب جديد</h2>
                <p className="signup-subtitle">مرحباً بك في ThreatIQ 👋</p>

                <form onSubmit={handleSignup}>
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
                    <input
                        type="password"
                        placeholder="تأكيد كلمة المرور"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />

                    {error && <p className="error-message">{error}</p>}

                    <Button className="btn-primary" type="submit">
                        إنشاء الحساب
                    </Button>
                </form>

                <div className="signup-links">
                    <p>
                        لديك حساب بالفعل؟ <a href="/login">تسجيل الدخول</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Signup;
