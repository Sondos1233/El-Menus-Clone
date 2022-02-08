
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import JoinUs from './Components/JoinUs/joinUs';
import { Provider } from "react-redux";
import "./App.css";
import Dineout from './Components/Dineout/Dineout';
import store from "./store/store";
import Home from './Components/Home/Home';
import Career from './Components/Career/Career';
import OfferParent from './Components/Offers/OffersParent';
import Delivery from './Components/Delivery/Delivery';
import Restaurant from './Components/Restaurant/Restaurant';
import "./App.css";
import Dineout from './Components/Dineout/Dineout';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';
import './App.css';
import description from './Components/Job/description';
// import Footer from './Components/Footer/footer';
// import Navbar from './Components/Navbar/Navbar';
function App() {
  
  return (
    <>
     {/* <Home/> */}
      <Provider store={store}>
         
        <Router>
        
          <Switch>
          <Route path="/" exact component={Home}/>
           <Route path="/Careers" exact component={Career}/>
           <Route path="/description/:Name" exactcomponent={description}/>
           <Route path="/JoinUs" exact component={JoinUs}/>
           <Route path="/Home" exact component={Home}/>
          
           <Fragment>
           {/* <Navbar/> */}
          <Route path ="/Delivery" exact component={Delivery} /> 
          <Route path="/DinOut" exact component={Dineout}/>
          <Route path ="/Restaurant/:id" exact component={Restaurant} /> 
          <Route path="/Offers" exact component={OfferParent}/>
          </Fragment>
          
          </Switch>

          {/* <Footer/> */}
        </Router>
       
      </Provider>
</>
  
  )


}

export default App;
