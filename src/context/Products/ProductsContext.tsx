import { createContext, useState, useEffect } from "react";
import type { ProductContextType, ProductDataObj } from "../../types/types";

const ProductsContext = createContext<ProductContextType>({
  products: [],
  loading: true,
  error: "",
  searchTerm: "",
  setSearchTerm: (_value: string) => {},
  sortBy: "default",
  setSortBy: (_value: string) => {},
  favorites: [],
  addToFavorite: (_product: ProductDataObj) => {},
});

export default ProductsContext;

export function ProductContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [products, setProducts] = useState<ProductDataObj[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState<string>("");

  const [sortBy, setSortBy] = useState("default");

  const [favorites, setFavorites] = useState<ProductDataObj[]>(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) {
      return JSON.parse(saved);
    }
    return [];
  });

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) throw new Error("Failed to fetch data!");

        const data = await response.json();
        console.log(data.products);

        setProducts(data.products);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("Something went wrong");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addToFavorite = (product: ProductDataObj) => {
    setFavorites((prev) => {
      return prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product];
    });
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify([...favorites]));
  }, [favorites]);
  const productCtx = {
    products,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    sortBy,
    setSortBy,
    favorites,
    addToFavorite,
  };
  return (
    <ProductsContext.Provider value={productCtx}>
      {children}
    </ProductsContext.Provider>
  );
}
