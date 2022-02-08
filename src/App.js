
import { Provider } from "react-redux";
import "./App.css";
import Dineout from './Components/Dineout/Dineout';
import store from "./store/store";
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
   
    <Dineout/>

    </>
  );
}

export default App;
