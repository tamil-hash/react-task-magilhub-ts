//models
import { products } from "../Products.model";

interface ProductsProps {
  allProducts: products[];
  isLoading: boolean;
  addProductsToCart: (item: products) => Promise<void>;
}

const Products: React.FC<ProductsProps> = (props) => {
  if (props.isLoading) {
    return (
      <div className="products-container">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="products-container">
      {props.allProducts.map((item) => (
        <div key={item.id.toString()} className="product-card-container">
          <div className="product-card">
            <h3>{item.productName}</h3>
            <div className="add-cart" onClick={() => props.addProductsToCart(item)} >Add to cart</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
