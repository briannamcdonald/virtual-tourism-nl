import './App.css';
import { Text } from "@chakra-ui/react"
import Home from './components/home/home'
import Navbar from './components/navbar/navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Footer from './components/footer/footer';
import Restaurants from './components/restaurants/restaurants';

function App() {
  return (
    <div>
      <Navbar/>
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/restaurants">
            <Restaurants/>
          </Route>
        </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
