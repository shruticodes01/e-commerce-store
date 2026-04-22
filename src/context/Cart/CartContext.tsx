import React, { createContext, useState } from "react";
import type {
  CartContextType,
  ItemObj,
  ProductDataObj,
} from "../../types/types";

const CartContext = createContext<CartContextType>({
  items: [],
  addToCart: (_product: ProductDataObj) => {},
  removeFromCart: (_productID: number) => {},
  deleteFromCart: (_productID: number) => {},
});

export default CartContext;

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<{ items: ItemObj[] }>({
    items: [],
  });

  const addToCart = (product: ProductDataObj) => {
    setCart((prevCart) => {
      // array copy of cart items
      const cartItems = [...prevCart.items];
      // find the index position of existing cart item if it's id is equal to newly added product's id
      const existingCartItemIndex = cartItems.findIndex(
        (item) => item.id === product.id,
      );

      const existingCartItem = cartItems[existingCartItemIndex];

      // if findIndex returns > -1 it means an item already exists in the cart
      if (existingCartItemIndex > -1) {
        const updatedExistingItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + 1,
        };

        // re-insert existing item by overwriting to update its quantity
        cartItems[existingCartItemIndex] = updatedExistingItem;
      } else {
        // if its not an existing item, we push the product with quantity of 1
        cartItems.push({ ...product, quantity: 1 });
      }

      return {
        items: cartItems,
      };
    });
  };
  const removeFromCart = (productID: number) => {
    setCart((prevCart) => {
      const cartItems = [...prevCart.items];
      const existingCartItemIndex = cartItems.findIndex(
        (item) => item.id === productID,
      );

      const existingCartItem = cartItems[existingCartItemIndex];

      if (existingCartItem.quantity === 1) {
        // if quantity is 1, remove the item completely from the cart
        cartItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedExistingItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity - 1,
        };

        cartItems[existingCartItemIndex] = updatedExistingItem;
      }

      return {
        items: cartItems,
      };
    });
  };

  const deleteFromCart = (productID: number) => {
    setCart((prevCart) => {
      const cartItems = [...prevCart.items];

      // keep elements whose id is not equal to productID
      const filteredItems = cartItems.filter((item) => item.id !== productID);

      return {
        items: filteredItems,
      };
    });
  };

  const cartContext = {
    items: cart.items,
    addToCart,
    removeFromCart,
    deleteFromCart,
  };

  console.log(cartContext);

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
