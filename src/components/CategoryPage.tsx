import { useState, type ChangeEvent, useMemo } from "react";
import Container from "../layouts/Container.tsx";
import { typography } from "../styles/global";
import ProductList from "./Product/ProductList";
import homeBanner from "../assets/banner/home_banner.jpg";
import beautyBanner from "../assets/banner/makeup_banner.jpg";
import fragranceBanner from "../assets/banner/fragrance_banner.jpg";
import furnitureBanner from "../assets/banner/furniture_banner.jpg";
import groceryBanner from "../assets/banner/grocery_banner.jpg";
import SearchProducts from "./SearchProducts.tsx";
import SortProducts from "./SortProducts.tsx";
import { useProducts } from "../context/Products/useProducts.ts";

export default function CategoryPage({ categoryID }: { categoryID: string }) {
  const {
    products,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    favorites,
    addToFavorite,
  } = useProducts();

  // if on home page selectedCategory is "", else selectedCategory is equal to categoryID
  const [selectedCategory, setSelectedCategory] = useState<string>(
    categoryID === "home" ? "" : categoryID,
  );

  const filteredProducts = useMemo(() => {
    return products.filter((item) => {
      const matchesSearch = searchTerm
        ? // if there is a search, and title of the product contains the search term show product
          item.title.toLowerCase().includes(searchTerm)
        : // if there is no search, show all products of the selected category.
          true;

      //if a specific category is selected it shows that category, else if category ="", it shows all categories-- all products
      const matchesCategory = selectedCategory
        ? item.category === selectedCategory
        : true;

      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  const sortedProducts = useMemo(() => {
    return [...filteredProducts].sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "name-a-z":
          return a.title.localeCompare(b.title);
        case "name-z-a":
          return b.title.localeCompare(a.title);

        default:
          return 0;
      }
    });
  }, [filteredProducts, sortBy]);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const handleCategoryChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCategory(e.target.value);
  };

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const images = {
    home: homeBanner,
    beauty: beautyBanner,
    fragrances: fragranceBanner,
    furniture: furnitureBanner,
    groceries: groceryBanner,
  };
  const bannerImg = images[categoryID as keyof typeof images] || images.home;

  if (loading) {
    return (
      <p className="text-black text-center text-bold">Loading products...</p>
    );
  }

  if (error) return <p className="text-red-500">Error: {error}</p>;

  const isFavoritePage = categoryID === "favorites";
  const displayedProducts = isFavoritePage ? favorites : sortedProducts;

  return (
    <>
      <section className="w-full overflow-hidden" id={categoryID}>
        <div className="w-full flex relative" key={categoryID}>
          <img
            className={`max-sm:h-100 aspect-video object-cover object-center"`}
            id="banner-img"
            src={bannerImg}
            alt="toy shopping cart"
          />
          <div className="absolute inset-0 bg-black/45"></div>

          <SearchProducts
            searchTerm={searchTerm}
            selectedCategory={selectedCategory}
            onSearch={handleSearch}
            onCategoryChange={handleCategoryChange}
            showCategorySelect={categoryID === "home"}
          />
        </div>
        <div className="py-2 px-4 md:px-8 md:py-4 flex justify-end">
          <SortProducts sortBy={sortBy} onSort={handleSort} />
        </div>
      </section>
      <Container className="pt-10 md:pt-20 pb-4">
        <section>
          <h2 className={`${typography.heading}`}>
            {selectedCategory
              ? selectedCategory.toUpperCase()
              : categoryID === "home"
                ? "All Products"
                : categoryID.toUpperCase()}
          </h2>

          <div className="max-md:py-10 md:py-20">
            <ProductList
              products={displayedProducts}
              favorites={favorites}
              addToFavorite={addToFavorite}
            />
          </div>
        </section>
      </Container>{" "}
    </>
  );
}
