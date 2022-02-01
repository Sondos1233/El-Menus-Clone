import '../main-style.css'
import '../Restaurant.scss'
import '../mixins.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";
import {faPhoneAlt} from "@fortawesome/free-solid-svg-icons";

const ResDet = ()=>{
    return( 
        <> 
        <div className="aLeftDet position-relative col-8 d-flex flex-row mt-3">
                <div className="aResImgDivL position-relative d-flex flex-column">
                    <div className="aResImgL "> <img className="rounded-circle"
                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/821bd584-51d2-4e28-ba37-e67525880221.jpg"
                            alt="" /> </div>
                    <span className="aOpen p-1 ms-2 position-absolute"> Opens in 10 hours </span>
                </div>
                <div className="aResDetL">
                    <div className="aResNameDiv">
                        <h1 className="aResNameDiv">Restaurant Name</h1>
                    </div>
                    <div className="aSubtitle">
                        <div className="d-flex">
                            <div className="aTypeRes">
                                Type of restaurant
                            </div>
                            <div className="aRateStars ms-2">
                                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                <span><FontAwesomeIcon icon={faStar}></FontAwesomeIcon></span>
                                <span><FontAwesomeIcon className="far fa-star"></FontAwesomeIcon></span>
                                <div className="d-inline-block">
                                    <span>
                                        rate (#visitors)
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="aResAddress d-flex mt-2">
                            <span><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon>&nbsp;</span>
                            <p>Restaurant address </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="aRightDet col-4 d-flex justify-content-between mt-3">
                <div style={{width: "60%"}}>
                </div>
                <div className="aResAction mt-3">
                    <a href="">
                        <span className="aExampleSpan rounded-circle"><FontAwesomeIcon icon={faPhoneAlt} className="aExampleAction"></FontAwesomeIcon></span>
                    </a>
                </div>
            </div>
        </>
    )
}
export default ResDet;