//models
import { products } from "../Products.model";

interface CartItemsProps {
  showCart: boolean;
  cartItems: products[];
  hideCart: () => void;
}

const CartItems: React.FC<CartItemsProps> = (props) => {
  return (
    <div
      className={props.showCart ? "cart-container show-cart" : "cart-container"}
    >
      <div className="cart-header">
        <h2>Cart Items</h2>
        <span onClick={props.hideCart}>&#10005;</span>
      </div>
      <div className="cart-items">
        {props.cartItems.map((item) => (
          <div className="cart-item" key={item.id.toString()} ><h2>{item.productName}</h2>
            <div className="add-cart">Delete</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItems;
