import {Modal} from 'react-bootstrap';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faDotCircle } from '@fortawesome/free-solid-svg-icons';

function MealModal(props) {
    console.log(props.open)
    const [isOpen, setIsOpen] = useState(false);
    setIsOpen(props.open)
  const [title, setTitle] = useState("Transitioning...");

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };

  return (
    <>
    <Modal show='true'>
      <div className="aDivCoverModel">
          <img className="aImgCoverModel" alt="" src={props.obj.ProImg} />
        </div>
        <Modal.Body>
          <div className="container">
            <div className="row">
          <div className="flex flex-column">
            <h2 className="mt-2">{props.obj?.ProName}</h2>
            <p className="aDescPro mt-2">{props.obj.Description}</p>
            <div className="">
              <h5>
                <b>Select Size</b>
              </h5>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              {props.obj.Size?.map((i) => {
                return (
                  <>
                    <div className="row">
                      <div className="col">
                        <label className="aRadio">
                          <input
                            type="radio"
                            name="size"
                            id=""
                            value={i.Price}
                          />
                          <span className="adot"></span>{" "}
                          <FontAwesomeIcon
                            icon={faDotCircle}
                            className="aCheckdot"
                          >
                            {" "}
                          </FontAwesomeIcon>
                        </label>
                      </div>
                      <div className="col aSortType me-5 mt-2">{i.Name}</div>
                    </div>
                      <div className="aSortType">
                    <p style={{color:'grey'}}> {i.Price} EGP</p>
                      </div>
                  </>
                );
              })}
            </div>

            <div className="mt-3 d-flex justify-content-between">
              {props.obj.Extras?.map((i) => {
                return (
                  <>
                      <label className="abox position-relative d-block">
                      <input type="checkbox" name="" value={i.Price} />
                      <span className="acheck position-absolute">
                        <FontAwesomeIcon
                          icon={faCheck}
                          className="acheckmark"
                        ></FontAwesomeIcon>
                      </span>
                    </label>
                   <span className="ms-2"> {i.Name}</span>
                      <div className="aSortType">
                    <p style={{color:'grey'}}> {i.Price} EGP</p>
                      </div>
                  </>
                );
              })}
            </div>


          </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={hideModal}>Cancel</button>
          <button>Save</button>
        </Modal.Footer>
      </Modal>
    </>
  );
  }
  export default MealModal;