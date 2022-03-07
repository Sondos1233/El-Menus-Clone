import { useState, useEffect } from "react";
import './modelLoc.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
// FireStore
import { db } from './../../Firebase/Firebase'
import { collection, collectionGroup, getDocs, limit, query, where } from 'firebase/firestore'

export default function ModelLocation() {
    const [cities, setCities] = useState([
        {
            Name: "Cairo",
            Area: ["New Cairo", "Naser City", "Maadi"]
        },
        {
            Name: "Giza",
            Area: ["New Cairo", "Naser City", "Maadi"]
        },
        {
            Name: "Qena",
            Area: ["New Cairo", "Naser City", "Maadi"]
        },
        {
            Name: "Port Said",
            Area: ["New Cairo", "Naser City", "Maadi"]
        },
        {
            Name: "Suhag",
            Area: ["New Cairo", "Naser City", "Maadi"]
        },
        {
            Name: "Menia",
            Area: ["New Cairo", "Naser City", "Maadi"]
        },
    ]);
    const [areas, setAreas] = useState(["New Cairo", "Naser City", "Maadi"]);
    const [showArea, setShowArea] = useState(false)
    const [showText, setShowText] = useState(false)
    const [areaName, setAreaName] = useState('');
    const [city, setCity] = useState("");

    // const CitiesCollection = collection(db, "Cities")


    // useEffect(() => {
    //     // Restaurant Collection
    //     const getCites = async () => {
    //         const Resdata = await getDocs(CitiesCollection)
    //         // console.log(Resdata)
    //         setCities(Resdata.docs.map((doc) => ({ ...doc.data() })))
    //     }
    //     getCites()

    // }, [])

    const getAreas = (e) => {
        console.log(e.target.text)
        setShowArea(true)
        setCity(e.target.text)
        // setAreas([])
        // const QueryCityName = query(
        //     collection(db, "Cities"),
        //     limit(10),
        //     where("Name", "==", e.target.text)
        // );

        // const getDocs = async () => {
        //     const QueryData = await getDocs(QueryCityName)
        //     // console.log(Branchesdata)
        //     setAreas(QueryData.docs.map((doc) => ({ ...doc.data() })))
        // }
        // getDocs()
        // console.log(areas)
    }

    const getAreaName = (e) => {
        setAreaName(e.target.text)
        setShowText(true)
    }


    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered" style={{ "borderRadius": "20" }}>
                    <div class="modal-content">
                        <button type="button" class="btn-close m-4" data-bs-dismiss="modal" aria-label="Close"></button>
                        {
                            showArea ? (
                                <div className="bg-light">
                                    <span className="iconstyle" onClick={() => {
                                        setShowArea(false);
                                        setShowText(false)
                                    }}><FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon></span>
                                </div>
                            ) : (
                                <></>
                            )
                        }
                        <div className="text-center bg-light p-5">
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
                                    setCity(e.target.value)
                                }}
                            />
                            <datalist id="Cities">
                                {
                                    cities.map((city) => {
                                        return <option value={city.Name}>{city.Name}</option>
                                    })
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
                                                    <li><a onClick={(e) => { getAreas(e) }}>{city.Name}</a></li>
                                                )
                                            })
                                        }
                                        {
                                            showArea && areas.map((city) => {
                                                return (
                                                    <li><a onClick={(e) => { getAreaName(e) }}>{city}</a></li>
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
                                                <a href="" style={{ marginLeft: "40%" }}> SELECT </a>
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