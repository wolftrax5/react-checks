import { useState } from "react";
import { ProductInCart, onChangeArgs } from "../interfaces/interfaces";

interface ShoppingCartSate {
  [key: string]: ProductInCart;
}
interface ShoppingHook {
  shoppingCart: ShoppingCartSate;
  onProductCountChange: (args: onChangeArgs) => void;
}
export const useShoppingCart = (): ShoppingHook => {
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartSate>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return rest;
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };

  return { shoppingCart, onProductCountChange };
};
