import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
<<<<<<< HEAD
const Card = (props) => {
    return (
      <>
        <div class="col-xl col-lg-12 px-5 section_footer_link1">
                  <a href="">
=======
import { Link } from 'react-router-dom';
const Card = (props) => {
    return (
      <>
     
        <div class="col-xl col-lg-12 px-5 section_footer_link1">
        <Link to={props.link}>
                  
>>>>>>> d9fc59ad4e44b0734e80926e66af3080086f6dff
                    <h3 class="section_footer_title">
                      <FontAwesomeIcon icon={props.iconName} className="pe-2"/>
                      {props.name}
                    </h3>
                    <p class="description">{props.para} 
                    <FontAwesomeIcon icon={props.iconName2} className="pt-1 ico"/>
                    </p>
<<<<<<< HEAD
                  </a>
=======
               
                  </Link> 
>>>>>>> d9fc59ad4e44b0734e80926e66af3080086f6dff
            </div>
      </>
    );
  };
  
  export default Card;