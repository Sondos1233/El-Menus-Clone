import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Offers.css';
import ResImg from '../../images/Offers/Atract_Chicken_FilA.jpg'
import ResLogo from '../../images/Offers/Logo_Buffalo_Burger.jpg'
import { } from '@fortawesome/free-regular-svg-icons'
import { faChevronLeft, faStar, faMotorcycle, faCircle, faMapMarkedAlt, faPercentage, faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { } from '@fortawesome/free-brands-svg-icons'
import { useEffect } from "react";

export default function Offers(props) {
    useEffect(()=>{
        
    },[props.Res])

    return (
        <>



            {/*Start Of The Offers Cards it self Markup  */}

            <div class="col" id="wholeCard">
              
                    <div class="card h-100">
                        <img id="bigImg" src={props.srcImage} class="card-img-top" alt="Food Img" />
                        <div class="card-body">
                            <div id="upperPart">
                                <img src={props.ResLogo} alt="Resrraunt Logo" srcset="" />
                                <div id="restName">
                                    <div id="offerDisc">{props.ResName}</div>
                                    <h3>{props.ResName}</h3>
                                    <span>{props.ResType}</span>
                                </div>
                                <div id="rating">
                                    <span>
                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                        <FontAwesomeIcon id="faStar" icon={faStar}></FontAwesomeIcon>
                                        <span>{props.Rate}</span>
                                    </span>

                                    <span id="criditCardIcon"><FontAwesomeIcon id="faCreditCard" icon={faCreditCard}></FontAwesomeIcon></span>
                                </div>
                            </div>
                            <div id="midPart">
                                <FontAwesomeIcon icon={faPercentage}></FontAwesomeIcon>
                                <span> %50 Off your 1st order</span>
                            </div>
                            <div id="lowerPart">
                                <span><FontAwesomeIcon icon={faMotorcycle}></FontAwesomeIcon>50 mins</span>
                                <span><FontAwesomeIcon icon={faCircle}></FontAwesomeIcon>ORDER ONLINE</span>
                                <span><FontAwesomeIcon icon={faMapMarkedAlt}></FontAwesomeIcon>Live Tracking</span>
                            </div>
                        </div>
                    </div>
                
            </div>


        </>
    )

}
