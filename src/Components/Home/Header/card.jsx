import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
const Card = (props) => {
    return (
      <>
     
        <div class="col-xl col-lg-12 px-5 section_footer_link1">
        <Link to={props.link}>
                  
                    <h3 class="section_footer_title">
                      <FontAwesomeIcon icon={props.iconName} className="pe-2"/>
                      {props.name}
                    </h3>
                    <p class="description">{props.para} 
                    <FontAwesomeIcon icon={props.iconName2} className="pt-1 ico"/>
                    </p>
               
                  </Link> 
            </div>
      </>
    );
  };
  
  export default Card;