import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fastar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import "../Review.scss";
import ReviewForm from "./reviewForm";
const Reviews = () => {
  const[addReview,setAddReview] = useState(true);
  return (
    <>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="Reviews"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          {
            addReview?
            <div className="container-fluid">
            <div className="float-end mb-3">
              <button className="btn rounded-3 btnAddReview" onClick={()=>setAddReview(false)}>Add Review</button>
            </div>
            <div style={{ clear: "both" }}></div>
            <div className="row">
              <div className="col-4">
                <h4 className="d-inline me-2"> Count Reviews</h4>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "gray" }}
                ></FontAwesomeIcon>
              </div>
              <div className="col-8"></div>
            </div>
            <div className="container-fluid mt-5">
              <div className="row">
                <div className="col-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt="user"
                    width="20%"
                    className="rounded-circle"
                  />
                  <span>User Name</span>
                </div>
                <div className="col-8 ">
                  <div>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mt-3 mb-2">
                    <p style={{ fontSize: "14px" }}>Good</p>
                  </div>
                  <hr className="m-2 mt-5 mb-5" />
                </div>
                <div className="col-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt="user"
                    width="20%"
                    className="rounded-circle"
                  />
                  <span>User Name</span>
                </div>
                <div className="col-8 ">
                  <div>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                    <FontAwesomeIcon
                      style={{ color: "#e32207", fontSize: "13px" }}
                      icon={fastar}
                    ></FontAwesomeIcon>
                  </div>
                  <div className="mt-3 mb-2">
                    <p style={{ fontSize: "14px" }}>Good</p>
                  </div>
                  <hr className="m-2 mt-5 mb-5" />
                </div>
              </div>
            </div>
          </div>
            :
            <ReviewForm setAddReview={setAddReview} />
          }
        </div>
      </div>
    </>
  );
};

export default Reviews;
