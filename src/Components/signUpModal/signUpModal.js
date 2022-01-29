import React, {useState} from "react";
import ReactModal from 'react-modal'
import './signUpModal.css'


function ModalSUp(){
 
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [user, setUser] = useState({
    Name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    nameError: null,
    emailError: null,
    passwordError: null,
  });

  const handleChange = (e) => {
    if (e.target.name == "Name") {
        setUser({
            ...user,
            Name: e.target.value
        });
        setErrors({
            ...errors,
            nameError:
                e.target.value.length == 0
                    ? "This field is Required" :
                    e.target.value.length > 10
                        ? "You have to enter less than 10"
                        : null
        });

    }
    else if (e.target.name == "email") {
        setUser({
            ...user,
            email: e.target.value
        });
        setErrors({
            ...errors,
            emailError:
                e.target.value.length == 0
                    ? "This field is Required" :
                    e.target.value.length > 30
                        ? "You have to enter less than 30"
                        : null
        });

    } else if (e.target.name == "password") {
        setUser({
            ...user,
            password: e.target.value
        });
        setErrors({
            ...errors,
            passwordError:
                e.target.value.length == 0
                    ? "This field is Required" :
                    e.target.value.length > 10
                        ? "You have to enter less than 10"
                        : null
        });
    }

}
  
  return( 
    
    <>
    <div className="container-fluid">

      {/* This Button instead of signUp button till integration with navbar */}
    <button className="btn btn-danger" onClick={() => { setModalIsOpen(true) }}>Open Modal</button>
    {/* ****************************************************************************** */}

    <ReactModal isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false) }}>
    <div className="bgForm">
      <button type="button" className="btn-close" onClick={() => { setModalIsOpen(false) }}></button>

      <div className="form-container">
        <img id="signLogo" src="images/logo.jpg" />
        <form id="log" action="#">
        <div className="inpt mt-3">
            <input type='text' placeholder="Name" className={`form-control ${errors.nameError ? `border-danger` : ``}`} value={user.Name} name="Name" onChange={(e) => { handleChange(e) }} />
            <small className="text-danger">{errors.nameError}</small>
          </div>

          <div className="inpt mt-3">
            <input type='text' placeholder="Email" className={`form-control ${errors.emailError ? `border-danger` : ``}`}
            value={user.email} name="email" onChange={(e) => { handleChange(e) }} />
            <small className="text-danger">{errors.emailError}</small>
          </div>

          <div className="inpt mt-3">
            <input type='password' placeholder="Password" className={`form-control ${errors.passwordError ? `border-danger` : ``}`} value={user.password} name="password" onChange={(e) => { handleChange(e) }} />
            <small className="text-danger">{errors.passwordError}</small>
          </div>

          <div className="button mt-3">
            <input type="submit" className="btn crtBtn" value="Create an account"  />
          </div>

        </form>
        <div className="note">
          <a>By creating an account, you agree to our Terms of service and Privacy policy</a>
        </div>
      </div>
      </div>
    </ReactModal>
    </div>
    </>
  )
}
export default ModalSUp;