import React, { createContext, useState } from "react";

const UserProgressContext = createContext({
  progress: "",
  showCart: () => {},
  hideCart: () => {},
  showProductDetails: () => {},
  hideProductDetails: () => {},
  showCheckout: () => {},
  hideCheckout: () => {},
});

export default UserProgressContext;

export function UserProgressContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userProgress, setUserProgress] = useState("");
  const showCart = () => {
    setUserProgress("cart");
  };
  const hideCart = () => {
    setUserProgress("");
  };

  const showProductDetails = () => {
    setUserProgress("product-details");
  };
  const hideProductDetails = () => {
    setUserProgress("");
  };

  const showCheckout = () => {
    setUserProgress("checkout");
  };
  const hideCheckout = () => {
    setUserProgress("");
  };

  const userProgressCtx = {
    progress: userProgress,
    showCart,
    hideCart,
    showProductDetails,
    hideProductDetails,
    showCheckout,
    hideCheckout,
  };

  return (
    <UserProgressContext.Provider value={userProgressCtx}>
      {children}
    </UserProgressContext.Provider>
  );
}
