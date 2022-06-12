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
        initialValues={{
          count: 2,
          maxCount: 12,
        }}
      >
        {({ reset, isMaxCounterReached, maxCount, count, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle title={"Custom Mug"} />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default ShoppingPage;
