import {
  faCheck,
  faDotCircle,
  faPlusCircle,
  faThumbsUp,
  faShoppingBag,
  faMinusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { firestore } from "../../Firebase/firebase-config";
import { Modal } from "react-bootstrap";
import "../Model.scss";
import "../Delivery.scss";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  docs,
  addDoc,
  where,
  query
  
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import "../Restaurant.scss";
import { useParams } from "react-router-dom";
import MealModal from "./MealModal/mealModal";
const Meals = (props) => {
  const [Res, setRes] = useState();
  const [Meals, setMeals] = useState();
  let id = useParams();
  id = id.id;
  const RestaurantCollecdocRef = collection(
    firestore,
    "Restaurant",
    id,
    "Menu"
  );
 

  const Restcollection = collection(
    firestore,
    "User",
    localStorage.getItem("userID"),
    "Cart"
  )

  let CategArray = localStorage.getItem("MenuName")?.split(",");

  let l = 0;
  useEffect(() => {
    l += 1;
    const getRes = async () => {
      const data = await getDocs(RestaurantCollecdocRef);
      setRes(
        data.docs.map((doc) => {
          return doc.data();
        })
      );
    };
    getRes();
    const getMeals = async () => {
      let refCatCollecs = [];
      CategArray.map((i) => {
        refCatCollecs.push(
          collection(
            firestore,
            "Restaurant",
            id,
            "Menu",
            localStorage.getItem("MenuId"),
            i
          )
        );
      });
      let arrMeals = [];
      refCatCollecs.map(async (i) => {
        let data = await getDocs(i);
        arrMeals.push(
          data.docs.map((meal) => {
            //arrMeals.push(meal.data());

            return { ...meal.data(), id: meal.id };
          })
        );
        setMeals(arrMeals);
      });
    };
    getMeals();
  }, [l]);

  let counter = 0;
  const reloadCount = sessionStorage.getItem("reloadCount");
  // use Effect
  useEffect(() => {
    if (reloadCount < 1) {
      setTimeout(() => {
        sessionStorage.setItem("reloadCount", String(reloadCount + 1));
        window.location.reload();
      }, 2000);
    } else {
      sessionStorage.removeItem("reloadCount");
    }

  

  }, [counter]);

  //model
  const [MealDet, setMealDet] = useState("Loading");
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Transitioning...");
  let [qty, setQty] = useState(1);
  let IsFirst = false;
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning..");
    setIsOpen(false);
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };
  const getData = async (Mealid, name) => {
    /*const MealDocRef = doc(firestore,"Restaurant",id,"Menu",localStorage.getItem("MenuId"),name,Mealid)
      const data = await getDoc(MealDocRef);*/
    setMealDet(name);
  };
  const exitModel = () => {
    setMealDet("");
    setIsOpen(false);
  };

 
  const [Extras, setExtras] = useState([])
  const [Size, setSize] = useState({})
  const [specialAdditions, setSecialAdditions] = useState("")
  const [totalPrice, setTotalPrice] = useState(0.00)
  const [check, setChick] = useState(false)


  return (
    <>

      <div
        className="aItemsDiv ms-3"
        data-bs-spy="scroll"
        data-bs-target="#list-example"
        data-bs-offset="0"
        class="scrollspy-example"
        tabindex="0"
      >
        <section>
          {Meals?.map((i, index) => {
            index += 1;
            // console.log(i)

            return (
              <>
                <h4 id={CategArray[counter]} className="aItem mt-4 mb-4">
                  {CategArray[counter++]}{" "}
                </h4>
                {i.map((j) => {
                  return (
                    <>
                      <section className="d-flex flex-column ">
                        <div className="d-flex flex-row">
                          <div>
                            <h5 className="aDishType"> {j.ProName} </h5>
                            <p className="aDishDet"> {j.Description}</p>
                            <div>
                              <button
                                onClick={() => {
                                  // console.log(j)
                                  showModal();
                                  getData(j.id, j);
                                }}
                              >
                                <span style={{ color: "var(--first-color)" }}>
                                  {" "}
                                  <FontAwesomeIcon
                                    icon={faPlusCircle}
                                  ></FontAwesomeIcon>{" "}
                                </span>
                              </button>
                              {/* <MealModal open={isOpen} /> */}{" "}
                              <p className="d-inline-block aDishPrice">
                                {j.Size[0].Price ===
                                  j.Size[j.Size.length - 1].Price
                                  ? j.Size[0].Price
                                  : j.Size[0].Price +
                                  "-" +
                                  j.Size[j.Size.length - 1].Price}{" "}
                                EGP{" "}
                              </p>
                            </div>
                          </div>
                          <div className="ms-auto">
                            <img
                              className="rounded-3"
                              style={{ width: "100px" }}
                              src={j.ProImg}
                              alt=""
                            />
                          </div>
                        </div>
                        <div className="ms-auto">
                          <span style={{ color: "#464748" }}> count </span>
                          <span
                            className="aThumbIcon"
                            style={{ color: "#a9acae" }}
                          >
                            <FontAwesomeIcon
                              icon={faThumbsUp}
                            ></FontAwesomeIcon>
                          </span>
                        </div>
                      </section>
                      <hr style={{ color: "gray", marginTop: "-2px" }} />
                    </>
                  );
                })}
              </>
            );
          })}
        </section>
      </div>

      {/* Meal Modal */}
      <Modal show={isOpen} onHide={hideModal} onExiting={exitModel} >
        <div className="aDivCoverModel">
          <img className="aImgCoverModel" alt="" src={MealDet.ProImg} />
        </div>
        <Modal.Body>
          <div className="container">
            <div className="row">
              <div className="flex flex-column">
                <h2 className="mt-2">{MealDet?.ProName}</h2>
                <p className="aDescPro mt-2">{MealDet.Description}</p>
                <div className="">
                  <h5>
                    <b>Select Size</b>
                  </h5>
                </div>
                {MealDet.Size?.map((i, index) => {
                  if (index === 0) {
                    IsFirst = true;

                  }
                  else IsFirst = false;
                  // console.log(IsFirst, index);
                  index = +1;

                  return (
                    <>
                      <div className="mt-3 d-flex justify-content-between">
                        <div className="row">
                          <div className="col">
                            <label className="aRadio">

                              <input
                                type="radio"
                                name="size"
                                id=""
                                value={i.Price}
                                // defaultChecked={IsFirst}
                                
                                onClick={
                                  () => {
                                    setChick(true)
                                    setSize({
                                      Name: i.Name,
                                      Price: i.Price
                                    })
                                    setTotalPrice(i.Price)
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
                          </div>
                          <div className="col aSortType mt-2">{i.Name}</div>
                        </div>
                        <div className="aSortType">
                          <p style={{ color: "grey" }}> {i.Price} EGP</p>
                        </div>
                      </div>
                    </>
                  );
                })}
                <h5 className="mt-2">
                  <b>Additions</b>
                </h5>
                {MealDet.Extras?.map((i) => {

                  return (
                    <>
                      <div className="mt-3 d-flex justify-content-between">
                        <div className="row">
                          <div className="col-3">
                            <label className="abox position-relative d-block">
                              <input type="checkbox" name="" value={i.Name}
                                onClick={
                                  (e) => {
                                    console.log(e.target.value)
                                    if (e.target.checked) {
                                      console.log(i.Price)
                                      setExtras([...Extras, {
                                        Name: i.Name,
                                        Price: i.Price
                                      }])

                                      
                                      setTotalPrice((price) => price + i.Price);
                                    }
                                    else {
                                      setTotalPrice((price) => price - i.Price);
                                      setExtras(Extras.filter((extra) => {return extra.Name != e.target.value}))

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
                          </div>
                          <div className="col-9">
                            <span className="ms-2"> {i.Name}</span>
                          </div>
                        </div>
                        <div className="aSortType">
                          <p style={{ color: "grey" }}> {i.Price} EGP</p>
                        </div>
                      </div>
                    </>
                  );
                })}

                <h5 className="mt-2">
                  <b>Special Instructions</b>
                </h5>
                <div class="mb-3">
                  <label for="" className="form-label"></label>
                  <input
                    type="text"
                    className="form-control form-control-lg"
                    name=""
                    id=""
                    aria-describedby="helpId"
                    placeholder="eg. Please don't add onion"

                    onChange={(e) => {
                      console.log(e.target.value)
                      setSecialAdditions(e.target.value)
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer className="aModalFooter">
          <div className="aPlusMinus">
            <button className="btn ms-2" onClick={() => { if (qty > 1){
              setQty(qty - 1) 
              setTotalPrice((price)=> price - Size.Price)
            } }}>
              <FontAwesomeIcon icon={faMinusCircle}></FontAwesomeIcon>
            </button>
            <span style={{ color: "#333333", marginTop: "20px" }}> {qty} </span>
            <button className="btn ms-2" onClick={() => { 
              setQty(qty + 1)
              setTotalPrice((price)=> price + Size.Price)
               }}>
              <FontAwesomeIcon icon={faPlusCircle}></FontAwesomeIcon>
            </button>
          </div>
          <p>{MealDet.ProName}</p>
          {/*  onClick={hideModal} */}
          
            
            <button className="ms-2 btn aBuyButton" onClick={
              async () => {
                alert("shrouk")
                // alert(Size.Price)
                // console.log(Extras)
                await addDoc(Restcollection, {
                  ProName: MealDet.ProName,
                  ProDescription: MealDet.Description,
                  ProSizes:MealDet.Size,
                  ProExtras:MealDet.Extras,
                  Quantity: qty,
                  TotalPrice: totalPrice?.toFixed(2),
                  Size: Size,
                  Extras: Extras,
                  SpecialAdditional: specialAdditions,
                })
                setSize({})
                setExtras([])
                console.log(Extras)
                alert("Sucess");
                window.location.reload(false)
              }
            } disabled={!check}><FontAwesomeIcon icon={faShoppingBag}></FontAwesomeIcon>ADD TO BASKET<span className="float-end"> {totalPrice?.toFixed(2)}EGP</span></button>
            
            
        
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Meals;
