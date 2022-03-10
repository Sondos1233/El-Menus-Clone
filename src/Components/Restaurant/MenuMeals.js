import { faDotCircle, faPlusCircle, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { firestore } from "../../firebase/firebase-config";
import {Modal} from 'react-bootstrap';
import '../Model.scss'
import "../Delivery.scss"
import {
  collection,
  getDocs,
  getDoc,
  doc,
  docs,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import "../Restaurant.scss";
import { useParams } from "react-router-dom";
import MealModal from "./MealModal/mealModal";
import RadioButton from "../Radiobutton/RadioButton";
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

  let CategArray = localStorage.getItem("MenuName").split(",");

  let l = 0;
  useEffect(() => {l+=1;
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
                   
            return { ...meal.data() };
            
          })
        );
        setMeals(arrMeals);
      });
    };
    getMeals();
  }, [l]);
  let counter = 0;
  const reloadCount = sessionStorage.getItem('reloadCount');
  useEffect(()=>{
    if(reloadCount < 1) {
        setTimeout(()=>{
            sessionStorage.setItem('reloadCount', String(reloadCount + 1));
            window.location.reload();
        },2000)
      } else {
              sessionStorage.removeItem('reloadCount');
      }
  },[counter])
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState("Transitioning...");

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
    setTitle("Transitioning...");
  };

  const modalLoaded = () => {
    setTitle("Modal Ready");
  };
  return (
      <>
      <button onClick={showModal}>
                          <span style={{ color: "var(--first-color)" }}>
                            {" "}
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                            ></FontAwesomeIcon>{" "}
                            </span>
                            </button>
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
            return(
            <>
            <h4 id={CategArray[counter]} className="aItem mt-4 mb-4">{CategArray[counter++]} </h4>
                 {i.map((j) => {
              return (
                <>
                  <section className="d-flex flex-column ">
                    <div className="d-flex flex-row">
                    
                      <div>
                        <h5 className="aDishType"> {j.ProName} </h5>
                        <p className="aDishDet"> {j.Description}</p>
                        <div>
                        <button onClick={showModal}>
                          <span style={{ color: "var(--first-color)" }}>
                            {" "}
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                            ></FontAwesomeIcon>{" "}
                            </span>
                            </button>
                            {/* <MealModal open={isOpen} /> */}
                            {" "}
                               <p className="d-inline-block aDishPrice">{(j.Size[0].Price === j.Size[(j.Size.length)-1].Price)
                               ?j.Size[0].Price:
                               j.Size[0].Price +'-'+ j.Size[(j.Size.length)-1].Price} EGP </p>
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
                      <span className="aThumbIcon" style={{ color: "#a9acae" }}>
                        <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                      </span>
                    </div>
                  </section>
                  <hr style={{ color: "gray", marginTop: "-2px" }} />
                </>
              );
            }
            )}
            </>);
          })}
        </section>
      </div>
      <Modal show={isOpen} onHide={hideModal} onEntered={modalLoaded}>
          <div className="aDivCoverModel">
            <img className="aImgCoverModel" alt='' src='https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Normal/ac4317db-2561-4766-af36-3314513b7d5e.jpg' />
          </div>
        <Modal.Body>
          <div className="flex flex-column">
            <h2 className="ms-2 mt-0"> Product Name</h2>
            <p className="aDescPro ms-2">Description</p>
            <div className="">
              <h5><b>Select Size</b></h5>
            </div>
            <div className="mt-3 d-flex justify-content-between">
              <label className="aRadio">
          <input type="radio" name={props.name} id="" value={props.data} />
          <span className="adot"></span>{" "}
          <FontAwesomeIcon icon={faDotCircle} className="aCheckdot"> </FontAwesomeIcon>
          <div className="col-10 aSortType">any</div>
        </label>
        <p> price</p>
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
};
export default Meals;
