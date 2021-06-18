import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from "./components/Navbar"
import { Products } from "./components/Products"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Products />
      </div>
    </Router>

  );
}

export default App;
