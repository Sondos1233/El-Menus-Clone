import "./App.css";
import Home from "./Components/Home/Home";
import { Provider } from "react-redux";
import store from "./store/store";
import { CityProvider } from "./Components/Context/City";
import { useState } from "react";
import { ResProvider } from "./Components/Context/Resturant";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
              <Route path="/Home" exact component={Home} />
            </Switch>
        
            </Router>
          </Provider>
        </ResProvider>
      </CityProvider>
     
    </>
  );
}

export default App;
