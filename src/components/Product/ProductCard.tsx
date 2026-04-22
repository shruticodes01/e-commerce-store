import { Heart } from "lucide-react";
import { useCart } from "../../context/Cart/useCart";
import { useUserProgress } from "../../context/UserProgress/useUserProgress";
import { card } from "../../styles/global";
import type { ProductDataObj } from "../../types/types";
import { currencyFormatter } from "../../utils/formatting";
import Rating from "../Rating";
import Button from "../UI/Button";
//import ProductDetails from "./ProductDetails";
// import ProductDetails from "./ProductDetails";

export default function ProductCard({
  product,
  onShowDetails,
  favorites,
  onAddToFav,
}: {
  product: ProductDataObj;
  onShowDetails: (product: ProductDataObj) => void;
  favorites: ProductDataObj[];
  onAddToFav: (product: ProductDataObj) => void;
}) {
  const { addToCart } = useCart();
  const { showProductDetails } = useUserProgress();

  const handleAddToCart = () => {
    addToCart(product);
  };

  const viewProductDetails = (product: ProductDataObj) => {
    showProductDetails();
    console.log(product);
    onShowDetails(product);
    console.log(onShowDetails(product));
  };

  const isFavorite = favorites.some((item) => item.id === product.id);

  return (
    <article className={``}>
      <div className={`${card.imageWrapper} relative`}>
        <img
          className={`${card.image}`}
          src={product.images.at(0)}
          alt={product.title}
        />
        <div className="w-10 h-10 flex justify-center items-center bg-light-coral absolute top-2 right-0">
          <Button
            className=""
            variant="icon"
            onClick={() => onAddToFav(product)}
          >
            <Heart className={isFavorite ? "fill-red-500" : "fill-white"} />
          </Button>
        </div>
      </div>
      <div className={card.content}>
        <h3 className={`${card.title}`}>{product.title}</h3>
        <p className={`${card.description}`}>{product.description}</p>
        <div className={card.priceRatingContainer}>
          <p className={`${card.price}`}>
            {currencyFormatter.format(product.price)}
          </p>
          <Rating rating={product.rating} showLabel={true} />
        </div>
        <p className={`${card.stockCategoryContainer}`}>
          <span
            className={`${product.availabilityStatus === "In Stock" ? card.stock.inStock : card.stock.outOfStock}`}
          >
            {product.availabilityStatus}
          </span>
          <span className={`${card.category}`}>{product.category}</span>
        </p>
        <div className={`flex justify-between items-center`}>
          <Button
            className={``}
            variant="addItem"
            label="Add To Cart"
            onClick={handleAddToCart}
          />

          {/* <Button variant="removeItem" /> */}
          <Button
            className={``}
            variant="viewDetails"
            label="View Details"
            onClick={() => viewProductDetails(product)}
          />
        </div>
      </div>
    </article>
  );
}
