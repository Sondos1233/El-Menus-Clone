
import { collectionGroup } from "firebase/firestore";
import { Link } from "react-router-dom";
import db from "./Firebase/firebase";
import { collection, getDocs,docs, doc } from "firebase/firestore";
import { useEffect,useState } from "react";
const CardOfJob = (props) => {
  

  return (
    <>
      <div className="card cardJob mt-4">
        <div className="row ms-2 mb-4">
          <div className="col-lg-6 col-md-12">
            <h6 className="mb-3">{props.head}</h6>
            <div className="oper">
              <mark className="me-3">{props.job}</mark>
              <span>{props.area}</span>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 apply">

            <Link to={`/description/${props.head}`}   className="btn btn-need me-4 mt-3 " style={{backgroundColor:"#ff4612",borderColor:"#ff4612"}} href="" onClick={() => {
               
              }} >
              View Job
            </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default CardOfJob;
