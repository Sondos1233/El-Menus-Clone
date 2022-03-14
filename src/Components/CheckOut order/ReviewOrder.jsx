import {
  faHome,
  faPhone,
  faMotorcycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./check.css";
import { useState,useEffect } from "react";
import { db } from "../../Firebase/Firebase";
import { collection,getDocs } from "firebase/firestore";
export const ReviewOrder = ({ prev,user }) => {
  const userDetails = JSON.parse(localStorage.getItem('myUser'))
  const Location = localStorage.getItem('areaName')
  const [orderList, setOrderList] = useState([]);
    var total = 0;
    const [totalPrice, setTotalPrice] = useState(total);

    const UserDoc = collection(db, "User", localStorage.getItem("userID"), "Cart");

    useEffect(() => {
        const getUser = async () => {
            const Resdata = await getDocs(UserDoc)
            // console.log(Resdata)
            setOrderList(Resdata.docs.map((doc) => ({...doc.data()} )))
        }
        getUser()
    },[])

  return (
    <>
      <div className="row container-fluid" style={{"marginTop":"80px"}}>
        <div className="col-4 ps-0 "><h4>Review Your Order</h4></div>
        <div class=" col-8 " >
            <p className="ale"> Your order is not complete until you click the button 'PLACE ORDER'</p></div>
        <div className="col-7 ReviewOrder_form position-relative">
          <h5>{user.Name}</h5>
          <button class="btn btn_change_form" onClick={prev}>
            change
          </button>

          <p className="text-secondary">
          {user.Address}
            <br />Floor no.
            {user.FloorNo}
            <br />
            Apartment no.
            {user.ApartmentNo}
          </p>
          <h6>
            <FontAwesomeIcon icon={faHome} className="me-1 text-secondary" />{" "}
            {Location}
          </h6>
          <p>
            <FontAwesomeIcon icon={faPhone} className="me-1 text-secondary" />
            {user.Mobile}
          </p>
        </div>
        <div className="col-5 ">
          <div className="ReviewOrder_form px-3 pb-3 mb-2 ">
            <h5>Payment Method</h5>
            <div class="form-check">
              <input
                class="form-check-input checkPayment"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                checked
              />
              <label class="form-check-label" for="flexRadioDefault1">
                Cash on Delivery
              </label>
            </div>
            <div class="form-check">
              <input
                class="form-check-input checkPayment"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
                
              />
              <label class="form-check-label" for="flexRadioDefault2">
                Credit Card
              </label>
            </div>
          </div>
          <div className="ReviewOrder_form px-3 pb-3">
            <h5>Promo Code</h5>
            <div class="input-group">
              <input
                className="form-control"
                type="text"
                placeholder="Enter The Code here"
              />
              <button class="btn btn-secondary Apply_promo_code" type="button">
                Apply
              </button>
            </div>
          </div>
        </div>
        <div className="ReviewOrder_form mt-3 pt-2 pb-3 ps-0">
          <h5>
            <span className="px-3">
              <FontAwesomeIcon
                icon={faMotorcycle}
                style={{ color: "#e32207" }}
              />
            </span>{" "}
            Estimated Delivery Time:
            <span className="text-success"> 75 mins</span>
          </h5>
        </div>
        <div className="ps-0">
          <h3>Items</h3>
          <button className="btn btn-secondary">Items</button>
          <div className="ReviewOrder_form">
            <h6 className="text-center">VALUE MEALS ({orderList.length})</h6>
            
              {
                orderList.map((order)=>{
                  return(
                    <>
                    <div className="d-flex justify-content-between">
                      <h4 className="ps-5">{order.Quantity}<span className="ps-5">{order.ProName}<br/><small style={{"paddingLeft":"55px","fontSize":"11px","color":"grey"}}>{order.Size.Name}</small></span></h4>
                      
                      <h5 >{order.TotalPrice}<small className="pe-2" style={{"fontSize":"11px","color":"grey"}}> EGP</small></h5>
                      </div>
                    </>
                  )
                })
              }
              
           
          </div>
        </div>
      </div>
    </>
  );
};
