import { faPlusCircle, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { firestore } from "../../Firebase/firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  docs,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import "../Restaurant.scss";
import { useParams } from "react-router-dom";
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
                          <span style={{ color: "var(--first-color)" }}>
                            {" "}
                            <FontAwesomeIcon
                              icon={faPlusCircle}
                            ></FontAwesomeIcon>{" "}
                          </span>
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

      <div></div>
    </>
  );
};
export default Meals;
