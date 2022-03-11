import '../main-style.css'
import '../Restaurant.scss'
import '../mixins.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar,faMapMarkerAlt,faPhoneAlt} from "@fortawesome/free-solid-svg-icons";
import {useEffect,useState} from 'react'
import {useParams } from 'react-router-dom';
import { firestore , storage} from "../../Firebase/firebase-config";
import {
  collection,
  getDoc,
  docs,
  query,doc,getDocs,
  collectionGroup,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

const ResDet = ()=>{
    let id = useParams();
    id = id.id;
    const [Res, setRes] = useState([]);
    const [Branch, setBranch] = useState([]);

  const RestaurantCollecdocRef = doc(firestore, "Restaurant",id);
  const BranchesCollecRef = collection(firestore, "Restaurant",id,'Branches');

  useEffect(() => {
    const getRes = async () => {
      const data = await getDoc(RestaurantCollecdocRef);
      setRes(data.data())
    };
    getRes();
    const getBranches = async () => {
        const data = await getDocs(BranchesCollecRef);
        setBranch(data.docs.map((doc)=>{
            return {...doc.data(),id:doc.id}
        }))
      };
      getBranches();
   
  });
let k;
  function Rating(rate){
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
    return( 
        <> 
        <div className="aLeftDet position-relative col-8 d-flex flex-row mt-3">
                <div className="aResImgDivL position-relative d-flex flex-column">
                    <div className="aResImgL "> <img className="rounded-circle"
                            src={Res.ImageLogo} 
                            alt="" /> </div>
                    <span className="aOpen p-1 ms-2 position-absolute"> Opens in 10 hours </span>
                </div>
                <div className="aResDetL">
                    <div className="aResNameDiv">
                        <h1 className="aResNameDiv"> {Res.ResName}</h1>
                    </div>
                    <div className="aSubtitle">
                        <div className="d-flex">
                            <div className="aTypeRes">
                            {Res.Type}
                            </div>
                            <div className="aRateStars ms-2">
                            {
                         k = Rating(Res.Rate)
                         }
                         {
                             k.forEach(i=> i)
                         }
                            </div>
                        </div>
                        <div className="aResAddress d-flex mt-2">
                            <span><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;</span>
                            {Branch.map((i)=>{
                                return <p> {i.Address}</p>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className="aRightDet col-4 d-flex justify-content-between mt-3">
                <div style={{width: "60%"}}>
                </div>
                <div className="aResAction mt-3">
                    <a href="">
                        <span className="aExampleSpan rounded-circle"><FontAwesomeIcon icon={faPhoneAlt} className="aExampleAction"></FontAwesomeIcon></span>
                    </a>
                </div>
            </div>

            
        </>
    )
}
export default ResDet;