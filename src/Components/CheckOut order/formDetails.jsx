import aler from "../../images/check/exclamation-circle.svg";
import "./check.css";
import { useState } from "react";
export const FormDetails = ({submit}) => {
  const userDetails = JSON.parse(localStorage.getItem('myUser'))
  // console.log(userDetails)
  
    const [userOrder, setUserOrder] = useState({
        Name:userDetails?.Name,
        Address:userDetails?.Address,
        BuildingNo:userDetails?.BuildingNo,
        FloorNo:userDetails?.FloorNo,
        ApartmentNo:userDetails?.ApartmentNo,
        Mobile:userDetails?.Mobile
      });
      submit(userOrder)
      const [errors, setErrors] = useState({
        NameErrors:null,
        AddressErrors: null,
        BuildingErrors: null,
        ApartmentErrors:null,
        MobileErrors:null
      });
      
      const handleChange = (e) => {
        setUserOrder({
          ...userOrder,
          [e.target.name]: e.target.value,
        });
        const patternPhone = new RegExp(/^(01)(0|1|2|5)[0-9]{8}$/);
      
        if (e.target.name == "Name") {
            setErrors({
              ...errors,
              NameErrors:
                e.target.value.length == 0
                  ? "Enter a valid name"
                  : null
            });
          }else if (e.target.name == "Address") {
            setErrors({
              ...errors,
              AddressErrors:
                e.target.value.length == 0
                  ? "Enter a valid address info"
                  : null
            });
          }else if (e.target.name == "BuildingNo") {
            setErrors({
              ...errors,
              BuildingErrors:
                e.target.value.length == 0
                  ? "Enter a valid building number"
                  : null
            });
          }
          else if (e.target.name == "FloorNo") {
            setErrors({
              ...errors,
              FloorErrors:
                e.target.value.length == 0
                  ? "Enter a valid Floor number"
                  : null
            });
          }
          else if (e.target.name == "ApartmentNo") {
            setErrors({
              ...errors,
              ApartmentErrors:
                e.target.value.length == 0
                  ? "Enter a valid floor number"
                  : null
            });
          }
          else if (e.target.name == "Mobile") {
            setErrors({
              ...errors,
              MobileErrors:
                e.target.value.length == 0
                  ? "Enter a valid mobile number"
                  : !patternPhone.test( e.target.value)
                  ? "Number must be start with 0! Number must be 11 number"
                  : null
            });
          }
      
        }  
    
    

  return (
    <>
      <form class="row g-3 mt-5 formdetails" >
        <div class="col-md-12 mb-4 ">
          <label for="Name" class="form-label input_label">
            Name
          </label>
          <input
            value={userOrder.Name}
            type="text"
            class="form-control validate-input"
            id="Name"
            name="Name"
            placeholder="eg. Sondos Amgad"
            onChange={(e) => {
              handleChange(e);
            }}
          />
          <small className="text-danger">{errors.NameErrors}</small>
        </div>
        <div class="col-md-12">
          <h4>Add New Address Details</h4>
          <p style={{ color: "#a9acae", "line-height": "16px" }}>
            {" "}
            <img src={aler} className="pe-1" />
            Please select your exact location on the map, so that captains can
            reach you easily
          </p>
        </div>
        <div class="col-12">
          <label for="inputAddress" class="form-label input_label ">
            Address Info
          </label>
          <input
            value={userOrder.Address}
            type="text"
            class="form-control validate-input"
            id="inputAddress"
            name="Address"
            placeholder="in front of Al-Azhar University"
            onChange={(e) => {
                handleChange(e);
              }}
          />
          <small className="text-danger">{errors.AddressErrors}</small>
        </div>
        <div class="col-md-4">
          <label for="Building" class="form-label input_label">
            Building no.
          </label>
          <input
            value={userOrder.BuildingNo}
            name="BuildingNo"
            type="number"
            class="form-control"
            id="Building"
            placeholder="eg. 4"
            onChange={(e) => {
                handleChange(e);
              }}
          />
          <small className="text-danger">{errors.BuildingErrors}</small>
        </div>
        <div class="col-md-4">
          <label for="Floor" class="form-label input_label">
            Floor no.
          </label>
          <input
            value={userOrder?.FloorNo}
            name="FloorNo"
            type="number"
            class="form-control"
            id="Floor"
            placeholder="eg. 2"
            onChange={(e) => {
                handleChange(e);
              }}
          />
          <small className="text-danger">{errors.FloorErrors}</small>
        </div>
        <div class="col-md-4">
          <label for="Apartment" class="form-label input_label">
            Apartment no.
          </label>
          <input
            value={userOrder.ApartmentNo}
            name="ApartmentNo"
            type="number"
            class="form-control validate-input"
            id="Apartment"
            placeholder="eg. 14"
            onChange={(e) => {
                handleChange(e);
              }}
          />
          <small className="text-danger">{errors.ApartmentErrors}</small>
        </div>
        <div class="col-md-12 mb-4">
          <label for="Mobile" class="form-label input_label pl">
            Mobile Number
          </label>
          <input
           value={userOrder.Mobile}
            name="Mobile"
            type="number"
            class="form-control validate-input"
            id="Mobile"
            placeholder="eg. 01012345687"
            onChange={(e) => {
                handleChange(e);
              }}
          />
        <small className="text-danger">{errors.MobileErrors}</small>

        </div>
      </form>
    </>
  );
};
