import './App.css';
import Modal from 'react-modal';
import ModalLog from './Components/logInModal/logInModal';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


Modal.setAppElement('#root')
function App() {
  return (
    <>
 
    <ModalLog />



    {/* <Router>
    <Test/>  
   
      <Switch>
      <Route component={Modal} path="/form" exact/>
      </Switch>
    </Router>
     */}

    </>
  );
}

export default App;
