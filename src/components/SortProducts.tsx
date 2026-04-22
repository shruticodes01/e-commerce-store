import type { SortProps } from "../types/types";

export default function SortProducts({ sortBy, onSort }: SortProps) {
  return (
    <div
      className={`w-full h-10 flex items-center gap-4 px-2 outline-1 outline-blue-100 rounded-lg max-w-fit`}
      id="search-wrapper"
    >
      <label htmlFor="sort" className="text-nowrap font-semibold">
        Sort By:
      </label>

      <select
        className="w-full max-w-35 h-full bg-white rounded-sm p-2"
        id="sort"
        name="sort"
        value={sortBy}
        onChange={onSort}
      >
        <option value="default">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating</option>
        <option value="name-a-z">Name: A to Z</option>
        <option value="name-z-a">Name: Z to A</option>
      </select>
    </div>
  );
}
