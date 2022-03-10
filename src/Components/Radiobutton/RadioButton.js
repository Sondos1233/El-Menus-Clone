import "../main-style.css";
import "../Delivery.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";
import { firestore } from "../../Firebase/firebase-config";
import {
    collection,
    getDocs,
    docs,
    query,
    where,
    collectionGroup,
  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import {useState,useEffect} from 'react';
const RadioButton = (props) => {
  const [offer, setOffer] = useState([]);
  const [opt, setOpt] = useState(props.data);
  const TestQuery = async(el)=>{
    const type = el.target.value;
    setOpt(type);
    //console.log(type)
    //console.log(el)
    let qmm = query(collection(firestore,'Restaurant'),where('Type','array-contains',type));
    var queryResult=await getDocs(qmm);
    //console.log(queryResult);
    setOffer(
      queryResult.docs.map((doc)=>{
        console.log(doc.data())
        return (doc.data())
      })
      )
      
  }
  return (
    <>
      <div className="col-2">
        <label className="aRadio">
          <input onClick={TestQuery} type="radio" name={props.name} id="" value={props.data} />
          <span className="adot"></span>{" "}
          <FontAwesomeIcon icon={faDotCircle} className="aCheckdot"> </FontAwesomeIcon>
        </label>
      </div>
      <div className="col-10 aSortType">{props.data}</div>{offer.map(i=>{
        return i.ResName
        })}
    </>
  );
};

export default RadioButton;
