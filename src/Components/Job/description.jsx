import db from "../Career/Firebase/firebase";
import {
  collection,
  getDocs,
  docs,
  doc,
  collectionGroup,
} from "firebase/firestore";
import * as reactRouterDom from "react-router-dom";
import React, * as react from "react";
import HeaderOfCareer from "../Career/headerOfCareer";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF,
        faTwitter,
      faLinkedinIn} 
  from "@fortawesome/free-brands-svg-icons";
import "../../Components/main-style.css";
import "../Job/style.css";
import logo from "../../images/Career/logo_horizontal.svg";
import indeed from "../../images/Career/indeed.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function description(props) {
  const param = reactRouterDom.useParams();
  console.log(param.Name);
  const [JobsData, setJobsData] = react.useState([]);
  const CareersData = collectionGroup(db, `${param.Name}`);
  react.useEffect(() => {
    const getData = async () => {
      const data = await getDocs(CareersData);
      //console.log(data);
      setJobsData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getData();
  }, []);
  return (
    <>
      {JobsData.map((data) => {
        return (
          <HeaderOfCareer
            head={param.Name}
            Name={data.Location}
            icon={faLocationArrow}
          />
        );
      })}
      <div className="mt-4"></div>
      <nav aria-label="breadcrumb" className="Bread">
        <ol class="breadcrumb">
          <li class="breadcrumb-item ms-5 crumbCareer">
            <a href="/Careers">Job opening</a>
          </li>
          <li
            class="breadcrumb-item  active"
            aria-current="page"
            style={{ color: "#ff4612" }}
          >
            {param.Name}
          </li>
        </ol>
      </nav>
      <div className=" mt-3"></div>

      <div className="container bodyJob mt-4">
        <div className="row  my-4">
          <div className="col-lg-8 col-md-12">
            <h2 className="mb-3 title">{param.Name}</h2>
            <section className="mt-2">
              <h3 className="descrip ">Job descrition</h3>

              {JobsData.map((data) => {
                return <p className="description">{data.Description}</p>;
              })}
            </section>

            <section className="mt-3">
              <h3 className="descrip">Requirements</h3>
              <strong>Roles and Responsibilities:</strong>
              <ul>
                {JobsData.map((data) => {
                  console.log(data.Responsibilities);
                  return (
                    <>
                      <li>{data.Responsibilities[0]}</li>
                      <li>{data.Responsibilities[1]}</li>
                      <li>{data.Responsibilities[2]}</li>
                      <li>{data.Responsibilities[3]}</li>
                      <li>{data.Responsibilities[4]}</li>
                    </>
                  );
                })}
              </ul>
              <strong>What will make you fit for this job:</strong>
              <ul>
                {JobsData.map((data) => {
                  return (
                    <>
                      <li>{data.Requirements[0]}</li>
                      <li>{data.Requirements[1]}</li>
                      <li>{data.Requirements[2]}</li>
                      <li>{data.Requirements[3]}</li>
                      <li>{data.Requirements[4]}</li>
                    </>
                  );
                })}
              </ul>
            </section>
            <div className="app my-5">
              <button
                type="button"
                className="btn btn-primary"
                style={{ backgroundColor: "#ff4612", borderColor: "#ff4612" }}
              >
                Apply for this Job
              </button>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 ms-5 ps-5 columnLeft">
            <a className="btn btn-thebiggest">Apply for this Job</a>
            <a class="btn btn-indeed">
              <img src={indeed} />
              Apply with Indeed
            </a>
            <div class="socials-share ">
              <h4>SHARE THIS JOB OPENING</h4>
              <div>
                <a style={{backgroundColor: "#007bb6"}} className="socials-share-i">
                  <FontAwesomeIcon icon={faLinkedinIn} style={{color:"white"}}/>
                </a>
                <a style={{backgroundColor:"#306199"}} className="socials-share-i">
                  <FontAwesomeIcon icon={faFacebookF} style={{color:"white"}}/>
                </a>
                <a style={{backgroundColor:"#26c4f1"}} className="socials-share-i">
                  <FontAwesomeIcon icon={faTwitter} style={{color:"white"}}/>
                </a>
              </div>
            </div>
          </div>
          <div className="space mt-5"></div>
          <div className="footerDes col-12">
            <footer className="container mb-5 text-center">
              <a href="https://recruitee.com/">
                <span className="">Hiring With</span>
                <span>
                  {" "}
                  <img src={logo} />
                </span>
              </a>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}
