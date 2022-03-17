import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../Firebase/firebase-config";
import { collection, getDocs, docs, query, collectionGroup } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import "../Delivery.scss";
import "../mixins.scss";
import "../main-style.css";
import '../Dineout/Dineout.scss'

const OffersCard = () => {
  const [Res, setRes] = useState([]);
  const [offer, setOffer] = useState([]);
  const [logo, setLogo] = useState([]);
  const [attract, setAttract] = useState([])
  const RestaurantCollecRef = collection(firestore, "Restaurant");

  let arr = []; let arr2 = [];

  useEffect(() => {
    const getRes = async () => {
      const data = await getDocs(RestaurantCollecRef);
      setRes(
        data.docs.map((doc) => {
         
          return doc;
        })
      );
    };
    getRes();
    const bla = async () => {
      let q = query(collectionGroup(firestore, "Offers"));
      const querySnapshot = await getDocs(q);
      setOffer(
        querySnapshot.docs.map((doc) => { return doc.data() })
      );
    };
    bla();
  });

  return (
    <>
        {/* <div className="container-fluid" id="aWords">
          <div className="row">
            <div className="col-6">
              <p id="aTastPar">Tasty Offers</p>
            </div>
            <div className="col-6 ">
              <a className="float-end p-2" id="aSeeallLink" href="#">
                See All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
        </div> */}

        <section className="disArear-Slider container-fluid my-5 overflow-hidden">
      <section className="container-fluid aTastyOffers">

          <div className="row">

            <div className="col-12 d-flex">
              <div class="Shrouk-Slider slider slider--first js-slider">
                <div class="slider__wrapper">

                    <div className="container-fluid" id="aOfferCards">
                      <div className="row mb-3 " id="aOfferCardsrow">
                  <div class="slider__inner js-slider-inner">

                        {Res.map((res, index) => {
                          return (
                             res.data().IsActivated&&<div class="slider__slide" >
                             <div className="col-lg-3 col-md-4 position-relative aproductDiv" style={{ height:"300px" ,width: "300px" }}>
                               <Link className="aLinkCard" to={`/Restaurant/${res.id}`}>
                                 <figure className="aFigRes">
                                   <img
                                     id="myimg"
                                     src={res.data().ImageURL}
                                     className="card-img-top aImgCard"
                                     alt="..."
                                   />
                                   <figcaption className="aImgCaption">
                                     <h4 className="aImgTitle">
                                       Broasted Fried Chicken with Syrian Flavor
                                     </h4>
                                   </figcaption>
                                 </figure>

                                 <div className=" position-relative card-body aCardBody">
                                   <img
                                     id="aImgRes"

                                     src={res.data().ImageLogo}
                                     alt=""
                                     className="rounded-3 me-3 float-start"
                                   />

                                   <h3 className="card-title " id="aResName">
                                     {res.data().ResName}
                                   </h3>
                                   <div className="mt-3">
                                     <div
                                       className="alert-success aDisAlert aDisAlertof"
                                       role="alert"
                                     >
                                       {(typeof offer[index]?.Description != "undefined" ? offer[index]?.Description : " ")}
                                     </div>
                                   </div>
                                 </div>
                               </Link>
                             </div>
                           </div>

                             
                          )
                        })
                        }
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default OffersCard;
