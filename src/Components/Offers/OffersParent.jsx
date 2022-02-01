import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faStar, faMotorcycle, faCircle, faMapMarkedAlt, faPercentage, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import {db} from '../../Firebase/Firebase'
import { collection, collectionGroup, getDocs } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import Offers from "./Offers";


export default function OfferParent() {
    //Restaurants Collection
    const [Restaurants, setRestaurants] = useState([]);
    const resturantsCollection = collection(db, "Restaurant")


    useEffect(() => {
        const getRestaurants = async () => {
            const Resdata = await getDocs(resturantsCollection)
            // console.log(Resdata)
            setRestaurants(Resdata.docs.map((doc) => ({ ...doc.data() })))
        }
        getRestaurants()

    }, [])

    return (
        <>
            {/*  Start Of ToDelivery Section Markup */}
            <section id="toDelivery">
                <div>
                    <h3>
                        <a href="./Delivery.html"><FontAwesomeIcon id="deliveryIcon" icon={faChevronLeft}></FontAwesomeIcon></a>
                        Best Delivery Offers & Discounts in
                        <span>NasrCity</span>
                    </h3>
                </div>

            </section>
            <hr></hr>
            {/*End Of ToDelivery Section Markup */}

            {/*Start Of Offers Cards Section Markup  */}
            <section id="cardsSection">
                <div class="container-lg">
                    <div id="cardsArea" class="row row-cols-1 row-cols-md-1 row-cols-lg-3 g-4">
                        {
                            Restaurants.map((Res) => {
                                return (
                                    <Offers Rate={Res.Rate} ResType={Res.Type} ResName={Res.ResName} ></Offers>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
