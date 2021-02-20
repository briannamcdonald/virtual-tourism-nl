import "./App.css";
import Home from "./components/home/home";
import Navbar from "./components/navbar/navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from "./components/footer/footer";
import Tours from "./components/tours/tours";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
            <Tours />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
