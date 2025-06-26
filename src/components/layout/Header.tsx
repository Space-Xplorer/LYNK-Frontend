import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, CircleUserRound } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import LynkLogo from '../common/LynkLogo';

interface HeaderProps {
  openAuthModal: (type: 'login' | 'signup', userType: 'user' | 'lynker') => void;
}

const Header: React.FC<HeaderProps> = ({ openAuthModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <LynkLogo className="h-10 w-auto" />
            <span className="ml-2 text-2xl font-bold text-lynk-purple">Lynk</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/find-lynker" className="text-gray-700 hover:text-lynk-purple transition-colors">
              Find a Lynker
            </Link>
            <Link to="/become-lynker" className="text-gray-700 hover:text-lynk-purple transition-colors">
              Become a Lynker
            </Link>
            <Link to="/safety" className="text-gray-700 hover:text-lynk-purple transition-colors">
              Safety
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-lynk-purple transition-colors">
              About Us
            </Link>
            
            {isAuthenticated ? (
              <div className="relative group">
                <button className="flex items-center text-gray-700 hover:text-lynk-purple transition-colors">
                  <CircleUserRound className="h-6 w-6 mr-1" />
                  <span>{user?.name}</span>
                </button>
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-lynk-light">
                    Profile
                  </Link>
                  <button 
                    onClick={logout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-lynk-light"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button 
                  onClick={() => openAuthModal('login', 'user')}
                  className="text-lynk-purple hover:text-lynk-dark transition-colors"
                >
                  Log in
                </button>
                <button 
                  onClick={() => openAuthModal('signup', 'user')}
                  className="btn-primary"
                >
                  Sign up
                </button>
              </div>
            )}
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-lynk-purple"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link to="/find-lynker" className="text-gray-700 hover:text-lynk-purple transition-colors">
                Find a Lynker
              </Link>
              <Link to="/become-lynker" className="text-gray-700 hover:text-lynk-purple transition-colors">
                Become a Lynker
              </Link>
              <Link to="/safety" className="text-gray-700 hover:text-lynk-purple transition-colors">
                Safety
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-lynk-purple transition-colors">
                About Us
              </Link>
              
              {isAuthenticated ? (
                <>
                  <hr className="border-gray-200" />
                  <Link to="/profile" className="text-gray-700 hover:text-lynk-purple transition-colors">
                    Profile
                  </Link>
                  <button 
                    onClick={logout}
                    className="text-left text-gray-700 hover:text-lynk-purple transition-colors"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <hr className="border-gray-200" />
                  <button 
                    onClick={() => openAuthModal('login', 'user')}
                    className="text-left text-lynk-purple hover:text-lynk-dark transition-colors"
                  >
                    Log in
                  </button>
                  <button 
                    onClick={() => openAuthModal('signup', 'user')}
                    className="btn-primary w-full"
                  >
                    Sign up
                  </button>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;