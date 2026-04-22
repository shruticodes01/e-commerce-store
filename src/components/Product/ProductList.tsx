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
