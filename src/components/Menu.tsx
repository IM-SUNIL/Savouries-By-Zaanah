'use client';

export default function Menu() {
  const menuCategories = [
    {
      title: "Fish & Seafood",
      items: [
        { name: "Catfish", halfLb: "$8.99", fullLb: "$15.99" },
        { name: "Tilapia", halfLb: "$7.99", fullLb: "$13.99" },
        { name: "Shrimp", halfLb: "$9.99", fullLb: "$17.99" },
        { name: "Crawfish", halfLb: "$10.99", fullLb: "$19.99" },
        { name: "Oysters", halfLb: "$11.99", fullLb: "$21.99" },
      ]
    },
    {
      title: "Chicken",
      items: [
        { name: "Fried Chicken Breast", halfLb: "$6.99", fullLb: "$11.99" },
        { name: "Chicken Wings", halfLb: "$7.99", fullLb: "$13.99" },
        { name: "Chicken Tenders", halfLb: "$6.99", fullLb: "$11.99" },
        { name: "Grilled Chicken", halfLb: "$7.99", fullLb: "$13.99" },
      ]
    },
    {
      title: "Pork",
      items: [
        { name: "Pork Chops", halfLb: "$8.99", fullLb: "$15.99" },
        { name: "Pulled Pork", halfLb: "$7.99", fullLb: "$13.99" },
        { name: "Pork Ribs", halfLb: "$9.99", fullLb: "$17.99" },
        { name: "Bacon Wrapped Pork", halfLb: "$10.99", fullLb: "$19.99" },
      ]
    },
    {
      title: "Burgers",
      items: [
        { name: "Classic Burger", halfLb: "$6.99", fullLb: "$11.99" },
        { name: "Cheese Burger", halfLb: "$7.99", fullLb: "$12.99" },
        { name: "Bacon Burger", halfLb: "$8.99", fullLb: "$13.99" },
        { name: "Mushroom Swiss Burger", halfLb: "$8.99", fullLb: "$13.99" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <div className="w-20 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover our Southern favorites, each dish prepared with love and the finest ingredients
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-16">
          {menuCategories.map((category, categoryIndex) => (
            <div key={category.title} className="animate-fade-in-up" style={{ animationDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div 
                    key={item.name} 
                    className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-200"
                  >
                    <h4 className="text-xl font-playfair font-semibold text-gray-900 mb-4">
                      {item.name}
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">½ lb</span>
                        <span className="font-bold text-orange-500">{item.halfLb}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">1 lb</span>
                        <span className="font-bold text-orange-500">{item.fullLb}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-16 bg-orange-50 border-l-4 border-orange-500 p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-playfair font-semibold text-gray-900 mb-2">
                🍽️ All Dinners Include
              </h4>
              <p className="text-gray-700">
                All dinners come with 2 sides. Premium sides extra $1.99
              </p>
            </div>
            <div>
              <h4 className="text-lg font-playfair font-semibold text-gray-900 mb-2">
                💳 Payment Options
              </h4>
              <p className="text-gray-700">
                Cash preferred. Cards accepted with 4% fee
              </p>
            </div>
          </div>
        </div>

        {/* Popular Sides */}
        <div className="mt-12">
          <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6 text-center">
            Popular Sides
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Hush Puppies", "Coleslaw", "French Fries", "Onion Rings",
              "Baked Beans", "Mac & Cheese", "Green Beans", "Sweet Potato Fries"
            ].map((side) => (
              <div key={side} className="text-center p-3 bg-gray-100 rounded-lg">
                <span className="text-gray-700 font-medium">{side}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 