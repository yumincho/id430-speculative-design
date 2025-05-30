import { Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from '../contexts/ThemeContext';

// White mode pages
import Home from '../pages/white/Home';
import Store from '../pages/white/Store';
import History from '../pages/white/History';
import Stories from '../pages/white/Stories';

// Dark mode pages
import HomeDark from '../pages/dark/Home';
import StoreDark from '../pages/dark/Store';
import HistoryDark from '../pages/dark/History';
import StoriesDark from '../pages/dark/Stories';

export default function AppRouter() {
  const { mode, isLoading } = useTheme();

  // Show loading state while determining theme
  if (isLoading) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontSize: '1.2rem'
      }}>
        Loading...
      </div>
    );
  }

  // Redirect root to appropriate home page based on theme
  const homeRedirect = mode === 'white' ? '/home' : '/dk/home';

  return (
    <Routes>
      {/* Root redirect */}
      <Route path="/" element={<Navigate to={homeRedirect} replace />} />
      
      {/* White mode routes */}
      <Route path="/home" element={<Home />} />
      <Route path="/store" element={<Store />} />
      <Route path="/history" element={<History />} />
      <Route path="/stories" element={<Stories />} />
      
      {/* Dark mode routes */}
      <Route path="/dk/home" element={<HomeDark />} />
      <Route path="/dk/store" element={<StoreDark />} />
      <Route path="/dk/history" element={<HistoryDark />} />
      <Route path="/dk/stories" element={<StoriesDark />} />
      
      {/* 404 fallback */}
      <Route path="*" element={<Navigate to={homeRedirect} replace />} />
    </Routes>
  );
} 