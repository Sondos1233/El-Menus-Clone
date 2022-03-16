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
import { useState, useEffect } from "react";
import { ResProvider } from "./Components/Context/Resturant";
import { AboutUs } from "./Components/AboutUs/AboutUs";
import { Terms } from "./Components/Terms/Terms";
import { Privacy } from "./Components/Terms/Privacy";
import UserProfile  from './Components/userProfile/userProfile';
import AccountSetting from './Components/accountSetting/accountSetting'
import { Provider } from 'react-redux';
import { Fragment } from 'react';
import ProtectedRoute from './protectedRoute'
import { boolean } from "yup";
function App() {
  const [City, setCity] = useState("Cairo");
  const [Res, setRes] = useState("");

  // console.log(City);

  const [isAuth, setIsAuth] = useState(boolean);

  useEffect(()=>{
    if(localStorage.getItem('email')){
        // console.log("auth");
        setIsAuth(true);
    } else{
        // console.log("not auth");
        setIsAuth(false);
    }
},[isAuth])
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

                <Fragment>
                  <Navbar />
                  <Route path="/Delivery" exact component={Delivery} />
                  <Route path="/Dineout" exact component={Dineout} />
                  <Route path="/Restaurant/:id" exact component={Restaurant} />
                  <Route path="/Offers" exact component={OfferParent} />
                  <Route path="/AboutUs" exact component={AboutUs} />
                  <Route path="/Terms" exact component={Terms} />
                  <Route path="/Privacy" exact component={Privacy} />
                  <ProtectedRoute  path="/userProfile" exact component={UserProfile} isAuth={isAuth}/>        
                  <ProtectedRoute path="/accountSetting" exact component={AccountSetting} isAuth={isAuth} />
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
