import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { firestore } from "../../Firebase/firebase-config";
import {
  collection,
  getDocs,
  getDoc,
  doc,
  docs,
  query,
  collectionGroup,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";
import "../Restaurant.scss";
import { useParams } from "react-router-dom";
import Meals from "./MenuMeals";
const Menu = () => {
  const [state, setState] = useState("");
  let id = useParams();
  id = id.id;
  const [Res, setRes] = useState([]);

  const RestaurantCollecdocRef = collection(
    firestore,
    "Restaurant",
    id,
    "Menu"
  );

  useEffect(() => {
    const getRes = async () => {
      const data = await getDocs(RestaurantCollecdocRef);
      setRes(
        data.docs.map((doc) => {
          return {...doc.data(),id:doc.id}
        })
      );
    };
    getRes();
  });

  return (
    <>
      <div class="tab-content" id="myTabContent">
        <div
          class="tab-pane fade show active"
          id="Menu"
          role="tabpanel"
          aria-labelledby="home-tab"
        >
          <div
            className="container-fluid tab-pane fade show active"
            role="tabpanel"
            aria-labelledby="pills-home-tab"
          >
            <div className="row aScrollSpy">
              <div className="col-3 ">
                <div
                  id="list-example"
                  className="list-group "
                  style={{ position: "sticky", top: "10rem" }}
                >
                  {Res.map((res) => {
                      localStorage.setItem('MenuId',res.id);
                      localStorage.setItem('MenuName',res.Name);
                    return res.Name.map((resIn, index) => {index++
                      return (
                        <nav className="nav nav-pills flex-column">
                          <a
                            className="list-group-item list-group-item-action "
                            href={'#'+resIn}
                            onClick={() => {
                              setState('list-item'+index);
                            }}
                          >
                            {resIn}
                            <span className=" aRightIcon float-end ">
                              <FontAwesomeIcon
                                icon={faArrowRight}
                              ></FontAwesomeIcon>
                            </span>
                          </a>
                        </nav>
                        
                      );
                    });
                    })}
                </div>
              </div>
              <div className="col-9">
                <Meals id={state} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
