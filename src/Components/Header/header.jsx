

export default function Header(){

    return (
        <>
              <nav className="navbar navbar-light px-5 py-4">
        <div className="container-fluid">
          <div className="home_logo">
            <a className="navbar-brand" href="./index.html">
              <img
                src="images/elmenusLogo.svg"
                alt=""
                width="139"
                height="auto"
                className="d-inline-block align-text-top"
              />
            </a>
          </div>
          
          <div className="home_sign" >
            <form className="d-flex">
              {/* <!-- Button trigger modal --> */}
              <div id="sign_auth">
                <button type="button" className="btn btn-link text-white login-btn" data-bs-toggle="modal" data-bs-target="#LogInModal">
                  LogIn
                </button>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SignModal">
                  SignUp
                </button>
              </div>
              
            </form>
          </div>
          
        </div>
      </nav>
      


        </>
    )

}