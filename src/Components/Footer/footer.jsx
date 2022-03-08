import React from "react";
import { useSelector} from "react-redux";
import logo from "../../images/footer/newLogo.svg";
import appStore from "../../images/footer/get-appstore.png";
import gPlay from "../../images/footer/get-gplay.png";
import appgalary from '../../images/footer/appGallery.png'
import Cities from "./Cities_list";
import Areas from "./Areas_list";
import Dishes from "./Dishes_list";
import About from "./footerF";
import "./footer_style/footer-style.css";
import '../../Components/main-style.css'
import Social from "./socialMedia";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitterSquare,
  faLinkedin,
  faFacebookSquare,
  faInstagramSquare
} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    const language = useSelector((state) => state.language.lang);

    const City = [
      "Cairo",
      "Alexandria",
      "North Coat",
      "El Mansoura",
      "sharm Elshikh",
      "Damiata",
      "Suez",
      "Hurdga",
      "Tanta",
      "Port Said",
      "Ismailia",
      "Dhab",
      "Alfayom",
      "Minia",
      "Benha",
    ];
    const Area = [
      "El helwa street",
      "Segra",
      "El Morashaha",
      "El Nahas",
      "El Salakhana",
      "El Tagneed",
      "El Sayed El Badwia",
      "Saeed St.",
      "El Egezy",
      "Sekket El Mahala",
      "El Modereya",
      "Kafr Essam",
      "Stadium",
      "Cairo",
      "El Fateh St.",
    ];
    const Dish = [
      "pizza",
      "Fried Chicken",
      "Shawerma",
      "pasta",
      "Grilled Chicken",
      "Burgers",
      "Grills",
      "Seafood",
      "Sandwiches",
      "Kashary",
      "Fries",
      "Sushi",
      "Noodles",
      "juices",
      "Crepe",
    ];
    const social = [ faTwitterSquare, faLinkedin , faFacebookSquare,faInstagramSquare];
    const footerlist = [
      "About Us",
      "Terms and Conditions",
      "Privacy",
      "Careers",
      "Join us"
    ];

    return (
      <>
        <footer class="main_footer" dir={language == "English" ? "rtl" : "ltr"}>
          <div class="container">
            <div class="row">
              <div class="col-xl-2 col-lg-12 footer-images">
                <div class="mb-3 mt-2">
                  <a href="">
                    <img src={logo} class="img1" />
                  </a>
                </div>
                <div>
                  <a href="">
                    <img src={gPlay} />
                  </a>
                  <a href="">
                    <img src={appStore} />
                  </a>
                </div>
              </div>
              <div class="col-xl-3 col-lg-12">
                <h4>Cities</h4>
                <ul class="list-items">
                  {City.map((city) => {
                    return <Cities name={city} />;
                  })}
                </ul>
              </div>
              <div class=" col-xl-4 col-lg-12">
                <h4>Areas</h4>

                <ul class="list-items">
                  {Area.map((area) => {
                    return <Areas name={area} />;
                  })}
                </ul>
              </div>
              <div class="col-xl-3 col-lg-12">
                <h4>Dishes</h4>
                <ul class="list-items">
                  {Dish.map((dish) => {
                    return <Dishes name={dish} />;
                  })}
                </ul>
              </div>
            </div>
            <div class="footer_footer">
              <div class="row">
                <div class="col-xl-2 social">
                  <ul>
                  {social.map((media) => {
                    return <Social name={media} />;
                  })}
                  </ul>
                </div>
                <div class="col-xl-8 more-links">
                  <ul>

                    <li><Link to="/"></Link>About Us</li>
                    <li><Link to="/"></Link>Terms and Conditions</li>
                    <li><Link to="/"></Link>Privacy</li>
                    <li><Link to="/Careers">Careers</Link></li>
                    <li><Link to="/JoinUs">Join Us</Link></li>
                  </ul>
                </div>
                <div class="col-xl-2 copyright mt-1">© 2021 elmenus</div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
  }
