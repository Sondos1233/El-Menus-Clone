import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase-config";
import {collection,getDocs,docs,query,collectionGroup} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import "../Delivery.scss";
import "../mixins.scss";
import "../main-style.css";

const OffersCard = () => {
  const [Res, setRes] = useState([]);
  const [offer, setOffer] = useState([]);

  const RestaurantCollecRef = collection(firestore, "Restaurant");

  /* useEffect(() => {
    const getRes = async () => {
      const data = await getDocs(RestaurantCollecRef);
      setRes(
        data.docs.map((doc) => {
          const bla = async () => {
            let q = query(collectionGroup(firestore, "Offers"));
            const querySnapshot = await getDocs(q);
            setOffer(
              querySnapshot.forEach((doc) => {
                return doc.data();
              })
            );
          };
          bla();
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
  });*/

  return (
    <>
      {offer.map((i) => {
        return <div>{console.log( i.Description)}</div>;
      })}

      <section className="container-fluid aTastyOffers">
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

        <div className="container-fluid" id="aOfferCards">
          <div className="row mb-3 " id="aOfferCardsrow">
            <div className="col-lg-12 col-md-4 position-relative aproductDiv">
              <Link className="aLinkCard" to="/Restaurant/1">
                <figure className="aFigRes">
                  <img
                    id="myimg"
                    src="	https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/2ee22548-148d-426e-9423-a6150ac149fc.jpg" //{/*url2*/}
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
                    src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/7ce1525f-bba1-4434-bd64-22a440fb74fb.jpg" //{/*url1*/}
                    alt=""
                    className="rounded-3 me-3 float-start"
                  />

                  <h3 className="card-title " id="aResName">
                    {/*Res.ResName*/} RES NAME
                  </h3>
                  <div className="mt-3">
                    <div
                      className="alert-success aDisAlert aDisAlertof"
                      role="alert"
                    >
                      {/*doc.data().Description*/}
                    </div>
                  </div>
                </div>
              </Link>

              {/* <button type="button " id="previous" className="rounded-circle">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="white"
                  className="bi bi-chevron-left"
                  viewBox="0 0 20 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
                  />
                </svg>{" "}
              </button> */}

              {/* <button type="button" id="next" className="rounded-circle">
                {" "}
                <b>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="white"
                    className="bi bi-chevron-right"
                    viewBox="0 0 20 16"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                    />
                  </svg>{" "}
                </b>
              </button> */}

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OffersCard;
