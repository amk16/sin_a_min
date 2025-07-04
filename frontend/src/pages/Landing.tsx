import React from 'react';
import { Phone, Mail } from 'lucide-react';
import Navbar from '../components/Navbar';

const BakeryHeader: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#eae5de] relative overflow-hidden">
      {/* Animated ambient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-96 h-96 bg-amber-500 rounded-full opacity-10 -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-64 h-64 bg-amber-500 rounded-full opacity-20 top-1/3 -right-32 animate-bounce" style={{ animationDuration: '8s' }}></div>
        <div className="absolute w-80 h-80 bg-amber-500 rounded-full opacity-10 -bottom-40 left-1/4 animate-pulse" style={{ animationDuration: '6s' }}></div>
        <div className="absolute w-72 h-72 bg-amber-500 rounded-full opacity-15 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-bounce" style={{ animationDuration: '10s' }}></div>
        <div className="absolute w-52 h-52 bg-amber-500 rounded-full opacity-10 top-20 right-1/3 animate-pulse" style={{ animationDuration: '7s' }}></div>
      </div>
      
      {/* Main navigation */}
      <Navbar />
      
      {/* Hero section with cookie image */}
      <div className="relative bg-[#eae5de] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-8 lg:py-16">
          <div className="relative">
            {/* Left side - vertical "made with love" and line starting after the word (desktop only) */}
            <div className="hidden lg:flex flex-col items-center absolute -left-4 top-0 h-full pt-8 pl-2">
              <span
                className="text-[11px] text-gray-500 tracking-[0.3em] uppercase font-light italic"
                style={{ writingMode: 'vertical-rl', textOrientation: 'sideways' }}
              >
                made with <span className="text-amber-500">love</span>
              </span>
              {/* Thin vertical line begins after the text but is absolutely positioned so it doesn't impact layout */}
              <div
                className="absolute left-1/2 w-px bg-gray-300"
                style={{ top: 'calc(100% - 275px)', height: '250vh', transform: 'translateX(-50%)' }}
              ></div>
            </div>
            
            {/* Center - Cookie image and header text */}
            <div className="flex flex-col justify-center items-center py-6 lg:py-8 space-y-2">
              <div className="relative">
                {/* Orbiting amber circles */}
                <div className="absolute inset-0 -inset-20">
                  {/* Circle 1 */}
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute w-8 h-8 bg-amber-500 rounded-full opacity-20 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  {/* Circle 2 */}
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}>
                    <div className="absolute w-6 h-6 bg-amber-500 rounded-full opacity-30 bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2"></div>
                  </div>
                  {/* Circle 3 */}
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '25s' }}>
                    <div className="absolute w-10 h-10 bg-amber-500 rounded-full opacity-15 top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  {/* Circle 4 */}
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '18s', animationDirection: 'reverse' }}>
                    <div className="absolute w-5 h-5 bg-amber-500 rounded-full opacity-25 top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                  {/* Circle 5 - smaller orbit */}
                  <div className="absolute inset-10 animate-spin" style={{ animationDuration: '12s' }}>
                    <div className="absolute w-4 h-4 bg-amber-500 rounded-full opacity-35 top-0 left-1/2 transform -translate-x-1/2"></div>
                  </div>
                </div>
                
                {/* Cookie image */}
                <div className="w-55 h-55 lg:w-60 lg:h-60 rounded-full overflow-hidden shadow-sm shadow-amber-500 relative z-10">
                  <img
                    src="/cookie.png"
                    alt="Stack of cookies"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-gray-900 text-center uppercase">
                  SIN - A - MIN
                </h1>
                {/* Small amber accent dot */}
                <div className="absolute -right-4 top-0 w-2 h-2 bg-amber-500 rounded-full opacity-60"></div>
              </div>
              
              <p className="text-xs tracking-[0.3em] text-gray-500 uppercase mt-1 text-center">
                It's a mini <span className="relative">sin
                  <span
                    className="absolute -top-2 left-1/2 transform -translate-x-1/2"
                    style={{ fontSize: '0.45rem', lineHeight: 1 }}
                  >😈</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BakeryHeader;