import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import { Products } from "./components/Products"
import { Cart } from "./components/Cart"
import CheckoutForm from "./components/CheckoutForm/Checkout"
import { commerce } from "./lib/commerce"

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState("");

  const getItems = async () => {

    // all the item data comes from here
    const { data } = await commerce.products.list();
    
    // for some reason data returns undefined without destructuring 
    
    setItems(data);
  }

  const getCart = async () => {
    setCart(await commerce.cart.retrieve())
  }

  useEffect(() => {
    getItems();
    getCart();
  }, [])

  const handleAddToCart = async (productId, quantity) => {
    const product = await commerce.cart.add(productId, quantity);
    setCart(product.cart)
  }

  const handleUpdateCart = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart)
  }

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder)

      setOrder(incomingOrder)

      refreshCart()

    } catch (error) {

      setErrorMessage(error.data.error.message)
    
    }
  }

console.log(items);
  
console.log(cart)

return (
      <Router>
        <div className="App">
          <Navbar totalItems={cart.total_items} />
          <Switch>
            <Route exact path="/">
              <Products items={items} onAddToCart={handleAddToCart} handleUpdateCart />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} handleUpdateCart={handleUpdateCart} handleRemoveFromCart={handleRemoveFromCart} handleEmptyCart={handleEmptyCart} />
            </Route>
            <Route exact path="/checkout">
              <CheckoutForm cart={cart} />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;