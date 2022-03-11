import '../../main-style.css'
import '../../Restaurant.scss'
import '../../mixins.scss'
import { firestore } from "../../../Firebase/firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  docs,
  query,
  collectionGroup,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
const ResCover = (props) => {
    let id = useParams();
    id = id.id;
    const [Res, setRes] = useState([]);
    const [offer, setOffer] = useState([]);

  const RestaurantCollecdocRef = doc(firestore, "Restaurant",id);
  const OffersCollecRef = collection(firestore, "Restaurant",id,'Offers');

  useEffect(() => {
    const getRes = async () => {
      const data = await getDoc(RestaurantCollecdocRef);
      setRes(data.data())
    };
    getRes();

    const getOffer = async () => {
        const data = await getDocs(OffersCollecRef);
        setOffer(
            data.docs.map((doc)=>{
                return {...doc.data(),id:doc.id}
            })
        )
      };
      getOffer();
   
  });
    return(
        <>
        <div className="aDivImgCover">
        <img className="aImgCover" src={Res.ImgCover} alt="" />
        {(offer===[])&&
        (<div>
            <div className="aDivPromo">
                    {offer.map(off=>{
               return(
                   <>
               <h3>
                        {off.Description}
                </h3>
                <h5>
                   Expires: {off.Expires}
                </h5>
                </>
                    )})}
                <div className="ms-3 aPromoActivation">
                    <span className=" p-1"> {offer.map(off=>{
                        return off.PromoCode;
                    })} </span>
                    <button className="btn float-end"> Apply offer </button>
                </div>
            </div>
        </div>)
        }
    </div>
        </>
    )
}

export default ResCover;