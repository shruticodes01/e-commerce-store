import { useContext } from "react";
import CartContext from "./CartContext.tsx";

export const useCart = () => useContext(CartContext);
