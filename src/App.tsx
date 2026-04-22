import Cart from "./components/Cart/Cart.tsx";
import Checkout from "./components/Checkout.tsx";
import { CartContextProvider } from "./context/Cart/CartContext.tsx";
import { UserProgressContextProvider } from "./context/UserProgress/UserProgressContext.tsx";
import "./App.css";
import RouterRoutes from "./routes/RouterRoutes.tsx";
import { ProductContextProvider } from "./context/Products/ProductsContext.tsx";

function App() {
  return (
    <ProductContextProvider>
      <UserProgressContextProvider>
        <CartContextProvider>
          <RouterRoutes />
          <Cart />
          <Checkout />
        </CartContextProvider>
      </UserProgressContextProvider>
    </ProductContextProvider>
  );
}

export default App;
