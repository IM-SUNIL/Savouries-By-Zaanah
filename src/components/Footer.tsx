'use client';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      {/* Fish Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute top-20 right-20">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <div className="absolute bottom-20 left-1/4">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </div>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Restaurant Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">RF</span>
                </div>
                <span className="text-2xl font-playfair font-bold">
                  Real Fish
                </span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Serving real Southern flavor with real Southern love since day one! 
                Come experience authentic Southern hospitality in England, Arkansas.
              </p>
              <div className="flex space-x-4">
                <a href="tel:+15018420944" className="text-orange-400 hover:text-orange-300 transition-colors duration-200">
                  +1 (501) 842-0944
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-playfair font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <button 
                    onClick={() => {
                      const menuSection = document.querySelector('#menu');
                      if (menuSection) {
                        menuSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    Menu
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const aboutSection = document.querySelector('#about');
                      if (aboutSection) {
                        aboutSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    About Us
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const gallerySection = document.querySelector('#gallery');
                      if (gallerySection) {
                        gallerySection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    Gallery
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => {
                      const contactSection = document.querySelector('#contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-300 hover:text-orange-400 transition-colors duration-200"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            {/* Hours */}
            <div>
              <h3 className="text-lg font-playfair font-semibold mb-4">Hours</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Thu-Fri: 5PM-9PM</li>
                <li>Saturday: 12PM-7PM</li>
                <li>Sunday: 12PM-5PM</li>
                <li className="text-red-400">Mon-Wed: Closed</li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Real Fish. All rights reserved.
              </div>
              <div className="text-gray-400 text-sm">
                Designed with ❤️ for Southern hospitality
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 