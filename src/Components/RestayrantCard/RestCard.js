import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faMotorcycle } from "@fortawesome/free-solid-svg-icons";
import { faStar, faCircle, faStreetView } from "@fortawesome/free-solid-svg-icons";
import { firestore ,storage } from "../../Firebase/firebase-config";
import {
    collection,
    getDocs,getDoc,
    doc,docs,
    query,
    collectionGroup,
    where,limit,orderBy
  } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NoData from '../../images/NoData.svg'
const RestCard = (props) => {
  const [Res, setRes] = useState([]);
  const [offer, setOffer] = useState([]);
  const [Area,setArea] = useState('Naser City')

  
  useEffect(() => {
    //get restaurants by choosen area
   const getRes = async () => {
    var Area = localStorage.getItem('areaName');
    if(props.Rating){
      console.log(props.Rating)
      const RestaurantCollecRef = query(
        collection(firestore, "Restaurant"),
        limit(10),
        where("Areas", "array-contains", Area.trim()),orderBy("Rate", "desc"));
      const data = await getDocs(RestaurantCollecRef);
      setRes(
        data.docs.map((doc) => {
          console.log(doc.data())
         
          return doc;
         
        })
      
        );
    }
    else if(props.Promo){
      const ResCollec = collection(firestore,'Restaurant');
      const data = await getDocs(ResCollec);
      data.docs.map(async(doc1)=>{
      const Offercollec = collection(firestore,'Restaurant',doc1.id,'Offers');
      const data2 = await getDocs(Offercollec);
      if(data2.docs.length){
        const Resoffer = doc(firestore,'Restaurant',doc1.id);
        const data3 = await getDoc(Resoffer);
        //console.log(data3.data())
       //setRes(data3);
      }
      })
    }
    else{
      const RestaurantCollecRef = query(
        collection(firestore, "Restaurant"),
        limit(10),
        where("Areas", "array-contains", Area.trim())
    );
    const data = await getDocs(RestaurantCollecRef);
      setRes(
        data.docs.map((doc) => {
         
          return doc;
         
        })
      
        );
      
    }
    
     }
    getRes();

    //get offers
    const bla = async () => {
      let q = query(collectionGroup(firestore, "Offers"));
      const querySnapshot = await getDocs(q);
      setOffer(
        querySnapshot.docs.map((doc)=> {return doc.data()})
      );
    };
    bla();
  });
 ;

 //filter by type
  const byFilterRes = (Res, Type,Rating) => {
    if(Res.IsActivated){
      if (Type && Type !='All Dishes') {
        return Res.Type.includes(Type);
      }else if(Type =='All Dishes'){
          return Res // const byAreas = (Res, Area) => {
  //   if(Res.IsActivated){
  //     if (Area) {
  //       return Res.Areas.includes(Area);
  //     } else return Res;
  //   }
  // }
      }
       else return Res;
    }
  };
  const filteredList = (ResList,Type,Area) => {
    return ResList.filter(Res => byFilterRes(Res.data(), Type));
    //  ResList.filter(Res => byAreas(Res.data(), Area));
    
  }

let k;
  let counter = 0;
  //dynamic rating function
function hello(rate){
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
  return (
    <>
    <p id="aTastPar">Restaurants <span style={{fontSize:"medium"}} className="mb-1">{`(${filteredList(Res,props.Type).length})`}</span> </p>
      <div className="container-fluid aResDiv ">
        <div className="row" id="aResDivrow">
          {filteredList(Res,props.Type).length?(filteredList(Res,props.Type).map((res,index)=>{
              return(
          <div className="col-lg-4 col-md-12 mt-2">
            <div className="aContentCard">
              <Link to={`/Restaurant/${res.id}`} className="aLinkCard">
                <div className="card aD">
                  <figure className="aFigRes position-relative"> 
                    <img
                      src={res.data().ImageURL}//{attract[index]}
                      className="aImg card-img-top "
                      alt="..."
                    />
                    <div className="aSliderImgCrd d-flex justify-content-end ">
                      <FontAwesomeIcon
                        className="align-self-center  "
                        icon={faChevronRight}
                        style={{ marginBottom: "40px" }}
                      ></FontAwesomeIcon>
                    </div>
                    <figcaption className="aImgCaption">
                      <h4 className="aImgTitle">
                        Broasted Fried Chicken with Syrian Flavor
                      </h4>
                    </figcaption>
                  </figure>
                  <div className="card-body aCardBody">
                    <div>
                      <div className=" d-flex bd-highlight flex-row align-items-start">
                        <img
                          id="aImgRes"
                          src={res.data().ImageLogo}//{logo[index]}
                          alt=""
                          className="rounded-3 me-3 "
                        />
                        <h3 id="aResName">
                          {res.data().ResName}
                          <br />
                          
                          {
                         k = hello(res.data().Rate)
                         }
                         {
                             k.forEach(i=> i)
                         }
                          
                          <span id="aResType">{res.data().Type+" , "}</span>
                        </h3>
                      </div>
                    </div>
                    <div className="mt-1">
                      <div className="alert-success aDisAlert" role="alert">
                      {(typeof offer[index]?.Description != "undefined" ? offer[index]?.Description:" ")}
                      </div>
                    </div>
                    <hr />
                    <div
                      style={{ marginTop: "-10px", width: "100%" }}
                      className="d-flex flex-wrap "
                    >
                      <div>
                        <FontAwesomeIcon
                          style={{ color: "gray", flexBasis: "10px" }}
                          icon={faMotorcycle}
                        >
                        </FontAwesomeIcon>
                          60 mins&nbsp;{" "}
                      </div>
                      <div>
                        <FontAwesomeIcon
                          style={{
                            fontSize: "smaller",
                            flexBasis: "1000%",
                            color: "#4caf50",
                          }}
                          icon={faCircle}
                        >
                        </FontAwesomeIcon>
                          Order online&nbsp;
                      </div>

                      <div>
                        <FontAwesomeIcon
                          style={{ color: " #f7b500", flexBasis: "20%" }}
                         icon={faStreetView}
                        >
                          {" "}
                        </FontAwesomeIcon>
                          on tracking
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
          
            </div>
          </div>
        )})):(<div className="text-center">
          <img src={NoData} width="300px" height="300px" alt=''/>
        </div>)}
        
        </div>

        <div className="mt-5 mb-5 d-grid gap-1">
          <button className="btn aLoadButton" type="button">
            LOAD MORE RESTAURANTS
          </button>
        </div>
      </div>
    </>
  );
};
export default RestCard;
