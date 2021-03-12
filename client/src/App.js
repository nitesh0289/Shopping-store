import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./App.css";
import JeansItem from "./app/components/JeansItem";
import Navbar from "./app/components/Navbar";
import GirlsShop from "./app/GirlsShop";
import Home from "./app/Home";
import MensShop from "./app/MensShop";
import Products from "./app/Products";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Products} />
          <Route path="/home" component={Home} />
          <Route path="/mensShop" component={MensShop} />
          <Route path="/girlsShop" component={GirlsShop} />
          <Route path="/womensShop" />
          <Route path="/kidsShop" />
          <Route path="/petsShop" />
          <Route path="/info" />
          <Route path="/aboutUs" />
          <Route path="/account" />
          <Route path="/jeansItem" component={JeansItem} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
