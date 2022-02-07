import Job from "./Job";
import logo from '../../images/Career/logo_horizontal.svg'
import React, { useState, useEffect } from "react";
import db from "./Firebase/firebase";
import { collection, getDocs,docs, doc } from "firebase/firestore";
const BodyOfCareer = () => {
    // const re =  firebase.firestore().collection("Careers");
    // console.log(re)
    const [JobsData, setJobsData] = useState([]);
    const CareersData = collection(db,"Careers");

    // function getData() {
    //     db.collection("Careers").onSnapshot((snapshot) => {
    //         const data=[];
    //         snapshot.forEach((doc)=>{
    //             data.push(doc.data())
    //         })
    //         setJobsData(data);
    //     });
    //     console.log( JobsData );
    // }
    
    useEffect(() => {
        // getData()
        const getData = async()=>{
            const data = await getDocs(CareersData);
              // console.log(data);
          setJobsData(data.docs.map((doc)=>({...doc.data(),id:doc.id})))
        }
        getData()
      }, []);
      

  return (
    <>
      <div className="body-content mb-5 pb-5">
        <section className="section1">
          <div className="container">
            <h3 className="text-center mb-5">ABOUT ELMENUS</h3>
            <p>
              elmenus is a venture-backed food discovery startup based in Egypt
              that serves over 1.5 Million monthly users. With venture funding
              in total of $20M, we are building a platform that combines a
              social, visual and personalized experience to help people discover
              and order the food they will love.
            </p>
            <p>
              We answer the global existential question of “What will I eat
              today?”. elmenus has become the leading food discovery platform in
              Egypt by providing over 1.5 Million users every month with
              comprehensive restaurant information for over 12,000 restaurants
              including their menus, reviews, food photos all powered by a
              machine learning food recommender that personalizes the experience
              on the <strong>dish</strong> level to our users.
            </p>
          </div>
        </section>
        {/* ----------------------------------------------------------------------- */}
        <section className="mt-5">
            <div className="container">
                <h3 className="text-center">Join Us</h3>
                <h6 className="text-center mb-5">CURRENT OPENINGS</h6>
                <div className="view-jobs"> 
                { JobsData.map((data)=>{
                  // console.log(data.Jobs);
                  return(
                    <Job title={data.Name} Job={data.Jobs}/>
                  )
                 
                  })}
                    
                </div>
            </div>
        </section>
      </div>
      {/* ----------------------------------------------------------------------------------------- */}
      <div className="bg position-relative">
        <div className="bg2 position-absolute"></div>
    </div>
    <footer className="container mb-5 text-center">
        <a href="https://recruitee.com/">
            <span className="mt-2">Hiring With</span>
            <span>  <img src={logo}/></span>
          
        </a>
    </footer>
    </>
  );
};

export default BodyOfCareer;
