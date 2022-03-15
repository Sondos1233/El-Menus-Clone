import "./App.css";
import Home from "./Components/Home/Home";
import JoinUs from "./Components/JoinUs/joinUs";
import Dineout from "./Components/Dineout/Dineout";
import store from "./store/store";
import Career from "./Components/Career/Career";
import OfferParent from "./Components/Offers/OffersParent";
import Delivery from "./Components/Delivery/Delivery";
import Restaurant from "./Components/Restaurant/Restaurant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import description from "./Components/Job/description";
import Footer from "./Components/Footer/footer";
import Navbar from "./Components/Navbar/Navbar";
import { CityProvider } from "./Components/Context/City";
import { useState } from "react";
import { ResProvider } from "./Components/Context/Resturant";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Terms } from "./Components/Terms/Terms";
import { Privacy } from "./Components/Terms/Privacy";
import UserProfile  from './Components/userProfile/userProfile';
import AccountSetting from './Components/accountSetting/accountSetting'
import { Provider } from 'react-redux';
import { Fragment } from 'react';
import {CheckOut} from './Components/CheckOut order/checkout'
import OrderList from "./Components/orderList/orderList";
function App() {
  const [City, setCity] = useState("Cairo");
  const [Res, setRes] = useState("");

  console.log(City);
  return (
    <>
      <CityProvider value={{ City, setCity }}>
        <ResProvider value={{ Res, setRes }}>
          <Provider store={store}>
            <Router>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/Careers" exact component={Career} />
                <Route path="/description/:Name" exactcomponent={description} />
                <Route path="/JoinUs" exact component={JoinUs} />
                <Route path="/Home" exact component={Home} />
                <Route path='/check' exact component={CheckOut}/>

                <Fragment>
                  <Navbar />
                  <Route path="/Delivery" exact component={Delivery} />
                  <Route path="/Dineout" exact component={Dineout} />
                  <Route path="/Restaurant/:id" exact component={Restaurant} />
                  <Route path="/Offers" exact component={OfferParent} />
                  <Route path="/AboutUs" exact component={AboutUs} />
                  <Route path="/Terms" exact component={Terms} />
                  <Route path="/Privacy" exact component={Privacy} />
                  <Route path="/cart" exact component={OrderList} />
                  <Route  path="/userProfile" exact component={UserProfile} />        
                  <Route exact path="/accountSetting" component={AccountSetting}  />
                 
                </Fragment>
              </Switch>
              <Footer />
            </Router>
          </Provider>
        </ResProvider>
      </CityProvider>
     
    </>
  );
}

export default App;
