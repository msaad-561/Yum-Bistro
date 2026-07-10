export const BANNER_IMAGES = [
  "/images/banners/Hero banner.png"
];

export const MENU_CATEGORIES = [
  { id: "starters", title: "Starters", banner: "/images/banners/Starters.png" },
  { id: "healthy-bowls", title: "Healthy Bowls", banner: "" },
  { id: "soups", title: "Soups Selection", banner: "" },
  { id: "main-course", title: "Main Course", banner: "/images/banners/Main Course.png" },
  { id: "prime-cuts", title: "Prime Cuts", banner: "" },
  { id: "bread-buns", title: "Bread & Buns", banner: "/images/banners/Sandwhich and Burgers.png" },
  { id: "pasta", title: "Pastas", banner: "/images/banners/Pasta.png" },
  { id: "dessert", title: "Desserts", banner: "/images/banners/Dessert.png" },
  { id: "hot-coffee", title: "Hot Coffee", banner: "/images/banners/Beverages.png" },
  { id: "flavoured-coffee", title: "Flavoured Hot & Iced Coffee", banner: "" },
  { id: "frappes", title: "Frappes", banner: "" },
  { id: "chillers", title: "Chillers", banner: "" },
  { id: "sodas", title: "Sodas", banner: "" },
  { id: "shakes", title: "Shakes", banner: "" },
  { id: "traditional", title: "Traditional", banner: "" },
  { id: "deals", title: "Deals", banner: "" },
];

