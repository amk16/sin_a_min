import React, { useState, useEffect } from 'react';

const CoffeeLandingPage = () => {
  // Array of images to iterate through
  const images = [
    '/sweet1.jpeg',
    '/sweet2.jpeg', 
    '/sweet3.jpeg',
    '/sweet4.jpeg',
    '/sweet5.jpeg'
  ];

  // State to track current image index
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Manual navigation function
  const changeImage = (newIndex) => {
    if (newIndex !== currentImageIndex) {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex(newIndex);
        setIsTransitioning(false);
      }, 300);
    }
  };

  // Auto-rotate images every 6 seconds with transition effect
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        setIsTransitioning(false);
      }, 300); // Half of transition duration
    }, 6000);

    return () => clearInterval(interval);
  }, [images.length]);



  return (
    <div className="min-h-screen flex bg-[#eae5de] flex-row-reverse relative">
      {/* Vertical line aligning with Landing page */}
      <div className="absolute left-11 top-0 w-px bg-gray-300 h-72 z-20 hidden md:block"></div>
      
      {/* Rotating element at the end of the line */}
      <div className="absolute left-11 top-72 transform -translate-x-1/2 z-20 hidden md:block">
        <div>
          <span className="text-xl">🧡</span>
        </div>
      </div>
      
      
      
      
      {/* Right Side - Image Display */}
      <div className="w-1/2 bg-gray-200 relative overflow-hidden">
        {/* Image Display */}
        <div className="absolute inset-0">
          <img 
            src={images[currentImageIndex]} 
            alt={`Coffee image ${currentImageIndex + 1}`}
            className={`w-full h-full object-cover transition-opacity duration-600 ease-in-out ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
        

      </div>

      {/* Left Side - Content */}
      <div className="w-1/2 flex items-center justify-center px-8 bg-[#FBF5ED]">
        <div className="max-w-xl">
          {/* Coffee type numbers */}
          <div className="text-right mb-8 text-gray-400 hidden">
            <div className="text-sm">01</div>
            <div className="text-sm text-gray-300 mt-1">02</div>
          </div>
          
          {/* Main Content */}
          <h1 className="text-4xl md:text-8xl font-light mb-8 tracking-tight">Live a little </h1>
          
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Sweeten up your day with a mini treat. Add some spice in your life with our sweet treats.
            We have a variety of sins to choose from, including cookies, cakes, and more.
          </p>
          
          {/* Order Button */}
          <button className="bg-gradient-to-r from-orange-600 via-orange-500 to-rose-300 hover:bg-orange-700 text-white px-8 py-3 text-sm uppercase tracking-wider transition-colors duration-200">
            Order Now
          </button>
          

        </div>
      </div>
      
      {/* Coffee Bean Icons - On the edge between sections */}
      <div className="absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col space-y-3 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => changeImage(index)}
            className={`w-6 h-6 rounded-full border-2 border-white transition-all duration-300 hover:scale-110 ${
              index === currentImageIndex ? 'scale-125' : 'scale-100'
            } ${
              index === 0 ? 'bg-gray-300' :
              index === 1 ? 'bg-gray-400' :
              index === 2 ? 'bg-yellow-700' :
              'bg-yellow-900'
            }`}
          />
        ))}
      </div>
      
      {/* Navigation Arrows */}
      <div className="absolute top-1/2 right-8 transform -translate-y-1/2 flex flex-col space-y-4 hidden">
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
          </svg>
        </button>
        <button className="text-gray-400 hover:text-gray-600 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CoffeeLandingPage;