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
import { Link } from "react-router-dom";

export default function Header() {
  const language = useSelector((state) => state.language.lang);
  const dispatch = useDispatch();

  const toggleLanguage = () => {
    dispatch(changeLanguage(language == "English" ? "العربية" : "English"));
    
  };
  return (
    <>
    <div className="home_main"  >
      <nav className="navbar navbar-light px-5 py-4"
       >
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
              {/* <!-- Button trigger modal --> */}
              <div id="sign_auth">
                <button
                  type="button"
                  className="btn btn-link text-white login-btn"
                  data-bs-toggle="modal"
                  data-bs-target="#LogInModal"
                >
                  LogIn
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#SignModal"
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

              <Card name="Delivery" link="/Delivery" iconName={faMotorcycle} iconName2={faArrowRight} para="Get food delivered from amazing restaurants around you "/>
              <Card name="Dine Out" link="/DinOut" iconName={faUtensils} iconName2={faArrowRight} para="Browse restaurants by mood, cuisine, area or dish names "/>
                            
            </div>
          </div>
        </div>
        <div style={{height:200 }}></div>
      </section>
      {/* <!--footer section--> */}
      </div>
    </>
  );
}
