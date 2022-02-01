import "../main-style.css";
import "../offersCard/Delivery.scss"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDotCircle} from "@fortawesome/free-solid-svg-icons";


const RadioButton = (props) => {
  return (
    <>
      <div className="col-2">
        <label className="aRadio">
          <input type="radio" name={props.name} id="" />
          <span className="adot"></span>{" "}
          <FontAwesomeIcon icon={faDotCircle} className="aCheckdot"> </FontAwesomeIcon>
        </label>
      </div>
      <div className="col-10 aSortType">{props.data}</div>
    </>
  );
};

export default RadioButton;
