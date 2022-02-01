import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min'
import JoinUs from './Components/JoinUs/joinUs';
import { Provider } from "react-redux";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/footer";
import store from "./store/store";
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
     {/* <Home/> */}
      <Provider store={store}>
      
        <Router>
          <Switch>
          
           <Route path="/JoinUs" component={JoinUs}/>
           <Route path="/" component={Home}/>
          </Switch>
          <Footer />
        </Router>
       
      </Provider>
    </>
  );
}

export default App;
