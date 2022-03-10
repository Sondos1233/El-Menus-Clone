import 'bootstrap/dist/css/bootstrap.min.css';
import './Dineout.css'
import './Dineout.scss'
import DineoutbyPlace from './DineoutbyPlace/DineoutbyPlace';
import DineoutByCity from './DineoutByCity/DineoutByCity'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import pizzaImg from './../../images/Dineout/pizza.jpg'
import BurgersImg from './../../images/Dineout/Burgers.jpg'
import ChinessImg from './../../images/Dineout/Chiness.jpg'
import FriedChickenImg from './../../images/Dineout/FriedChicken.jpg'
import KosharyImg from './../../images/Dineout/koshary.jpg'
import SandwichesImg from './../../images/Dineout/Sandwiches.jpg'


// FireStore
import { db } from '../../firebase/Firebase'
import { collection, collectionGroup, getDocs, limit, query, where } from 'firebase/firestore'

//Shrouk Slider JS CODE
// function updateSlidePosition(e, direction) {
//     const firstSlideWidth = e.querySelector(".slider__slide").offsetWidth;

//     if (direction === "prev") {
//         e.scrollLeft = e.scrollLeft - firstSlideWidth;
//     } else {
//         e.scrollLeft = e.scrollLeft + firstSlideWidth;
//     }
// }

