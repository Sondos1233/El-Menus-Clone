import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import './star.scss'
const Star = (props) =>{
    const[rating,setRating] = useState(0);
    const[hover,setHover] = useState(0);
    return(
        <>
        <div className="mt-2">
            {[...Array(5)].map((star,index)=>{ index +=1;
                return(
                    <button type="button" key={index} className={index <= (rating|| hover) ? 'on':'off'} onClick={()=>{setRating(index); props.setReview({...props.review, Rating: index}) }} onMouseEnter={() => setHover(index)}
                    onMouseLeave={() => setHover(rating)}>
                    <FontAwesomeIcon className="star" icon={faStar}></FontAwesomeIcon>
                    </button>
                );
            })}
        </div>
        </>
    );
}
export default Star;