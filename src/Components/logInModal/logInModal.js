import React, {useState} from "react";
import ReactModal from 'react-modal'

import './logInModal.css'


function ModalLog(){
 
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    emailError: null,
    passwordError: null,
  });

  const handleChange = (e) => {
    // console.log(e.target.value, e.target.name);
    if (e.target.name == "email") {
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

      {/* This Button instead of LogIn button till integration with navbar */}
    <button className="btn btn-danger" onClick={() => { setModalIsOpen(true) }}>Open Modal</button>
    {/* ****************************************************************************** */}

    <ReactModal isOpen={modalIsOpen} onRequestClose={() => { setModalIsOpen(false) }}>
    <div className="bgForm">
      <button type="button" className="btn-close" onClick={() => { setModalIsOpen(false) }}></button>

      <div className="form-container">
        <img id="logLogo" src="images/logo.jpg" />
        <form id="log" action="#">
          <div className="inpt mt-3">
            <input type='text' placeholder="email" className={`form-control ${errors.emailError ? `border-danger` : ``}`}
            value={user.email} name="email" onChange={(e) => { handleChange(e) }} />
            <small className="text-danger">{errors.emailError}</small>
          </div>

          <div className="inpt mt-3">
            <input type='password' placeholder="password" className={`form-control ${errors.passwordError ? `border-danger` : ``}`} value={user.password} name="password" onChange={(e) => { handleChange(e) }} />
            <small className="text-danger">{errors.passwordError}</small>
          </div>

          <div className="button mt-3">
            <input type="submit" className="btn btn-danger" value="Log in"/>
          </div>

          <div className="button mt-3">
            <input type="submit" className="btn goglBtn" value="Log in with Facebook"  />
          </div>

          <div className="button mt-3">
            <input type="submit" className="btn btn-primary" value="Log in with Google"/>
          </div>

        </form>
        <div className="frgtPass">
          <a>I forget my password</a>
        </div>
      </div>
      </div>
    </ReactModal>
    </div>
    </>
  )
}
export default ModalLog;


















  {/* <div className="modal fade" id="LogInModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <div className="title">
          <img src="images/logo.png" />
          <p className="mt-1 ms-lg-2">elmenus</p>
        </div>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body d-flex">
        <form id="log" action="#" style="margin-top: 20px;">
          <div className="user-details">
              <div className="input-box">
                  <input type="email" name="email" placeholder="Email" required />
              </div>
              <div className="input-box">
                  <input type="password" name="password" placeholder="Password" required />
              </div>
          </div>
          <div className="button mt-3">
             <input type="submit" value="Log In" className="btn btn-danger" />
          </div>
          <div className="button mt-3">
            <input type="submit" value="LogIn with Facebook" className="btn " style="background-color: #4267b2; color: white;" />
         </div>
         <div className="button mt-3">
          <input type="submit" value="LogIn with Google" className="btn " style="background-color: #4285f4; color: white;" />
          </div>
          <div className="ForgotPass">
            <p><a href="#" style="font-size: 11px; font-weight: bold; text-decoration: none; color: #e32207;">I forgot my password</a></p>
          </div>
      </form>
      </div>
    </div>
  </div>
</div> */}
