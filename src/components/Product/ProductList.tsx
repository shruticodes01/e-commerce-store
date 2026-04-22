import { useState } from "react";
import { card } from "../../styles/global.ts";
import ProductCard from "./ProductCard.tsx";
import type { ProductDataObj } from "../../types/types.ts";
import ProductDetails from "./ProductDetails.tsx";
import { useUserProgress } from "../../context/UserProgress/useUserProgress.ts";

export default function ProductList({
  products,
  favorites,
  addToFavorite,
}: {
  products: ProductDataObj[];
  favorites: ProductDataObj[];
  addToFavorite: (product: ProductDataObj) => void;
}) {
  const { showProductDetails } = useUserProgress();
  const [selectedProduct, setSelectedProduct] = useState<ProductDataObj | null>(
    null,
  );

  const showSelectedProductDetails = (product: ProductDataObj) => {
    setSelectedProduct(product);
    showProductDetails();
  };

  return (
    <>
      <p className="px-1">
        Showing <strong>{products.length}</strong> products
      </p>
      <ul className={`${card.cardsWrapper}`}>
        {products.map((product) => {
          return (
            <li className={`${card.cardWrapper}`} key={product.id}>
              <ProductCard
                product={product}
                onShowDetails={showSelectedProductDetails}
                favorites={favorites}
                onAddToFav={addToFavorite}
              />
            </li>
          );
        })}
      </ul>
      <ProductDetails selectedProduct={selectedProduct} />
    </>
  );
}

// export default function ProductList({
//   products,
//   category,
//   // searchTerm,
// }: {
//   products: ProductDataObj[];
//   category: string;
//   // searchTerm: string;
// }) {
//   // const [products, setProducts] = useState<ProductDataObj[]>([]);
//   // const [loading, setLoading] = useState<boolean>(true);
//   // const [error, setError] = useState<string | null>(null);
//   const [selectedProduct, setSelectedProduct] = useState<ProductDataObj | null>(
//     null,
//   );

//   // useEffect(() => {
//   //   const fetchProducts = async () => {
//   //     try {
//   //       const response = await fetch("https://dummyjson.com/products");
//   //       if (!response.ok) throw new Error("Failed to fetch data!");

//   //       const data = await response.json();
//   //       console.log(data.products);

//   //       setProducts(data.products);
//   //     } catch (err) {
//   //       if (err instanceof Error) {
//   //         setError(err.message);
//   //       } else {
//   //         setError("Something went wrong");
//   //       }
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };

//   //   fetchProducts();
//   // }, []);

//   const showSelectedProductDetails = (product: ProductDataObj) => {
//     setSelectedProduct(product);
//     console.log(selectedProduct);

//     return selectedProduct;
//   };

//   // if (loading) {
//   //   return (
//   //     <p className="text-black text-center text-bold">Loading products...</p>
//   //   );
//   // }

//   // if (error) return <p className="text-red-500">Error: {error}</p>;

//   // const filteredProducts = products.filter((item) => {
//   //   const matchesSearch = searchTerm
//   //     ? // if there is a search, and title of the product contains the search term show product
//   //       item.title.toLowerCase().includes(searchTerm)
//   //     : // if there is no search, show all products of the selected category.
//   //       true;

//   //   //if a specific category is selected it shows that category, else if category ="", it shows all categories-- all products
//   //   const matchesCategory = category ? item.category === category : true;

//   //   return matchesSearch && matchesCategory;
//   // });

//   return (
//     <>
//       {/* <p className="px-1">
//         Showing <strong>{filteredProducts.length}</strong> products
//       </p>
//       <ul className={`${card.cardsWrapper}`} id={`${category}-products`}>
//         {filteredProducts.map((product) => {
//           return (
//             <li className={`${card.cardWrapper}`} key={product.id}>
//               <ProductCard
//                 product={product}
//                 onShowDetails={showSelectedProductDetails}
//               />
//             </li>
//           );
//         })}
//       </ul>
//       <ProductDetails selectedProduct={selectedProduct} /> */}

//       <p className="px-1">
//         Showing <strong>{products.length}</strong> products
//       </p>
//       <ul className={`${card.cardsWrapper}`} id={`${category}-products`}>
//         {products.map((product) => {
//           return (
//             <li className={`${card.cardWrapper}`} key={product.id}>
//               <ProductCard
//                 product={product}
//                 onShowDetails={showSelectedProductDetails}
//               />
//             </li>
//           );
//         })}
//       </ul>
//       <ProductDetails selectedProduct={selectedProduct} />
//     </>
//   );
// }
