import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppigCart";

function ShoppingPage() {
  const { shoppingCart, onProductCountChange } = useShoppingCart();

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
              value={shoppingCart[product.id]?.count || 0}
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
                value={product.count}
                onChange={onProductCountChange}
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
