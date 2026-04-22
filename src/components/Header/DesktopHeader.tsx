import { NavLink } from "react-router-dom";
import { Heart, ShoppingBag } from "lucide-react";
import logoImgTransparent from "../../assets/logo_transparent.png";
import logoImgMint from "../../assets/logo_bg_mint.png";
import Button from "../UI/Button";
// import type { ItemObj } from "../../types/types";

export default function DesktopHeader({
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
  return (
    <header
      className={`w-full h-16 flex items-center justify-between px-4 fixed top-0 ${className} z-2 ${isScrolled ? "bg-mint-blue shadow-black shadow-[0_0_0.25rem_-0.025rem]" : "text-light-gray"}`}
    >
      <div className="w-full max-w-fit shrink-0">
        <NavLink className={`${isScrolled ? "" : ""}`} role="menu-item" to="/">
          {isScrolled ? (
            <img
              className={`h-14 w-auto`}
              src={logoImgMint}
              alt="logo mint backgroung"
            />
          ) : (
            <img
              className={`h-14 w-auto`}
              src={logoImgTransparent}
              alt="logo dark background"
            />
          )}
        </NavLink>
      </div>

      <span id="desktop-nav-label" className="sr-only">
        Desktop navigation menu
      </span>
      <nav
        aria-labelledby="desktop-nav-label"
        className={`w-full max-w-[90%] h-full flex justify-end px-4`}
      >
        <ul
          role="menu"
          aria-orientation="horizontal"
          aria-label="Main navigation"
          className="w-full h-full flex items-center justify-between justify-self-end uppercase font-semibold **:cursor-pointer"
        >
          <li>
            <NavLink
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-powderedBlue focus-visible:outline-powderedBlue focus-visible:text-powderedBlue active:text-powderedBlue" : "hover:text-mint-blue focus-visible:outline-blue-100 focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-powderedBlue focus-visible:outline-powderedBlue focus-visible:text-powderedBlue active:text-powderedBlue" : "hover:text-mint-blue focus-visible:outline-blue-100 focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              to="/beauty"
            >
              Beauty
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-powderedBlue focus-visible:outline-powderedBlue focus-visible:text-powderedBlue active:text-powderedBlue" : "hover:text-mint-blue focus-visible:outline-blue-100 focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              to="/fragrances"
            >
              Fragrances
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-powderedBlue focus-visible:outline-powderedBlue focus-visible:text-powderedBlue active:text-powderedBlue" : "hover:text-mint-blue focus-visible:outline-blue-100 focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              to="/furniture"
            >
              Furniture
            </NavLink>
          </li>
          <li>
            <NavLink
              className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-powderedBlue focus-visible:outline-powderedBlue focus-visible:text-powderedBlue active:text-powderedBlue" : "hover:text-mint-blue focus-visible:outline-blue-100 focus-visible:text-mint-blue active:text-mint-blue"}`}
              role="menu-item"
              to="/groceries"
            >
              Groceries
            </NavLink>
          </li>

          <ul className="flex items-center gap-6">
            <li className="relative">
              <NavLink
                className={`hover:scale-105 focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-powderedBlue focus-visible:outline-powderedBlue focus-visible:text-powderedBlue active:text-powderedBlue" : "hover:text-mint-blue focus-visible:outline-blue-100 focus-visible:text-mint-blue active:text-mint-blue"}`}
                role="menu-item"
                to="/favorite-products"
              >
                <Heart
                  className={
                    totalFavoriteItems > 0 ? "fill-red-500" : "fill-transparent"
                  }
                />
                <span className="absolute -top-2 -right-4 px-2 bg-black text-mint-blue rounded-full">
                  {totalFavoriteItems}
                </span>
              </NavLink>
            </li>
            <li className="relative">
              <Button
                className={` focus:outline-0 focus-visible:outline-3 focus-visible:outline-offset-4 ${isScrolled ? "hover:text-powderedBlue focus-visible:outline-powderedBlue focus-visible:text-powderedBlue active:text-powderedBlue" : "hover:text-mint-blue focus-visible:outline-blue-100 focus-visible:text-mint-blue active:text-mint-blue"}`}
                role="menu-item"
                onClick={() => showCart()}
              >
                <ShoppingBag />
                <span className="absolute -top-2 -right-4 px-2 bg-black text-mint-blue rounded-full">
                  {totalCartItems}
                </span>
              </Button>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
