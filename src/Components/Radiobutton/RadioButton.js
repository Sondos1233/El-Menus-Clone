import "../main-style.css";
import "../Delivery.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";
import { firestore } from "../../firebase/firebase-config";
import {
    collection,
    getDocs,
    docs,
    query,
    where,
    collectionGroup,
  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import {useState,useEffect} from 'react'
const RadioButton = (props) => {
  const [offer, setOffer] = useState([]);
  const TestQuery = async(el)=>{
    //console.log(el)
    let qmm = query(collection(firestore,'Restaurant'),where('Type','array-contains',el));
    var queryResult=await getDocs(qmm);
    console.log(queryResult);
    setOffer(
      queryResult.docs.map((doc)=>{
        return (doc.data())
      })
      )
      
  }
  useEffect(()=>{
    TestQuery(props.data);
  }
  )
  return (
    <>
      <div className="col-2">
        <label className="aRadio">
          <input onClick={()=>TestQuery(props.data)} type="radio" name={props.name} id="" />
          <span className="adot"></span>{" "}
          <FontAwesomeIcon icon={faDotCircle} className="aCheckdot"> </FontAwesomeIcon>
        </label>
      </div>
      <div className="col-10 aSortType">{props.data}</div>
    </>
  );
};

export default RadioButton;
