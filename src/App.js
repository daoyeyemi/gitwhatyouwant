import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import { Products } from "./components/Products"
import { Cart } from "./components/Cart"
import { commerce } from "./lib/commerce"

function App() {
  const [items, setItems] = useState([]);
  const [cart, setCart] = useState({});

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

console.log(items);
  
console.log(cart)

return (
      <Router>
        <div className="App">
          <Navbar totalItems={cart.total_items} />
          <Switch>
            <Route exact path="/">
              <Products items={items} onAddToCart={handleAddToCart} />
            </Route>
            <Route exact path="/cart">
              <Cart cart={cart} />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;