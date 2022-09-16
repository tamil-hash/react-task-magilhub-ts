import { useEffect, useState } from "react";

//components
import TopBar from "./components/Topbar";
import Products from "./components/Products";
import CartItems from "./components/CartItems";

//models
import { products } from "./Products.model";

const App: React.FC = () => {
  const [showCart, setShowCart] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<products[]>([]);
  const [allProducts, setAllProducts] = useState<products[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const displayCart = () => {
    setShowCart(true);
  };
  const hideCart = () => {
    setShowCart(false);
  };

  const addProductsToCart: any = async (item: products) => {
    try {
      const response = await fetch(
        "https://6322e861a624bced308168f4.mockapi.io/cartItems", { method: "POST", body: JSON.stringify(item) }
      );
      console.log(response)
      setCartItems([...cartItems, item])
    } catch (error) {
      console.log(error);
    }
  }


  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://6322e861a624bced308168f4.mockapi.io/data"
      );
      const data = await response.json();
      setAllProducts(data);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };


  const fetchCartItems = async () => {
    try {
      const response = await fetch(
        "https://6322e861a624bced308168f4.mockapi.io/cartItems"
      );
      const data = await response.json();
      setCartItems(data)
    } catch (error) {

    }
  }

  useEffect(() => {
    fetchProducts();
    fetchCartItems();
  }, []);

  useEffect(() => {
    if (showCart) {
      fetchCartItems()
    }
  }, [showCart]);

  return (
    <div className="App">
      <TopBar displayCart={displayCart} cartItemsLength={cartItems.length} />
      <Products addProductsToCart={addProductsToCart} isLoading={isLoading} allProducts={allProducts} />
      <CartItems
        cartItems={cartItems}
        showCart={showCart}
        hideCart={hideCart}
      />
    </div>
  );
};

export default App;
