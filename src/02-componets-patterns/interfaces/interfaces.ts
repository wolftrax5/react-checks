import { ProductCardProps } from "../components/ProductCard";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
import {Props as ProductButtonsProps} from "../components/ProductButtons";
import { BlobOptions } from "buffer";
import { product1 } from '../data/products';
  export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
  export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
    maxCount?: number
  }

export interface ProductCardHOCProps {
    ({ children, product }: ProductCardProps ): JSX.Element
    Title: (Props: ProductTitleProps) => JSX.Element;
    Image: (Props: ProductImageProps) => JSX.Element;
    Buttons: (Props:ProductButtonsProps) => JSX.Element;
}

export interface onChangeArgs {
    product: Product;
     count: number;
}
export interface ProductInCart extends Product {
  count: number;
}
export interface InitialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCounterReached:boolean;
  maxCount?:number
  product: Product;

  increaseBy: (value:number) => void;
  reset: () => void;
}
