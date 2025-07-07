'use client';

export default function Menu() {
  const menuCategories = [
    {
      title: "Everyday Items",
      items: [
        { name: "Fried Chicken", price: "$12.99", description: "Crispy golden fried chicken" },
        { name: "Pizza", price: "$14.99", description: "Fresh baked pizza with your choice of toppings" },
        { name: "Donair", price: "$11.99", description: "Traditional donair with special sauce" },
        { name: "Burgers", price: "$10.99", description: "Juicy beef burgers with fries" },
        { name: "Fish & Chips", price: "$13.99", description: "Fresh battered fish with golden fries" },
        { name: "Chicken Wings", price: "$11.99", description: "Crispy wings with dipping sauce" },
      ]
    },
    {
      title: "Hot Lunch & Supper",
      items: [
        { name: "Monday - Meatloaf", price: "$12.99", description: "Homemade meatloaf with mashed potatoes" },
        { name: "Tuesday - Chicken Alfredo", price: "$13.99", description: "Creamy alfredo pasta with grilled chicken" },
        { name: "Wednesday - Roast Beef", price: "$14.99", description: "Tender roast beef with gravy" },
        { name: "Thursday - Shepherd's Pie", price: "$12.99", description: "Classic shepherd's pie with ground beef" },
        { name: "Friday - Fish Fry", price: "$13.99", description: "Fresh fish with coleslaw and fries" },
        { name: "Saturday - Pot Roast", price: "$14.99", description: "Slow-cooked pot roast with vegetables" },
      ]
    },
    {
      title: "Soups & Sandwiches",
      items: [
        { name: "Monday - Chicken Noodle Soup", price: "$8.99", description: "Homemade chicken noodle soup" },
        { name: "Tuesday - Tomato Basil Soup", price: "$7.99", description: "Creamy tomato basil soup" },
        { name: "Wednesday - Beef Vegetable Soup", price: "$8.99", description: "Hearty beef vegetable soup" },
        { name: "Thursday - Broccoli Cheddar Soup", price: "$7.99", description: "Rich broccoli cheddar soup" },
        { name: "Friday - Clam Chowder", price: "$9.99", description: "Creamy New England clam chowder" },
        { name: "Sandwich of the Day", price: "$9.99", description: "Fresh deli sandwich with chips" },
      ]
    },
    {
      title: "Saturday Breakfast Special",
      items: [
        { name: "Blueberry French Toast", price: "$11.99", description: "Thick-cut French toast with fresh blueberries" },
        { name: "Bacon & Eggs", price: "$10.99", description: "Farm fresh eggs with crispy bacon" },
        { name: "Pancakes", price: "$9.99", description: "Fluffy pancakes with maple syrup" },
        { name: "Breakfast Sandwich", price: "$8.99", description: "Egg, cheese, and bacon on fresh bun" },
      ]
    }
  ];

  return (
    <section id="menu" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Discover our delicious homemade meals and fresh bakery goods, each prepared with love and the finest ingredients
          </p>
        </div>

        {/* Menu Categories */}
        <div className="space-y-12 sm:space-y-16">
          {menuCategories.map((category) => (
            <div key={category.title} className="animate-fade-in-up">
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 mb-6 sm:mb-8 text-center">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {category.items.map((item) => (
                  <div 
                    key={item.name} 
                    className="bg-gray-50 rounded-lg p-4 sm:p-6 hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105 border border-gray-200"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg sm:text-xl font-playfair font-semibold text-gray-900 flex-1">
                        {item.name}
                      </h4>
                      <span className="font-bold text-amber-600 text-lg sm:text-xl ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className="mt-12 sm:mt-16 bg-amber-50 border-l-4 border-amber-600 p-4 sm:p-6 rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="text-base sm:text-lg font-playfair font-semibold text-gray-900 mb-2">
                🍽️ All Meals Include
              </h4>
              <p className="text-sm sm:text-base text-gray-700">
                All main dishes come with your choice of sides. Premium sides available for extra charge.
              </p>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-playfair font-semibold text-gray-900 mb-2">
                💳 Payment Options
              </h4>
              <p className="text-sm sm:text-base text-gray-700">
                Cash and cards accepted. We also accept local checks.
              </p>
            </div>
          </div>
        </div>

        {/* Popular Sides */}
        <div className="mt-8 sm:mt-12">
          <h3 className="text-xl sm:text-2xl font-playfair font-bold text-gray-900 mb-4 sm:mb-6 text-center">
            Popular Sides
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {[
              "French Fries", "Coleslaw", "Mashed Potatoes", "Gravy",
              "Baked Beans", "Mac & Cheese", "Green Beans", "Onion Rings"
            ].map((side) => (
              <div key={side} className="text-center p-2 sm:p-3 bg-gray-100 rounded-lg">
                <span className="text-xs sm:text-sm text-gray-700 font-medium">{side}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 