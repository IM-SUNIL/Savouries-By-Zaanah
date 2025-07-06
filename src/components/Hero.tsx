'use client';



export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10"></div>
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')"
          }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-20 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-playfair font-bold mb-6 animate-fade-in-up">
          Find your flavor at
          <span className="block text-orange-400">Real Fish</span>
        </h1>
        
        <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Serving real Southern flavor with real Southern love since day one!
        </p>
        
        <button 
          onClick={() => {
            const menuSection = document.querySelector('#menu');
            if (menuSection) {
              menuSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up"
          style={{ animationDelay: '0.4s' }}
        >
          View Our Menu
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
} 