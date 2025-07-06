export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900">
              Our Story
            </h2>
            
            <div className="w-20 h-1 bg-orange-500"></div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Nestled in the heart of England, Arkansas, Real Fish has been serving up authentic Southern cuisine 
              that warms the soul and brings families together. What started as a simple dream to share our love 
              for traditional Southern cooking has grown into a beloved local institution.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Our recipes have been passed down through generations, each dish crafted with care and the finest 
              ingredients. From our perfectly seasoned fish to our mouthwatering chicken and pork dishes, 
              every bite tells a story of Southern tradition and culinary excellence.
            </p>
            
            <div className="bg-orange-500 text-white p-6 rounded-lg">
              <p className="text-xl font-playfair font-semibold italic">
                &ldquo;Serving real Southern flavor with real Southern love since day one!&rdquo;
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Southern comfort food"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-orange-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500 rounded-full opacity-20"></div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-orange-500 mb-2">25+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-orange-500 mb-2">1000+</div>
            <div className="text-gray-600">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-playfair font-bold text-orange-500 mb-2">50+</div>
            <div className="text-gray-600">Signature Dishes</div>
          </div>
        </div>
      </div>
    </section>
  );
} 