import { faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../About.scss";
import { firestore , storage} from "../../Firebase/firebase-config";
import {
  collection,
  getDoc,
  getDocs,
  query,doc,docs,
  collectionGroup,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const Branches = () => {
  let id = useParams();
  id = id.id;
  const [branch, setBranch] = useState([]);

  const BranchesCollecdocRef = collection(
    firestore,
    "Restaurant",
    id,
    "Branches"
  );

  useEffect(() => {
    const getBranches = async () =>{
      const data = await getDocs(BranchesCollecdocRef);
        setBranch(
          data.docs.map((doc) => {
            return doc.data();
          })
        )
      };
      getBranches();
  },[BranchesCollecdocRef]);
  return (
    <>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="Branches"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div className="container-fluid">
            <div className="d-flex flex-row justify-content-between">
              <div>
                <h5>Branches</h5>
              </div>
              <div className="me-5">
                <p style={{fontSize:'20px',color:'gray',fontWeight:'bold'}}>{branch.length}</p>
              </div>
            </div>
            <div className="d-flex flex-column">
              <ul>
                {branch.map(i=>{
                  return(
                    <>
                <li>
                  <h4>{i.LocName}</h4>
                  <p>- {i.Address}</p>
                  <FontAwesomeIcon icon={faClock} />{" "}
                  <span className="aboutDivText"> {i.Workinghours} </span>
                  <p>- {i.Address}</p>
                </li>
                <hr className="m-3 text-secondary" />
                    </>
                  )
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Branches;
