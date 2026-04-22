import type React from "react";
import { useCart } from "../context/Cart/useCart";
import { useUserProgress } from "../context/UserProgress/useUserProgress";
import { currencyFormatter } from "../utils/formatting";
import Button from "./UI/Button";
import Input from "./UI/Input";
import Modal from "./UI/Modal";

export default function Checkout() {
  const { items } = useCart();
  const { progress, hideCheckout } = useUserProgress();

  const cartTotal = items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  const handleClose = () => {
    hideCheckout();
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    // validation

    // form data object to get user entered values
    const formDataObj = new FormData(e.target);

    const customerData = Object.fromEntries(formDataObj.entries());
    console.log(customerData);

    // with POST method we send items data and customer's form data
    fetch("http://localhost:5000/api/orders", {
      method: "POST",
      headers: {
        // Tells the backend that the data is being submitted in json format
        "Content-Type": "application/json",
      },
      //data to be attached
      body: JSON.stringify({
        order: {
          items: items,
          customer: customerData,
        },
      }),
    });
  };

  return (
    <Modal
      className="max-md:max-w-[95%] md:max-w-[50%] p-4 mx-auto my-auto animate-slide-in-from-right"
      open={progress === "checkout"}
      onClose={handleClose}
    >
      <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <h2 className="mb-4 text-2xl font-bold">Checkout</h2>
        <p>
          Total Amount: <strong>{currencyFormatter.format(cartTotal)}</strong>
        </p>

        <Input label="Full Name" id="name" name="name" type="text" required />
        <Input label="Email" id="email" name="email" type="email" required />
        <Input label="Street" id="street" name="street" type="text" required />
        <div className="flex gap-4">
          <Input
            label="Postal Code"
            id="postal-code"
            name="postal-code"
            type="text"
            required
          />
          <Input label="City" id="city" name="city" type="text" required />
        </div>

        <div className="flex justify-end gap-4 mt-4">
          <Button type="button" variant="text" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Submit Order</Button>
        </div>
      </form>
    </Modal>
  );
}