export const MENU_ITEMS = [
  // ── Starters ──
  { categoryId: "starters", id: "chicken-cheese-strips", name: "Chicken Cheese Strips", description: "Crispy chicken strips loaded with melted cheese", price: 1395, image: "/images/products/Chicken Cheese Strips.jpg" },
  { categoryId: "starters", id: "spicy-honey-wings", name: "Spicy Honey Wings", description: "Crispy wings tossed in a sweet & spicy honey glaze", price: 1295, image: "/images/products/Spicy Honey wings.jpg" },
  { categoryId: "starters", id: "dynamite-chicken", name: "Dynamite Chicken", description: "Crispy chicken bites in a fiery dynamite sauce", price: 1195, image: "" },
  { categoryId: "starters", id: "honey-prawns", name: "Honey Prawns", description: "Succulent prawns drizzled with golden honey glaze", price: 2995, image: "" },
  { categoryId: "starters", id: "dynamite-prawns", name: "Dynamite Prawns", description: "Crispy prawns tossed in creamy dynamite sauce", price: 2095, image: "" },
  { categoryId: "starters", id: "fish-and-chips", name: "Fish & Chips", description: "Golden battered fish with crispy seasoned fries", price: 2095, image: "" },
  { categoryId: "starters", id: "loaded-fries", name: "Loaded Fries", description: "Crispy fries topped with cheese, sauces & toppings", price: 1095, image: "/images/products/Loaded Fires.jpeg" },
  { categoryId: "starters", id: "plain-fries", name: "Plain Fries", description: "Classic golden crispy fries", price: 495, image: "" },

  // ── Healthy Bowls ──
  { categoryId: "healthy-bowls", id: "yum-bistro-special-salad", name: "Yum Bistro Special Salad", description: "Our signature salad with fresh seasonal greens", price: 995, image: "/images/products/Special Salad.jpeg" },
  { categoryId: "healthy-bowls", id: "greek-salad", name: "Greek Salad", description: "Classic Mediterranean salad with feta & olives", price: 795, image: "" },

  // ── Soups Selection ──
  { categoryId: "soups", id: "yum-bistro-special-soup", name: "Yum Bistro Special Soup", description: "Chef's signature special soup of the day", price: 695, image: "" },
  { categoryId: "soups", id: "hot-and-sour-soup", name: "Hot & Sour Soup", description: "A tangy and spicy classic soup", price: 595, image: "" },
  { categoryId: "soups", id: "corn-chicken-soup", name: "Corn Chicken Soup", description: "Creamy corn soup with tender chicken shreds", price: 595, image: "" },
  { categoryId: "soups", id: "cream-of-mushroom-soup", name: "Cream of Mushroom Soup", description: "Rich and velvety mushroom cream soup", price: 595, image: "" },

  // ── Main Course ──
  { categoryId: "main-course", id: "cordon-bleu-chicken", name: "Cordon Bleu Chicken", description: "Classic chicken stuffed with ham & cheese", price: 2095, image: "/images/products/Cordon Bleu Chicken.jpg" },
  { categoryId: "main-course", id: "parmesan-chicken", name: "Parmesan Chicken", description: "Golden chicken topped with parmesan crust", price: 2095, image: "/images/products/Parmesan Chicken.jpeg" },
  { categoryId: "main-course", id: "moroccan-chicken", name: "Moroccan Chicken", description: "Aromatic spiced chicken with Moroccan flavors", price: 1795, image: "/images/products/Morrocon Chicekn steak.jpeg" },
  { categoryId: "main-course", id: "wild-mushroom-chicken", name: "Wild Mushroom Chicken", description: "Tender chicken in rich wild mushroom sauce", price: 1795, image: "/images/products/wild mushroom steak.jpeg" },
  { categoryId: "main-course", id: "tarragon-chicken", name: "Tarragon Chicken", description: "Herb-infused chicken with creamy tarragon sauce", price: 1795, image: "" },
  { categoryId: "main-course", id: "mexican-chicken", name: "Mexican Chicken", description: "Spicy Mexican-style chicken with bold flavors", price: 1795, image: "" },
  { categoryId: "main-course", id: "cashew-nut-chicken", name: "Cashew Nut Chicken", description: "Stir-fried chicken with roasted cashew nuts", price: 1895, image: "" },
  { categoryId: "main-course", id: "dragon-walnut-chicken", name: "Dragon Walnut Chicken", description: "Crispy chicken with caramelized walnuts", price: 1895, image: "/images/products/Dragon Walnut Chicken with Egg Fried Rice.jpg" },
  { categoryId: "main-course", id: "chicken-hot-garlic-sauce", name: "Chicken with Hot Garlic Sauce", description: "Tender chicken in a bold hot garlic sauce", price: 1695, image: "" },
  { categoryId: "main-course", id: "barbecue-chicken", name: "Barbecue Chicken", description: "Smoky BBQ glazed chicken", price: 1695, image: "" },
  { categoryId: "main-course", id: "chicken-chilli-dry", name: "Chicken Chilli Dry", description: "Wok-tossed chicken with green chillies & peppers", price: 1695, image: "" },
  { categoryId: "main-course", id: "oyster-chicken", name: "Oyster Chicken", description: "Succulent chicken in rich oyster sauce", price: 1695, image: "" },

  // ── Prime Cuts ──
  { categoryId: "prime-cuts", id: "premium-sirloin-steak", name: "Premium Sirloin Steak", description: "Premium cut sirloin, grilled to perfection", price: 4795, image: "/images/products/Sirloin Steak.jpeg" },
  { categoryId: "prime-cuts", id: "ribeye-steak", name: "Ribeye Steak", description: "Juicy, marbled ribeye steak", price: 4495, image: "/images/products/rib eye steak.jpeg" },
  { categoryId: "prime-cuts", id: "tenderloin-steak", name: "Tenderloin Steak", description: "Tender and buttery tenderloin cut", price: 2995, image: "/images/products/beef stake.jpg" },

  // ── Bread & Buns ──
  { categoryId: "bread-buns", id: "classic-club-sandwich", name: "Classic Club Sandwich", description: "Triple-layered club sandwich with chicken & veggies", price: 1495, image: "/images/products/club sandwich.jpeg" },
  { categoryId: "bread-buns", id: "grilled-chicken-sandwich", name: "Grilled Chicken Sandwich", description: "Grilled chicken with fresh toppings on toasted bread", price: 1295, image: "/images/products/Grilled Sandwich.jpeg" },
  { categoryId: "bread-buns", id: "special-panini", name: "Special Panini", description: "Pressed panini with premium fillings", price: 1595, image: "/images/products/Special Panini.jpg" },
  { categoryId: "bread-buns", id: "spicy-korean-burger", name: "Spicy Korean Burger", description: "Korean-style burger with spicy gochujang sauce", price: 1095, image: "/images/products/korean burger.jpeg" },
  { categoryId: "bread-buns", id: "american-smash-beef-burger", name: "American Smash Beef Burger", description: "Juicy smashed beef patty with classic toppings", price: 1395, image: "/images/products/Shamased Burger.jpg" },

  // ── Pastas ──
  { categoryId: "pasta", id: "linguine-pasta", name: "Linguine Pasta", description: "Al dente linguine in a rich savory sauce", price: 1495, image: "/images/products/linguine pasta.jpeg" },
  { categoryId: "pasta", id: "olive-garden-pasta", name: "Olive Garden Pasta", description: "Creamy pasta with olives, herbs & garden vegetables", price: 1595, image: "" },

  // ── Desserts ──
  { categoryId: "dessert", id: "nutella-crepes", name: "Nutella Crepes", description: "Warm crepes drizzled with Nutella & toppings", price: 995, image: "/images/products/Nutelle Crepes.jpg" },
  { categoryId: "dessert", id: "lotus-bomb", name: "Lotus Bomb", description: "Indulgent Lotus Biscoff dessert bomb", price: 1195, image: "/images/products/ice cream.jpeg" },
  { categoryId: "dessert", id: "melting-brownies", name: "Melting Brownies", description: "Warm gooey chocolate brownies", price: 1095, image: "" },

  // ── Hot Coffee ──
  { categoryId: "hot-coffee", id: "espresso-single-shot", name: "Espresso (Single Shot)", description: "Rich and bold single espresso shot", price: 295, image: "/images/products/espresso single shot.jpeg" },
  { categoryId: "hot-coffee", id: "espresso-double-shot", name: "Espresso (Double Shot)", description: "Double the intensity, double the flavor", price: 395, image: "/images/products/esspresso double shot.jpeg" },
  { categoryId: "hot-coffee", id: "americano", name: "Americano", description: "Classic espresso diluted with hot water", price: 395, image: "" },
  { categoryId: "hot-coffee", id: "cafe-latte", name: "Café Latte", description: "Smooth espresso with steamed milk", price: 495, image: "" },
  { categoryId: "hot-coffee", id: "cappuccino", name: "Cappuccino", description: "Espresso topped with frothy steamed milk", price: 495, image: "/images/products/cappuccino.jpeg" },

  // ── Flavoured Hot & Iced Coffee ──
  { categoryId: "flavoured-coffee", id: "caramel-latte", name: "Caramel Latte", description: "Latte infused with rich caramel syrup", price: 695, image: "/images/products/flavoured coffee.jpeg" },
  { categoryId: "flavoured-coffee", id: "vanilla-latte", name: "Vanilla Latte", description: "Smooth latte with vanilla flavoring", price: 695, image: "" },
  { categoryId: "flavoured-coffee", id: "hazelnut-latte", name: "Hazelnut Latte", description: "Nutty hazelnut-infused latte", price: 695, image: "" },
  { categoryId: "flavoured-coffee", id: "irish-latte", name: "Irish Latte", description: "Irish cream flavored latte", price: 695, image: "" },
  { categoryId: "flavoured-coffee", id: "spanish-latte", name: "Spanish Latte", description: "Sweet condensed milk latte", price: 695, image: "" },
  { categoryId: "flavoured-coffee", id: "mochaccino-latte", name: "Mochaccino Latte", description: "Chocolate-infused espresso latte", price: 695, image: "" },

  // ── Frappes ──
  { categoryId: "frappes", id: "very-vanilla-frappe", name: "Very Vanilla Frappe", description: "Icy blended vanilla frappe", price: 795, image: "/images/products/frappe.jpeg" },
  { categoryId: "frappes", id: "mochaccino-frappe", name: "Mochaccino Frappe", description: "Blended chocolate mocha frappe", price: 795, image: "" },
  { categoryId: "frappes", id: "cookies-and-cream-frappe", name: "Cookies & Cream Frappe", description: "Creamy cookies and cream blended frappe", price: 795, image: "" },
  { categoryId: "frappes", id: "white-chocolate-caramel-frappe", name: "White Chocolate Caramel Frappe", description: "White chocolate and caramel blended delight", price: 795, image: "" },

  // ── Chillers ──
  { categoryId: "chillers", id: "wildberry-chiller", name: "Wildberry Chiller", description: "Refreshing wildberry iced drink", price: 595, image: "/images/products/seasonal juices.jpg" },
  { categoryId: "chillers", id: "strawberry-chiller", name: "Strawberry Chiller", description: "Sweet strawberry chilled drink", price: 595, image: "" },
  { categoryId: "chillers", id: "mango-passion-chiller", name: "Mango Passion Chiller", description: "Tropical mango and passionfruit chiller", price: 595, image: "" },
  { categoryId: "chillers", id: "american-passion-chiller", name: "American Passion Chiller", description: "Fruity American-style passion chiller", price: 595, image: "" },

  // ── Sodas ──
  { categoryId: "sodas", id: "apple-kiwi-soda", name: "Apple Kiwi Soda", description: "Fizzy apple and kiwi soda", price: 595, image: "" },
  { categoryId: "sodas", id: "blue-bloom", name: "Blue Bloom", description: "Vibrant blue floral soda", price: 595, image: "" },
  { categoryId: "sodas", id: "strawberry-lemonade", name: "Strawberry Lemonade", description: "Sweet strawberry lemonade with a fizz", price: 595, image: "" },
  { categoryId: "sodas", id: "moon-fizz", name: "Moon Fizz", description: "Sparkling citrus moon fizz", price: 595, image: "" },
  { categoryId: "sodas", id: "peach-soda", name: "Peach Soda", description: "Refreshing peach-flavored soda", price: 595, image: "" },
  { categoryId: "sodas", id: "black-magic-soda", name: "Black Magic Soda", description: "Dark and mysterious charcoal soda", price: 595, image: "" },

  // ── Shakes ──
  { categoryId: "shakes", id: "berry-burst", name: "Berry Burst", description: "Mixed berry milkshake", price: 595, image: "/images/products/Shakes.jpeg" },
  { categoryId: "shakes", id: "vanilla-shake", name: "Vanilla Shake", description: "Classic creamy vanilla milkshake", price: 595, image: "" },
  { categoryId: "shakes", id: "caramel-shake", name: "Caramel Shake", description: "Rich caramel milkshake", price: 595, image: "" },
  { categoryId: "shakes", id: "oreo-cream-shake", name: "Oreo Cream Shake", description: "Oreo cookie cream milkshake", price: 595, image: "" },
  { categoryId: "shakes", id: "chocolate-shake", name: "Chocolate Shake", description: "Decadent chocolate milkshake", price: 595, image: "" },

  // ── Traditional ──
  { categoryId: "traditional", id: "mint-margarita", name: "Mint Margarita", description: "Classic refreshing mint margarita", price: 295, image: "/images/products/homemade mint margarita.jpg" },
  { categoryId: "traditional", id: "fresh-lime", name: "Fresh Lime", description: "Freshly squeezed lime drink", price: 295, image: "/images/products/lime.jpeg" },
  { categoryId: "traditional", id: "mint-and-soda", name: "Mint & Soda", description: "Cool mint with sparkling soda", price: 295, image: "" },

  // ── Deals ──
  { categoryId: "deals", id: "deal-1", name: "Deal #1", description: "1 Zinger Burger, 1 Small Pizza, 1 Small Fries, 2 Regular Drinks", price: 995, image: "" },
  { categoryId: "deals", id: "deal-2", name: "Deal #2", description: "2 Zinger Burgers, 1 Regular Pizza, 1 Small Fries, 2 Regular Drinks", price: 1695, image: "" },
  { categoryId: "deals", id: "deal-3", name: "Deal #3", description: "2 Large Pizzas, 1 (1.5 L) Soft Drink", price: 2995, image: "" },
  { categoryId: "deals", id: "family-deal-1", name: "Family Deal #1", description: "2 Chicken Sandwich Bites, 4 Crispy Hot Wings, 1 Zinger Burger, 1 Malai Boti Paratha Roll, 1 Small Fries, 2 Mint Margaritas, 2 Brownie Bites, 2 Cups of Tea", price: 2195, image: "" },
  { categoryId: "deals", id: "family-deal-2", name: "Family Deal #2", description: "Dragon Chicken with Egg Fried Rice, Fettuccine Pasta, Grilled Chicken Breast with Mexican Sauce, Sautéed Vegetables, Mashed Potatoes, 2 Mint Margaritas, 2 Brownie Bites, 2 Cups of Tea", price: 2295, image: "" },
];
