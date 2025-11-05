import React, { useEffect, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { Moon, Sun, Menu, X, LogOut } from 'lucide-react';
import '../Style/Header.css';
import '../Style/theme.css';
import logo from '../../assets/Logo.png';

import { useAuth } from '../Context/AuthContext'; 

export default function Header() {
  const [theme, setTheme] = useState('light');
  const [menuOpen, setMenuOpen] = useState(false);
  const { user, logout } = useAuth(); //  جلب المستخدم ودالة تسجيل الخروج
  const navigate = useNavigate();

  // تغيير الثيم عبر data-theme
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <header className="site-header" role="banner">
      <div className="container header-inner">
        {/* الشعار */}
        <Link to="/" className="logo" aria-label="Home">
          <img src={logo} alt="ThreatIQ Logo" className="logo-img" />
        </Link>

        {/* زر القائمة للجوال */}
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* القائمة */}
        <nav
          role="navigation"
          aria-label="Main navigation"
          className={`nav-menu ${menuOpen ? 'open' : ''}`}
        >
          <ul className="nav-list">
            <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>الرئيسية</NavLink></li>
            <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>حول</NavLink></li>
            <li><NavLink to="/news" onClick={() => setMenuOpen(false)}>الأخبار</NavLink></li>
            <li><NavLink to="/prevention" onClick={() => setMenuOpen(false)}>الوقاية</NavLink></li>
            <li><NavLink to="/attacks" onClick={() => setMenuOpen(false)}>الهجمات</NavLink></li>
            <li><NavLink to="/tools" onClick={() => setMenuOpen(false)}>الأدوات</NavLink></li>
          </ul>

          {/*  حالة المستخدم */}
          <div className="auth-buttons">
            {!user ? (
              <>
                <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>
                  تسجيل الدخول
                </Link>
                <Link to="/signup" className="signup-btn" onClick={() => setMenuOpen(false)}>
                  تسجيل جديد
                </Link>
              </>
            ) : (
              <div className="user-section">
                <span className="user-email">{user.email}</span>
                <button className="logout-btn" onClick={handleLogout}>
                  <LogOut size={16} style={{ marginInlineEnd: '6px' }} />
                  تسجيل الخروج
                </button>
              </div>
            )}
          </div>

          {/* الوضع الليلي والفاتح */}
          <button className="btn-theme" onClick={toggleTheme}>
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            {theme === 'light' ? ' الوضع الداكن' : ' الوضع الفاتح'}
          </button>
        </nav>
      </div>
    </header>
  );
}
