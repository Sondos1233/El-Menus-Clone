import "./App.css";
import Home from "./Components/Home/Home";
import { Provider } from "react-redux";
import JoinUs from './Components/JoinUs/joinUs';
import Dineout from './Components/Dineout/Dineout';
import store from "./store/store";
import Career from './Components/Career/Career';
import OfferParent from './Components/Offers/OffersParent';
import Delivery from './Components/Delivery/Delivery';
import Restaurant from './Components/Restaurant/Restaurant';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Fragment } from 'react';
import description from './Components/Job/description';
import Footer from './Components/Footer/footer';
import Navbar from './Components/Navbar/Navbar';
import { CityProvider } from "./Components/Context/City";

import { useState } from "react";
import { ResProvider } from "./Components/Context/Resturant";

function App() {
  const [City, setCity] = useState("Cairo");
  const [Res, setRes] = useState("");
  console.log(City);
  return (
    <>
      <CityProvider value={{ City, setCity}}>
        <ResProvider value={{Res,setRes}}>
          <Provider store={store}>
          <Router>
        
        <Switch>
        <Route path="/" exact component={Home}/>
         <Route path="/Careers" exact component={Career}/>
         <Route path="/description/:Name" exactcomponent={description}/>
         <Route path="/JoinUs" exact component={JoinUs}/>
         <Route path="/Home" exact component={Home}/>
        
         <Fragment>
         <Navbar/>
        <Route path ="/Delivery" exact component={Delivery} /> 
        <Route path="/Dineout" exact component={Dineout}/>
        <Route path ="/Restaurant/:id" exact component={Restaurant} /> 
        <Route path="/Offers" exact component={OfferParent}/>
        {/* <Route  path="/userProfile" exact component={Userprofile} />        
          <Route exact path="/accountSetting" component={AccountSetting}  /> */}
        </Fragment>
        
        </Switch>

        <Footer/>
      </Router>          </Provider>
        </ResProvider>
      </CityProvider>
    </>
  );
}

export default App;
