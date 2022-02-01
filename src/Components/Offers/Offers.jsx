import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Offers.css';
import  ResImg from '../../images/Offers/Atract_Chicken_FilA.jpg'
import  ResLogo  from '../../images/Offers/Logo_Buffalo_Burger.jpg'
import {} from '@fortawesome/free-regular-svg-icons'
import {faChevronLeft,faStar,faMotorcycle,faCircle,faMapMarkedAlt,faPercentage, faCreditCard} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/free-brands-svg-icons'

export default function Navbar() {

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
                        <div class="col" id="wholeCard">
                            <a href="#">
                                <div class="card h-100">
                                    <img id="bigImg" src={ResImg} class="card-img-top" alt="Food Img"/>
                                        <div class="card-body">
                                            <div id="upperPart">
                                                <img src={ResLogo} alt="Resrraunt Logo" srcset=""/>
                                                    <div id="restName">
                                                        <div id="offerDisc">30% Off your 1st order</div>
                                                        <h3>Buffolo Burger</h3>
                                                        <span>Burger.Sandwitches</span>
                                                    </div>
                                                    <div id="rating">
                                                        <span>
                                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                                            <span>4.8</span>
                                                        </span>

                                                        <span id="criditCardIcon"><FontAwesomeIcon id="faCreditCard" icon={faCreditCard}></FontAwesomeIcon></span>
                                                    </div>
                                            </div>
                                            <div id="midPart">
                                            <FontAwesomeIcon icon={faPercentage}></FontAwesomeIcon>
                                                <span>Tasty Hot Burger On Steam</span>
                                            </div>
                                            <div id="lowerPart">
                                                <span><FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon>50 mins</span>
                                                <span><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>ORDER ONLINE</span>
                                                <span><FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>Live Tracking</span>
                                            </div>
                                        </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            
        </>
    )

}
