import { ProductCardProps } from "../components/ProductCard";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";
import {Props as ProductButtonsProps} from "../components/ProductButtons";
  export interface Product {
    id: string;
    title: string;
    img?: string;
  }
  
  export interface ProductContextProps {
    counter: number;
    increaseBy: (value: number) => void;
    product: Product;
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