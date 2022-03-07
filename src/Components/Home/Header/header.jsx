import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../style/home.css";
import "../../main-style.css";
import elmenusLogo from "../../../images/Home/elmenusLogo.svg";
import search from "../../../images/Home/search.jpeg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStore,faArrowRight,faMotorcycle,faUtensils} from '@fortawesome/free-solid-svg-icons'
import Card from "./card";
import { useSelector, useDispatch } from "react-redux";
import changeLanguage from "../../../store/action/languageAction";
import React, {useState, useEffect} from "react";
 import ReactModal from 'react-modal';
import { auth } from '../../firebase/firebase.config';
// import { firestore } from '../../firebase/firebase.config';
// import {addDoc, collection} from 'firebase/firestore'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';


export default function Header() {

  // let user = localStorage.getItem('email')
  // let userName = user.split("@")[0];
  // userName = userName[0].toUpperCase() + userName.slice(1);

//=======================Handle language=====================

  const language = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(changeLanguage(language == "English" ? "العربية" : "English"));
    
  };

  //=========================Modals state========================
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [logModalIsOpen, setLogModalIsOpen] = useState(false);

  //=======================LogIn & validation===============================

  const initialState = { email: '', password: '' };
  const [logInput, setLogInput] = useState(initialState);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
 
    const handleChange = ({target}) =>{
        setLogInput({
            ...logInput,
            [target.name]: target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormErrors(validate(logInput));
        setIsSubmit(true);
        try {
          await signInWithEmailAndPassword(auth ,logInput.email, logInput.password);
          // localStorage.setItem("email", logInput.email);

          setLogInput(initialState);
          setLogModalIsOpen(false);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(logInput);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };

  //=======================SignUp & validation===============================

      const initialSignState = { email: '', password: '', name: '' };
      const [signInput, setSignInput] = useState(initialSignState);
      const [signFormErrors, setSignFormErrors] = useState({});
      const [isSignSubmit, setIsSignSubmit] = useState(false);

      const handleSignChange = ({ target }) => {
        setSignInput({
          ...signInput,
          [target.name]: target.value,
        });
      };

      const handleSignSubmit = async (e) => {
        e.preventDefault();
        setSignFormErrors(signValidate(signInput));
        setIsSignSubmit(true);
        try {
          await createUserWithEmailAndPassword(auth ,signInput.email, signInput.password, signInput.name);
          // localStorage.setItem("email", signInput.email);

          setSignInput(initialSignState);
          setModalIsOpen(false);
        } catch (error) {
          console.log(error.message);
        }
      };
      useEffect(() => {
        console.log(signFormErrors);
        if (Object.keys(signFormErrors).length === 0 && isSignSubmit) {
          console.log(signInput);
        }
      }, [signFormErrors]);
      const signValidate = (signValues) => {
        const signErrors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!signValues.email) {
          signErrors.email = "Email is required!";
        } else if (!regex.test(signValues.email)) {
          signErrors.email = "This is not a valid email format!";
        }
        if (!signValues.password) {
          signErrors.password = "Password is required";
        } else if (signValues.password.length < 4) {
          signErrors.password = "Password must be more than 4 characters";
        } else if (signValues.password.length > 10) {
          signErrors.password = "Password cannot exceed more than 10 characters";
        }
        if (!signValues.name) {
          signErrors.name = "Username is required!";
        }
        return signErrors;
      };

  return (
    <>
    <div className="home_main">
      <nav className="navbar navbar-light px-5 py-4"
       >
        <div className="container-fluid">
          <div className="home_logo">
            <a className="navbar-brand" href="/Home">
              <img
                src={elmenusLogo}
                alt=""
                width="139"
                height="auto"
                className="d-inline-block align-text-top"
              />
            </a>
          </div>

          <div className="home_sign">
            <form className="d-flex">
              <div id="sign_auth">
             
                <button
                  type="button"
                  className="btn btn-link text-white login-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#LogInModal"
                  onClick={() => { setLogModalIsOpen(true); setModalIsOpen(false) }}
                >
                  LogIn
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#SignModal"
                  onClick={() => { setModalIsOpen(true); setLogModalIsOpen(false)}}
                >
                  SignUp
                </button>
              
                <button
                  type="button"
                  className="btn btn-link text-white login-btn"
                  onClick={() => {
                    toggleLanguage();
                  }}
                >
                 {language}
                </button>
                
                
              </div>
            </form>
          </div>
        </div>
      </nav>
      {/* <!----> */}

      <section className="home_main_section text-white">
        <div className="container">
          {/* <!--Discover & order--> */}
          <div className="home_main_section_content">
            <h1 className="home_main_title">
              Discover & Order the food you love.
            </h1>
            <form className="row">
              <div className="col-xl col-xs"></div>
              <div className="col-xl-7 col-xs-12">
                <div className="input-holder">
                  <span className="icon">
                   <FontAwesomeIcon icon={faStore}/>
                  </span>
                  <input type="text" placeholder="Find a Restaurant" />
                  <span className="search-icon">
                    <img src={search} />
                  </span>
                </div>
              </div>
              <div className="col-xl-2 col-xs-5">
                <div className="input-holder2">
                  <input
                    type="text"
                    name="city"
                    list="cityname"
                    value="Cairo"
                  />
                  <datalist id="cityname">
                    <option value="Boston"></option>
                    <option value="Cambridge"></option>
                  </datalist>
                </div>
              </div>
              <div class="col-xl-2 col-xs-5">
              <a  href="">
              <button type="submit" className="submit-btn btn btn-primary">
                Go
                <span className="icon"><FontAwesomeIcon icon={faArrowRight}/> </span>
              </button></a> 
            </div>
            </form>
          </div>
          <div className="section_footer ">
            <h6 className="section_footer_title text-center mb-4"> Or explore elmenus</h6>
            <div class=" row section_footer_links mx-1 py-3">
               <Card link="/Delivery" name="Delivery" iconName={faMotorcycle} iconName2={faArrowRight} para="Get food delivered from amazing restaurants around you "/>
               <Card link="/Dinout" name="Dine Out" iconName={faUtensils} iconName2={faArrowRight} para="Browse restaurants by mood, cuisine, area or dish names "/>
            </div>
          </div>
        </div>
        <div style={{height:200 }}></div>
      </section>
      {/* <!--footer section--> */}
      </div>

      {/* ************************************ٍSignUp Modal******************************* */}
      <div className="container-fluid modalContainer">
        {/* This Button instead of signUp button till integration with navbar */}
        {/* <button className="btn btn-danger" onClick={() => { setModalIsOpen(true) }}>Open Modal</button> */}
        {/* ****************************************************************************** */}

        <ReactModal isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false) }}>
        <div className="bgForm">
        <button type="button" className="btn-close" onClick={() => { setModalIsOpen(false) }}></button>

        <form className="form-container" onSubmit={handleSignSubmit}>
        <img id="signLogo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397754952/e518a9efa57162be0afd9826667d697e.jpg" />
        <div id="log">
        <div className="inpt mt-3">
            <input type='text' placeholder="Name" className="form-control" name='name' autoComplete="off" value={signInput.name} onChange={handleSignChange}/>
            <p style={{color: "red", fontSize: "12px"}}>{signFormErrors.name}</p>
            </div>
        
            <div className="inpt mt-3">
            <input type='text' placeholder="Email" className="form-control" name='email' autoComplete="off" value={signInput.email} onChange={handleSignChange}/>
            <p style={{color: "red", fontSize: "12px"}}>{signFormErrors.email}</p>   
            </div>

            <div className="inpt mt-3">
            <input type='password' placeholder="Password" className="form-control" name='password' autoComplete="off" value={signInput.password} onChange={handleSignChange}/>
            <p style={{color: "red", fontSize: "12px"}}>{signFormErrors.password}</p>
            </div>

            <div className="submitBtn mt-3">
        
            <button type="submit" className="btn crtBtn">Create an account</button>
            </div>

        </div>
        <div className="note">
            <a>By creating an account, you agree to our Terms of service and Privacy policy</a>
        </div>
        </form>
        </div>
        </ReactModal>
        </div>

        {/* ***********************************LogIn Modal************************************************** */}
        <div className="container-fluid modalContainer">

      {/* This Button instead of LogIn button till integration with navbar */}
        {/* <button className="btn btn-danger" onClick={() => { setModalIsOpen(true) }}>Open Modal</button> */}
       {/* ****************************************************************************** */}

    <ReactModal isOpen={logModalIsOpen} onRequestClose={() => { setLogModalIsOpen(false) }}>
    <div className="bgForm">
      <button type="button" className="btn-close" onClick={() => { setLogModalIsOpen(false) }}></button>

      <div className="form-container">
        <img id="logLogo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397754952/e518a9efa57162be0afd9826667d697e.jpg" />
        <form id="log" onSubmit={handleSubmit}>
          <div className="inpt mt-3">
            <input type='text' placeholder="email" className="form-control" name="email" onChange={handleChange} value={logInput.email} autoComplete="off" />
            <p style={{color: "red", fontSize: "12px"}}>{formErrors.email}</p>
          </div>

          <div className="inpt mt-3">
            <input type='password' placeholder="password" className="form-control" name='password' onChange={handleChange} value={logInput.password} autoComplete="off" />
            <p style={{color: "red", fontSize: "12px"}}>{formErrors.password}</p>
          </div>
        
          <div className="button mt-3">
            <button type="submit" className="btn btn-danger">Log in</button>
          </div>

          <div className="button mt-3">
            <button className="btn goglBtn">Log in with Google</button>
          </div>

          <div className="button mt-3">
            <button className="btn btn-primary" style={{fontSize: "17px", fontWeight: "400"}}>Log in with Google</button>
          </div>

        </form>
        <div className="frgtPass">
          <a>I forget my password</a>
        </div>
      </div>
      </div>
    </ReactModal>
    </div>
    </>
  );
}
