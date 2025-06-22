
import React, { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const [typedText, setTypedText] = useState('');
  const fullText = "Passionate Software Developer";
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Floating elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-4 h-4 bg-purple-500 rounded-full animate-bounce delay-1000"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-500 rounded-full animate-bounce delay-2000"></div>
        <div className="absolute bottom-40 left-1/4 w-3 h-3 bg-pink-500 rounded-full animate-bounce delay-3000"></div>
        <div className="absolute bottom-20 right-20 w-5 h-5 bg-purple-400 rounded-full animate-bounce delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-4 leading-tight">
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Dhamoji
                </span>
                <span className="block text-4xl lg:text-5xl mt-2">
                  Ajayraj Kattina
                </span>
              </h1>
              
              <div className="h-16 flex items-center">
                <p className="text-xl lg:text-2xl text-purple-300 font-light">
                  {typedText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>
            </div>

            <div className="space-y-3 text-gray-300 mb-8">
              <p className="flex items-center justify-center lg:justify-start">
                📍 Nellore, Andhra Pradesh, 524344
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                📞 +91 9121429127
              </p>
              <p className="flex items-center justify-center lg:justify-start">
                📧 ajayraj3461@gmail.com
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#projects"
                className="interactive bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                View My Work
              </a>
              <a
                href="#chat"
                className="interactive border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105"
              >
                Let's Chat
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative group">
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 animate-spin-slow opacity-75"></div>
              <div className="absolute inset-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 animate-spin-slow opacity-50" style={{ animationDirection: 'reverse' }}></div>
              
              {/* Profile photo container */}
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-white/20 backdrop-blur-sm transform transition-all duration-500 group-hover:scale-105 group-hover:rotate-3">
                <img
                  src="/lovable-uploads/4b169dbd-8f07-46af-9409-37474f631f21.png"
                  alt="Dhamoji Ajayraj Kattina"
                  className="w-full h-full object-cover transform transition-all duration-500 group-hover:scale-110"
                  onLoad={() => setIsImageLoaded(true)}
                />
                
                {/* Overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce">
                JS
              </div>
              <div className="absolute top-1/2 -left-6 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-bold animate-bounce delay-1000">
                ⚛️
              </div>
              <div className="absolute -bottom-2 right-8 w-14 h-14 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold animate-bounce delay-2000">
                💻
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="text-white/70 w-8 h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
