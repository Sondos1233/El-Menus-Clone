import 'bootstrap/dist/css/bootstrap.min.css';
import './Dineout.css'
import DineoutbyPlace from './DineoutbyPlace/DineoutbyPlace';
import DineoutByCity from './DineoutByCity/DineoutByCity'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from 'react';
import pizzaImg from './../../images/Dineout/pizza.jpg'
import BurgersImg from './../../images/Dineout/Burgers.jpg'
import ChinessImg from './../../images/Dineout/Chiness.jpg'
import FriedChickenImg from './../../images/Dineout/FriedChicken.jpg'
import KosharyImg from './../../images/Dineout/koshary.jpg'
import SandwichesImg from './../../images/Dineout/Sandwiches.jpg'


export default function Dineout() {
    const [dineOutbyPlace, setDineoutbyPlace] = useState([
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14d74-2225-11e8-924e-0242ac110011.jpg", title: "Work Or Study" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b15181-2225-11e8-924e-0242ac110011.jpg", title: "Casual Dining" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14c1e-2225-11e8-924e-0242ac110011.jpg", title: "Hidden Gems" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b15211-2225-11e8-924e-0242ac110011.jpg", title: "Food with a View" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14fc6-2225-11e8-924e-0242ac110011.jpg", title: "Romantic" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14a55-2225-11e8-924e-0242ac110011.jpg", title: "Fancy Dining" },
    ])

    const [dineOutbyType, setDineoutbyType] = useState([
        { urlImage: pizzaImg, title: "pizza" },
        { urlImage: BurgersImg, title: "Burgers" },
        { urlImage: ChinessImg, title: "Chiness" },
        { urlImage: KosharyImg, title: "Koshary" },
        { urlImage: FriedChickenImg, title: "FriedChecken" },
        { urlImage: SandwichesImg, title: "Sandwiches" },
    ])

    const [dineOutbyNewRes, setDineOutbyNewRes] = useState([
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "pizza" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "Burgers" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "Chiness" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "Koshary" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "FriedChecken" },
        { urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/66ada169-d8cd-4021-af20-ad7518ac74d2.jpg", title: "Sandwiches" },
    ])

    return (
        <>
            <section class="container-fluid my-5">
                <div class="row mx-md-4">
                    <div class="col-12 text-center p-3">
                        <h1 class="fw-bold">Discover restaurants to dine-out</h1>
                    </div>

                    <div class="col-12 d-flex justify-content-between mt-4">
                        <h3 class="fw-bold" style={{ color: "rgb(88, 86, 86)" }} >Discover by Moods</h3>
                        <div>
                            <a href="#">see All</a>
                            <span></span>
                        </div>
                    </div>

                    {/* Dine-out CONTENT */}
                    <div class="col-12 col-lg-6 d-flex px-0 bg-danger mt-4 dine-coffee" >
                        <div
                            class="inner-coffee">
                            <h1 class="mt-auto text-light fw-bold p-4" style={{ cursor: "pointer" }} onclick="filterByMood(event)">Coffeeshops</h1>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 d-flex mt-4">
                        <div class="row px-md-3">
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


            {/* Discover BY Types */}
            <section class="disByDishes-Slider container-fluid my-5 overflow-hidden">
                <div class="row">
                    <div class="col-12 mx-3 py-3">
                        <h3 class="fw-bold" style={{ color: "rgb(88, 86, 86)" }}>Discover by Dishes</h3>
                    </div>

                    <div class="col-12">
                        <div id="disByDishes-Slider" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-12 d-flex" id="cardDishes">
                                            {/* <!-- Dieshes Container filled by JS --> */}

                                            {
                                                dineOutbyType.map((Type) => {
                                                    return (
                                                        <div class="item-1 px-2">
                                                            <div class="box-disByDishes">
                                                                <div class="slide-img">
                                                                    <img src={Type.urlImage} alt="" />
                                                                    <div class="detail-box">
                                                                        <a href="#" class="meal-kind">{Type.title}</a>
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


            {/* Discover BY City */}
            <section class="disArear-Slider container-fluid my-5 overflow-hidden">
                <div class="row">

                    <div class="col-12 mx-3 py-3">
                        <h4 class="fw-bold" style={{ color: "rgb(88, 86, 86)" }}>Discover Maadi</h4>
                    </div>

                    <div class="col-12">
                        <div id="disArear-Slider" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div class="carousel-inner">

                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-12 d-flex">

                                            <DineoutByCity srcImage="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/155c7faa-aff2-439f-a4bc-89fd1746258f.jpg"></DineoutByCity>
                                            <DineoutByCity srcImage="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/155c7faa-aff2-439f-a4bc-89fd1746258f.jpg"></DineoutByCity>
                                            <DineoutByCity srcImage="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/155c7faa-aff2-439f-a4bc-89fd1746258f.jpg"></DineoutByCity>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* Discover By MOOD */}
            <section class="hiddenGems-Slider container-fluid my-5 overflow-hidden">
                <div class="row">
                    <div class="col-12 mx-5 py-4">
                        <h4 class="fw-bold" style={{ color: "color: rgb(88, 86, 86)" }}>Hidden Gems</h4>
                    </div>
                    <div class="col-12">
                        <div id="hiddenGems-Slider" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div class="carousel-inner">

                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-12 d-flex">

                                            <DineoutByCity srcImage="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/de7f35a3-9f76-41ce-8ee1-d0d43bad4e63.jpg"></DineoutByCity>
                                            <DineoutByCity srcImage="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/de7f35a3-9f76-41ce-8ee1-d0d43bad4e63.jpg"></DineoutByCity>
                                            <DineoutByCity srcImage="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/de7f35a3-9f76-41ce-8ee1-d0d43bad4e63.jpg"></DineoutByCity>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
                {/* Discover By New Resturants */}
            <section class="newResturants-Slider container-fluid my-5 overflow-hidden">
                <div class="row">
                    <div class="col-12 mx-5 py-4">
                        <h3 class="fw-bold" style={{ color: "color: rgb(88, 86, 86)"}}>New Restaurants</h3>
                    </div>
                    <div class="col-12">
                        <div id="newResturants-Slider" class="carousel slide" data-bs-ride="carousel" data-bs-interval="false">
                            <div class="carousel-inner">

                                <div class="carousel-item active">
                                    <div class="row">
                                        <div class="col-12 d-flex">

                                        {
                                                dineOutbyNewRes.map((Type) => {
                                                    return (
                                                        <div class="item-1 px-2">
                                                            <div class="box-disByDishes">
                                                                <div class="slide-img">
                                                                    <img src={Type.urlImage} alt="" />
                                                                    <div class="detail-box">
                                                                        <a href="#" class="meal-kind">{Type.title}</a>
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