import ProductCard, {
  ProductButtons,
  ProductImage,
  ProductTitle,
} from "../components/ProductCard";

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

        <ProductCard product={product}>
          <ProductCard.Image img="https://upload.wikimedia.org/wikipedia/commons/a/a4/DPPP_5348.jpg" />
          <ProductCard.Title />
          <ProductCard.Buttons />
        </ProductCard>
      </div>
    </div>
  );
}

export default ShoppingPage;
