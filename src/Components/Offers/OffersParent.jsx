import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faStar, faMotorcycle, faCircle, faMapMarkedAlt, faPercentage, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import {db} from '../../Firebase/Firebase'
import { collection, collectionGroup, getDocs,getDoc,doc } from 'firebase/firestore'
import { useEffect, useState } from 'react';
import Offers from "./Offers";
import { async } from "@firebase/util";


export default function OfferParent() {
    //Restaurants Collection
    const [Restaurants, setRestaurants] = useState([
        
    ]);
    const [offers, setOffers] = useState([
        
    ]);
    const resturantsCollection = collection(db, "Restaurant")

    let l=0;
    const getOffers = async(doc1,arr) =>{
        const Offercollec = await collection(db,'Restaurant',doc1.id,'Offers');
        const data2 = await getDocs(Offercollec);
        if(data2.docs.length){  
            setOffers(data2.docs.map((i)=>{
                return i.data()
            }))
                const Resoffer = await doc(db,'Restaurant',doc1.id);
                const data3 = await getDoc(Resoffer);
                //console.log(data3.data())
                arr.push({...data3.data(),id:data3.id});
                setRestaurants(arr);
        }
    };
    useEffect(() => {
        const getRestaurants = async () => {
            let arr = [];
            const data = await getDocs(resturantsCollection);
            data.docs.map((doc1)=>{ 
                getOffers(doc1,arr);
                l++;
            
            })
        // const Resdata = await getDocs(resturantsCollection)
        // // console.log(Resdata)
        // setRestaurants(Resdata.docs.map((doc) => ({ ...doc.data() })))
    }
    getRestaurants()
    
}, [])

return (
    <>
    {console.log(Restaurants)}
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
                        {/* {console.log(Restaurants)} */}
                        {
                            Restaurants.map((Res,index) => {  
                                return (
                                    <Offers Rate={Res.Rate} ResType={Res.Type} ResName={Res.ResName} srcImage={Res.ImageURL} srcLogo={Res.ImageLogo} Res={Res}></Offers>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}
