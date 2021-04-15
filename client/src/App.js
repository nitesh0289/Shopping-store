import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Footer from "./app/components/Footer1";
import JeansItem from "./app/components/JeansItem";
import Navbar from "./app/components/Navbar";
import GirlsShop from "./app/GirlsShop";
import Home from "./app/Home";
import Login from "./app/Login";
import MensShop from "./app/MensShop";
import Signup from "./app/Signup";

function App() {
  return (
    <div style={{ backgroundColor: "#f4f4f4" }}>
      <Router>
        <div className="App">
          <Switch>
            <Route path="/mensShop">
              <Navbar />
              <MensShop />
              <Footer />
            </Route>
            <Route path="/girlsShop">
              <Navbar />
              <GirlsShop />
              <Footer />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/womensShop" />
            <Route path="/kidsShop" />
            <Route path="/petsShop" />
            <Route path="/info" />
            <Route path="/aboutUs" />
            <Route path="/account" />
            <Route path="/jeansItem">
              <Navbar />
              <JeansItem />
              <Footer />
            </Route>
            <Route path="/">
              <Navbar />
              <Home />
              <Footer />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
