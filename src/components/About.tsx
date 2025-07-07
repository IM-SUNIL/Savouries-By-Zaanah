export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-burgundy">
              About Us
            </h2>
            
            <div className="w-20 h-1 bg-amber-800"></div>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              Savouries By Zaanah is a Cape Town–based home business serving freshly made savouries, sweet treats, and authentic South African flavours, all handmade with love and care.
            </p>
            
            <div className="bg-amber-100 text-burgundy p-6 rounded-lg">
              <p className="text-xl font-playfair font-semibold italic">
                &ldquo;Handmade, Heartfelt, Halal.&rdquo;
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80"
                alt="Handmade snacks preparation"
                className="w-full h-96 object-cover"
              />
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-400 rounded-full opacity-20"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-rose-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
} 