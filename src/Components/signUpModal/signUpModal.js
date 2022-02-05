import React, {useState} from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config'
import ReactModal from 'react-modal';
import './signUpModal.css';


function ModalSUp(){
 
  const [modalIsOpen, setModalIsOpen] = useState(false);

//=======================Authentecation===============================

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");

  // const[user, setUser] = useState({});
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });

  

  const register = async () => {
      try{
        const user = await createUserWithEmailAndPassword(auth, registerName, registerEmail,registerPassword);
        console.log(user);
      } catch (error){
        console.log(error.message);
      }
  };

  // const login = async () => {
  //   try{
  //     const user = await signInWithEmailAndPassword(auth, loginEmail,loginPassword);
  //     console.log(user);
  //   } catch (error){
  //     console.log(error.message);
  //   }
  // }
  // //  <button onClick={login}>log In</button>    // //by this button i 'll log In
  // //  <h1>User Login: {user?.email}</h1>  // //by this i 'll show user name after he logIned

  // const logout = async () => {
  //   await signOut (auth);
  // };

  // // <button onClick={signOut}>Sign Out</button>    // //by this button i 'll log out
  
  
  return( 
    
    <>

    {/* ************************************Modal******************************* */}
    <div className="container-fluid">

      {/* This Button instead of signUp button till integration with navbar */}
    <button className="btn btn-danger" onClick={() => { setModalIsOpen(true) }}>Open Modal</button>
    {/* ****************************************************************************** */}

    <ReactModal isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false) }}>
    <div className="bgForm">
      <button type="button" className="btn-close" onClick={() => { setModalIsOpen(false) }}></button>

      <div className="form-container">
        <img id="signLogo" src="images/logo.jpg" />
        <form id="log" action="#">
        <div className="inpt mt-3">
            <input type='text' placeholder="Name" className="form-control" onChange={(event) => { setRegisterName(event.target.valve); }} required/>
          </div>
         
          <div className="inpt mt-3">
            <input type='text' placeholder="Email" className="form-control" onChange={(event) => { setRegisterEmail(event.target.valve); }} required/>
          </div>

          <div className="inpt mt-3">
            <input type='password' placeholder="Password" className="form-control" onChange={(event) => { setRegisterPassword(event.target.valve); }} required/>
          </div>

          <div className="button mt-3">
            <input type="submit" className="btn crtBtn" value="Create an account" onClick={register}/>
          </div>

        </form>
        <div className="note">
          <a>By creating an account, you agree to our Terms of service and Privacy policy</a>
        </div>
      </div>
      </div>
    </ReactModal>
    </div>
    </>
  );
}
export default ModalSUp;