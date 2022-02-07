import CardOfJob from "./cardOfJob";
import db from "./Firebase/firebase";
import React, { useState, useEffect } from "react";
import { collection, getDocs,docs, doc, collectionGroup } from "firebase/firestore";

const Job = (props) => {
 
  const [JobsData, setJobsData] = useState([]);
  const [JobAddress, setJobAddress] = useState([]);
  
 useEffect(() => {
  props.Job.map((Job,index)=>{
    const AddressJobData = collectionGroup(db,`${Job}`);
    const getData = async()=>{
      const dataOfJob = await getDocs(AddressJobData);
        setJobAddress(dataOfJob.docs.map((doc)=>({...doc.data(),id:doc.id})))

    
  }
  getData()
})

 
  
  
}, []);


    return (
      <>
           <section class="group">
                <h5 class="ms-4">{props.title}</h5>

                {
                // console.log(props.Job),

                
                props.Job.map((data)=>{
                  //  console.log(data["Name"])
      
                  return(
                        <CardOfJob head={data.Name} job={props.title} area={data.Address} />
                      )
                })
                }
                
            </section>
      
      </>
    );
  };
  
  export default Job;