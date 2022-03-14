import { faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./check.css";
export const DetailsUser = ({next,showdetails,user,deleteOrder}) => {
  return (
    <>
      <div className="DetailsUser mt-5">
        <div className="row ps-4">
          <div className="col-lg-8 col-md-12">
            <h5>{user.Name}</h5>
            <h6>
              <FontAwesomeIcon icon={faHome} className="me-1 text-secondary" /> Location
            </h6>
            <p className="text-secondary">{user.Address}</p>
            <p>
              <FontAwesomeIcon icon={faPhone} className="me-1 text-secondary" />
              {user.Mobile}
            </p>
          </div>
          <div className="col-lg-4 col-md-12 mt-3  ">
            <div className=" ">
              <button class="btn btn-primary" onClick={next}>Delivers to this Address</button>
            </div>
            <div className="action_form d-flex justify-content-end pe-3 ">
              <button class="btn" onClick={showdetails}>Edit</button>
              <button class="btn" onClick={deleteOrder}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
