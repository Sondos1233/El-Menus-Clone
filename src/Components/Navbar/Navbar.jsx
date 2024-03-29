import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';
// import logo from './../../images/logo-sm.png' 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch, faUser,faShoppingBag} from "@fortawesome/free-solid-svg-icons";
import React, {useState, useEffect} from "react";
import ReactModal from 'react-modal';
import { auth } from '../firebase/firebase.config'
import { firestore } from '../firebase/firebase.config';
import {addDoc, collection, getDocs} from 'firebase/firestore'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import { useSelector, useDispatch } from "react-redux";
import changeLanguage from '../../store/action/languageAction';
import { Link } from 'react-router-dom';
import ProtectedRoute from '../../protectedRoute'
import DineoutbyCity from '../Dineout/DineoutByCity/DineoutByCity';
import ModelLocation from '../ModelLocation/modelLoc';

import OrderList from '../orderList/orderList';
export default function Navbar() {
    const [showList, setShowList] = useState(false)
    const [len , setLen] = useState(0)
    const orderLength = (length)=>{
        setLen(length)
    }

    //=======================Search Res=====================
    const[showRes,setshowRes]=useState(false)
    const listOfCities = collection(firestore, "Cities");
    const listOfRes = collection(firestore,"Restaurant")
    const [CityList, setCityList] = useState([]);
    const [ResList, setResList] = useState([]);
    const[SearchRes,setSearchRes] = useState('');
  const bySearchRes = (Res, SearchRes) => {
    if(Res.IsActivated){
      if (SearchRes) {
        return Res.ResName.toLowerCase().includes(SearchRes.toLowerCase());
      } else return 'Not Match any Res';
    }
    
  };
  
  const filteredList = (ResList, SearchRes) => {
    // console.log(ResList,SearchRes)
    return ResList.filter(Res => bySearchRes(Res, SearchRes));
  }
  const handleChangeRes=(e) =>{
    if(e.target.value==''){
    setshowRes(false)
    }else{
     setshowRes(true)
     setSearchRes(e.target.value)
    }
  }
   // console.log(City)
   useEffect(() => {
     
     const getRes = async()=>{
       const data = await getDocs(listOfRes);
       setResList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
     }
    
     getRes();
   }, []);
//=======================Handle toggle Buttons With Icons=====================
  const [toggleBtnsWithIcons, setToggleBtnsWithIcons] = useState(true);

   useEffect(()=>{
            if(localStorage.getItem('email')){
                console.log("icon");
                setToggleBtnsWithIcons(false);
            } else{
                console.log("btn");
                setToggleBtnsWithIcons(true);
            }
   })

//===============================Get user===================================
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(firestore, "User");
    let counter = 0 ;
    useEffect(() => {
      const getUsers = async() => {
        const data = await getDocs(usersCollectionRef);
        console.log(data);
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
      }      

      getUsers();

      counter = ++ counter;
      if(counter < 1){
        setTimeout(()=>{
            window.location.reload();                    
        },500)
      }


   
    }, [counter]);
    

//=======================Handle language=====================

  const language = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();

    const toggleLanguage = () => {
        dispatch(changeLanguage(language == "English" ? "العربية" : "English"));
    };

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
      
      setIsSubmit(true);
      try {
        await signInWithEmailAndPassword(auth ,logInput.email, logInput.password);
        localStorage.setItem("email", logInput.email);

        setLogInput(initialState);


        // setToggleBtnsWithIcons(false);

      } catch (error) {
        console.log(error);
        setFormErrors(validate(logInput));
      }
      window.location.reload()
    };
    useEffect(() => {
    //   console.log(formErrors);
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
      } else{
        errors.email = "Email not found";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 4) {
        errors.password = "Password must be more than 4 characters";
      } else if (values.password.length > 10) {
        errors.password = "Password cannot exceed more than 10 characters";
      }else {
        errors.password = "wrong Password ";
      }
      return errors;
    };

    
