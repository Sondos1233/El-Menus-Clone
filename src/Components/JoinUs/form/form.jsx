import logo from '../../../images/JoinUs/logowithbg.png'
import { useState } from 'react';
import db from '../firebase';
import { collection, getDocs,docs, doc,addDoc } from "firebase/firestore";
import { CAlert } from '@coreui/bootstrap-react'
export default function AddResForm() {
  const [visible, setVisible] = useState(false)
  const  Ownerscollection= collection(db,"Owner")
  const pattern = new RegExp(/^(01)(0|1|2|5)[0-9]{8}$/);
  const [user, setUser] = useState({
    ResName:"",
    OwnName: "",
    Phone: ""
  });
  // console.log(user.ResName)
  
    const createOwner= async (e)=>{
      e.preventDefault();
      // db.collection('Owner').add("aa");
      await addDoc(Ownerscollection,{
        ResName:user.ResName,
        OwnerName:user.OwnName,
        Phone:user.Phone,
        isActivated:false
      })
      alert("Sucess");
      setVisible(true)
    
    }
  
  
  const [errors, setErrors] = useState({
    NameResErrors:null,
    NameOwnerErrors: null,
    PhoneErrors: null,
  
  });
  const handleChange = (e) => {
    const patterenResName= new RegExp("^[A-Za-z0-9]{3,}$");
    const patterenOwnerName= new RegExp("^[A-Za-z]{3,}(( )[A-Za-z]{3,})*( )[A-Za-z]{3,}$")
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
    if (e.target.name == "ResName") {
      setErrors({
        ...errors,
        NameResErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !patterenResName.test( e.target.value)
            ? "Restaurant Name must be at least 3 Characters!"
            : null
      });
    } else if(e.target.name=="OwnName"){
      setErrors({
        ...errors,
        NameOwnerErrors:
          e.target.value.length == 0
            ? "this field is required"
            : !patterenOwnerName.test( e.target.value)
            ? "Restaurant Name must be at least 2 words and only Characters!"
            : null
      });

    }
    else if (e.target.name == "Phone") {
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
            <small className="text-danger">{errors.NameResErrors}</small>
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
            <small className="text-danger">{errors.NameOwnerErrors}</small>
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

            <button 
            disabled={!user.ResName||!user.OwnName||!user.Phone}
            onClick={(e) => {
                createOwner(e);
              }}className="btn btn-primary mb-3" id="myBtn">
              Subscribe!
            </button>

          </div>
          <CAlert color="success" dismissible visible={visible} onClose={() => setVisible(false)} >Add Sucess! we will contact with you </CAlert>

        </form>
      
    </>
  );
}