import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Sections/Header';
import HomePage from './components/Sections/HomePage';
import AttacksPage from './components/Sections/AttacksPage';
import PreventionPage from './components/Sections/PreventionPage';
import ToolsPage from './components/Sections/ToolsPage';
import NewsPage from './components/Sections/NewsPage';
import AboutPage from './components/Sections/AboutPage';
import Footer from './components/Sections/Footer';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';

import { AuthProvider } from './components/Context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/attacks" element={<AttacksPage />} />
            <Route path="/prevention" element={<PreventionPage />} />
            <Route path="/tools" element={<ToolsPage />} />
            <Route path="/news" element={<NewsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
