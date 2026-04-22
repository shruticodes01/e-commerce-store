import { useCart } from "../../context/Cart/useCart.ts";
import Button from "../UI/Button.tsx";
import Modal from "../UI/Modal.tsx";
import { useUserProgress } from "../../context/UserProgress/useUserProgress.ts";
import { currencyFormatter } from "../../utils/formatting.ts";
import CartItem from "./CartItem.tsx";

export default function Cart() {
  const { items, addToCart, removeFromCart, deleteFromCart } = useCart();
  const { progress, hideCart, showCheckout } = useUserProgress();

  const handleCloseCart = () => {
    hideCart();
  };

  const handleCheckout = () => {
    showCheckout();
  };

  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  return (
    <Modal
      className="max-w-[60%] bg-pink-50 mx-auto my-auto p-6 animate-slide-in-from-top"
      open={progress === "cart"}
      onClose={progress === "cart" ? handleCloseCart : null}
    >
      <div className="w-full flex flex-col gap-4">
        <h2 className="mb-4 text-2xl font-bold">Your Cart</h2>

        <ul className="flex flex-col gap-2">
          {items.map((item) => {
            return (
              <CartItem
                key={item.id}
                item={item}
                onIncrease={() => addToCart(item)}
                onDecrease={() => removeFromCart(item.id)}
                onDelete={() => deleteFromCart(item.id)}
              />
            );
          })}
        </ul>

        <p className="flex justify-end gap-2">
          Cart Total: <strong>{currencyFormatter.format(cartTotal)}</strong>
        </p>

        <div className="flex gap-4 justify-end">
          <Button variant="text" onClick={handleCloseCart}>
            Close
          </Button>
          {items.length >= 1 && (
            <Button variant="primary" onClick={handleCheckout}>
              Checkout
            </Button>
          )}
        </div>
      </div>
    </Modal>
  );
}
