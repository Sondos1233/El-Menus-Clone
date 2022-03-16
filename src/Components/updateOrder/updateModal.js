import { useState } from "react";
import "../updateModal.scss";
import Modal from "react-bootstrap/Modal";
import {
  faCheck,
  faDotCircle,
  faPlusCircle,
  faThumbsUp,
  faShoppingBag,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const UpdateModal = (props) => {

  let [qty, setQty] = useState(props.mealObj.Quantity);
  let [isSizeChoosen,setSizeChos] = useState(false);
  let [isExtrasChoosen,setExtrasChos] = useState(false);

  const hideModal = () => {
    // props.setIsOpen(false);
  };

  // {
  //   console.log(props.mealObj);
  // }

  return (
    <>
      <Modal show={props.isOpen} dialogClassName="modalDiv" onHide={hideModal}>
        <div className="container p-4">
          <div className="row">
            <Modal.Title className="mb-0">
              <b> {props.mealObj.ProName} </b>
              <p className="aDescPro mt-1"> {props.mealObj.ProDescription}</p>
            </Modal.Title>
            <Modal.Body className="modalDiv">
              <div className="amodalDivRemoval d-flex justify-content-center">
                <button className="btn amodalRemove justify-Items-self">
                  {" "}
                  REMOVE ITEM FROM BASKET{" "}
                </button>
              </div>
              <div className="aPlusMinus justify-content-center">
                <button
                  className="btn ms-2 justify-Items-self"
                  onClick={() => {
                    if (qty > 1) {
                      setQty(qty - 1);
                      //   setTotalPrice((price)=> price - Size.Price)
                    }
                  }}
                >
                  <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
                </button>
                <span style={{ color: "#333333", marginTop: "20px" }}>
                  {" "}
                  {qty}{" "}
                </span>
                <button
                  className="btn ms-2"
                  onClick={() => {
                    setQty(qty + 1);
                    //   setTotalPrice((price)=> price + Size.Price)
                  }}
                >
                  <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                </button>
              </div>
              <div className="">
                <h5>Select Size</h5>
                <div className="container">
                  {props.mealObj.ProSizes.map((size) => {
                      if(props.mealObj.Size?.Name === size.Name){
                          // setSizeChos(true);
                          console.log(props.mealObj.Size?.Name)
                    }
                    return (
                      <>
                        <div className="row mb-4">
                          <div className="col">
                            <label className="aRadio" style={{margin:0,padding:0}}>
                              <input
                              style={{margin:0,padding:0}}
                                type="radio"
                                name="size"
                                id=""
                                value={size.Price}
                                defaultChecked={isSizeChoosen}
                                // onClick={
                                //     () => {
                                //       setChick(true)
                                //       setSize({
                                //         Name: i.Name,
                                //         Price: i.Price
                                //       })
                                //       setTotalPrice(i.Price)
                                //     }
                                //   }
                              />
                              <span className="adot"></span>{" "}
                              <FontAwesomeIcon
                                icon={faDotCircle}
                                className="aCheckdot"
                              >
                                {" "}
                              </FontAwesomeIcon>
                            </label>
                            <div className="ms-4">
                              <span className="ms-2"> {size.Name}</span>
                            </div>
                          </div>
                          <div className="col">
                            <p className="float-end">{size.Price} EGP</p>
                          </div>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
              {props.mealObj.ProExtras && (
                <div className="">
                  <h5 className="m-2">Extras</h5>
                  <div className="container">
                    {props.mealObj.ProExtras.map((extra) => {
                      return (
                        <>
                          <div className="row mb-4">
                            <div className="col">
                              <label className="abox position-relative d-block">
                                <input
                                  type="checkbox"
                                  name=""
                                  value={extra.Name}
                                  // onClick={
                                  //   (e) => {
                                  //     console.log(e.target.value)
                                  //     if (e.target.checked) {
                                  //       console.log(i.Price)
                                  //       setExtras([...Extras, {
                                  //         Name: i.Name,
                                  //         Price: i.Price
                                  //       }])

                                  //       setTotalPrice((price) => price + i.Price);
                                  //     }
                                  //     else {
                                  //       setTotalPrice((price) => price - i.Price);
                                  //       setExtras(Extras.filter((extra) => {return extra.Name != e.target.value}))

                                  //     }

                                  //   }

                                  // }
                                />
                                <span className="acheck position-absolute">
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    className="acheckmark"
                                  ></FontAwesomeIcon>
                                </span>
                              </label>
                              <div className="ms-4">
                                <span className="ms-2"> {extra.Name}</span>
                              </div>
                            </div>
                            <div className="col">
                              <p className="float-end">{extra.Price} EGP</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
            </Modal.Body>
            <Modal.Footer className="aModalFooter">
              <button className="btn aBuyButton">
            <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
            UPDATE ITEM
          </button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateModal;
