import 'bootstrap/dist/css/bootstrap.min.css';
import './Dineout.css'
import './Dineout.scss'
import FilterCard from './FilterCard.js/FilterCard';
import DineoutByCity from './DineoutByCity/DineoutByCity'
import { useEffect, useState } from 'react';
import NoData from '../../images/NoData.svg'
import pizzaImg from './../../images/Dineout/pizza.jpg'
import BurgersImg from './../../images/Dineout/Burgers.jpg'
import ChinessImg from './../../images/Dineout/Chiness.jpg'
import FriedChickenImg from './../../images/Dineout/FriedChicken.jpg'
import KosharyImg from './../../images/Dineout/koshary.jpg'
import SandwichesImg from './../../images/Dineout/Sandwiches.jpg'
// FireStore
<<<<<<< HEAD
import { db } from '../../Firebase/Firebase'
=======
import { db } from './../../Firebase/Firebase'
>>>>>>> 99768ac5b55289dbb5de647d672e71378df5d8c1
import { collection, collectionGroup, getDocs, limit, query, where } from 'firebase/firestore'
import DineoutbyType from './DineoutByType/DineoutByType';

export default function Dineout() {
    // //Restaurants Collection
    const [Restaurants, setRestaurants] = useState([]);
    const resturantsCollection = collection(db, "Restaurant")

    //Branches Collection
    const [Branches, setBranches] = useState([]);
    const BranchesCollection = collectionGroup(db, "Branches")

    // //QuerybyType
    const [QueryByType, setQueryByType] = useState([]);

    //QueryMood
    const [QueryByMood, setQueryByMood] = useState([]);
    const [QueryByMood2, setQueryByMood2] = useState([]);

    // Query Area
    const [QueryByArea, setQueryByArea] = useState([]);


    // QueryCity
    const [QueryByCity, setQueryByCity] = useState([]);

    useEffect(() => {
        // Restaurant Collection
        const getRestaurants = async () => {
            const Resdata = await getDocs(resturantsCollection)
            // console.log(Resdata)
            setRestaurants(Resdata.docs.map((doc) => ({ id: doc.id, ...doc.data() })))
        }
        getRestaurants()

        //Branches Collection
        const getBranches = async () => {
            const Branchesdata = await getDocs(BranchesCollection)
            // console.log(Branchesdata)
            setBranches(Branchesdata.docs.map((doc) => ({ ...doc.data() })))
        }
        getBranches()

        // Query for romantic section
        const QueryByMoodDocs2 = query(
            collection(db, "Restaurant"),
            limit(10),
            where("Mood", "array-contains", "Romantic")
        );

        const getResByMoodQuery2 = async () => {
            const QueryData = await getDocs(QueryByMoodDocs2)
            // console.log(QueryData)
            setQueryByMood2(QueryData.docs.map((doc) => ({ ...doc.data() })))

        }
        getResByMoodQuery2()

        // Quetry Area
        filterByArea();

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
    const [clcikFirst, setClickFirst] = useState(false)
    const filterByType = (e) => {
        setQueryByType([])
        if (clicked == false) {
            const QueryByTypeDocs = query(
                collection(db, "Restaurant"),
                where("Type", "array-contains", e.target.text),
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
    // const test = "";
    const filterByMood = (e) => {
        setClickFirst(true)
        setQueryByMood([])
        if (clicked == false) {
            const QueryByMoodDocs = query(
                collection(db, "Restaurant"),
                limit(10),
                where("Mood", "array-contains", e.target.innerText)
            );

            const getResByMoodQuery = async () => {
                const QueryData = await getDocs(QueryByMoodDocs)
                // console.log(QueryData)
                setQueryByMood(QueryData.docs.map((doc) => ({ ...doc.data() })))

            }
            getResByMoodQuery()

            setClicked(true)
        }
        else {
        setClickFirst(false)
            
            setClicked(false)
        }


    }


    const filterByArea = () => {
        // console.log(area)

        var Area = localStorage.getItem('areaName')
        console.log(Area)

        const QueryByAreaDocs = query(
            collection(db, "Restaurant"),
            limit(10),
            where("Areas", "array-contains", Area.trim())
        );

        const getResByAreaQuery = async () => {
            const QueryData = await getDocs(QueryByAreaDocs)
            // console.log(QueryData)
            setQueryByArea(QueryData.docs.map((doc) => ({ ...doc.data() })))

        }
        getResByAreaQuery()

    }

    return (
        <>
            {/* FOR TESTING ONLY */}
            {/* <div>
                jiji
            </div>
            <div>
                {
                    QueryByType.map((test) => {
                        
                        return (
                            test.Areas.includes(localStorage.getItem("areaName").trim()) &&  <div>
                                {test.ResName}
                            </div>
                        )
                    })
                }
            </div> */}

            {/* Discover By MOOD */}
            <section className="container-fluid my-5">
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
                            <h1 className="mt-auto text-light fw-bold p-4" style={{ cursor: "pointer" }}  onClick={(e) => { filterByMood(e) }}>Coffeeshops</h1>
                        </div>
                    </div>

                    <div className="col-12 col-lg-6 d-flex mt-4">
                        <div className="row px-md-3">
                            {
                                dineOutbyPlace.map((place) => {
                                    return (
                                        <div class="col-md-4 col-6 my-1 px-1" style={{ minHeight: "100px", maxHeight: "400px" }}>
                                            <div class="d-flex px-0" style={{
                                                borderRadius: "5px", height: "100%", backgroundImage: `url(${place.urlImage})`,
                                                backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"
                                            }}>
                                                <div class="dine-content2">
                                                    <h1 class="mt-auto text-light fw-bold p-4" style={{ fontSize: "20px", cursor: "pointer" }} onClick={(e) => { filterByMood(e) }} >{place.title}</h1>
                                                </div>
                                            </div>
                                        </div>
                                        // <DineoutbyPlace urlImage={place.urlImage} title={place.title}></DineoutbyPlace>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </section>

            {/* fILTER BY MOOD */}
            <div className="col-12">
                <div id="disByDishes-Slider container-fluid" >
                    <div className="row container-fluid">
                        <div className="col-12" id="cardDishes">
                            <div className="row container-fluid">
                                {/* <!-- Dieshes Container filled by JS --> */}
                                {
                                    QueryByMood.length ? (QueryByMood.map((Type) => {
                                        return (
                                            
                                            Type.Areas.includes(localStorage.getItem("areaName").trim())
                                             && <FilterCard image={Type.ImageURL} logo={Type.ImageLogo} name={Type.ResName} type={Type.Mood}></FilterCard>
                                        )
                                    })) :
                                        clcikFirst &&
                                        (
                                        <div className="text-center">
                                            <img src={NoData} width="300px" height="300px" />
                                        </div>
                                        )
                                       
                                }
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section className="disByDishes-Slider container-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-12 mx-3">
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
                                                dineOutbyType.map((Type) => {
                                                    return (
                                                        <div class="item-1 px-2 p-2">
                                                            <div class="box-newResturants" style={{ height: "25vh" }}>
                                                                <div class="slide-img " style={{ width: "100%", boxShadow: "none" }}>
                                                                    <img
                                                                        src={Type.urlImage} style={{ height: "19vh", width: "150px" }}
                                                                        alt="" />
                                                                    <div class="detail-box" style={{ flexDirection: "column", justifyContent: "center" }}>
                                                                        <a style={{ cursor: "pointer", fontSize: "2vh" }} class="meal-kind" onClick={(e) => { filterByType(e) }}>{Type.title}</a>
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

                    {/* Filter By Type Display */}
                    <div className="col-12">
                        <div id="disByDishes-Slider container-fluid" >
                            <div className="row container-fluid">
                                <div className="col-12" id="cardDishes">
                                    <div className="row container-fluid">
                                        {/* <!-- Dieshes Container filled by JS --> */}

                                        {
                                            QueryByType.map((Type) => {
                                                return (
                                                    Type.Areas.includes(localStorage.getItem("areaName").trim()) && <DineoutbyType Res={Type} />
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
            <section className="disArear-Slider container-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-12 mx-3">
                        <h4 className="fw-bold" style={{ color: "rgb(88, 86, 86)" }}>Discover {localStorage.getItem('areaName')}</h4>
                    </div>

                    <div className="col-12 d-flex">
                        <div class="Shrouk-Slider slider slider--first js-slider">
                            <div class="slider__wrapper">

                                <div class="slider__inner js-slider-inner">
                                    {
                                        QueryByArea.map((Res) => {
                                            return (
                                                <DineoutByCity Address={Branches.Adddress} Rate={Res.Rate} ResType={Res.Type} ResName={Res.ResName} srcImage={Res.ImageURL} srcLogo={Res.ImageLogo}></DineoutByCity>

                                            )
                                        })
                                    }
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Discover By MOOD */}
            <section className="hiddenGems-Slider container-fluid my-5 overflow-hidden">
                <div className="row">
                    <div className="col-12 mx-3 pb-4">
                        <h4 className="fw-bold" style={{ color: "color: rgb(88, 86, 86)" }}>Romantic</h4>
                    </div>
                    <div className="col-12">
                        <div id="hiddenGems-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex">

                                            {
                                                QueryByMood2.map((Res) => {
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
                    <div className="col-12 mx-3 pb-4">
                        <h3 className="fw-bold" style={{ color: "color: rgb(88, 86, 86)" }}>New Restaurants</h3>
                    </div>
                    <div className="col-12">
                        <div id="newResturants-Slider" className="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <div className="row">
                                        <div className="col-12 d-flex">

                                            {
                                                Restaurants.map((Res) => {
                                                    return (

                                                        <div class="item-1 p-2">
                                                            <div class="box-newResturants" style={{ height: "27vh", width: "13vw" }}>
                                                                <div class="slide-img" style={{ width: "auto", boxShadow: "none" }}>
                                                                    <img
                                                                        src={Res.ImageLogo} style={{ height: "19vh", width: "13vw" }}
                                                                        alt="" />
                                                                    <div class="detail-box" style={{ flexDirection: "column", justifyContent: "center" }}>
                                                                        <a href="#" class="meal-kind" style={{ fontSize: "13px" }}>{Res.ResName}</a>
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