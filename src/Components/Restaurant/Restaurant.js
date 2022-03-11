import "../main-style.css";
import "../Restaurant.scss";
import "../mixins.scss";
import ResCover from "./ResCover/Rescover";
import ResDet from "./ResDetails";
import NavBills from "./navbills";
import { useEffect, useState } from "react";
import Menu from "./Menus";
import About from "./About";
import Branches from "./Branches";
import Reviews from "./Reviews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faClock, faMapMarkerAlt, faMotorcycle, faWallet } from "@fortawesome/free-solid-svg-icons";

function SwitchCase(props) {
  switch (props.value) {
    case "Menu":
      return <Menu />;
    case "About":
      return <About />;
    case "Branches":
      return <Branches />;
    default:
      return <Reviews />;
  }
}

const Restaurant = () => {
  const [data, setData] = useState("Menu");
  return (
    <>
      <ResCover
        pcode="Code"
        offerdisc="Discounts on orders above 120 EGP Expires: in a month"
      />

      <div className="aRestDetDiv container-fluid">
        <div className="row ">
          <ResDet />
        </div>
      </div>

      <hr
        style={{
          width: "90%",
          margin: "5px auto",
          color: "gray",
          borderBottom: "2px solid gray",
        }}
      />

      <div className="container-fluid aTapsDiv mt-4">
        <div className="row">
          <div className="col-6">
            <NavBills setData={setData} />
          </div>
          <div className="col-6">
            <div className="d-flex flex-row justify-content-end">
              <div className="ms-3" style={{ width: "fitContent" }}>
                <span className="d-inline-block aIcont">
                  <FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>
                </span>
                <p className="d-inline-block aIcont">Live Tracking</p>
              </div>
              <div className="ms-3" style={{ width: "fitContent" }}>
                <span className="d-inline-block aIcond">
                  <FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon>
                </span>
                <p className="d-inline-block aIcond">45 mins</p>
              </div>
              <div className="ms-3" style={{ width: "fitContent" }}>
                <span className="d-inline-block aIconw">
                  <FontAwesomeIcon icon={faWallet}></FontAwesomeIcon>
                </span>
                <p className="d-inline-block aIconw">0 Egp</p>
              </div>
              <div className="ms-3" style={{ width: "fitContent" }}>
                <span className="d-inline-block aIconc">
                  <FontAwesomeIcon icon={faClock}></FontAwesomeIcon>
                </span>
                <p className="d-inline-block aIconc">02:00 PM - 01:30 AM</p>
              </div>
            </div>
          </div>
        </div>
        <div className="tab-content" id="pills-tabContent">
          <div className="row">
            <div className="col-9">
              <SwitchCase value={data} />
            </div>
            <div className="col-3">
              <div className="aDeliverAddr">
                <div className="d-flex flex-column">
                  <span className="aMotoIcon">
                    <FontAwesomeIcon className="fas fa-motorcycle"></FontAwesomeIcon>
                  </span>
                  <p className="aDeliverto">
                    <span>Delivers to</span>
                    Corniche El Maadi
                  </p>
                  <button className="btn">
                    Change Address{" "}
                    <FontAwesomeIcon icon={faArrowRight} className="float-right"></FontAwesomeIcon>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Restaurant;
