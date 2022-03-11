import "../About.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faHome,
  faMapMarkerAlt,
  faMotorcycle,
  faTag,
} from "@fortawesome/free-solid-svg-icons";
import GoogleMapReact from "google-map-react";
import { faStar, faSun } from "@fortawesome/free-regular-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { firestore , storage} from "../../Firebase/firebase-config";
import {
  collection,
  getDoc,
  getDocs,
  query,doc,docs,
  collectionGroup,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
const About = () => {
  const defaultProps = {
    center: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom: 11,
  };
  let id = useParams();
  id = id.id;
  const [Res, setRes] = useState([]);
  const [branch, setBranches] = useState([]);


const RestaurantCollecdocRef = doc(firestore, "Restaurant",id);
const BranchesCollecdocRef = collection(firestore, "Restaurant", id, 'Branches')

useEffect(() => {
  const getRes = async () => {
    const data = await getDoc(RestaurantCollecdocRef);
    setRes(data.data())
  };
  getRes();

  const getBranches = async () =>{
    const data = await getDocs(BranchesCollecdocRef);
      setBranches(
        data.docs.map((doc) => {
          return doc.data();
        })
      )
    };
    getBranches();
  

});
  return (
    <>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="About"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="container-fluid aboutDivInfo">
            <div className="d-flex p-2 flex-column">
              <div>
                <FontAwesomeIcon icon={faHome} />{" "}
                <span className="aboutDivText"> {Res.Phone} </span>
              </div>
              <div>
                {branch.map((res,index)=>{
                  return (<>
                    <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                  <span className="aboutDivText"> {res.LocName} </span> <br />
                  </>
                  )
                })}
              </div>
              <div>
                {branch.map((res,index)=>{
                  return(
                    <>
                    <FontAwesomeIcon icon={faClock} />{" "}
                    <span className="aboutDivText"> {res.Workinghours} </span><br/>
                    </>
                  )
                })}
                
              </div>
            </div>
          </div>

          <div>
            <div>
              {branch.map((res,index)=>{
                return(
                  <>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />{" "}
                  <span className="aboutDivText"> {res.Address} </span><br/>
                    </>
                  ) 
                })}
              
            </div>
            <div style={{ height: "50vh", width: "100%" }}>
              <GoogleMapReact
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
              >
                <p lat={59.955413} lng={30.337844} text="My Marker"></p>
              </GoogleMapReact>
            </div>
          </div>

          <div className="container-fluid m-3">
            <div className="row mb-5">
              <div className="col-3">
                <FontAwesomeIcon icon={faClock} />{" "}
                
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Working hours{" "}
                </span>
              </div>
              <div className="col-4">
              {branch.map((res,index)=>{
                  return <p><b> {res.Workinghours} </b></p>
                })}
                
              </div>
            </div>
            <div className="row mb-5">
              <div className="col-3">
                <FontAwesomeIcon icon={faClock} />{" "}
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Delivery hours{" "}
                </span>
              </div>
              <div className="col-4">
              {branch.map((res,index)=>{
                  return <p><b> {res.Workinghours} </b></p>
                })}
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <FontAwesomeIcon icon={faStar} />{" "}
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Features{" "}
                </span>
              </div>
              <div className="col-4">
                <FontAwesomeIcon
                  icon={faSun}
                  style={{ fontSize: "50px", textAlign: "center" }}
                ></FontAwesomeIcon>{" "}
                <br />
                <p className="mt-3"> No Smoking Area</p>
              </div>
            </div>
            <div className="row">
              <div className="col-3">
                <FontAwesomeIcon icon={faMotorcycle} />{" "}
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Delivery Areas{" "}
                </span>
              </div>
              <div className="col-4">
                <div className="row">
                  {branch.map(i=>{
                    return(
                      <>
                  <div className="col-4">
                    <div
                      style={{
                        borderRadius: "50%",
                        backgroundColor: "#cecece",
                        width: "50px",
                        height: "50px",
                        position:'relative'
                      }}
                    >
                      <p style={{right:'19px',top:'10px', position:'absolute', fontSize:'17px'}}><b>{i.LocName[0]}</b></p>{" "}
                    </div>
                    <p>{i.LocName}</p>
                  </div>
                      </>
                    )
                  })}
                </div>
              </div>
              <div className="row">
              <div className="col-3">
                <FontAwesomeIcon icon={faTag} />{" "}
                <span style={{ fontSize: "20px", lineHeight: "29px" }}>
                  {" "}
                  Tags{" "}
                </span>
              </div>
              <div className="col-4">
                
                  <div className="rounded-pill" style={{backgroundColor:'#c5c5c5', width:'fit-content'}}>
                <p className="mt-3 p-2 text-white"> {Res.Type} {" "} </p>
                  </div>
                  
              </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
