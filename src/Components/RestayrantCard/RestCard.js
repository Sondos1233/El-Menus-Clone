import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faStar, faCircle, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { firestore } from "../../firebase/firebase-config";
import {
    collection,
    getDocs,
    docs,
    query,
    collectionGroup,
  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const RestCard = () => {
    const [Res, setRes] = useState([]);
  const [offer, setOffer] = useState([]);

  const RestaurantCollecRef = collection(firestore, "Restaurant");

  useEffect(() => {
    const getRes = async () => {
      const data = await getDocs(RestaurantCollecRef);
      setRes(
        data.docs.map((doc) => {
          if (
            doc.data().IsAccepted == undefined ||
            doc.data().IsAccepted == true
          ) {
          }
          return doc.data();
        })
      );
    };
    getRes();
    const bla = async () => {
      let q = query(collectionGroup(firestore, "Offers"));
      const querySnapshot = await getDocs(q);
      setOffer(
        querySnapshot.docs.map((doc)=> {return doc.data()})
      );
    };
    bla();
  });
let k;
  let counter = 0;
function hello(rate){
    let count = 0 ;
    let span=[];
    for(let i =0 ; i<Math.floor(rate); i++){
        count++;
          span.push(<FontAwesomeIcon
         style={{ color: "gold", fontSize: "12px" }}
         icon={faStar}
         className="flex-fill"
       ></FontAwesomeIcon>)
    }
    for(let i =count; i<5 ; i++){
        span.push( <FontAwesomeIcon
        style={{ color: "gray", fontSize: "12px" }}
        icon={faStar}
        className="flex-fill"
      ></FontAwesomeIcon>)
    }
    return span;
}
  return (
    <>
      <div className="container-fluid aResDiv ">
        <div className="row" id="aResDivrow">
        {Res.map((res,index)=>{
              return(
          <div className="col-lg-4 col-md-12">
            <div className="aContentCard">
              <Link to="/Restaurant/id" className="aLinkCard">
                <div className="card aD">
                  <figure className="aFigRes position-relative">
                    <img
                      src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/11f6836e-26a0-4a7a-ab99-5f99c025a67c.jpg"
                      className="aImg card-img-top"
                      alt="..."
                    />
                    <div className="aSliderImgCrd d-flex justify-content-end ">
                      <FontAwesomeIcon
                        className="align-self-center  "
                        icon={faChevronRight}
                        style={{ marginBottom: "40px" }}
                      ></FontAwesomeIcon>
                    </div>
                    <figcaption className="aImgCaption">
                      <h4 className="aImgTitle">
                        Broasted Fried Chicken with Syrian Flavor
                      </h4>
                    </figcaption>
                  </figure>
                  <div className="card-body aCardBody">
                    <div>
                      <div className=" d-flex bd-highlight flex-row align-items-start">
                        <img
                          id="aImgRes"
                          src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/fce4e598-a3a8-11e8-b2ca-0242ac110002.jpg"
                          alt=""
                          className="rounded-3 me-3 "
                        />
                        <h3 id="aResName">
                          {res.ResName}
                          <br />
                          
                          {
                         k = hello(res.Rate)
                         }
                         {
                             k.forEach(i=> i)
                         }
                          
                          <span id="aResType">{res.Type+" , "}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="mt-1">
                      <div className="alert-success aDisAlert" role="alert">
                      {(typeof offer[index]?.Description != "undefined" ? offer[index]?.Description:" ")}
                      </div>
                    </div>
                    <hr />
                    <div
                      style={{ marginTop: "-10px", width: "100%" }}
                      className="d-flex flex-wrap "
                    >
                      <div>
                        <FontAwesomeIcon
                          style={{ color: "gray", flexBasis: "10px" }}
                          icon={faMotorcycle}
                        >
                        </FontAwesomeIcon>
                          60 mins&nbsp;{" "}
                      </div>
                      <div>
                        <FontAwesomeIcon
                          style={{
                            fontSize: "smaller",
                            flexBasis: "1000%",
                            color: "#4caf50",
                          }}
                          icon={faCircle}
                        >
                        </FontAwesomeIcon>
                          Order online&nbsp;
                      </div>

                      <div>
                        <FontAwesomeIcon
                          style={{ color: " #f7b500", flexBasis: "20%" }}
                         icon={faStreetView}
                        >
                          {" "}
                        </FontAwesomeIcon>
                          on tracking
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            {counter++}
            </div>
          </div>
        )})}
        </div>

        <div className="mt-5 mb-5 d-grid gap-1">
          <button className="btn aLoadButton" type="button">
            LOAD MORE RESTAURANTS
          </button>
        </div>
      </div>
    </>
  );
};
export default RestCard;
