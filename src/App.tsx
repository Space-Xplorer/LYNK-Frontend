import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import FindLynker from './pages/FindLynker';
import BecomeLynker from './pages/BecomeLynker';
import SafetyPage from './pages/SafetyPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import AuthModal from './components/auth/AuthModal';
import { AuthProvider } from './context/AuthContext';

function App() {
  const [authModalOpen, setAuthModalOpen] = React.useState(false);
  const [authType, setAuthType] = React.useState<'login' | 'signup'>('login');
  const [userType, setUserType] = React.useState<'user' | 'lynker'>('user');

  const openAuthModal = (type: 'login' | 'signup', userType: 'user' | 'lynker') => {
    setAuthType(type);
    setUserType(userType);
    setAuthModalOpen(true);
  };

  return (
    <AuthProvider>
      <Layout openAuthModal={openAuthModal}>
        <Routes>
          <Route path="/" element={<HomePage openAuthModal={openAuthModal} />} />
          <Route path="/find-lynker" element={<FindLynker />} />
          <Route path="/become-lynker" element={<BecomeLynker openAuthModal={openAuthModal} />} />
          <Route path="/safety" element={<SafetyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <AuthModal 
          isOpen={authModalOpen} 
          onClose={() => setAuthModalOpen(false)} 
          type={authType}
          userType={userType} 
        />
      </Layout>
    </AuthProvider>
  );
}

export default App;