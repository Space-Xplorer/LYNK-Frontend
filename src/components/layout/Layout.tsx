import React from 'react';
import Header from './Header';
import Footer from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  openAuthModal: (type: 'login' | 'signup', userType: 'user' | 'lynker') => void;
}

const Layout: React.FC<LayoutProps> = ({ children, openAuthModal }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header openAuthModal={openAuthModal} />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;