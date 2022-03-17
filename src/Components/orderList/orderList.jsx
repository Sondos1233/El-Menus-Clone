import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { db } from './../../Firebase/Firebase'
import { collection,  getDocs, deleteDoc,doc } from 'firebase/firestore'
import OrderCard from "./orderCard";
import { Link } from "react-router-dom";
import NoData from '../../images/NoData.svg'

export default function OrderList({ orderLength }) {

    const [orderList, setOrderList] = useState([]);

    const userid = localStorage.getItem("userID")
    console.log(userid)
    const UserDoc = collection(db, "User",userid,"Cart");

    

    useEffect(() => {
        const getUser = async () => {
            const Resdata = await getDocs(UserDoc)
            // console.log(Resdata)
            setOrderList(Resdata.docs.map((doc) => ({ 
                id: doc.id, ...doc.data() 
            })))

        }
        getUser()


    }, [])

    //delete all
    const deleteAllCart = async () => {
      
            for(let i = 0 ; i < orderList.length ; i ++) {
                let orderId = orderList[i].id
              let j=  await deleteDoc(doc(db, "User",userid,"Cart",orderId))
                console.log(j)
            }
        window.location.reload()
        
    }



    let total = 0;
    const calcPrice = (price) => {
        total += parseInt(price);
    }

    return (
        <>

            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel"
                style={{ maxWidth: "70vh",zIndex:3000 }}
            >
                <div class="offcanvas-header ">
                    {/* <h5 id="offcanvasRightLabel" style={{ alignSelf:"center", color:"#e32207" }}>Your Order</h5> */}
                    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div id="userCard"
                        style={{
                            height: "100vh", width: "60vh", position: "fixed", zIndex: "50", overflowY: "auto",
                            top: "40px", right: "0", bottom: "0", backgroundColor: "white",
                        }}>
                        <h5 style={{ textAlign: "center", padding: "10px", color: "white", backgroundColor: "#e32207", borderRadius: "5px" }}> Your Order  </h5>

                        <div className="mt-2 overflow-scroll">

                            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                <h6> Deliviring To </h6>
                                <h6> {localStorage.getItem("Name")} , {localStorage.getItem("areaName")} </h6>
                            </div>

                            {

                                orderList.map((order) => {
                                    orderLength(orderList.length)
                                    calcPrice(order.TotalPrice)
                                    return (
                                        <>
                                            <OrderCard order={order} userId={userid} />
                                        </>

                                    )
                                })
                            }
                          {orderList.length !=0?(
                              <> <div className="p-0 mt-5">
                              <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                  <h6>Sub-Total: </h6>
                                  <h6>{total} EGP</h6>
                              </div>
                              <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                  <h6>Delivery-Fee: </h6>
                                  <h6>20 EGP</h6>
                              </div>
                              <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                  <h3>Total Price: </h3>
                                  <h3>{total + 20} EGP</h3>
                              </div>
                          </div>

                        <Link to="/check"> <button className="btn btn-success mt-5" style={{ width: "25vw", marginLeft:"10px" }}>GO TO CHECKOUT</button></Link> 
                          <button className="btn mb-5" style={{ width: "25vw", marginLeft:"10px" }} onClick={deleteAllCart} >Remove All Items</button>
                          
                      
                     </>):(<div style={{margin:"auto",width:"95%",textAlign:"center"}}>
                         <h4>Your Cart is Empty !</h4>
                         <img src={NoData} width="200px" height="200px"/>
                         </div>
                     
                     )}
                         
                        </div>




                    </div>
                </div>
            </div>





        </>
    )

}
