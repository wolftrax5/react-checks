import { useState } from "react";
import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { Product } from "../interfaces/interfaces";

const product1 = {
  id: "1",
  title: "Coffee mug",
  img: "./coffee-mug.png",
};
const product2 = {
  id: "2",
  title: "Coffee mug",
  img: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fvectorified.com%2Fimages%2Fsublimation-icon-14.png&f=1&nofb=1",
};

const products: Product[] = [product1, product2];
interface ProductInCart extends Product {
  count: number;
}
function ShoppingPage() {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    count: number;
    product: Product;
  }) => {
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
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => {
          return (
            <ProductCard
              key={product.id}
              product={product}
              className="bg-dark"
              onChange={onProductCountChange}
            >
              <ProductImage className="custom-image" />
              <ProductTitle className="text-white" title={"Custom Mug"} />
              <ProductButtons className="custom-buttons" />
            </ProductCard>
          );
        })}
        <div className="shopping-cart">
          {Object.entries(shoppingCart).map(([key, product]) => {
            return (
              <ProductCard
                key={key}
                product={product}
                className="bg-dark"
                style={{ width: "100px" }}
              >
                <ProductImage className="custom-image" />
                <ProductButtons className="custom-buttons" />
              </ProductCard>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ShoppingPage;
