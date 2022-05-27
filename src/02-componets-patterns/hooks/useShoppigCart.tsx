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
      const productInCard: ProductInCart = oldShoppingCart[product.id] || {
        ...product,
        count: 0,
      };
      // Agregando 1 producto o Mas

      if (Math.max(productInCard.count + count, 0)) {
        productInCard.count += count;
        return {
          ...oldShoppingCart,
          [product.id]: productInCard,
        };
      }
      // Borrando el Producto
      const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      return rest;

      // SIMPLE SOLUTION El estado lo mandan las Targetas
      // if (count === 0) {
      //   const { [product.id]: toDelete, ...rest } = oldShoppingCart;
      //   return rest;
      // }
      // return {
      //   ...oldShoppingCart,
      //   [product.id]: { ...product, count },
      // };
    });
  };

  return { shoppingCart, onProductCountChange };
};
