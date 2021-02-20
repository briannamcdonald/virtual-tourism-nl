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

function App() {
  return (
    <div>
      <Navbar/>
    <Router>
      <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
