
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

      <Provider store={store}>
        <Router>
          <Navbar />
          <Switch>
            {/* <Route path="" exact component={} /> */}
          </Switch>
          <Footer />
        </Router>
      </Provider>



    </>
  );
}

export default App;
