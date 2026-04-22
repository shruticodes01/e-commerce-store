import { ArrowLeft, User } from "lucide-react";
import { useCart } from "../../context/Cart/useCart.ts";
import { useUserProgress } from "../../context/UserProgress/useUserProgress.ts";
import { card } from "../../styles/global.ts";
import type { ProductDataObj, ReviewsObj } from "../../types/types.ts";
import { originalPrice } from "../../utils/calcOriginalPrice.ts";
import { currencyFormatter } from "../../utils/formatting.ts";
import Button from "../UI/Button.tsx";
// import type { ProductDataObj } from "../../types/types.ts";
import Modal from "../UI/Modal";
import Rating from "../Rating.tsx";

export default function ProductDetails({
  selectedProduct,
}: {
  selectedProduct: ProductDataObj | null;
}) {
  const { addToCart } = useCart();
  const { progress, hideProductDetails } = useUserProgress();

  const handleClose = () => {
    hideProductDetails();
  };

  if (!selectedProduct) {
    return null;
  }
  const oldPrice = originalPrice(
    selectedProduct.discountPercentage,
    selectedProduct.price,
  );

  const handleAddToCart = () => {
    addToCart(selectedProduct);
  };

  return (
    <Modal
      className="max-md:max-w-[90%] md:max-w-[80%] py-6 px-8 mx-auto my-auto animate-slide-in-from-right"
      open={progress === "product-details"}
      onClose={handleClose}
    >
      <>
        <div
          className="flex flex-col gap-2 overflow-y-scroll"
          key={selectedProduct.id}
        >
          <div className="flex items-center max-md:gap-4 md:gap-8">
            <Button
              className="shrink-0 self-baseline-last"
              variant="icon"
              onClick={handleClose}
            >
              <ArrowLeft className="max-md:w-6 max-md:h-6 md:w-8 md:h-8 " />
            </Button>
            <h2 className="text-2xl font-semibold">{selectedProduct.title}</h2>
          </div>
          <div className="flex h-100 items-center justify-center">
            <img
              className="h-full aspect-auto object-cover"
              src={selectedProduct.images.at(0)}
            />
          </div>

          <div>
            <p>{selectedProduct.description}</p>
          </div>

          <div className="flex justify-between">
            <p>{selectedProduct.brand}</p>
            <div className="justify-self-end self-end">
              <Rating rating={selectedProduct.rating} showLabel={true} />
            </div>
          </div>

          <div className="">
            <div className="flex items-center gap-4">
              <span className="text-red-500">
                - {selectedProduct.discountPercentage} %
              </span>
              <p className="text-xl font-bold">
                <strong>
                  {currencyFormatter.format(selectedProduct.price)}
                </strong>
              </p>
            </div>
            <p className="">
              Before discount:{" "}
              <span className="line-through">
                {currencyFormatter.format(parseFloat(oldPrice))}
              </span>
            </p>
          </div>

          <div className="flex justify-between items-center">
            <p
              className={
                selectedProduct.availabilityStatus === "In Stock"
                  ? card.stock.inStock
                  : card.stock.outOfStock
              }
            >
              {selectedProduct.availabilityStatus}
            </p>
            <p className="text-gray-600">
              Minimum order quantity:{" "}
              <strong className="text-black">
                {selectedProduct.minimumOrderQuantity}
              </strong>
            </p>
          </div>

          <div className="w-full flex justify-center py-2">
            <Button
              className={`w-full max-w-[40%] px-4 py-2 md:px-6 md:py-3 text-nowrap`}
              variant="addItem"
              label="Add To Cart"
              onClick={handleAddToCart}
            />
          </div>

          <div className="mb-2">
            <p className="text-gray-600">
              Returns:{" "}
              <span className="text-powderedBlue">
                {selectedProduct.returnPolicy}
              </span>
            </p>
            <p className="text-gray-600">
              Shipping information:{" "}
              <span className="text-powderedBlue">
                {selectedProduct.shippingInformation}
              </span>
            </p>
            <p className="text-gray-600">
              Warranty:{" "}
              <span className="text-powderedBlue">
                {selectedProduct.warrantyInformation}
              </span>
            </p>
          </div>

          <div className="p-4 bg-light-gray rounded-md">
            <h3 className="text-xl font-semibold">Product Details</h3>
            <ul className="py-4">
              <li>
                <p className="font-semibold">
                  Product Category:{" "}
                  <span className="font-normal">
                    {selectedProduct.category}
                  </span>
                </p>
              </li>
              {selectedProduct.brand && (
                <li>
                  <p className="font-semibold">
                    Brand:{" "}
                    <span className="font-normal">{selectedProduct.brand}</span>
                  </p>
                </li>
              )}
              <li>
                <p className="font-semibold">
                  Product Dimensions:{" "}
                  <span className="font-normal">{`${selectedProduct.dimensions.width}W`}</span>{" "}
                  x{" "}
                  <span className="font-normal">{`${selectedProduct.dimensions.height}H`}</span>{" "}
                  x{" "}
                  <span className="font-normal">{`${selectedProduct.dimensions.depth}D`}</span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Product Weight:{" "}
                  <span className="font-normal">{selectedProduct.weight}</span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  SKU:{" "}
                  <span className="font-normal">{selectedProduct.sku}</span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Created At:{" "}
                  <span className="font-normal">
                    {selectedProduct.meta.createdAt}
                  </span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Updated At:{" "}
                  <span className="font-normal">
                    {selectedProduct.meta.updatedAt}
                  </span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  Barcode:{" "}
                  <span className="font-normal">
                    {selectedProduct.meta.barcode}
                  </span>
                </p>
              </li>
              <li>
                <p className="font-semibold">
                  QR code: <img src={selectedProduct.meta.qrCode} />
                </p>
              </li>
            </ul>
          </div>
          <div className="py-2">
            <h3 className="text-xl font-semibold">Customer Reviews</h3>
            <ul className="flex flex-col gap-4 py-4">
              {selectedProduct.reviews.map(
                (review: ReviewsObj, index: number) => {
                  return (
                    <li key={index}>
                      <div className="flex items-center gap-1">
                        <User />{" "}
                        <p className="font-bold">{review.reviewerName}</p>
                      </div>
                      <p className="text-gray-600 text-sm">
                        {`Product: ${selectedProduct.title} reviewed on ${review.date}`}
                      </p>

                      <Rating rating={review.rating} showLabel={false} />

                      <p>{review.comment}</p>
                    </li>
                  );
                },
              )}
            </ul>
          </div>
        </div>
      </>
    </Modal>
  );
}
