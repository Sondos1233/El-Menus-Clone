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
import { firestore } from "../../Firebase/firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  docs,
  addDoc,updateDoc
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
const UpdateModal = (props) => {

  let [qty, setQty] = useState(props.mealObj.Quantity);

  const [Size, setSize] = useState({Name:props.mealObj.Size.Name,Price:props.mealObj.Size?.Price});
  const [Extras,setExtras] = useState(props.mealObj.Extras);
  const [instructions,setInstructions] = useState(" ")
  const [totalPrice, setTotalPrice] = useState(props.mealObj.TotalPrice);
  const [pastSizePrice , setPastSizePrice] = useState(props.mealObj.Size.Price);

const hideModal = () => {
    // props.setIsOpen(false);
  };

  const updateMeal =async()=>{
    if(localStorage.getItem('userID')){
      const mealDoc = doc(firestore,'User', localStorage.getItem('userID'),'Cart',props.mealObj.id );
      await updateDoc(mealDoc,{
        ProDescription:props.mealObj.ProDescription,
        ProName:props.mealObj.ProName,
        ProExtras:props.mealObj.ProExtras,
        ProSizes:props.mealObj.ProSizes,
        Quantity:qty,
        SpecialAdditional:instructions,
        Size:Size,
        Extras:Extras,
        TotalPrice:parseInt(totalPrice?.toFixed(2)),
      });
      //alert('done')
      //console.log(updatedMeal);
    }
  }
  console.log(props.mealObj)
  let isSizeChoosen;
  let isExtrasChoosen;
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
                      setTotalPrice(totalPrice-Size.Price)
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
                      setTotalPrice(totalPrice+Size.Price)
                  }}
                >
                  <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
                </button>
              </div>
              <div className="">
                <h5>Select Size</h5>
                <div className="container">
                  {props.mealObj.ProSizes.map((size) => {
                    //console.log(size.Name,props.mealObj.Size)
                    if(size.Name === props.mealObj.Size?.Name) isSizeChoosen =true
                    else {isSizeChoosen = false}

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
                                onClick={
                                  () => {
                                    if(size.Price !== pastSizePrice){
                                      let any = totalPrice-(pastSizePrice*qty);
                                      //setTotalPrice(totalPrice-pastSizePrice);
                                      console.log(totalPrice)
                                      setPastSizePrice(size.Price);
                                      setSize({
                                        Name: size?.Name,
                                        Price: size.Price
                                      })
                                      setTotalPrice(any+(size.Price*qty))
                                      console.log(totalPrice)
                                    }
                                    }
                                  }
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
                              <span className="ms-2"> {size?.Name}</span>
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
                    {props.mealObj.ProExtras.map((extra,index) => {index +=1
                        //console.log(extra.Name,props.mealObj.Extras[index-1]?.Name)
                        props.mealObj.Extras.forEach((chossen)=>{
                          if(extra.Name === chossen.Name) {
                            //console.log('yes')
                            isExtrasChoosen = true
                          }
                          else{
                            //console.log('no')
                            if(isExtrasChoosen!== true) isExtrasChoosen = false
                          }
                        })
                      return (
                        <>
                          <div className="row mb-4">
                            <div className="col">
                              <label className="abox position-relative d-block">
                        
                                <input
                                  type="checkbox"
                                  name=""
                                  value={extra.Name}
                                  defaultChecked = {isExtrasChoosen}
                                  onClick={
                                    (e) => {
                                      //console.log(e.target.value)
                                      if (e.target.checked) {
                                        console.log(extra.Name,extra.Price)
                                        console.log(Extras)
                                        setExtras([...Extras,{
                                          Name: extra.Name,
                                          Price: extra.Price
                                        }])
                                        console.log(Extras)
                                        setTotalPrice((price) => price + extra.Price);
                                      }
                                      else {
                                        setTotalPrice((price) => price - extra.Price);
                                        setExtras(Extras.filter((extra) => {return extra.Name !== e.target.value}))

                                      }

                                    }

                                  }
                                />
                                <span className="acheck position-absolute">
                                  <FontAwesomeIcon
                                    icon={faCheck}
                                    className="acheckmark"
                                  ></FontAwesomeIcon>
                                </span>
                              </label>
                              <div className="ms-4">
                                <span className="ms-2"> {extra?.Name}</span>
                              </div>
                            </div>
                            <div className="col">
                              <p className="float-end">{extra?.Price} EGP</p>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </div>
                </div>
              )}
              <h5 className="mt-2">
                  <b>Special Instructions</b>
                </h5>
                <div class="mb-3">
                  <label for="" className="form-label"></label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name="instructions"
                    id=""
                    aria-describedby="helpId"
                    placeholder="eg. Please don't add onion"

                    onChange={(e) => {
                      console.log(e.target.value)
                      setInstructions(e.target.value)
                    }}
                  />
                </div>

            </Modal.Body>
            <Modal.Footer className="aModalFooter">
              <button className="btn aBuyButton" onClick={updateMeal}>
            <FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>
            UPDATE ITEM  <span className="float-end"> {totalPrice}EGP</span>
          </button>
            </Modal.Footer>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default UpdateModal;
