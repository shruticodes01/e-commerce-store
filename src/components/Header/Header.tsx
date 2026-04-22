import { useEffect, useState } from "react";
import DesktopHeader from "./DesktopHeader.tsx";
import MobileHeader from "./MobileHeader.tsx";
import { useCart } from "../../context/Cart/useCart.ts";
import { useUserProgress } from "../../context/UserProgress/useUserProgress.ts";
import { useProducts } from "../../context/Products/useProducts.ts";

export default function Header() {
  const { items } = useCart();
  const { showCart } = useUserProgress();
  const { favorites } = useProducts();

  const [isScrolled, setIsScrolled] = useState<boolean | string>(false);

  useEffect(() => {
    const changeHeaderBackgroundOnScroll = () => {
      const scrollTrigger = 150;
      setIsScrolled(
        window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger,
      );
    };

    window.addEventListener("scroll", changeHeaderBackgroundOnScroll);
    return () =>
      window.addEventListener("scroll", changeHeaderBackgroundOnScroll);
  }, []);

  const totalCartItems = items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity;
  }, 0);

  const handleShowCart = () => {
    showCart();
  };

  return (
    <>
      <MobileHeader
        className="mobile__header"
        isScrolled={isScrolled}
        totalCartItems={totalCartItems}
        showCart={handleShowCart}
        totalFavoriteItems={favorites.length}
      />
      <DesktopHeader
        className="desktop__header"
        isScrolled={isScrolled}
        totalCartItems={totalCartItems}
        showCart={handleShowCart}
        totalFavoriteItems={favorites.length}
      />
    </>
  );
}
