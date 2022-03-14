import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
export const Header = () => {
    const history = useHistory();
    const goBack=()=>{
     history.goBack()
    }
  return (
    <>
      <nav className="nav-lg-Screen sticky-top d-lg-block d-none">
        <nav className="nav-lg-Screen sticky-top d-lg-block d-none">
          <section
            className="navbar navbar-expand-lg navbar-light pb-0"
            style={{ backgroundColor: "#e32207" }}
          >
            <div
              className="container-fluid"
              style={{
                flexDirection: "row",
                padding: "0 10px",
                backgroundColor: "white",
                borderBottom: "1px solid #dfe2e6",
              }}
            >
              <Link
                className="navbar-brand  p-3 ps-5"
                style={{ borderRight: "1px solid #dfe2e6" }}
                to="/Home"
              >
                <img
                  src="https://elmenus.com/public/img/newLogo.svg"
                  alt=""
                  style={{ width: "120px", maxWidth: "100%", height: "auto" }}
                />
              </Link>
              <div
                className="rightNav"
                style={{ display: "flex", marginLeft: "auto" }}
              >
                <button
                  onClick={goBack}
                  className="pe-5"
                  style={{
                    color: "#7a4dcc",
                    fontWeight: "600",
                    fontSize: "14px",
                    textDecoration: "none",
                    backgroundColor:"white",
                    border:"none"
                  }}
                >
                    <span className="pe-2">Exit Checkout</span>
                  
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </div>
            </div>
          </section>
        </nav>
      </nav>
      <nav className="nav-sm-Screen d-lg-none">
        <div className="text-center py-3">
        <button
                  onClick={goBack}
                  style={{
                    color: "#7a4dcc",
                    fontWeight: "600",
                    fontSize: "14px",
                    textDecoration: "none",
                    backgroundColor:"white",
                    border:"none"
                  }}
                >
                    <span className="pe-2">Exit Checkout</span>
                  
                  <FontAwesomeIcon icon={faArrowRight} />
                </button>
        </div>
      </nav>
    </>
  );
};
