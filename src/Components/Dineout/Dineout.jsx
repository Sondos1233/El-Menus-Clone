import 'bootstrap/dist/css/bootstrap.min.css';
import './Dineout.css'
import DineoutbyPlace from './DineoutbyPlace/DineoutbyPlace';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { useState } from 'react';


export default function Dineout() {
    const [dineOutbyPlace, setDineoutbyPlace] = useState([
        {urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14d74-2225-11e8-924e-0242ac110011.jpg", title: "Work Or Study"},
        {urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b15181-2225-11e8-924e-0242ac110011.jpg", title: "Casual Dining"},
        {urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14c1e-2225-11e8-924e-0242ac110011.jpg", title: "Hidden Gems"},
        {urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b15211-2225-11e8-924e-0242ac110011.jpg", title: "Food with a View"},
        {urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14fc6-2225-11e8-924e-0242ac110011.jpg", title: "Romantic"},
        {urlImage: "https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/b6b14a55-2225-11e8-924e-0242ac110011.jpg", title: "Fancy Dining"},
    ])

    return (
        <>
            <section class="container-fluid my-5"> 
                <div class="row mx-md-4">
                    <div class="col-12 text-center p-3">
                        <h1 class="fw-bold">Discover restaurants to dine-out</h1>
                    </div>

                    <div class="col-12 d-flex justify-content-between mt-4">
                        <h3 class="fw-bold" style= {{ color: "rgb(88, 86, 86)"}} >Discover by Moods</h3>
                        <div>
                        <a href="#">see All</a>
                        <span></span>
                        </div>
                    </div>

                    {/* Dine-out CONTENT */}
                    <div class="col-12 col-lg-6 d-flex px-0 bg-danger mt-4 dine-coffee" >
                        <div
                        class="inner-coffee">
                        <h1 class="mt-auto text-light fw-bold p-4" style={{ cursor: "pointer"}} onclick="filterByMood(event)">Coffeeshops</h1>
                        </div>
                    </div>

                    <div class="col-12 col-lg-6 d-flex mt-4">
                        <div class="row px-md-3">
                            {
                                dineOutbyPlace.map((place)=>{
                                    return(
                                        <DineoutbyPlace urlImage={place.urlImage} title = {place.title}></DineoutbyPlace>
                                    )
                                })
                            }
                            
                        </div>
                    </div>
                </div>
            </section>


            {/* Discover BY Dishes */}
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
                                        <div class="item-2 px-2"> 
                                            <div class="box-disByDishes">
                                                <div class="slide-img">
                                                        <img src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/b66b9310-bc6c-449c-a163-4c86947568c0.jpg" alt="" />
                                                        <div class="detail-box">
                                                            <a href="#" class="meal-kind">Pizza</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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