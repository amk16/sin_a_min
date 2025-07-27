import React, { useState, useEffect, useRef } from 'react'
import Landing from './pages/Landing'
import Order from './pages/Order'
import About from './pages/About'
import Navbar from './components/Navbar'

const App = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const sections = ['landing', 'order', 'about'];
  const isScrolling = useRef(false);

  const scrollToSection = (index) => {
    if (index >= 0 && index < sections.length && !isScrolling.current) {
      isScrolling.current = true;
      const element = document.getElementById(sections[index]);
      if (element) {
        // Much slower custom scroll animation
        const targetPosition = element.offsetTop;
        const startPosition = window.pageYOffset;
        const distance = targetPosition - startPosition;
        const duration = 1750; // 2.5 seconds for a much slower transition
        let start = null;

        const animation = (currentTime) => {
          if (start === null) start = currentTime;
          const timeElapsed = currentTime - start;
          const progress = Math.min(timeElapsed / duration, 1);
          
          // Easing function for smooth animation
          const easeInOutCubic = progress < 0.5
            ? 4 * progress * progress * progress
            : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          
          window.scrollTo(0, startPosition + (distance * easeInOutCubic));
          
          if (timeElapsed < duration) {
            requestAnimationFrame(animation);
          } else {
            setCurrentSection(index);
            setTimeout(() => {
              isScrolling.current = false;
            }, 300);
          }
        };

        requestAnimationFrame(animation);
      }
    }
  };

  // Function to handle navbar navigation
  const handleNavbarNavigation = (sectionName) => {
    const sectionIndex = sections.indexOf(sectionName);
    if (sectionIndex !== -1) {
      scrollToSection(sectionIndex);
    }
  };

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isScrolling.current) return;
      
      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [currentSection]);

  return (
    <div className="flex flex-col lg:pt-16">
      <Navbar 
        currentSection={sections[currentSection]} 
        onNavigate={handleNavbarNavigation}
      />
      {/* Home / Landing Section */}
      <section id="landing" className="min-h-screen">
        <Landing />
      </section>
      <section id="order" className="min-h-screen">
        <Order />
      </section>
      <section id="about" className="min-h-screen">
        <About />
      </section>
    </div>
  )
}

export default App