'use client';

export default function Menu() {
  const menuCategories = [
    {
      title: "Frozen Savouries",
      items: [
        { name: "Samoosas (Beef/Chicken/Cheese)", price: "R60/dozen", description: "Crispy pastry filled with your choice of beef, chicken, or cheese." },
        { name: "Mini Pies", price: "R70/dozen", description: "Flaky pastry pies with savoury fillings, perfect for any occasion." },
        { name: "Spring Rolls", price: "R55/dozen", description: "Golden fried spring rolls with a delicious veggie filling." },
      ]
    },
    {
      title: "Ready-to-Eat Snacks",
      items: [
        { name: "Chicken Strips", price: "R35/portion", description: "Tender chicken strips, lightly spiced and fried to perfection." },
        { name: "Cheese Puffs", price: "R30/dozen", description: "Light, airy puffs with a cheesy center." },
        { name: "Mini Pizza", price: "R20 each", description: "Handmade mini pizzas with assorted toppings." },
      ]
    },
    {
      title: "Sweet Treats",
      items: [
        { name: "Milk Tart", price: "R80 each", description: "Classic South African milk tart with a creamy filling and cinnamon topping." },
        { name: "Koeksisters", price: "R50/dozen", description: "Traditional syrup-soaked twisted doughnuts." },
        { name: "Chocolate Brownies", price: "R60/dozen", description: "Rich, fudgy brownies made with real chocolate." },
      ]
    },
    {
      title: "Special Orders for Ramadan/Eid/Parties",
      items: [
        { name: "Party Platter (Large)", price: "R350", description: "A selection of our best savouries and treats, perfect for gatherings." },
        { name: "Custom Orders", price: "Varies", description: "Contact us for custom platters or special requests for your event." },
      ]
    }
  ];

  return (
    <section id="menu" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-burgundy mb-4">
            Our Menu
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-amber-800 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-2xl mx-auto px-4">
            Explore our range of handmade savouries, snacks, and sweet treats. All items are halal and made with love in Cape Town.
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
                    className="bg-amber-50 rounded-lg p-4 sm:p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-amber-100 hover:border-burgundy"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h4 className="text-lg sm:text-xl font-playfair font-semibold text-burgundy flex-1">
                        {item.name}
                      </h4>
                      <span className="font-bold text-amber-800 text-lg sm:text-xl ml-4">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 