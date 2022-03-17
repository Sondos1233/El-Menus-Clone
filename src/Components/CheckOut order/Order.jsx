import { useState,useEffect } from "react";
import { db } from "../../Firebase/Firebase";
import { collection,getDocs,deleteDoc } from "firebase/firestore";
import { Link } from "react-router-dom";

export const Order = ({handleSubmit,TotalPrice}) => {
  const [orderList, setOrderList] = useState([]);
  const [item,setItem] = useState(0)
  const UserDoc = collection(db, "User", localStorage.getItem("userID"), "Cart");

  
  useEffect(() => {
    const getUser = async () => {
        const Resdata = await getDocs(UserDoc)
        //  console.log(Resdata)
        setOrderList(Resdata.docs.map((doc) => ({ ...doc.data})))
    }
    getUser()
      
          
},[])

   








  return (
    <>
    <div className="px-4" style={{"marginTop": "180px"}}>
    <div className="card border-secondary " style={{"boxShadow":"none", "margin":"auto"}}>
        <div className="card-header py-3"><button className="btn btn-primary py-3" onClick={handleSubmit} style={{"width":"100%"}}>PLACE ORDER</button></div>
        <div className="card-body">
            <h5>Order Summary</h5>
            <div className="d-flex justify-content-between"><h6><span>Sub-total</span></h6><h5>{TotalPrice}<small style={{"fontSize":"12px","color":"grey"}}>EGP</small></h5>
            </div>
             <div className="d-flex justify-content-between"><h6 ><span>items</span></h6><h5 className="text-center pe-3">{orderList.length}</h5>
             </div>
             <div className="d-flex justify-content-between"><h6><span>Tax</span></h6><h5>0.00<small style={{"fontSize":"12px","color":"grey"}}>EGP</small></h5>
             </div>
             
             
             <div className="d-flex justify-content-between"><h6><span>Delivery Fee</span></h6><h5>20.0<small style={{"fontSize":"12px","color":"grey"}}>EGP</small></h5>
             </div>
             
             
             <hr />
             <div className="d-flex justify-content-between"><h1>Order total</h1><h1>{TotalPrice+20}<br/><small className="me-0 ps-3" style={{"fontSize":"12px","color":"grey"}}>EGP</small></h1>
             </div>
             
        </div>
    </div>
      
    </div>
    
    </>
  );
};
