import {
  ProductCard,
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components";

const product = {
  id: "1",
  title: "Coffee mug",
  img: "./coffee-mug.png",
};
function ShoppingPage() {
  return (
    <div>
      ShoppingPage
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductImage />
          <ProductTitle title={"Custom Mug"} />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
}

export default ShoppingPage;
