import './App.css';
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import { Products } from "./components/Products"
import { commerce } from "./lib/commerce"

function App() {
  const [items, setItems] = useState([])

  const getItems = async () => {
    
    // all the item data comes from here
    const { data } = await commerce.products.list()
    
    // for some reason data returns undefined without destructuring 
    
    setItems(data)
  }

  useEffect(() => {
    getItems()
  }, [])

console.log(items);
  
return (
      <div className="App">
        <Navbar />
        <Products items={items} />
      </div>

  );
}

export default App;
