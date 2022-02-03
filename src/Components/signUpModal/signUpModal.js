import React, {useState} from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase-config'
import ReactModal from 'react-modal';
import './signUpModal.css';


function ModalSUp(){
 
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [userVal, setUserVal] = useState({
    Name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    passwordError: null,
  });

  const handleChange = (e) => {
    if (e.target.name == "Name") {
      setUserVal({
            ...userVal,
            Name: e.target.value
        });
        setErrors({
            ...errors,
            nameError:
                e.target.value.length == 0
                    ? "This field is Required" :
                    e.target.value.length > 10
                        ? "You have to enter less than 10"
                        : null
        });

    }
    else if (e.target.name == "email") {
      setUserVal({
            ...userVal,
            email: e.target.value
        });
        setErrors({
            ...errors,
            emailError:
                e.target.value.length == 0
                    ? "This field is Required" :
                    e.target.value.length > 30
                        ? "You have to enter less than 30"
                        : null
        });

    } else if (e.target.name == "password") {
      setUserVal({
            ...userVal,
            password: e.target.value
        });
        setErrors({
            ...errors,
            passwordError:
                e.target.value.length == 0
                    ? "This field is Required" :
                    e.target.value.length > 10
                        ? "You have to enter less than 10"
                        : null
        });
    }

}


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
        const user = await createUserWithEmailAndPassword(auth, registerEmail,registerPassword,registerName);
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
            <input type='text' placeholder="Name" className={`form-control ${errors.nameError ? `border-danger` : ``}`}  name="Name" onChange={(e) => { handleChange(e) }} onChange={(event) => { setRegisterName(event.target.valve); }} />
            <small className="text-danger">{errors.nameError}</small>
          </div>
         
          <div className="inpt mt-3">
            <input type='text' placeholder="Email" className={`form-control ${errors.emailError ? `border-danger` : ``}`}
             name="email" onChange={(e) => { handleChange(e) }} onChange={(event) => { setRegisterEmail(event.target.valve); }}/>
            <small className="text-danger">{errors.emailError}</small>
          </div>

          <div className="inpt mt-3">
            <input type='password' placeholder="Password" className={`form-control ${errors.passwordError ? `border-danger` : ``}`} name="password" onChange={(e) => { handleChange(e) }} onChange={(event) => { setRegisterPassword(event.target.valve); }}/>
            <small className="text-danger">{errors.passwordError}</small>
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
  )
}
export default ModalSUp;