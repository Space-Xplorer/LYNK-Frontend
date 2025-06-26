import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, Twitter, Facebook } from 'lucide-react';
import LynkLogo from '../common/LynkLogo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-lynk-dark text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <LynkLogo className="h-10 w-auto text-white" />
              <span className="ml-2 text-2xl font-bold">Lynk</span>
            </div>
            <p className="mb-6 text-gray-300">
              Making meaningful human connection accessible to all.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" className="text-white hover:text-lynk-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" className="text-white hover:text-lynk-orange transition-colors">
                <Twitter size={20} />
              </a>
              <a href="https://facebook.com" className="text-white hover:text-lynk-orange transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/find-lynker" className="text-gray-300 hover:text-white transition-colors">
                  Find a Lynker
                </Link>
              </li>
              <li>
                <Link to="/become-lynker" className="text-gray-300 hover:text-white transition-colors">
                  Become a Lynker
                </Link>
              </li>
              <li>
                <Link to="/safety" className="text-gray-300 hover:text-white transition-colors">
                  Safety & Trust
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/terms" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/cookies" className="text-gray-300 hover:text-white transition-colors">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/refund" className="text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>support@lynkapp.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>+1 (888) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 flex-shrink-0" />
                <span>123 Connection St, San Francisco, CA 94107</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-700 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Lynk. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Sitemap
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Accessibility
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              FAQ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;