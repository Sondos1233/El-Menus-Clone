import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { db } from './../../Firebase/Firebase'
import { collection, collectionGroup, getDocs, limit, query, where } from 'firebase/firestore'
import OrderCard from "./orderCard";

export default function OrderList({ orderLength }) {

    const [orderList, setOrderList] = useState([]);
    var total = 0;
    const [totalPrice, setTotalPrice] = useState(total);

    const UserDoc = collection(db, "User", localStorage.getItem("userID"), "Cart");

    useEffect(() => {
        const getUser = async () => {
            const Resdata = await getDocs(UserDoc)
            // console.log(Resdata)
            setOrderList(Resdata.docs.map((doc) => ({ id: doc.id, ...doc.data() } )))
        }
        getUser()

        
        setTotalPrice(total)
    }, [])



    return (
        <>
            
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
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
                        <h5 style={{ textAlign: "center",padding: "10px", color: "white", backgroundColor:"#e32207", borderRadius: "5px" }}> Your Order  </h5>

                        <div className="mt-2 overflow-scroll">

                            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                <h6> Deliviring To </h6>
                                <h6> {localStorage.getItem("Name")} , {localStorage.getItem("areaName")} </h6>
                            </div>

                            {

                                orderList.map((order) => {
                                    orderLength(orderList.length)
                                    
                                    return (
                                        <>
                                            <OrderCard order={order}/>
                                        </>

                                    )
                                })
                            }

                            {/* <h3>Total Price: {totalPrice}</h3> */}

                            <button className="btn btn-success mt-5" style={{ width: "27vw", marginLeft:"10px" }}>GO TO CHECKOUT</button>
                            <button className="btn mb-5" style={{ width: "27vw", marginLeft:"10px" }}>Remove All Items</button>
                        

                        </div>




                    </div>
                </div>
            </div>





        </>
    )

}
