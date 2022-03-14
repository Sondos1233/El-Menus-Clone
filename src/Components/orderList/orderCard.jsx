import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faList } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import { db } from './../../Firebase/Firebase'
import { collection, collectionGroup, getDocs, limit, query, where } from 'firebase/firestore'
import UpdateModal from "../updateOrder/updateModal";

export default function OrderCard(props) {

console.log(props.order)

    return (
        <>
<UpdateModal />


            <div className="card d-flex mt-1" style={{ fontSize: "12px" }}>
                <div className="card-body d-flex" >
                    <p style={{ marginRight: "5px" }}> {props.order.Quantity} </p>

                    <div style={{ width:"250px" }}>
                        <a> {props.order.ProName} </a>
                        <p> {props.order.Size.Name} </p>
                        <p>Extras:
                            {
                                props.order.Extras.map((extra) => {
                                    return (
                                        <span>{extra.Name},</span>
                                    )
                                })
                            }
                        </p>
                    </div>

                    <div >
                        <p style={{ color: "green" }}> {props.order.TotalPrice} EGP </p>
                        <div className="d-flex">
                        <span style={{ marginRight: "5px", color: "red" }}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></span>
                        <a href="" style={{ marginRight: "15px" }}> Remove </a>
                        </div>
                        
                    </div>
                </div>

                    <div>

                    <button onClick={()=>{

                    }} type="button" data-bs-toggle="modal" data-bs-target="#updateModal" className='btn' style={{width:'fit-content',height:'fit-content',color: "green"}}><FontAwesomeIcon icon={faList}></FontAwesomeIcon> Details </button>
                    </div>
            </div>
        </>
    )

}