//=======================SignUp & validation===============================

      const initialSignState = { email: '', password: '', name: ''};
      const [signInput, setSignInput] = useState(initialSignState);
      const [signFormErrors, setSignFormErrors] = useState({});
      const [isSignSubmit, setIsSignSubmit] = useState(false);

        //Add user
        const [newName, setNewName] = useState("");
        const [newEmail, setNewEmail] = useState("");
        const [newPassword, setNewPassword] = useState("");
        const userCollectionRef = collection(firestore, "User");

        const createUser = async () => {
            await addDoc(userCollectionRef, { Name: newName, Email: newEmail, Password: newPassword });            
        };

      const handleSignChange = ({ target }) => {
      setSignInput({
          ...signInput,
          [target.name]: target.value,
      });
      if([target.name] == "name"){
        setNewName(target.value);
      } else if([target.name] == "email"){
        setNewEmail(target.value);
      } else if([target.name] == "password"){
        setNewPassword(target.value);
      }
      
      
     
      };

      const handleSignSubmit = async (e) => {
      e.preventDefault();
      
      setIsSignSubmit(true);
      try {
          await createUserWithEmailAndPassword(auth , signInput.email, signInput.password, signInput.name);
          localStorage.setItem("email", signInput.email);
          createUser();

          setSignInput(initialSignState);
       

          setTimeout(()=>{
            window.location.reload()
        },1000)

        //   setToggleBtnsWithIcons(false);

      } catch (error) {
          console.log(error.message);
          setSignFormErrors(signValidate(signInput));
      }
      };

      useEffect(() => {
        // console.log(signFormErrors);
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
        }else if (signValues.name.length < 4) {
            signErrors.name = "Name must be 4 characters or more";
        }else if (signValues.name.length > 20) {
            signErrors.name = "Name must be less than 20 characters";
        }
        return signErrors;
      };

        const signout = () =>{
          signOut(auth);
          localStorage.removeItem("email");

          setToggleBtnsWithIcons(true);
        //   console.log('user logged out');
        }
   
    

    // const openModel = () => {
    //     return(
    //         <>
    //         <DineoutbyCity></DineoutbyCity>
    //     </>
    //     )
    // }


    return (
        <>
        <ModelLocation></ModelLocation>
            <nav className="nav-lg-Screen sticky-top d-lg-block d-none navCont">
                <nav className="nav-lg-Screen sticky-top d-lg-block d-none" dir={language == "English" ? "rtl" : "ltr"}>

                    <section
                        className="navbar navbar-expand-lg navbar-light pb-0"
                        style={{ backgroundColor: "#e32207" }}
                    >
                        <div
                            className="container-fluid"
                            style={{ flexDirection: "row", padding: "0 10px", backgroundColor: "white", borderBottom: "1px solid #dfe2e6" }}
                        >
                            <Link
                                className="navbar-brand p-3"
                                href="../index.html"
                                style={{ borderRight: "1px solid #dfe2e6" }}
                                to="/Home"
                            >   
                                <img
                                    src="https://elmenus.com/public/img/newLogo.svg"
                                    alt=""
                                    style={{ width: "120px", maxWidth: "100%", height: "auto" }}
                                />
                            </Link>

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
                                    <Link to="/Delivery" className="nav-item nav-link py-4 px-2" >DELIVERY</Link>
                                    <Link to="/Dineout" className=" nav-item nav-link py-4 px-2 active">DINE OUT</Link>
                                    <Link to="/Offers" className=" nav-item nav-link py-4 px-2" >OFFERS</Link>
                                </div>

                                <div style={{ display: "flex", marginLeft: "auto" }}>
                                    <div  style={{display: "flex", margin: "10px 20px"}}>

                                        <div style={{ display: "flex" ,marginLeft: "auto" }} id="auth" >
                                            <div className="navbar-nav ms-5" style={{ marginLeft: "auto" }} hidden={toggleBtnsWithIcons} >

                                                <a
                                                    className="nav-link py-4 px-2 ms-5"
                                                    href=""
                                                    style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.3vw" }}
                                                ><i className="far fa-bell pe-2"></i>Notification</a
                                                >
                                                <Link
                                                    className="nav-link py-4 px-2 ms-5"
                                                    to="/Myorder"
                                                    style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.3vw" }}
                                                ><i className="fas fa-receipt pe-2"></i>My order</Link
                                                >
                                                <button type="button" class="btn btn-primary position-relative" style={{ backgroundColor: "white" }} data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                                <FontAwesomeIcon icon={faShoppingBag}  style={{marginRight: "6px", fontSize: "25px", color: "black"}}
                                                onClick={
                                                    () => {
                                                        showList ? setShowList(false) : setShowList(true)
                                                    }
                                                }
                                                />
                                                    <span class=" translate-middle badge rounded-pill bg-danger" style={{ position: "absolute", top:"20%" }}>
                                                        {len}
                                                        <span class="visually-hidden">unread messages</span>
                                                    </span>
                                                </button>
                                    {/* ===================================================userIcon================================================================= */}
                                            
                                                <div className="dropdown" hidden={toggleBtnsWithIcons}>
                                                    {users.map((user) => {
                                                       
                                                        if(localStorage.getItem("email") == user.Email){
                                                            localStorage.setItem("userID", user.id)
                                                                return (
                                                                    <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false" style={{background: "transparent", color: "black" ,border: "1px solid #e32207", marginTop: "15px"}}>
                                                                    <FontAwesomeIcon icon={faUser}  style={{marginRight: "6px"}}/>
                                                                    Hello {user.Name}
                                                                    </a>
                                                                    
                                                                )
                                                        } 
                                                    
                                                    })}

                                                <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink" style={{padding: "5px"}}>
                                                    <li><Link to="/userProfile" style={{color: "black"}}>Your Profile</Link></li>
                                                    <hr />
                                                    <li><Link to="/accountSetting" style={{color: "black"}}>Account Setting</Link></li>
                                                    <hr />
                                                    <li><Link to="/" onClick={()=>signout()} style={{color: "black"}}>LogOut</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* ========================================================Buttons============================================================ */}
                                        <div style={{ marginLeft: "auto" }} id="sign_auth" hidden={!toggleBtnsWithIcons}>
                                            <a href="#" style={{ textDecoration: "none" }}>
                                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#logInModal" style={{background: 'transparent', color: '#e32207'}}>
                                                    LogIn
                                                </button>
                                            </a>
                                            <a href="#" style={{ textDecoration: "none" }}>
                                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#signUpModal">
                                                    SignUp
                                                </button>
                                            </a>

                                        </div>
                                        {/* ==================================================================================================================== */}
                                    </div>
                                    <div
                                        className="cart-language"
                                        style={{ width: "auto", display: "flex", marginLeft: "auto",  borderLeft: "1px solid #dfe2e6",  marginLeft: "20px" }}
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
                                                style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.5vw", marginLeft: "30px" }}
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
                        </div>
                        </div>
                    </section>
                    <OrderList orderLength={orderLength} />
                    <section
                        className="search-bar container-fluid"
                        style={{ backgroundColor: "white", borderBottom: "1px solid #dfe2e6" , padding: "0"}}
                    // style="background-color: white; border-bottom: 1px solid var(--border-color)"
                    >
                        <div className="row mx-4">
                            <div className="col-lg-7 col-md-12 mt-1 pt-1">
                                <form>
                                    <div className="input-group mb-2 search-side">
                                        <input
                                            type="Search"
                                            className="form-control"
                                            placeholder="Find A Restaurant"
                                            style={{ padding: "10px" }}
                                            onChange={(e) => {
                                                handleChangeRes(e);
                                              }}
                                        />
                                        <span
                                            className="input-group-text"
                                            id="basic-addon2"
                                            style={{ backgroundColor: "white" }}
                                        > <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                                        </span>
                                    </div>
                                </form>
                                <span className="position-absolute"  style={{zIndex:3000,top:"160px",left:"40px",width:"50%"}} >
                    {
                       showRes&&<ul className="list-group list-group-flush dropdownRes">
                       {filteredList(ResList,SearchRes).map((Res) => {
                         return <Link to={`/Restaurant/${Res.id}`} style={{"textDecoration":"none"}}><li className="list-group-item py-2"><span className="logoResDrop p-1 mx-3"><img src={Res.ImageLogo} width="20px" height="20px"/></span>{Res.ResName}</li></Link>;
                       })}
                        {/* <Link to="/" style={{"textDecoration":"none"}}><li className="list-group-item">Zaks</li></Link>
                        <Link to="/" style={{"textDecoration":"none"}}><li class="list-group-item">Mac</li></Link>
                        <Link to="/" style={{"textDecoration":"none"}}><li class="list-group-item">Kfc</li></Link>
                        <Link to="/" style={{"textDecoration":"none"}}><li class="list-group-item">blal</li></Link> */}
 
                       </ul>
                     }

                    </span>
                            </div>
                            <div className="col-lg-5 col-md-12 location-side">
                                <img
                                    src="https://elmenus.com/public/img/locationHeader.svg"
                                    alt="iconImage"
                                    className="imgIcon mx-2"
                                />
                                <h4 className="headerLocation mx-2">Dine-out in <span>{localStorage.getItem('areaName')}</span></h4>
                                {/* onClick={() => { openModel() }} this onClick event must be put on CHANGE button */}
                                <button  type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal"  >CHANGE</button>
                            </div>
                        </div>
                    </section>
                </nav>
            </nav>
            <section aria-label="breadcrumb" className="container-fluid d-lg-block d-none" style={{ borderBottom: "1px solid #dfe2eb" , padding: "0"}}>
                <div className="row navCont" style={{ margin: "0 120px" }}>
                    <div className="col-12 pt-2" >
                        <ol className="breadcrumb" style={{zIndex:-3000}} >
                            <li className="breadcrumb-item" ><Link to="/Home">Home</Link></li>
                            <li className="breadcrumb-item"><a href="#" className='color-a'>{localStorage.getItem('Name')}</a></li>
                            <li className="breadcrumb-item"><a href="#" className='color-a'>{localStorage.getItem('areaName')}</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{localStorage.getItem('areaName')} Restaurants </li>
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
                                        {/* =====================================================Buttons=============================================================== */}
                                        <div style={{ marginLeft: "auto" }} hidden={!toggleBtnsWithIcons}>
                                            <a href="#" style={{ textDecoration: "none" }}>
                                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#logInModal" style={{ fontSize: "12px", fontWeight: "700", backgroundColor: "white" }}>
                                                    LOGIN
                                                </button>
                                            </a>
                                            <a href="#" style={{ textDecoration: "none" }}>
                                                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#signUpModal" style={{ backgroundColor: "#e32207", color: "white", fontSize: "12px", fontWeight: "700" }}>
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

                    
                    {/* ************ٍSignUp Modal*********** */}
                    <div class="modal fade" id="signUpModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
      
                        <form onSubmit={handleSignSubmit}>
                            <img id="signLogo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397754952/e518a9efa57162be0afd9826667d697e.jpg" />
                            <div id="Up">
                                <div className="inpt mt-3">
                                    <input type='text' placeholder="Name" className="form-control" name='name' value={signInput.name} onChange={handleSignChange} />
                                    <p style={{color: "red", fontSize: "12px"}}>{signFormErrors.name}</p>
                                </div>

                                <div className="inpt mt-3">
                                    <input type='text' placeholder="Email" className="form-control" name='email' value={signInput.email} onChange={handleSignChange} />
                                    <p style={{color: "red", fontSize: "12px"}}>{signFormErrors.email}</p>
                                </div>

                                <div className="inpt mt-3">
                                    <input type='password' placeholder="Password" className="form-control" name='password' value={signInput.password} onChange={handleSignChange} />
                                    <p style={{color: "red", fontSize: "12px"}}>{signFormErrors.password}</p>
                                </div>

                                <div className="submitBtn mt-3">

                                    <button type="submit" className="btn crtBtn" >Create an account</button>
                                </div>

                            </div>
                            <div className="note">
                                <a>By creating an account, you agree to our Terms of service and Privacy policy</a>
                            </div>
                        </form>                         
                    </div>           
                    </div>
                </div>
                </div>
            {/* ************LogIn Modal***************** */}
            
            {/* <!-- Modal --> */}
            <div class="modal fade" id="logInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                <div>
                            <img id="logLogo" src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397754952/e518a9efa57162be0afd9826667d697e.jpg" />
                            <form id="log" onSubmit={handleSubmit}>
                                
                                <div className="inpt mt-3">
                                    <input type='text' placeholder="email" className="form-control" name="email" onChange={handleChange} value={logInput.email}/>
                                    <p style={{color: "red", fontSize: "12px"}}>{formErrors.email}</p>
                                </div>

                                <div className="inpt mt-3">
                                    <input type='password' placeholder="password" className="form-control" name='password' onChange={handleChange} value={logInput.password}/>
                                    <p style={{color: "red", fontSize: "12px"}}>{formErrors.password}</p>
                                </div>

                                <div className="button mt-3">
                                    <button type="submit" className="btn btn-danger">Log in</button>
                                </div>
{/* 
                                <div className="button mt-3">
                                    <button type="submit" className="btn faceBtn">Log in with Facebook</button>
                                </div>

                                <div className="button mt-3">
                                    <button type="submit" className="btn googBtn">Log in with Google</button>
                                </div> */}

                            </form>
                            <div className="frgtPass">
                                <a>I forget my password</a>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            </div>
        
            



        </>
    );
  };