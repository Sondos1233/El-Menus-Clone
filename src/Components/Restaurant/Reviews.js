import { faStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as fastar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Review.scss";
import NoData from '../../images/NoData.svg'

import ReviewForm from "./reviewForm";
import { firestore , storage} from "../../Firebase/firebase-config";
import {
  collection,
  getDoc,
  docs,
  query,doc,getDocs,
  collectionGroup,addDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
const Reviews = (props) => {
console.log(props)
  const[addReview,setAddReview] = useState(true);
  const [Review,setReview] = useState([]);
  let id = useParams();
  id = id.id;
  const ReviewCollec = collection(firestore,'Restaurant',id,'Review');
  useEffect(()=>{
    const getReviews = async()=>{
      const data = await getDocs(ReviewCollec);
      setReview(
        data.docs.map((document)=>{
          return document.data()
        })
      )
    }
    getReviews();
  })
  let k;
function hello(rate){
    let count = 0 ;
    let span=[];
    for(let i =0 ; i<Math.floor(rate); i++){
        count++;
          span.push(<FontAwesomeIcon
         style={{ color: "gold", fontSize: "12px" }}
         icon={fastar}
         className="flex-fill"
       ></FontAwesomeIcon>)
    }
    for(let i =count; i<5 ; i++){
        span.push( <FontAwesomeIcon
        style={{ color: "gray", fontSize: "12px" }}
        icon={fastar}
        className="flex-fill"
      ></FontAwesomeIcon>)
    }
    return span;
}
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
            Review.length ===0?
            <div style={{width:'30%', margin:'auto'}}>
              <img src={NoData} alt="" />
              <p style={{textAlign:'center'}}>No reviews yet</p>
            </div>
            :
            <div className="container-fluid">
            <div className="float-end mb-3">
              <button className="btn rounded-3 btnAddReview" onClick={()=>setAddReview(false)}>Add Review</button>
            </div>
            <div style={{ clear: "both" }}></div>
            <div className="row">
              <div className="col-4">
                <h4 className="d-inline me-2">{Review.length} Reviews</h4>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ color: "gray" }}
                ></FontAwesomeIcon>
              </div>
              <div className="col-8"></div>
            </div>
            <div className="container-fluid mt-5">
              {Review.map((i)=>{
                return(
                  <>
              <div className="row">
                <div className="col-4">
                  <img
                    src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                    alt="user"
                    width="20%"
                    className="rounded-circle"
                  />
                  <span>{i.userEmail}</span>
                </div>
                <div className="col-8 ">
                {
                         k = hello(i.Rating)
                         }
                         {
                             k.forEach(i=> i)
                         }
                  <div className="mt-3 mb-2">
                    <p style={{ fontSize: "14px" }}>{i.comment}</p>
                  </div>
                  <hr className="m-2 mt-5 mb-5" />
                </div>
              </div>
                  </>
                )
              })}
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
