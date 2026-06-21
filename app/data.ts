export const BANNER_IMAGES = [
  "/images/banners/Hero banner.png"
];

export const MENU_CATEGORIES = [
  { id: "starters", title: "Starters", banner: "/images/banners/Starters.png" },
  { id: "main-course", title: "Main Course", banner: "/images/banners/Main Course.png" },
  { id: "burgers-sandwiches", title: "Burgers & Sandwiches", banner: "/images/banners/Sandwhich and Burgers.png" },
  { id: "pizza", title: "Pizza", banner: "/images/banners/Pizza.png" },
  { id: "pasta", title: "Pasta", banner: "/images/banners/Pasta.png" },
  { id: "beverages", title: "Beverages", banner: "/images/banners/Beverages.png" },
  { id: "dessert", title: "Dessert", banner: "/images/banners/Dessert.png" }
];

export const MENU_ITEMS = [
  // Starters
  { categoryId: "starters", id: "chicken-cheese-strip", name: "Chicken Cheese Strip", description: "Delicious starter", price: 1395, image: "/images/products/Chicken Cheese Strips.jpg" },
  { categoryId: "starters", id: "loaded-fries", name: "Loaded Fries", description: "Delicious starter", price: 1095, image: "/images/products/Loaded Fires.jpeg" },
  { categoryId: "starters", id: "spicy-honey-wings", name: "Spicy Honey Wings", description: "Delicious starter", price: 1295, image: "/images/products/Spicy Honey wings.jpg" },
  { categoryId: "starters", id: "special-salad", name: "Special Salad", description: "Delicious starter", price: 895, image: "/images/products/Special Salad.jpeg" },
  
  // Main Course
  { categoryId: "main-course", id: "cordon-blue-chicken", name: "Cordon Blue Chicken", description: "Flavorful main course", price: 1995, image: "/images/products/Cordon Bleu Chicken.jpg" },
  { categoryId: "main-course", id: "dragon-walnut-chicken", name: "Dragon Walnut Chicken with Egg Fried Rice", description: "Flavorful main course", price: 1895, image: "/images/products/Dragon Walnut Chicken with Egg Fried Rice.jpg" },
  { categoryId: "main-course", id: "parmesan-chicken", name: "Parmesan Chicken", description: "Flavorful main course", price: 1895, image: "/images/products/Parmesan Chicken.jpeg" },
  { categoryId: "main-course", id: "moroccan-chicken", name: "Moroccan Chicken", description: "Flavorful main course", price: 1695, image: "/images/products/Morrocon Chicekn steak.jpeg" },
  { categoryId: "main-course", id: "wild-mushroom-steak", name: "Wild Mushroom Steak", description: "Flavorful main course", price: 1695, image: "/images/products/wild mushroom steak.jpeg" },
  { categoryId: "main-course", id: "beef-steak", name: "Beef Steak", description: "Flavorful main course", price: 4495, image: "/images/products/beef stake.jpg" },
  { categoryId: "main-course", id: "ribeye", name: "Ribeye", description: "Flavorful main course", price: 4495, image: "/images/products/rib eye steak.jpeg" },
  { categoryId: "main-course", id: "sirloin", name: "Sirloin", description: "Flavorful main course", price: 4795, image: "/images/products/Sirloin Steak.jpeg" },

  // Burgers & Sandwiches
  { categoryId: "burgers-sandwiches", id: "grilled-sandwich", name: "Grilled Sandwich", description: "Tasty burger & sandwich", price: 1295, image: "/images/products/Grilled Sandwich.jpeg" },
  { categoryId: "burgers-sandwiches", id: "club-sandwich", name: "Club Sandwich", description: "Tasty burger & sandwich", price: 1495, image: "/images/products/club sandwich.jpeg" },
  { categoryId: "burgers-sandwiches", id: "special-panini", name: "Special Panini", description: "Tasty burger & sandwich", price: 1595, image: "/images/products/Special Panini.jpg" },
  { categoryId: "burgers-sandwiches", id: "korean-burger", name: "Korean Burger", description: "Tasty burger & sandwich", price: 1095, image: "/images/products/korean burger.jpeg" },
  { categoryId: "burgers-sandwiches", id: "shanshed-burger", name: "Shanshed Burger", description: "Tasty burger & sandwich", price: 1395, image: "/images/products/Shamased Burger.jpg" },
  { categoryId: "burgers-sandwiches", id: "zinger-burger", name: "Zinger Burger", description: "Tasty burger & sandwich", price: 495, image: "/images/products/zinger burger.jpeg" },

  // Pizza
  { categoryId: "pizza", id: "special-pizza", name: "Special Pizza", description: "Freshly baked pizza", price: 2295, image: "/images/products/special pizza.jpeg" },
  { categoryId: "pizza", id: "grill-chicken-pizza", name: "Grill Chicken Pizza", description: "Freshly baked pizza", price: 1795, image: "/images/products/grill chicken pizza.jpeg" },

  // Pasta
  { categoryId: "pasta", id: "linguini-pasta", name: "Linguini Pasta", description: "Delicious pasta", price: 1495, image: "/images/products/linguine pasta.jpeg" },

  // Beverages
  { categoryId: "beverages", id: "espresso-single-shot", name: "Espresso (Single Shot)", description: "Refreshing beverage", price: 295, image: "/images/products/espresso single shot.jpeg" },
  { categoryId: "beverages", id: "espresso-double-shot", name: "Espresso (Double Shot)", description: "Refreshing beverage", price: 395, image: "/images/products/esspresso double shot.jpeg" },
  { categoryId: "beverages", id: "cappuccino", name: "Cappuccino", description: "Refreshing beverage", price: 495, image: "/images/products/cappuccino.jpeg" },
  { categoryId: "beverages", id: "flavored-coffee", name: "Flavored Coffee", description: "Refreshing beverage", price: 695, image: "/images/products/flavoured coffee.jpeg" },
  { categoryId: "beverages", id: "frappe-all", name: "Frappe (All)", description: "Refreshing beverage", price: 795, image: "/images/products/frappe.jpeg" },
  { categoryId: "beverages", id: "shakes-all", name: "Shakes (All)", description: "Refreshing beverage", price: 595, image: "/images/products/Shakes.jpeg" },
  { categoryId: "beverages", id: "seasonal-juices", name: "Seasonal Juices (All)", description: "Refreshing beverage", price: 495, image: "/images/products/seasonal juices.jpg" },
  { categoryId: "beverages", id: "fresh-lime", name: "Fresh Lime", description: "Refreshing beverage", price: 295, image: "/images/products/lime.jpeg" },
  { categoryId: "beverages", id: "mint-soda-margarita", name: "Mint Soda Margarita", description: "Refreshing beverage", price: 295, image: "/images/products/homemade mint margarita.jpg" },
  
  // Dessert
  { categoryId: "dessert", id: "nutella-crepe", name: "Nutella Crepe", description: "Sweet dessert", price: 995, image: "/images/products/Nutelle Crepes.jpg" },
  { categoryId: "dessert", id: "lotus-bomb", name: "Lotus Bomb", description: "Sweet dessert", price: 1195, image: "/images/products/ice cream.jpeg" },
];
