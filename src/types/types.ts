import React from "react";
import type { ChangeEvent } from "react";

export type ContainerType = "narrow" | "default";

export interface ContainerProps {
  className?: string;
  children?: React.ReactNode;
  containerType?: ContainerType;
}

export type ButtonVariant =
  | "primary"
  | "outline"
  | "text"
  | "icon"
  | "addItem"
  | "viewDetails";

export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  label?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

export interface ReviewsObj {
  rating: number;
  comment: string;
  date: string;
  reviewerEmail: string;
  reviewerName: string;
}

export interface ProductDataObj {
  id: number;
  title: string;
  availabilityStatus: string;
  brand?: string;
  category: string;
  description: string;
  dimensions: {
    width: number;
    height: number;
    depth: number;
  };
  discountPercentage: number;
  images: string[];
  meta: {
    createdAt: string;
    updatedAt: string;
    barcode: string;
    qrCode: string;
  };
  minimumOrderQuantity: number;
  price: number;
  rating: number;
  returnPolicy: string;
  reviews: ReviewsObj[];
  shippingInformation: string;
  sku: string;
  tags: [];
  thumbnail: string;
  warrantyInformation: string;
  weight: number;
}

export interface ItemObj extends ProductDataObj {
  quantity: number;
}

export interface SortProps {
  sortBy: string;
  onSort: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface SearchProps {
  searchTerm: string;
  selectedCategory: string;
  onSearch: (e: ChangeEvent<HTMLInputElement>) => void;
  onCategoryChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export interface CartContextType {
  items: ItemObj[];
  addToCart: (product: ProductDataObj) => void;
  removeFromCart: (productID: number) => void;
  deleteFromCart: (productID: number) => void;
}

export interface ProductContextType {
  products: ProductDataObj[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  setSearchTerm: (value: string) => void;
  sortBy: string;
  setSortBy: (value: string) => void;
  favorites: ProductDataObj[];
  addToFavorite: (product: ProductDataObj) => void;
}
