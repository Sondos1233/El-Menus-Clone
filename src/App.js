
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import OffersCard from './Components/offersCard/offersCard';
import Delivery from './Components/Delivery/Delivery';
import Restaurant from './Components/Restaurant/Restaurant';
import Footer from './Components/Footer/footer';
import NavBar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <NavBar/>
    <Switch>
    <Route path ="/Delivery" exact component={Delivery} /> 
    <Route path ="/Restaurant/:id" exact component={Restaurant} /> 
    </Switch>
    <Footer/>
    </Router>

    </>
  );
}

export default App;
