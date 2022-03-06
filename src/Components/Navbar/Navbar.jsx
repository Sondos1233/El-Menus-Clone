import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import ReactModal from 'react-modal';
import { auth } from '../firebase/firebase.config';
import { firestore } from '../firebase/firebase.config';
import { addDoc, collection } from 'firebase/firestore'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useSelector, useDispatch } from "react-redux";
import changeLanguage from '../../store/action/languageAction';
import { Link } from 'react-router-dom';
import DineoutbyCity from '../Dineout/DineoutByCity/DineoutByCity';
import ModelLocation from '../ModelLocation/modelLoc';

export default function Navbar() { 
    const language = useSelector((state) => state.language.lang);
    const dispatch = useDispatch();

    const toggleLanguage = () => {
        dispatch(changeLanguage(language == "English" ? "العربية" : "English"));
    };

    //=========================Modals state========================
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const [logModalIsOpen, setLogModalIsOpen] = useState(false);

    //=========================Buttons state========================

    // const [ btnExist, setBtnExist] = useState(true);

    //=======================LogIn===============================

    const initialState = { email: '', password: '' };
    const [logInput, setLogInput] = useState(initialState);

    const handleChange = ({ target }) => {
        setLogInput({
            ...logInput,
            [target.name]: target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, logInput.email, logInput.password);
            setLogInput(initialState);
            setLogModalIsOpen(false);
        } catch (error) {
            console.log(error);
        }
    };


    //=======================SignUp===============================

    const initialSignState = { email: '', password: '', name: '' };
    const [signInput, setSignInput] = useState('');

    const handleSignChange = ({ target }) => {
        setSignInput({
            ...signInput,
            [target.name]: target.value,
        });
    };

    const handleSignSubmit = async (e) => {
        e.preventDefault();
        try {
            await createUserWithEmailAndPassword(auth, signInput.email, signInput.password, signInput.name);
            setSignInput(initialSignState);
            setModalIsOpen(false);
        } catch (error) {
            console.log(error.message);
        }
    };

    const openModel = () => {
        return(
            <>
            <DineoutbyCity></DineoutbyCity>
        </>
        )
    }


    return (
        <>
        <ModelLocation></ModelLocation>
            <nav className="nav-lg-Screen sticky-top d-lg-block d-none navCont">
                <nav class="nav-lg-Screen sticky-top d-lg-block d-none" dir={language == "English" ? "rtl" : "ltr"}>

                    <section
                        className="navbar navbar-expand-lg navbar-light pb-0"
                        style={{ backgroundColor: "#e32207" }}
                    >
                        <div
                            className="container-fluid"
                            style={{ flexDirection: "row", padding: "0 10px", backgroundColor: "white", borderBottom: "1px solid #dfe2e6" }}
                        >
                            <a
                                className="navbar-brand p-3"
                                href="../index.html"
                                style={{ borderRight: "1px solid #dfe2e6" }}
                                Link="/Home"
                            >
                                <img
                                    src="https://elmenus.com/public/img/newLogo.svg"
                                    alt=""
                                    style={{ width: "120px", maxWidth: "100%", height: "auto" }}
                                />
                            </a>

                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup"
                                aria-controls="navbarNavAltMarkup"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a className="nav-item nav-link py-4 px-2" >DELIVERY</a>
                                    <a className=" nav-item nav-link py-4 px-2 active">DINE OUT</a>
                                    <a className=" nav-item nav-link py-4 px-2" >OFFERS</a>
                                </div>

                                <div className="services py-3" style={{ display: "flex", paddingLeft: "30px" }}>
                                    {/* ==================================================================================================================== */}
                                    <div style={{ display: "none", marginLeft: "auto" }} id="auth" >
                                        <div className="navbar-nav ms-5" style={{ marginLeft: "auto" }} >
                                            <a
                                                className="nav-link py-4 px-2 ms-5"
                                                href=""
                                                style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.3vw" }}
                                            ><i className="far fa-bell pe-2"></i>Notification</a
                                            >
                                            <a
                                                className="nav-link py-4 px-2 ms-5"
                                                href=""
                                                style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.3vw" }}
                                            ><i className="fas fa-receipt pe-2"></i>My order</a
                                            >
                                            <a className="nav-link py-4 pt-3 ms-5" href="">
                                                <div
                                                    className="text-white"
                                                    style={{ borderLeft: "1px solid #dfe2e6" }}
                                                >
                                                    <span id="image" className="me-2"></span>
                                                    <span id="text" className="text-center"> </span>

                                                    <button
                                                        type="button"
                                                        className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                                                        id="dropdownMenuReference"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                        data-bs-reference="parent"
                                                    >
                                                        <span className="visually-hidden">Toggle Dropdown</span>
                                                    </button>
                                                    <ul
                                                        className="dropdown-menu dropdown-menu-end"
                                                        aria-labelledby="dropdownMenuReference"
                                                        style={{ width: "400px" }}
                                                        id="drop"
                                                    >
                                                        <li className="no-hover">
                                                            <a
                                                                className="dropdown-item p-5"
                                                                id="Account_inf"
                                                            ></a>
                                                        </li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li><a className="dropdown-item" href="#">Account Setting</a></li>
                                                        <li><hr className="dropdown-divider" /></li>
                                                        <li>
                                                            <button className="dropdown-item" onClick={() => signOut(auth)}>Log out</button>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    {/* ==================================================================================================================== */}
                                    <div style={{ marginLeft: "auto" }} id="sign_auth">
                                        <a href="#" style={{ textDecoration: "none" }}>
                                            <button type="button" className="btn login-btn btn-log" data-bs-toggle="modal" data-bs-target="#LogInModal"
                                                onClick={() => { setLogModalIsOpen(true); setModalIsOpen(false) }}>
                                                LogIn
                                            </button>
                                        </a>
                                        <a href="#" style={{ textDecoration: "none" }}>
                                            <button type="button" className="btn btn-sign" data-bs-toggle="modal" data-bs-target="#SignModal"
                                                onClick={() => { setModalIsOpen(true); setLogModalIsOpen(false) }}>
                                                SignUp
                                            </button>
                                        </a>

                                    </div>
                                    {/* ==================================================================================================================== */}
                                </div>
                                <div
                                    className="cart-language py-3"
                                    style={{ width: "auto", display: "flex", marginLeft: "80px", borderLeft: "1px solid #dfe2e6" }}
                                >
                                    <div style={{ marginLeft: "auto" }}>
                                        <a href="#" style={{ textDecoration: "none" }}>
                                            <i
                                                className="fal fa-shopping-bag"
                                                style={{ fontSize: "2vw", color: "gray", padding: "0 30px" }}
                                            ></i>
                                        </a>
                                        <a
                                            href="#"
                                            style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.5vw" }}
                                            onClick={() => {
                                                toggleLanguage();
                                            }}
                                        >
                                            {language}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section
                        className="search-bar container-fluid"
                        style={{ backgroundColor: "white", borderBottom: "1px solid #dfe2e6" }}
                    // style="background-color: white; border-bottom: 1px solid var(--border-color)"
                    >
                        <div className="row mx-4">
                            <div className="col-lg-7 col-md-12 mt-1 pt-1">
                                <form>
                                    <div className="input-group mb-2 search-side">
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Find A Restaurant"
                                            style={{ padding: "10px" }}
                                        />
                                        <span
                                            className="input-group-text"
                                            id="basic-addon2"
                                            style={{ backgroundColor: "white" }}
                                        > <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <div className="col-lg-5 col-md-12 location-side">
                                <img
                                    src="https://elmenus.com/public/img/locationHeader.svg"
                                    alt="iconImage"
                                    className="imgIcon mx-2"
                                />
                                <h4 className="headerLocation mx-2">Dine-out in <span>Maadi</span></h4>
                                <button className="btn change-btn mx-2" onClick={() => { openModel() }}>CHANGE</button>
                            </div>
                        </div>
                    </section>
                </nav>
            </nav>
            <section aria-label="breadcrumb" className="container-fluid d-lg-block d-none" style={{ borderBottom: "1px solid #dfe2eb" }}>
                <div className="row navCont" style={{ margin: "0 120px" }}>
                    <div className="col-12 pt-2">
                        <ol className="breadcrumb" >
                            <li className="breadcrumb-item" ><a href="#" className='color-a'>Home</a></li>
                            <li className="breadcrumb-item"><a href="#" className='color-a'>cairo</a></li>
                            <li className="breadcrumb-item"><a href="#" className='color-a'>maadi</a></li>
                            <li className="breadcrumb-item active" aria-current="page">new maadi</li>
                        </ol>
                    </div>
                </div>
            </section>

            <nav className="nav-lg-Screen sticky-top d-sm-block d-lg-none d-none" id="pageNav-lg" dir={language == "English" ? "rtl" : "ltr"}>
                <section className="navbar navbar-expand-lg navbar-light pb-0" style={{ backgroundColor: "#fff" }}>
                    <div className="container-fluid">
                        <div className="row py-2" style={{ width: "100%" }}>
                            <div className="col-2">
                                <a className="navbar-brand navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation"
                                    style={{ boxShadow: "none", border: "none" }}>
                                    <img src="https://raw.githubusercontent.com/Sondos1233/Elmenus/main/images/logo-sm.png" alt="" style={{ width: "40px", maxWidth: "100%", height: "auto" }} />
                                    <i className="fa fa-caret-down" aria-hidden="true" style={{ color: "#e32207", fontSize: "2vw" }}></i>
                                </a>
                            </div>
                            <div className="col-10">
                                <form className="search-form">
                                    <div className="input-group mb-2">
                                        <input type="text" className="form-control" placeholder="&#128269; Find A Restaurant" style={{ padding: "10px" }} />
                                    </div>
                                </form>
                            </div>
                            <div className="col-12">
                                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                    <div className="navbar-nav">
                                        <a className="nav-link py-4 px-2" href="./Delivery.html">DELIVERY</a>
                                        <a className="nav-link py-4 px-2 active" href="./Dine-Out.html">DINE OUT</a>
                                        <a className="nav-link py-4 px-2" href="./Offers.html">OFFERS</a>
                                    </div>
                                    <div className="services py-3" style={{ width: "52%", display: "flex", marginLeft: "auto" }}>
                                        {/* ==================================================================================================================== */}
                                        <div style={{ marginLeft: "auto" }}>
                                            <a href="#" style={{ textDecoration: "none" }}>
                                                <button className="btn" style={{ fontSize: "12px", fontWeight: "700", backgroundColor: "white" }}
                                                    onClick={() => { setLogModalIsOpen(true); setModalIsOpen(false) }}>
                                                    LOGIN
                                                </button>
                                            </a>
                                            <a href="#" style={{ textDecoration: "none" }}>
                                                <button className="btn"
                                                    style={{ backgroundColor: "#e32207", color: "white", fontSize: "12px", fontWeight: "700" }}
                                                    onClick={() => { setModalIsOpen(true); setLogModalIsOpen(false) }}>
                                                    SIGNUP
                                                </button>
                                            </a>
                                        </div>
                                        {/* ==================================================================================================================== */}

                                    </div>
                                    <div className="cart-language  py-3"
                                        style={{ width: "auto", display: "flex", margin: "auto", borderLeft: "1px solid #dfe2e6" }}>
                                        <div style={{ marginLeft: "auto" }}>
                                            <a href="#" style={{ textDecoration: "none" }}>
                                                <i className="fa fa-shopping-bag" style={{ fontSize: "2vw", color: "gray", padding: "0 30px" }}></i>
                                            </a>
                                            <a href="#" style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.5vw" }}>
                                                العربية
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 pt-2 ">
                                <ol className="breadcrumb" style={{ justifyContent: "center" }}>
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item"><a href="#">cairo</a></li>
                                    <li className="breadcrumb-item"><a href="#">maadi</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">new maadi</li>
                                </ol>
                            </div>
                            <div className="col-12 location-side" style={{ justifyContent: "center" }}>
                                <img src="https://elmenus.com/public/img/locationHeader.svg" alt="iconImage" className="imgIcon mx-2" />
                                <h4 className="headerLocation mx-2">Dine-out in <span>Maadi</span></h4>
                                <button className="btn change-btn mx-2">CHANGE</button>
                            </div>
                        </div>
                    </div>
                </section>

            </nav>

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
                                    <input type='text' placeholder="Name" className="form-control" name='name' autoComplete="off" value={signInput.name} onChange={handleSignChange} />
                                </div>

                                <div className="inpt mt-3">
                                    <input type='text' placeholder="Email" className="form-control" name='email' autoComplete="off" value={signInput.email} onChange={handleSignChange} />
                                </div>

                                <div className="inpt mt-3">
                                    <input type='password' placeholder="Password" className="form-control" name='password' autoComplete="off" value={signInput.password} onChange={handleSignChange} />
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
                            <img id="logLogo" src="images/logowithbg.png" />
                            <form id="log" onSubmit={handleSubmit}>
                                <div className="inpt mt-3">
                                    <input type='text' placeholder="email" className="form-control" name="email" onChange={handleChange} value={logInput.email} autoComplete="off" />
                                </div>

                                <div className="inpt mt-3">
                                    <input type='password' placeholder="password" className="form-control" name='password' onChange={handleChange} value={logInput.password} autoComplete="off" />
                                </div>

                                <div className="button mt-3">
                                    <button type="submit" className="btn btn-danger">Log in</button>
                                </div>

                                <div className="button mt-3">
                                    <button type="submit" className="btn goglBtn">Log in with Facebook</button>
                                </div>

                                <div className="button mt-3">
                                    <button type="submit" className="btn btn-primary">Log in with Google</button>
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