export default function Dineout() {

    const discovdrByDishCardsCarouselNumber = 8;
    const discoverByCirtCardsCarouselNumber = 4;
    //test array to rendeer items in carousel
    const [itemsArr, setItemsArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])


    // //Restaurants Collection
    const [Restaurants, setRestaurants] = useState([]);
    const resturantsCollection = collection(db, "Restaurant")

    //Branches Collection
    const [Branches, setBranches] = useState([]);
    const BranchesCollection = collectionGroup(db, "Branches")

    // //QuerybyType
    const [QueryByType, setQueryByType] = useState([]);


    useEffect(() => {
        // Restaurant Collection
        const getRestaurants = async () => {
            const Resdata = await getDocs(resturantsCollection)
            // console.log(Resdata)
            setRestaurants(Resdata.docs.map((doc) => ({ ...doc.data() })))
        }
        getRestaurants()

        //Branches Collection
        const getBranches = async () => {
            const Branchesdata = await getDocs(BranchesCollection)
            // console.log(Branchesdata)
            setBranches(Branchesdata.docs.map((doc) => ({ ...doc.data() })))
        }
        getBranches()

        //Restaurant Query By Type

    }, [])


    const [dineOutbyPlace, setDineoutbyPlace] = useState([
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14d74-2225-11e8-924e-0242ac110011.jpg", title: "Work Or Study" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b15181-2225-11e8-924e-0242ac110011.jpg", title: "Casual Dining" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14c1e-2225-11e8-924e-0242ac110011.jpg", title: "Hidden Gems" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b15211-2225-11e8-924e-0242ac110011.jpg", title: "Food with a View" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14fc6-2225-11e8-924e-0242ac110011.jpg", title: "Romantic" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14a55-2225-11e8-924e-0242ac110011.jpg", title: "Fancy Dining" },
    ])

    const [dineOutbyType, setDineoutbyType] = useState([
        { urlImage: pizzaImg, title: "Pizza" },
        { urlImage: BurgersImg, title: "Burgers" },
        { urlImage: ChinessImg, title: "Chiness" },
        { urlImage: KosharyImg, title: "Koshary" },
        { urlImage: FriedChickenImg, title: "Fried chicken" },
        { urlImage: SandwichesImg, title: "Sandwiches" },
    ])


    //Functions
    const [clicked, setClicked] = useState(false);
    const filterByType = (e) => {
        setQueryByType([])
        if (clicked == false) {
            const QueryByTypeDocs = query(
                collection(db, "Restaurant"),
                limit(10),
                where("Type", "array-contains", e.target.text)
            );

            const getResByTypeQuery = async () => {
                const QueryData = await getDocs(QueryByTypeDocs)
                // console.log(Branchesdata)
                setQueryByType(QueryData.docs.map((doc) => ({ ...doc.data() })))
            }
            getResByTypeQuery()

            setClicked(true)
        }
        else {
            setClicked(false)
        }


    }






    return (
        <>
            {/* FOR TESTING ONLY */}
            {/* <div>
                {
                    QueryByMood.map((test) => {
                        return (
                            <div>
                                {test.ResName}
                            </div>
                        )
                    })
                }
            </div> */}

            {/* Discover By MOOD */}
            <section className="container-fluid my-5" style={{ padding: "0" }}>
                <div className="row mx-md-4">
                    <div className="col-12 text-center p-3">
                        <h1 className="fw-bold">Discover restaurants to dine-out</h1>
                    </div>

                    <div className="col-12 d-flex justify-content-between mt-4">
                        <h3 className="fw-bold" style={{ color: "rgb(88, 86, 86)" }} >Discover by Moods</h3>
                        <div>
                            <a href="#">see All</a>
                            <span></span>
                        </div>
                    </div>

                    {/* Dine-out CONTENT */}
                    <div className="col-12 col-lg-6 d-flex px-0 bg-danger mt-4 dine-coffee" >
                        <div
                            className="inner-coffee">
                            <h1 className="mt-auto text-light fw-bold p-4" style={{ cursor: "pointer" }}>Coffeeshops</h1>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 d-flex mt-4">
                        <div className="row px-md-3">
                            {
                                dineOutbyPlace.map((place) => {
                                    return (
                                        <DineoutbyPlace urlImage={place.urlImage} title={place.title}></DineoutbyPlace>
                                    )
                                })
                            }

                        </div>
                    </div>


                </div>
            </section>


            {/* Discover BY dishes */}
            <section className="disByDishes-Slider container-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-12 mx-3 py-3">
                        <h3 className="fw-bold" style={{ color: "rgb(88, 86, 86)" }}>Discover by Dishes</h3>
                    </div>

                    <div className="col-12">
                        <div id="disByDishes-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex" id="cardDishes">
                                            {/* <!-- Dieshes Container filled by JS --> */}

                                            {
                                                // onClick={(e) => { filterByType(e) }}
                                                <Carousel show={discovdrByDishCardsCarouselNumber} slide={2} transition={0.5}>
                                                    {itemsArr.map((Type) => {
                                                        return (

                                                            <div class="item-1 px-2 p-2">
                                                                <div class="box-newResturants" style={{ height: "35vh" }}>
                                                                    <div class="slide-img">
                                                                        <img
                                                                            //Type.urlImage 
                                                                            src={pizzaImg} style={{ height: "19vh" }}
                                                                            alt="" />
                                                                        <div class="detail-box" style={{ flexDirection: "column", justifyContent: "center" }}>
                                                                            <a style={{ cursor: "pointer" }} class="meal-kind" onClick={(e) => { filterByType(e) }}>{Type.title}</a>

                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        )
                                                    })}

                                                </Carousel>
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                    {/* Filter By Type Display */}
                    <div className="col-12">
                        <div id="disByDishes-Slider container-fluid" >
                            <div className="row">
                                <div className="col-12 d-flex" id="cardDishes">
                                    <div className="row">
                                        {/* <!-- Dieshes Container filled by JS --> */}

                                        {
                                            QueryByType.map((Type) => {
                                                {/* <div class="item-1 px-2 p-2">
                                                        <div class="box-newResturants" style={{ height: "35vh" }}>
                                                            <div class="slide-img">
                                                                <img
                                                                    src={Type.ImageURL} style={{ height: "19vh" }}
                                                                    alt="" />
                                                                <div class="detail-box" style={{ flexDirection: "column", justifyContent: "center" }}>
                                                                    <a href="#" class="meal-kind">{Type.ResName}</a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> */}
                                                return (
                                                    <div className="col-4 my-4">
                                                        <div className="card">
                                                            <div className="card-body shadow shadow-lg">
                                                                <img src={Type.ImageURL}
                                                                    alt="" className="card-img" style={{ width: "100%", height: "auto" }} />
                                                                <div className="Rest-box" style={{ display: "flex", flexDirection: "row" }}>
                                                                    <div className="Rest-logo" style={{ width: "50px", height: "auto", margin: "10px" }}>
                                                                        <img src={Type.ImageLogo}
                                                                            alt="" style={{ width: "100%", height: "auto", border: "2px solid lightgrey", borderRadius: "10px", boxShadow: "1px 1px 5px" }} />
                                                                    </div>
                                                                    <div className="Rest-data my-2">
                                                                        <p className="Rest-type m-0" style={{ color: "lightgrey", fontSize: "12px", fontWeight: "700" }}>
                                                                            European Coffee & Drinks
                                                                        </p>
                                                                        <a href="#" className="Rest-name m-0" style={{ fontWeight: "700" }}>
                                                                            {Type.ResName}
                                                                        </a>
                                                                        <p className="Rest-rate m-0">
                                                                            <svg data-v-21f5376e="" data-v-34cbeed1="" height="14" width="14" viewBox="0 0 14 14" class="vue-star-rating-star" step="10"><linearGradient data-v-21f5376e="" id="m6ck1m" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#faad1d"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="vvdmam" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#fff" filter="url(#vvdmam)"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)"></polygon></svg>
                                                                            <svg data-v-21f5376e="" data-v-34cbeed1="" height="14" width="14" viewBox="0 0 14 14" class="vue-star-rating-star" step="10"><linearGradient data-v-21f5376e="" id="m6ck1m" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#faad1d"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="vvdmam" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#fff" filter="url(#vvdmam)"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)"></polygon></svg>
                                                                            <svg data-v-21f5376e="" data-v-34cbeed1="" height="14" width="14" viewBox="0 0 14 14" class="vue-star-rating-star" step="10"><linearGradient data-v-21f5376e="" id="m6ck1m" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#faad1d"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="vvdmam" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#fff" filter="url(#vvdmam)"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)"></polygon></svg>
                                                                            <svg data-v-21f5376e="" data-v-34cbeed1="" height="14" width="14" viewBox="0 0 14 14" class="vue-star-rating-star" step="10"><linearGradient data-v-21f5376e="" id="m6ck1m" x1="0" x2="100%" y1="0" y2="0"><stop data-v-21f5376e="" offset="100%" stop-color="#faad1d"></stop> <stop data-v-21f5376e="" offset="100%" stop-color="#d8d8d8"></stop></linearGradient> <filter data-v-21f5376e="" id="vvdmam" height="130%" width="130%" filterUnits="userSpaceOnUse"><feGaussianBlur data-v-21f5376e="" stdDeviation="0" result="coloredBlur"></feGaussianBlur> <feMerge data-v-21f5376e=""><feMergeNode data-v-21f5376e="" in="coloredBlur"></feMergeNode> <feMergeNode data-v-21f5376e="" in="SourceGraphic"></feMergeNode></feMerge></filter> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#fff" filter="url(#vvdmam)"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)" stroke="#999" stroke-width="0" stroke-linejoin="miter"></polygon> <polygon data-v-21f5376e="" points="6.363636363636363,0.7070707070707071,2.121212121212121,14,12.727272727272727,5.515151515151515,0,5.515151515151515,10.606060606060606,14" fill="url(#m6ck1m)"></polygon></svg>
                                                                            <span style={{ color: "grey", fontSize: "12px" }}>
                                                                                1092 Ratings
                                                                            </span>
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <p className="Rest-address mx-2" style={{ fontWeight: "700", color: "grey" }}>
                                                                    Royal Maadi Hotel, 11 Road 18, Maadi Sarayat
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Discover BY City */}
            <section className="">
                <div className="row">
                    <div className="col-12 mx-3 py-3">
                        <h4 className="fw-bold" style={{ color: "rgb(88, 86, 86)" }}>Discover Maadi</h4>
                    </div>

                    <div className="">
                        {/* <div class="Shrouk-Slider slider slider--first js-slider">
                            <div class="slider__wrapper">
                                <button class="slider__arrow slider__arrow-prev js-slider-prev" >&#8249;</button> */}
                                {/* <div class="slider__inner js-slider-inner"> */}
                                
                                        <Carousel show={discoverByCirtCardsCarouselNumber} slide={2} transition={0.5}>
                                        {
                                            itemsArr.map((Res) => {
                                                return (

                                                    <DineoutByCity Address={Branches.Adddress} Rate={Res.Rate} ResType={Res.Type} ResName={Res.ResName} srcImage={Res.ImageURL} srcLogo={Res.ImageLogo}></DineoutByCity>
                                                )
                                            })
                                            
                                        }
                                        </Carousel>
                                   
                                {/* </div> */}
                                {/* <button class="slider__arrow slider__arrow-next js-slider-next">&#8250;</button> */}
                            </div>
                        </div>
                    {/* </div>
                </div> */}
            </section>


            {/* Hidden Gems Section */}
            <section className="hiddenGems-Slider container-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-12 mx-5 py-4">
                        <h4 className="fw-bold" style={{ color: "color: rgb(88, 86, 86)" }}>Hidden Gems</h4>
                    </div>
                    <div className="col-12">
                        <div id="hiddenGems-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex">

                                        <Carousel show={discoverByCirtCardsCarouselNumber} slide={2} transition={0.5}>
                                        {
                                            itemsArr.map((Res) => {
                                                return (

                                                    <DineoutByCity Address={Branches.Adddress} Rate={Res.Rate} ResType={Res.Type} ResName={Res.ResName} srcImage={Res.ImageURL} srcLogo={Res.ImageLogo}></DineoutByCity>
                                                )
                                            })
                                            
                                        }
                                        </Carousel>

                                            {
                                                Restaurants.map((Res) => {
                                                    return (
                                                        <DineoutByCity Rate={Res.Rate} ResType={Res.Type} ResName={Res.ResName} srcImage={Res.ImageURL} srcLogo={Res.ImageLogo}></DineoutByCity>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Discover By New Resturants */}
            <section className="newResturants-Slider container-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-12 mx-5 py-4">
                        <h3 className="fw-bold" style={{ color: "color: rgb(88, 86, 86)" }}>New Restaurants</h3>
                    </div>
                    <div className="col-12">
                        <div id="newResturants-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex">

                                            {/* <p class="resturantDesc" style={{ color: "rgb(161, 157, 157)", fontSize: "10px", margin: "auto", position: "relative", top: "15px"}}>
                                                                            {Res.Type}
                                                                        </p> */}
                                            {
                                                Restaurants.map((Res) => {
                                                    return (

                                                        <div class="item-1 px-2 p-2">
                                                            <div class="box-newResturants" style={{ height: "35vh" }}>
                                                                <div class="slide-img">
                                                                    <img
                                                                        src={Res.ImageLogo} style={{ height: "19vh" }}
                                                                        alt="" />
                                                                    <div class="detail-box" style={{ flexDirection: "column", justifyContent: "center" }}>
                                                                        <a href="#" class="meal-kind">{Res.ResName}</a>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </>
    );
}






