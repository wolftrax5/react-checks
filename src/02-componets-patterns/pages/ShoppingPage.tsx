import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";
import "../styles/custom-styles.css";
import { products } from "../data/products";

const product = products[0];

function ShoppingPage() {
  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <ProductCard
        key={product.id}
        product={product}
        className="bg-dark"
        initialValues={{
          count: 4,
          maxCount: 10,
        }}
      >
        {() => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" title={"Custom Mug"} />
            <ProductButtons className="custom-buttons" />
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default ShoppingPage;
