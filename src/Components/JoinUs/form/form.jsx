import logo from '../../../images/JoinUs/logowithbg.png'
import { useState } from 'react';

import db from '../firebase';
import { collection,addDoc } from "firebase/firestore";
export default function AddResForm() {
  const  Ownerscollection= collection(db,"Owner")

  const pattern = new RegExp(/^(01)(0|1|2|5)[0-9]{8}$/);
  const [user, setUser] = useState({
    ResName:"",
    OwnName: "",
    Phone: ""
  });

  // console.log(user.ResName)
  
    const createOwner= async ()=>{
      await addDoc(Ownerscollection,{
        NameRes:user.ResName,
        Owner:user.OwnName,
        phone:user.Phone
      })
      alert("Sucess");
    
    }
  
  

  const [errors, setErrors] = useState({
    NameErrors:null,
    NameErrors: null,
    PhoneErrors: null,
  
  });
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
    if (e.target.name == "ResName" || e.target.name == "OwnName") {
      setErrors({
        ...errors,
        NameErrors:
          e.target.value.length == 0
            ? "this field is required"
            : null
      });
    } else if (e.target.name == "Phone") {
      setErrors({
        ...errors,
       PhoneErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !pattern.test( e.target.value)
            ? "Invalid Phone Format!"
            : null
      });
    }
  }
  
  
  return (
    <>
     <form className="card p-3 position-absolute">
          {/* <!--header of Form--> */}
          <header className="text-center mb-3">
            <h3>Join Us Easily Now!</h3>
            <span><img src={logo} /></span>
          </header>
          {/* <!--End header of Form--> */}
          <div className="pb-3">
            <label for="ResName" className="form-label">Restaurant Name *</label>
            <input
              type="text"
              className="form-control"
              id="ResName"
              placeholder="Res. Name"
              name="ResName"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.NameErrors}</small>
          </div>
          <div className="pb-3">
            <label for="OwName" className="form-label">Owner Name *</label>
            <input
              type="text"
              className="form-control"
              id="OwName"
              placeholder="Full Name"
              name="OwnName"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.NameErrors}</small>
          </div>
          <div className="pb-3">
            <label for="phone" className="form-label">Phone Number *</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              placeholder="01XXXXXXXXX"
              name="Phone"
              required
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <small className="text-danger">{errors.PhoneErrors}</small>
          </div>
          <div className="pb-3">
            <label for="nBranch" className="form-label">Number of Branch</label>
            <input
              type="number"
              className="form-control"
              id="nBranch"
              placeholder="2"
            />
          </div>
          <div className="pb-3">
            <label for="city" className="form-label">City *</label>
            <select
              className="form-select"
              aria-label="Default select example"
              id="city"
              required
            >
              <option selected>Select Your City</option>
              <option value="Cairo">Cairo</option>
              <option value="Alex">Alex</option>
              <option value="ElMansoura">ElMansoura</option>
              <option value="North Coast">North Coast</option>
              <option value="Suez">Suez</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="pb-3">
            <label for="bZone" className="form-label">Branches Zones *</label>
            <input
              type="text"
              className="form-control"
              id="bZone"
              placeholder="Heliopolis, Nasr City, .."
              required
            />
          </div>
          <div className="pb-3">
            <select className="form-select" aria-label="Default select example">
              <option selected>Commerical registration?</option>
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="pb-3">
            <select className="form-select" aria-label="Default select example">
              <option selected>VAT Card?</option>
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="pb-3">
            <select className="form-select" aria-label="Default select example">
              <option selected>Company Bank Account?</option>
              <option value="yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <div className="pb-3">
            <label for="Textarea" className="form-label">Additional Comment</label>
            <textarea className="form-control" id="Textarea" rows="2"></textarea>
          </div>
          <div className="position-absolute formSubmit">

            <button onClick={createOwner}  className="btn btn-primary mb-3" id="myBtn">
              Subscribe!
            </button>
          </div>
        </form>
      
    </>
  );
            }