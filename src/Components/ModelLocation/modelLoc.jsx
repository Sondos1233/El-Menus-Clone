import { useState, useEffect } from "react";
import './modelLoc.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Modal } from 'react-bootstrap'
// FireStore
import { db } from './../../firebase/Firebase'
import { collection, collectionGroup, getDocs, limit, query, where } from 'firebase/firestore'

export default function ModelLocation() {
    const [cities, setCities] = useState([]);
    const [QueryByType2, setQueryByType2] = useState([]);
    const [areas, setAreas] = useState([])
    const [showArea, setShowArea] = useState(false)
    const [showText, setShowText] = useState(false)
    const [areaName, setAreaName] = useState('');
    const [city, setCity] = useState("");

    const CitiesCollection = collection(db, "Cities")


    useEffect(() => {
        // Restaurant Collection
        const getCites = async () => {
            const Resdata = await getDocs(CitiesCollection)
            // console.log(Resdata)
            setCities(Resdata.docs.map((doc) => ({ ...doc.data() })))
        }
        getCites()

        if (localStorage.getItem("Name")) {
            setShowArea(true);
            setCity(localStorage.getItem("Name"))
            getAreas(localStorage.getItem("Name"))
        }
        else {
            // console.log("no")
        }

    }, [])


    const [QueryByType, setQueryByType] = useState([]);
    const getAreas = (value) => {
        setShowArea(true)
        // setCity(e.target.text)
        console.log(value)
        localStorage.setItem('Name', value)
        setCity(localStorage.getItem("Name"))

        // Query

        const QueryByTypeDocs2 = query(
            collection(db, "Cities"),
            limit(10),
            where("Name", "==", value)
        );

        const getResByTypeQuery2 = async () => {
            const QueryData = await getDocs(QueryByTypeDocs2)
            // console.log(Branchesdata)
            setQueryByType2(QueryData.docs.map((doc) => ({ ...doc.data() })))
        }
        getResByTypeQuery2()
        // console.log(areas)
    }

    const getAreaName = (e) => {
        localStorage.setItem('areaName', e.target.text)
        setAreaName(e.target.text)
        setShowText(true)
    }


    return (
        <>
            

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style={{ borderRadius: "10px" }}>
                    <div class="modal-content " style={{ "borderRadius": "20" }}>
                        <button type="button" class="btn-close m-4" data-bs-dismiss="modal" aria-label="Close"></button>

                        {
                            showArea ? (
                                <div className="bg-light" style={{ borderRadius: "10px" }}>
                                    <span className="iconstyle" onClick={() => {
                                        setShowArea(false);
                                        setShowText(false)
                                    }}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></span>
                                </div>
                            ) : (
                                <></>
                            )
                        }
                        <div className="text-center bg-light p-5" style={{ borderRadius: "5px" }}>
                            <img src="https://www.elmenus.com/public/img/svg-icons/dineout-marker.svg" width={100} height={100} alt="" />
                            {
                                showArea ? (
                                    <h3 style={{ fontWeight: "bold" }}>Choose Location in <span style={{ color: "#e32207" }}>{city}</span></h3>
                                ) : (
                                    <h3 style={{ fontWeight: "bold" }}>Choose Location</h3>
                                )
                            }
                            <input className="form-control" type="search" placeholder="Your Location eg. Degla, Maadi"
                                style={{ width: "400px", marginLeft: "20px", boxShadow: "1px 1px 1px 1px grey" }}
                                list="Cities"
                                onChange={(e) => {
                                    setShowArea(true)
                                    if (showArea) {
                                       
                                        setAreaName(e.target.value)
                                        setShowText(true)
                                    }
                                    else {
                                        getAreas(e.target.value)
                                        setCity(e.target.value)
                                        localStorage.setItem('Name', e.target.value)
                                    }
                                }}
                            />
                            <datalist id="Cities">
                                {
                                    showArea ? (
                                        QueryByType2.map((area) => {
                                            return (
                                                <div>
                                                    {
                                                        area.Area.map((m)=>{
                                                            return(
                                                                <option value={m}>{m}</option>
                                                            )
                                                        })
                                                        
                                                    }
                                                       
                                                </div>
                                            )
                                        })
                                    ) : (
                                        cities.map((city) => {
                                            return <option value={city.Name}>{city.Name}</option>
                                        })

                                    )
                                }

                            </datalist>
                        </div>
                        <hr />

                        <div className="container">
                            <div className="row">
                                <div className="col-5 vertical-scrollable">
                                    <ul className="listStyle">
                                        {
                                            !showArea && cities.map((city) => {
                                                return (
                                                    <li><a onClick={(e) => { getAreas(e.target.text) }}>{city.Name}</a></li>
                                                )
                                            })
                                        }
                                        {
                                            showArea && QueryByType2.map((city) => {
                                           
                                                return (
                                                   <div>
                                                    {
                                                        city.Area.map((m)=>{
                                                            return(
                                                                <li><a onClick={(e) => { getAreaName(e) }}> {m} </a></li>
                                                            )
                                                        })
                                                    }
                                                    </div>
                                                )
                                            })
                                        }
                                    </ul>

                                </div>
                                <div className="col-7">
                                    {
                                        showText ? (
                                            <div>
                                                <span style={{ fontSize: "20px" }}>{areaName}</span>
                                                <a style={{ marginLeft: "40%", cursor: "pointer", color: "#e32207" }} onClick={()=>{
                                                    window.location.reload(false)
                                                }}> SELECT </a>
                                            </div>
                                        ) : (
                                            <>
                                                <div className="divstylee">
                                                    <img src="https://www.elmenus.com/public/img/locationArrow.png" width={50} height={50} alt="" />
                                                    <img src="https://www.elmenus.com/public/img/locationPin.png" width={60} height={60} alt="" />
                                                    <p>Choose Your City</p>
                                                </div>
                                            </>
                                        )
                                    }
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
{/* <div class="modal-header">
<h5 class="modal-title m-2" id="exampleModalLabel">Modal title</h5>
<button type="button" class="btn-close m-2" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body">
...
</div>
<div class="modal-footer">
<button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
<button type="button" class="btn btn-primary">Save changes</button>
</div> */}