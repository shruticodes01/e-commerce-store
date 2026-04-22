import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../UI/Button";
import logoImgTransparent from "../../assets/logo_transparent.png";
import logoImgMint from "../../assets/logo_bg_mint.png";
import { Heart, Menu, ShoppingBag, X } from "lucide-react";

export default function MobileHeader({
  className,
  isScrolled,
  totalCartItems,
  showCart,
  totalFavoriteItems,
}: {
  className?: string;
  isScrolled: boolean | string;
  totalCartItems: number;
  showCart: () => void;
  totalFavoriteItems: number;
}) {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);

  return (
    <header
      className={`w-full h-14 flex-col items-center fixed top-0 p-4 font-semibold z-2 ${isScrolled ? "bg-mint-blue" : ""} ${className}`}
    >
      <div className="w-full h-full flex items-center justify-between self-center relative">
        <NavLink to="/">
          {isScrolled ? (
            <img className={`h-14 w-auto`} src={logoImgMint} alt="shop logo" />
          ) : (
            <img
              className={`h-14 w-auto`}
              src={logoImgTransparent}
              alt="shop logo"
            />
          )}{" "}
        </NavLink>
        <Button
          aria-label={`${isMobileMenuVisible ? "Close Menu" : "Open Menu"}`}
          aria-expanded={isMobileMenuVisible}
          aria-controls="mobile-nav"
          className={`w-fit h-fit p-2 absolute right-0 aspect-square z-9999 cursor-pointer text-black`}
          onClick={() => setIsMobileMenuVisible((menuVisible) => !menuVisible)}
          type="button"
        >
          {isMobileMenuVisible ? (
            <X className="w-8 h-8 text-black" />
          ) : (
            <Menu className="w-8 h-8 text-black" />
          )}
        </Button>
      </div>

      <nav id="mobile-nav">
        <span id="mobile-nav-label" className="sr-only">
          Mobile navigation menu
        </span>
        <ul
          id="mobile-nav-menu"
          aria-expanded={!isMobileMenuVisible}
          aria-labelledby="mobile-nav-label"
          role="menu"
          className={`w-full h-full flex uppercase **:cursor-pointer ${isMobileMenuVisible ? "flex-col items-start justify-around fixed z-1000 inset-[0_0_0_30%] p-[min(30vh,10rem)_1.5rem] translate-x-0 bg-white/70 backdrop-blur-[6rem]" : "translate-x-full transition-transform duration-150ms ease-out"}`}
          data-visible={isMobileMenuVisible}
          aria-orientation="vertical"
          aria-label="Mobile main navigation"
        >
          <li className={`p-4`}>
            <NavLink
              className={`hover:scale-105 hover:text-powderedBlue focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-powderedBlue active:text-powderedBlue`}
              role="menuitem"
              to="/"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Home
            </NavLink>
          </li>
          <li className={`p-4`}>
            <NavLink
              className={`hover:scale-105 hover:text-powderedBlue focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-powderedBlue active:text-powderedBlue`}
              role="menuitem"
              to="/beauty"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Beauty
            </NavLink>
          </li>
          <li className={`p-4`}>
            <NavLink
              className={`hover:scale-105 hover:text-powderedBlue focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-powderedBlue active:text-powderedBlue`}
              role="menuitem"
              to="/fragrances"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Fragrances
            </NavLink>
          </li>
          <li className={`p-4`}>
            <NavLink
              className={`hover:scale-105 hover:text-powderedBlue focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-powderedBlue active:text-powderedBlue`}
              role="menuitem"
              to="/furniture"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Furniture
            </NavLink>
          </li>
          <li className={`p-4`}>
            <NavLink
              className={`hover:scale-105 hover:text-powderedBlue focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-powderedBlue active:text-powderedBlue`}
              role="menuitem"
              to="/groceries"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              Groceries
            </NavLink>
          </li>
          <li className={`p-4`}>
            <NavLink
              className={`hover:scale-105 hover:text-powderedBlue focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-powderedBlue active:text-powderedBlue`}
              role="menuitem"
              to="/favorite-products"
              onClick={() => {
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
            >
              <Heart
                className={
                  totalCartItems > 0 ? "fill-red-500" : "fill-transparent"
                }
              />
              <span className="absolute -top-3 -right-4 px-2 bg-black text-mint-blue rounded-full">
                {totalFavoriteItems}
              </span>
            </NavLink>
          </li>
          <li className={`p-4`}>
            <Button
              className={`hover:scale-105 hover:text-powderedBlue focus:outline-0 focus-visible:outline-3 focus-visible:outline-mint-blue focus-visible:outline-offset-4 focus-visible:text-powderedBlue active:text-powderedBlue relative`}
              onClick={() => {
                showCart();
                setIsMobileMenuVisible((menuVisible) => !menuVisible);
              }}
              type="button"
            >
              <ShoppingBag className="w-8 h-8" />
              <span className="absolute -top-2 -right-2 px-2 bg-black text-mint-blue rounded-full">
                {totalCartItems}
              </span>
            </Button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
