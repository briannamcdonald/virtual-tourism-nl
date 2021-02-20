import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/footer/footer";
import Tours from "./components/tours/tours";
import About from "./components/about/about.js";
import Restaurants from "./components/restaurants/restaurants";
import Map from "./components/map/map";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            <Tours />
            <About />
            <Map />
          </Route>
          <Route path="/restaurants">
            <Restaurants />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
