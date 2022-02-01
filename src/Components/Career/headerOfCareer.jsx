
import logo from '../../images/Career/thumb_photo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {
    faFacebookSquare,
    faInstagramSquare
  } from "@fortawesome/free-brands-svg-icons";
  function HeaderOfCareer () {
    
  return (
    <>
      <nav class="navbar navbar-light ">
        <div class="container">
          <div class="home_logo">
            <h1>
              <a class="navbar-brand" href="#">
                <img
                  src={logo}
                  alt=""
                  class="d-inline-block align-text-top"
                />
              </a>
            </h1>
          </div>
          <div class="nav_social">
            <div class="d-flex">
              <a href="#Home" class="btn btn-primary" style={{backgroundColor:"#ff4612" ,borderColor:"#ff4612"}}>
                Company Website<FontAwesomeIcon icon={faArrowCircleRight} className='ms-2'/>
              </a>
              <a href="https://www.facebook.com/elmenus">
                <FontAwesomeIcon icon={faFacebookSquare} className='ms-3 mt-2 fs-4 social'/>
              </a>
              <a href="https://www.instagram.com/elmenus/">
              <FontAwesomeIcon icon={faInstagramSquare} className='ms-3 mt-2 fs-4 social'/>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div class="main position-relative">
        <div class="main-second">
            {/* <!--picture staff--> */}
        <div class="container">
            <div class="info text-center position-relative text-white ">
                <h2>Join our growing talented team</h2>
                <h3 class="mt-3">Impact Millions of Monthly Users</h3>
            </div>
        </div>
        </div>
    </div>
    </>
  );
};

export default HeaderOfCareer;
