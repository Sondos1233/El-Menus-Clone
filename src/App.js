
import { Provider } from 'react-redux';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import store from './store/store'
function App() {
  return (
    <>
    <Provider store={store}>
     <Router>
      <Navbar/>
     </Router>
    </Provider>


    </>
  );
}

export default App;
