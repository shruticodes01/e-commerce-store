import Input from "./UI/Input.tsx";
import type { SearchProps } from "../types/types.ts";
import { Search } from "lucide-react";

export default function SearchProducts({
  searchTerm,
  selectedCategory,
  onSearch,
  onCategoryChange,
}: SearchProps) {
  return (
    <>
      <div
        className={`w-full h-10 flex justify-center items-center gap-4 absolute bottom-8 px-4 mx-auto`}
        id="search-wrapper"
      >
        <div className="w-full max-w-100 relative">
          <Input
            className="w-full h-full bg-white shrink-0 "
            type="text"
            label="Search Products"
            value={searchTerm}
            id="search"
            onChange={onSearch}
          />

          <Search className="absolute top-2 right-2" />
        </div>

        <select
          className="w-full max-w-50 h-full bg-white rounded-sm p-2"
          name="search-categories"
          value={selectedCategory}
          onChange={onCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="beauty">Beauty</option>
          <option value="fragrances">Fragrances</option>
          <option value="furniture">Furniture</option>
          <option value="groceries">Groceries</option>
        </select>
      </div>
    </>
  );
}
