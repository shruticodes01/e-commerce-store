// Typography tokens (for headings, subheadings, body, paragraph, etc.)
export const typography = {
  heading:
    "font-bold text-black text-center mb-4 text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight",
  subheading:
    "font-semibold text-gray-700 text-xl sm:text-xl md:text-2xl leading-snug",
  body: "text-gray-600 text-base sm:text-base md:text-lg leading-relaxed",
  paragraph:
    "text-gray-600 text-base py-4 sm:text-base md:text-lg leading-relaxed",
  caption: "text-gray-500 text-sm sm:text-sm md:text-base leading-snug",
  small: "text-gray-500 text-xs sm:text-sm md:text-sm leading-snug",
};

// Card styles (for product cards, user profiles, content previews, etc.)
export const card = {
  cardsWrapper:
    "grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 py-4",

  cardWrapper:
    "group rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg",

  imageWrapper:
    "flex h-56 items-center justify-center rounded-t-xl bg-gray-50 p-4",

  image:
    "max-h-full aspect-auto object-contain transition-transform duration-300 group-hover:scale-105",

  content: "p-5 space-y-3",

  title: "text-lg font-semibold text-gray-900",

  description: "text-sm text-gray-600 line-clamp-3",

  priceRatingContainer: "flex items-center justify-between pt-2",

  price: "text-xl font-bold text-gray-900",

  rating: "text-sm text-yellow-500",

  stockCategoryContainer: "flex items-center justify-between text-sm py-2 ",

  stock: {
    inStock: "font-medium text-green-600",
    outOfStock: "font-medium text-red-500",
  },

  category: "rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700",
};

/* Styles for buttons */
export const buttonVariants = {
  primary: "",
  outline: "",
  text: "",
  icon: "",
  addItem:
    "bg-powderedBlue text-light-gray text-sm sm:text-base hover:bg-mint-blue/60 hover:text-black focus-visible:ring-pink rounded-lg transition-colors duration-200 ease-in-out shadow-md cursor-pointer",
  removeItem: "",
  viewDetails:
    "bg-white text-black border-transparent hover:rounded-lg hover:outline-2 hover:outline-powderedBlue px-2 py-1 sm:px-2 sm:py-1 text-sm sm:text-base transition-colors duration-200 ease-in-out cursor-pointer",
};

/* Styles based on button sizes */

// // Sizes usable across components (buttons, inputs, badges, etc.)
// export const sizes = {
//   xs: "px-2 py-1 text-xs sm:px-2 sm:py-1.5 md:px-2 md:py-2",
//   sm: "px-2 py-1 text-sm sm:px-2 sm:py-1.5 md:px-2 md:py-2",
//   md: "px-2 py-1 text-base sm:px-2 sm:py-2.5 md:px-2 md:py-3",
//   lg: "px-2 py-1 text-lg sm:px-2 sm:py-3 md:px-2 md:py-3.5",
//   xl: "px-3 py-2 text-xl sm:px-3 sm:py-4 md:px-3 md:py-4.5",
//   "2xl": "px-3 py-4 text-2xl sm:px-3 sm:py-5 md:px-3 md:py-6",
// };

// styles for alerts
export const alerts = {};
