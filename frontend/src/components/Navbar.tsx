import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentSection: string;
  onNavigate: (sectionName: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentSection, onNavigate }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionName: string) => {
    onNavigate(sectionName);
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="bg-[#FBF5ED] lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:z-[9999]" style={{ transform: 'translateZ(0)', willChange: 'transform' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-between w-full">
            {/* Left navigation items */}
            <div className="flex items-center gap-20 ml-25">
              <button
                onClick={() => handleNavClick('landing')}
                className={`text-[11px] text-gray-500 hover:text-gray-400 tracking-[0.3em] uppercase font-light italic transition-colors ${
                  currentSection === 'landing' ? 'border-b-2 border-amber-500' : ''
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('order')}
                className={`text-[11px] text-gray-500 hover:text-gray-400 tracking-[0.3em] uppercase font-light italic transition-colors ${
                  currentSection === 'order' ? 'border-b-2 border-amber-500' : ''
                }`}
              >
                Order
              </button>
            </div>

            {/* Center logo placeholder */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <button
                onClick={() => handleNavClick('landing')}
                className="w-14 h-14 rounded-full  flex items-center justify-center hover:bg-gray-800 transition-colors"
              >
                <span className="text-white text-2xl font-bold">🍪</span>
              </button>
            </div>

            {/* Right navigation items */}
            <div className="flex items-center gap-20 mr-20">
              <button
                onClick={() => handleNavClick('about')}
                className={`text-[11px] text-gray-500 hover:text-gray-400 tracking-[0.3em] uppercase font-light italic transition-colors ${
                  currentSection === 'about' ? 'border-b-2 border-amber-500' : ''
                }`}
              >
                About
              </button>
              <button
                onClick={() => handleNavClick('order')}
                className={`text-[11px] text-gray-500 hover:text-gray-400 tracking-[0.3em] uppercase font-light italic transition-colors ${
                  currentSection === 'order' ? 'border-b-2 border-amber-500' : ''
                }`}
              >
                Menu
              </button>
            </div>
          </div>

          {/* Mobile logo */}
          <div className="lg:hidden">
            <button
              onClick={() => handleNavClick('landing')}
              className="w-16 h-16 rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
            >
              <span className="text-2xl font-bold">🍪</span>
            </button>
          </div>

          {/* Empty div for mobile layout balance */}
          <div className="lg:hidden w-10"></div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
        isMobileMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="bg-[#f8f8f6] border-t border-gray-100 z-[9999]">
          <div className={`px-4 py-4 space-y-4 transform transition-transform duration-500 ease-in-out ${
            isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'
          }`}>
            <button
              onClick={() => handleNavClick('landing')}
              className={`block w-full text-left text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic transition-colors hover:text-gray-700 ${
                currentSection === 'landing' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handleNavClick('order')}
              className={`block w-full text-left text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic transition-colors hover:text-gray-700 ${
                currentSection === 'order' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              Order
            </button>
            <button
              onClick={() => handleNavClick('about')}
              className={`block w-full text-left text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic transition-colors hover:text-gray-700 ${
                currentSection === 'about' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              About
            </button>
            <button
              onClick={() => handleNavClick('order')}
              className={`block w-full text-left text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic transition-colors hover:text-gray-700 ${
                currentSection === 'order' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 