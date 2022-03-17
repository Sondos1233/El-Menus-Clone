import {
    faHome,
    faPhone,
    faMotorcycle,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { useState,useEffect } from "react";
  import { db } from "../../Firebase/Firebase";
  import { collection,getDocs } from "firebase/firestore";
  import NoData from '../../images/NoData.svg'
  import { Link } from "react-router-dom";
  export const MyOrder = () => {
    const userDetails = JSON.parse(localStorage.getItem('myUser'))
    const Location = localStorage.getItem('areaName')
    const [orderList, setOrderList] = useState([]);
     
  
      const UserDoc = collection(db, "User", localStorage.getItem("userID"), "Order");
  
      useEffect(() => {
          const getUser = async () => {
              const Resdata = await getDocs(UserDoc)
              // console.log(Resdata)
              setOrderList(Resdata.docs.map((doc) => ({...doc.data()} )))
          }
          getUser()
          
      },[])
      
  let total = 0;
  const calcPrice = (price) => {
    
      total += parseInt(price);
  }
  
  
  
    return (
      <>
       {orderList.length?(<div className="row container-fluid" style={{"marginTop":"80px"}}>
          <div className="ps-0">
            
            <button className="btn btn-secondary">Orders</button>
            <div className="ReviewOrder_form">
              <h6 className="text-center">VALUE MEALS ({orderList.length})</h6>
              
                {
                  orderList.map((order)=>{
                    calcPrice(Number(order.TotalPrice))
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
                <hr />
             <div className="text-center">
                 <h1>Order total</h1><h1>{total}<small className="me-0 ps-3" style={{"fontSize":"12px","color":"grey"}}>EGP</small></h1> 
             </div>
               
                
             
            </div>
          </div>
        </div>):(<div style={{margin:"auto",width:"95%",textAlign:"center"}}>
                         <h4>No Order yet !</h4>
                         <img src={NoData} width="200px" height="200px"/><br/>
                         <Link className="btn btn-danger" to="/Delivery"> Make your First order !</Link>
                         </div>)}
        
      </>
    );
  };