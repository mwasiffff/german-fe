import React from 'react';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

// Page components
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import CoursePlanA1 from './pages/CoursePlanA1';
import CoursePlanA2 from './pages/CoursePlanA2';
import CheckoutPage from './pages/CheckoutPage';
import SuccessPage from './pages/SuccessPage';
import IntroVideoPage from './pages/IntroVideoPage';

// Layout components
import Layout from './components/layout/Layout';
import ScrollToTop from './components/utils/ScrollToTop';

function App() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Add event listener for page reload
    const handleBeforeUnload = () => {
      localStorage.removeItem('authToken');
      sessionStorage.clear();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Check auth status only on initial mount
    const checkAuth = () => {
      const token = localStorage.getItem('authToken');
      const publicRoutes = ['/', '/register', '/login'];
      
      // Only redirect if:
      // 1. We're not on a public route
      // 2. There's no token
      // 3. This isn't the initial page load (to prevent loops)
      if (!publicRoutes.includes(location.pathname) && !token && !sessionStorage.getItem('initialLoad')) {
        navigate('/login');
      }
      
      // Mark that we've done the initial load check
      sessionStorage.setItem('initialLoad', 'true');
    };

    checkAuth();

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []); // Remove location.pathname from dependencies

  return (
    <div className="space-bg min-h-screen">
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/intro" element={<IntroVideoPage />} />
          
          <Route element={<Layout />}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/courses/a1" element={<CoursePlanA1 />} />
            <Route path="/courses/a2" element={<CoursePlanA2 />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/success" element={<SuccessPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
