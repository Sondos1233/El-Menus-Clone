import './App.css';
import Modal from 'react-modal';
import ModalSUp from './Components/signUpModal/signUpModal';
// import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


Modal.setAppElement('#root')
function App() {
  return (
    <>
 
    <ModalSUp />



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
