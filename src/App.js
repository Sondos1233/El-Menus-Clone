
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import JoinUs from './Components/JoinUs/joinUs';
import { Provider } from "react-redux";
import "./App.css";

import store from "./store/store";
import Home from './Components/Home/Home';
import Career from './Components/Career/Career';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
     {/* <Home/> */}
      <Provider store={store}>



     


      
        <Router>
          <Switch>
          <Route path="/Careers" component={Career}/>
           <Route path="/JoinUs" component={JoinUs}/>
           <Route path="/" component={Home}/>
          </Switch>
      
        </Router>
       
      </Provider>
    </>
  );
}

export default App;
