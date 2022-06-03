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
          count: 2,
          maxCount: 12,
        }}
      >
        {({ reset, isMaxCounterReached, maxCount, count, increaseBy }) => (
          <>
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" title={"Custom Mug"} />
            <ProductButtons className="custom-buttons" />

            <button onClick={reset}> Reset</button>
            <button onClick={() => increaseBy(-2)}>-2</button>
            {!isMaxCounterReached && (
              <button onClick={() => increaseBy(2)}>+2</button>
            )}
            <span>
              {count} - {maxCount}
            </span>
          </>
        )}
      </ProductCard>
    </div>
  );
}

export default ShoppingPage;
