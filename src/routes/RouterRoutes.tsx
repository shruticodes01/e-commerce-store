import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home.tsx";
import Beauty from "../pages/Beauty/Beauty.tsx";
import Fragrances from "../pages/Fragrances/Fragrances.tsx";
import Furniture from "../pages/Furniture/Furniture.tsx";
import Groceries from "../pages/Groceries/Groceries.tsx";
import MainLayout from "../layouts/MainLayout.tsx";
import FavoriteProducts from "../pages/Favorites/FavoriteProducts.tsx";

export default function RouterRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="beauty" element={<Beauty />} />
        <Route path="fragrances" element={<Fragrances />} />
        <Route path="furniture" element={<Furniture />} />
        <Route path="groceries" element={<Groceries />} />
        <Route path="favorite-products" element={<FavoriteProducts />} />
      </Route>
    </Routes>
  );
}
