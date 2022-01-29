
import './App.css';
import Footer from './Components/Footer/footer';
import NavBar from './Components/Navbar/Navbar';
import Dineout from './Components/Dineout/Dineout';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
  
          <NavBar/>
          <Dineout/>
          <Footer/>

    </>
  );
}

export default App;
