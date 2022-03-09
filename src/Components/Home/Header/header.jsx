import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../style/home.css";
import "../../main-style.css";
import elmenusLogo from "../../../images/Home/elmenusLogo.svg";
import search from "../../../images/Home/search.jpeg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStore,
  faArrowRight,
  faMotorcycle,
  faUtensils,
  faSearch
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import Card from "./card";
import { useSelector, useDispatch } from "react-redux";
import changeLanguage from "../../../store/action/languageAction";
import React, { useState, useEffect } from "react";
import ReactModal from "react-modal";
import { auth } from "../../firebase/firebase.config";
import { firestore } from "../../firebase/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useContext } from "react";
import { cityContext } from "../../Context/City";

export default function Header() {
  const[showRes,setshowRes]=useState(false)
  const listOfCities = collection(firestore, "Cities");
  const listOfRes = collection(firestore,"Restaurant")
  const [CityList, setCityList] = useState([]);
  const [ResList, setResList] = useState([]);
  const[SearchRes,setSearchRes] = useState('');
  const[ResListbySearch,setResListbySearch]=useState([])
  const {City,setCity}=useContext(cityContext)  
  const language = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(changeLanguage(language == "English" ? "العربية" : "English"));
  };
  const handleChangeCity = (e) => {
    e.preventDefault();
    localStorage.setItem('Name', City);
    setCity(e.target.value);
  
  };
 const handleChangeRes=(e) =>{
   if(e.target.value==''){
   setshowRes(false)
   }else{
    setshowRes(true)
    setSearchRes(e.target.value)
   }
   console.log(ResListbySearch)
 }
  // console.log(City)
  useEffect(() => {
    const getCity = async () => {
      const data = await getDocs(listOfCities);
      setCityList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    const getRes = async()=>{
      const data = await getDocs(listOfRes);
      setResList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    }
    getCity();
    getRes();
  }, []);
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
  
  //=========================Modals state========================
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [logModalIsOpen, setLogModalIsOpen] = useState(false);

  //=======================LogIn===============================

  const initialState = { email: "", password: "" };
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

  const initialSignState = { email: "", password: "", name: "" };
  const [signInput, setSignInput] = useState("");

  const handleSignChange = ({ target }) => {
    setSignInput({
      ...signInput,
      [target.name]: target.value,
    });
  };
   
  const handleSignSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(
        auth,
        signInput.email,
        signInput.password,
        signInput.name
      );
      setSignInput(initialSignState);
      setModalIsOpen(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <div className="home_main">
        <nav className="navbar navbar-light px-5 py-4">
          <div className="container-fluid">
            <div className="home_logo">
              <a className="navbar-brand" href="">
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
                    onClick={() => {
                      setLogModalIsOpen(true);
                      setModalIsOpen(false);
                    }}
                  >
                    LogIn
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#SignModal"
                    onClick={() => {
                      setModalIsOpen(true);
                      setLogModalIsOpen(false);
                    }}
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
                      <FontAwesomeIcon icon={faStore} />
                    </span>
                    <input type="Search" placeholder="Find a Restaurant" onChange={(e) => {
                        handleChangeRes(e);
                      }} />
                    
                    
                    <span className="search-icon text-secondary">
                      <FontAwesomeIcon icon={faSearch}/>
                    </span>
                    
                    
                  </div>
                  <span>

                    {
                       showRes&&<ul className="list-group list-group-flush dropdownRes">
                       {filteredList(ResList,SearchRes).map((Res) => {
                         return <Link to="/" style={{"textDecoration":"none"}}><li className="list-group-item py-2"><span className="logoResDrop p-1 mx-3"><img src={Res.ImageLogo} width="20px" height="20px"/></span>{Res.ResName}</li></Link>;
                       })}
                        {/* <Link to="/" style={{"textDecoration":"none"}}><li className="list-group-item">Zaks</li></Link>
                        <Link to="/" style={{"textDecoration":"none"}}><li class="list-group-item">Mac</li></Link>
                        <Link to="/" style={{"textDecoration":"none"}}><li class="list-group-item">Kfc</li></Link>
                        <Link to="/" style={{"textDecoration":"none"}}><li class="list-group-item">blal</li></Link> */}
 
                       </ul>
                     }
                    </span>

                </div>
                <div className="col-xl-2 col-xs-5">
                  <div className="input-holder2">
                    
                    <input
                      className="floating-label-field floating-label-field--s3"
                      icon="Search"
                      type="Search"
                      name="city"
                      list="cityname"
                      value={City}
                      autoComplete="off"
                      onChange={(e) => {
                        handleChangeCity(e);
                      }}
                    />
                      {/* <span>value={localStorage.getItem('Name')}</span> */}

                    <datalist id="cityname">
                      {CityList.map((data) => {
                        // console.log(data);
                        return <option value={data.Name}></option>;
                      })}
                      {/* <option value="">sondos</option> */}
                      
                    </datalist>
                  </div>
                </div>
                <div className="col-xl-2 col-xs-5 position-relative py-1" >
                  <a href="">
                    <button
                      
                      className="btn-primary btn py-3 "
                    >
                      Go <FontAwesomeIcon icon={faArrowRight} />{" "}
                      
                    </button>
                  </a>
                </div>
              </form>
            </div>
            <div className="section_footer ">
              <h6 className="section_footer_title text-center mb-4">
                {" "}
                Or explore elmenus
              </h6>
              <div class=" row section_footer_links mx-1 py-3">
                <Card
                  name="Delivery"
                  iconName={faMotorcycle}
                  iconName2={faArrowRight}
                  para="Get food delivered from amazing restaurants around you "
                />
                <Card
                  name="Dine Out"
                  iconName={faUtensils}
                  iconName2={faArrowRight}
                  para="Browse restaurants by mood, cuisine, area or dish names "
                />
              </div>
            </div>
          </div>
          <div style={{ height: 200 }}></div>
        </section>
        {/* <!--footer section--> */}
      </div>

      {/* ************************************ٍSignUp Modal******************************* */}
      <div className="container-fluid modalContainer">
        {/* This Button instead of signUp button till integration with navbar */}
        {/* <button className="btn btn-danger" onClick={() => { setModalIsOpen(true) }}>Open Modal</button> */}
        {/* ****************************************************************************** */}

        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => {
            setModalIsOpen(false);
          }}
        >
          <div className="bgForm">
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                setModalIsOpen(false);
              }}
            ></button>

            <form className="form-container" onSubmit={handleSignSubmit}>
              <img
                id="signLogo"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397754952/e518a9efa57162be0afd9826667d697e.jpg"
              />
              <div id="log">
                <div className="inpt mt-3">
                  <input
                    type="text"
                    placeholder="Name"
                    className="form-control"
                    name="name"
                    autoComplete="off"
                    value={signInput.name}
                    onChange={handleSignChange}
                  />
                </div>

                <div className="inpt mt-3">
                  <input
                    type="text"
                    placeholder="Email"
                    className="form-control"
                    name="email"
                    autoComplete="off"
                    value={signInput.email}
                    onChange={handleSignChange}
                  />
                </div>

                <div className="inpt mt-3">
                  <input
                    type="password"
                    placeholder="Password"
                    className="form-control"
                    name="password"
                    autoComplete="off"
                    value={signInput.password}
                    onChange={handleSignChange}
                  />
                </div>

                <div className="submitBtn mt-3">
                  <button type="submit" className="btn crtBtn">
                    Create an account
                  </button>
                </div>
              </div>
              <div className="note">
                <a>
                  By creating an account, you agree to our Terms of service and
                  Privacy policy
                </a>
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

        <ReactModal
          isOpen={logModalIsOpen}
          onRequestClose={() => {
            setLogModalIsOpen(false);
          }}
        >
          <div className="bgForm">
            <button
              type="button"
              className="btn-close"
              onClick={() => {
                setLogModalIsOpen(false);
              }}
            ></button>

            <div className="form-container">
              <img
                id="logLogo"
                src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/v1397754952/e518a9efa57162be0afd9826667d697e.jpg"
              />
              <form id="log" onSubmit={handleSubmit}>
                <div className="inpt mt-3">
                  <input
                    type="text"
                    placeholder="email"
                    className="form-control"
                    name="email"
                    onChange={handleChange}
                    value={logInput.email}
                    autoComplete="off"
                  />
                </div>

                <div className="inpt mt-3">
                  <input
                    type="password"
                    placeholder="password"
                    className="form-control"
                    name="password"
                    onChange={handleChange}
                    value={logInput.password}
                    autoComplete="off"
                  />
                </div>

                <div className="button mt-3">
                  <button type="submit" className="btn btn-danger">
                    Log in
                  </button>
                </div>

                <div className="button mt-3">
                  <button type="submit" className="btn goglBtn">
                    Log in with Facebook
                  </button>
                </div>

                <div className="button mt-3">
                  <button type="submit" className="btn btn-primary">
                    Log in with Google
                  </button>
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
