import './App.css';
import Modal from 'react-modal';
import ModalSUp from './Components/signUpModal/signUpModal';
import { BrowserRouter as Router, Switch, Route, Routes } from 'react-router-dom';
import NavBar from './Components/Navbar/Navbar'

Modal.setAppElement('#root')
function App() {
  return (
    <>

    <NavBar/>

    {/* <ModalSUp /> */}
 


        {/* <Route component={ModalSUp} path="/signUpForm" exact/> */}

    </>
  );
}

export default App;
