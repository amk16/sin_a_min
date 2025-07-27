import React from 'react';

interface PortfolioSectionProps {
  leftImage?: string;
  rightImage?: string;
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({
  leftImage = '/nuts.jpeg',
  rightImage = '/sachika.jpeg'
}) => {
  return (
    <div className="min-h-screen bg-[#FBF5ED] relative overflow-hidden">
      {/* Minimal ambient circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Background circle */}
        <div className="absolute w-82 h-82 rounded-full bottom-22 right-1/6 bg-[#D17B47] opacity-20"></div>
        
        {/* Image circle */}
        <div className="absolute w-75 h-75 rounded-full bottom-20 right-1/7  overflow-hidden border-3 border-white" >
          <img
            src={rightImage}
            alt="Chef Sachika"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Grid background pattern - subtle */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="h-full w-full" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #000 0px, transparent 1px, transparent 40px, #000 41px), repeating-linear-gradient(90deg, #000 0px, transparent 1px, transparent 40px, #000 41px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Main container */}
      <div className="relative h-screen flex items-center">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-12  items-center">
            {/* Mobile - Right side image at top */} 
            <div className="col-span-12 lg:hidden flex justify-center mb-12 -mt-8">
              <div className="w-60 h-60">
                <div className="w-full h-full overflow-hidden rounded-full">
                  <img
                    src={rightImage}
                    alt="Chef Sachika"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Left side - food image with jail bars - Hidden on mobile */}
            <div className="hidden lg:flex col-span-12 lg:col-span-5 relative -ml-16 xl:-ml-40 2xl:-ml-52">
              <div className="relative">
                {/* Single subtle orbiting element */}
                <div className="absolute inset-0 -inset-8 pointer-events-none">
                  <div className="absolute w-full h-full animate-spin" style={{ animationDuration: '20s' }}>
                    <div className="absolute w-4 h-4 bg-[#D17B47] rounded-full opacity-15 top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                  </div>
                </div>

                <div className="aspect-[3/5] overflow-hidden relative">
                  <img
                    src={leftImage}
                    alt="Modern architecture with curved archways"
                    className="w-3/4 h-full object-cover"
                  />
                  {/* Jail bar columns */}
                  <div className="absolute inset-0 w-3/4 pointer-events-none">
                    {/* Bar 1 */}
                    <div 
                      className="absolute h-full bg-[#FBF5ED]"
                      style={{
                        width: '15px',
                        right: '25%',
                        boxShadow: '2px 0 4px rgba(0,0,0,0.1)'
                      }}
                    ></div>
                    {/* Bar 2 */}
                    <div 
                      className="absolute h-full bg-[#FBF5ED]"
                      style={{
                        width: '15px',
                        right: '15%',
                        boxShadow: '2px 0 4px rgba(0,0,0,0.1)'
                      }}
                    ></div>
                    {/* Bar 3 */}
                    <div 
                      className="absolute h-full bg-[#FBF5ED]"
                      style={{
                        width: '15px',
                        right: '5%',
                        boxShadow: '2px 0 4px rgba(0,0,0,0.1)'
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side - Text content */}
            <div className="col-span-12 lg:col-start-6 lg:col-span-4 flex items-start lg:items-center justify-center lg:py-0 -mt-20 lg:-mt-20 lg:min-h-auto">
              <div className="max-w-md lg:max-w-md relative px-4 lg:px-0">
                {/* Single subtle accent dot */}
                <div className="absolute -top-2 -right-2 w-2 h-2 bg-[#D17B47] rounded-full opacity-25 animate-pulse" style={{ animationDuration: '4s' }}></div>
                
                <div className="prose prose-xs lg:prose-lg">
                  <h2 className="text-[#D17B47] text-lg lg:text-2xl font-light mb-3 lg:mb-6 relative text-center lg:text-left">
                    About Our Vision
                    {/* Small accent line next to heading */}
                    <span className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 w-6 h-px bg-[#D17B47] opacity-30"></span>
                  </h2>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-3 lg:mb-4">
                    We believe that Ali is the greatest there ever was in every regard that can be fathomed. Not only is this a belief but the everlasting effort of each waking day, an endeavour so fulfilling that it can be done with reward or thanks.
                  </p>
                  <p className="text-gray-700 text-sm lg:text-base leading-relaxed mb-3 lg:mb-4">
                    From concept to completion, we work diligently and with thanks to meet all of Ali's needs. From mundane to vital any and all matters pertaining to the well-being and satisfaction of Ali are managed with zealousness 
                  </p>
                 
                </div>
              </div>
            </div>

            {/* Far right - Image (now in ambient circle) */}
            
          </div>
        </div>
      </div>

      {/* Minimal detail elements */}
      <div className="absolute bottom-8 left-8">
        <div className="flex flex-col space-y-1">
          <div className="w-12 h-[1px] bg-[#D17B47] opacity-30"></div>
          <div className="w-8 h-[1px] bg-[#D17B47] opacity-30"></div>
          <div className="w-4 h-[1px] bg-[#D17B47] opacity-30"></div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSection;