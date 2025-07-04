import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  // Update active section based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>('section[id]');
      let currentSection = activeSection;

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        // If section top is above viewport top but not too far and bottom is below a threshold
        if (rect.top <= 100 && rect.bottom >= 100) {
          currentSection = section.id;
        }
      });

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  return (
    <nav className="bg-[#eae5de] relative">
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
              <a
                href="#about"
                className={`text-[11px] text-gray-500 hover:text-gray-400 tracking-[0.3em] uppercase font-light italic transition-colors ${
                  activeSection === 'about' ? 'border-b-2 border-amber-500' : ''
                }`}
              >
                About
              </a>
              <a
                href="#menu"
                className={`text-[11px] text-gray-500 hover:text-gray-400 tracking-[0.3em] uppercase font-light italic transition-colors ${
                  activeSection === 'menu' ? 'border-b-2 border-amber-500' : ''
                }`}
              >
                Menu
              </a>
            </div>

            {/* Center logo placeholder */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center">
                <span className="text-white text-2xl font-bold"></span>
              </div>
            </div>

            {/* Right navigation items */}
            <div className="flex items-center gap-20 mr-20">
              <a
                href="#portfolio"
                className={`text-[11px] text-gray-500 hover:text-gray-400 tracking-[0.3em] uppercase font-light italic transition-colors ${
                  activeSection === 'portfolio' ? 'border-b-2 border-amber-500' : ''
                }`}
              >
                Portfolio
              </a>
              <a
                href="#contact"
                className={`text-[11px] text-gray-500 hover:text-gray-400 tracking-[0.3em] uppercase font-light italic transition-colors ${
                  activeSection === 'contact' ? 'border-b-2 border-amber-500' : ''
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Mobile logo */}
          <div className="lg:hidden">
            <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center">
              <span className="text-white text-xl font-bold">🍪</span>
            </div>
          </div>

          {/* Empty div for mobile layout balance */}
          <div className="lg:hidden w-10"></div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#f8f8f6] border-t border-gray-100 z-50">
          <div className="px-4 py-4 space-y-4">
            <a
              href="#home"
              className={`block text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic ${
                activeSection === 'home' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              Home
            </a>
            <a
              href="#about"
              className={`block text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic ${
                activeSection === 'about' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              About
            </a>
            <a
              href="#menu"
              className={`block text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic ${
                activeSection === 'menu' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              Menu
            </a>
            <a
              href="#services"
              className={`block text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic ${
                activeSection === 'services' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className={`block text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic ${
                activeSection === 'portfolio' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={`block text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic ${
                activeSection === 'contact' ? 'border-b-2 border-amber-500' : ''
              }`}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 