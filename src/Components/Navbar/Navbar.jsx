import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
// import logo from './../../images/logo-sm.png' 
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {

    return (
        <>

        
        <nav class="nav-lg-Screen sticky-top d-lg-block d-none">
        <section
            className="navbar navbar-expand-lg navbar-light pb-0"
            style={{ backgroundColor: "#e32207" }}
            >
                   <div
                className="container-fluid"
                style= {{ padding: "0 10px", backgroundColor: "white", borderBottom: "1px solid #dfe2e6"}}
            >
                <a
                className="navbar-brand p-3"
                href="../index.html"
                style={{ borderRight: "1px solid #dfe2e6"}}
                >
                <img
                    src="https://elmenus.com/public/img/newLogo.svg"
                    alt=""
                    style={{ width: "120px", maxWidth: "100%", height: "auto" }}
                />
                </a>

                <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
                >
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link py-4 px-2" >DELIVERY</a>
                    <a className=" nav-item nav-link py-4 px-2 active">DINE OUT</a>
                    <a className=" nav-item nav-link py-4 px-2" >OFFERS</a>
                </div>
            
                <div className="services py-3" style={{ display: "flex", marginLeft: "auto" }}>
                    <div style={{ display: "none", marginLeft: "auto"}} id="auth" >
                    <div className="navbar-nav ms-5" style={{ marginLeft: "auto" }} >
                        <a
                        className="nav-link py-4 px-2 ms-5"
                        href=""
                        style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.3vw" }}
                        ><i className="far fa-bell pe-2"></i>Notification</a
                        >
                        <a
                        className="nav-link py-4 px-2 ms-5"
                        href=""
                        style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.3vw" }}
                        ><i className="fas fa-receipt pe-2"></i>My order</a
                        >
                        <a className="nav-link py-4 pt-3 ms-5" href="">
                        <div
                            className="text-white"
                            style= {{ borderLeft: "1px solid #dfe2e6" }}
                        >
                            <span id="image" className="me-2"></span>
                            <span id="text" className="text-center"> </span>
                        
                            <button
                            type="button"
                            className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                            id="dropdownMenuReference"
                            data-bs-toggle="dropdown"
                            aria-expanded="false"
                            data-bs-reference="parent"
                            >
                            <span className="visually-hidden">Toggle Dropdown</span>
                            </button>
                            <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="dropdownMenuReference"
                            style={{ width: "400px" }}
                            id="drop"
                            >
                            <li className="no-hover">
                                <a
                                className="dropdown-item p-5"
                                id="Account_inf"
                                ></a>
                            </li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Account Setting</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li>
                                <a className="dropdown-item" href="#"
                                >Log out</a
                                >
                            </li>
                            </ul>
                        </div>
                        </a>
                    </div>
                    </div>

                    <div style={{ marginLeft: "auto" }} id="sign_auth">
                    <a href="#" style={{ textDecoration: "none" }}>
                    <button type="button" className="btn login-btn btn-log" data-bs-toggle="modal" data-bs-target="#LogInModal">
                            LogIn
                            </button>
                    </a>
                    <a href="#" style={{ textDecoration: "none"}}>
                        <button type="button" className="btn btn-sign" data-bs-toggle="modal" data-bs-target="#SignModal">
                        SignUp
                        </button>
                    </a>

                    </div>
                </div>
                <div
                    className="cart-language py-3"
                    style= {{ width: "auto", display: "flex", margin: "auto", borderLeft: "1px solid #dfe2e6"}}
                >
                    <div style={{ marginLeft: "auto"}}>
                    <a href="#" style={{ textDecoration: "none"}}>
                        <i
                        className="fal fa-shopping-bag"
                        style= {{ fontSize: "2vw", color: "gray", padding: "0 30px"}}
                        ></i>
                    </a>
                    <a
                        href="#"
                        style= {{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.5vw"}}
                    >
                        العربية
                    </a>
                    </div>
                </div>
                </div>
            </div>
        </section>
        <section
            className="search-bar container-fluid"
            style={{ backgroundColor: "white", borderBottom: "1px solid #dfe2e6" }}
            // style="background-color: white; border-bottom: 1px solid var(--border-color)"
            >
            <div className="row mx-4">
                <div className="col-lg-7 col-md-12 mt-1 pt-1">
                <form>
                    <div className="input-group mb-2 search-side">
                    <input
                        type="text"
                        class="form-control"
                        placeholder="Find A Restaurant"
                        style={{ padding: "10px" }}
                    />
                    <span
                        className="input-group-text"
                        id="basic-addon2"
                        style={{ backgroundColor: "white" }}
                        > <FontAwesomeIcon icon={faSearch}></FontAwesomeIcon>
                    </span>
                    </div>
                </form>
                </div>
                <div className="col-lg-5 col-md-12 location-side">
                <img
                    src="https://elmenus.com/public/img/locationHeader.svg"
                    alt="iconImage"
                    className="imgIcon mx-2"
                />
                <h4 className="headerLocation mx-2">Dine-out in <span>Maadi</span></h4>
                <button className="btn change-btn mx-2">CHANGE</button>
                </div>
            </div>
            </section>
                        {/* "border-bottom: 1px solid var(--border-color);" */}
        <section aria-label="breadcrumb" className="container-fluid d-lg-block d-none" style={{ borderBottom: "1px solid #dfe2eb"}}>
            <div className="row" style={{ margin: "0 120px"}}>
            <div className="col-12 pt-2">
                <ol className="breadcrumb" >
                <li className="breadcrumb-item" ><a href="#" className='color-a'>Home</a></li>
                <li className="breadcrumb-item"><a href="#" className='color-a'>cairo</a></li>
                <li className="breadcrumb-item"><a href="#" className='color-a'>maadi</a></li>
                <li className="breadcrumb-item active" aria-current="page">new maadi</li>
                </ol>
            </div>
            </div>
        </section>
        </nav>

        <nav className="nav-lg-Screen sticky-top d-sm-block d-lg-none d-none" id= "pageNav-lg">
        <section className="navbar navbar-expand-lg navbar-light pb-0" style={{ backgroundColor: "#fff" }}>
            <div className="container-fluid">
            <div className="row py-2" style={{ width: "100%" }}>
                <div className="col-2">
                <a className="navbar-brand navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation" 
                    style={{ boxShadow: "none", border: "none"}}>
                    <img src="https://raw.githubusercontent.com/Sondos1233/Elmenus/main/images/logo-sm.png" alt="" style={{ width: "40px", maxWidth: "100%", height: "auto"}}/>
                    <i className="fa fa-caret-down" aria-hidden="true" style={{ color: "#e32207", fontSize: "2vw"}}></i>
                </a>
                </div>
                <div className="col-10">
                <form className= "search-form">
                    <div className="input-group mb-2">
                    <input type="text" className="form-control" placeholder="&#128269; Find A Restaurant" style={{ padding: "10px" }}/>
                    </div>
                </form>
                </div>
                <div className="col-12">
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link py-4 px-2" href="./Delivery.html">DELIVERY</a>
                    <a className="nav-link py-4 px-2 active" href="./Dine-Out.html">DINE OUT</a>
                    <a className="nav-link py-4 px-2" href="./Offers.html">OFFERS</a>
                    </div>
                    <div className="services py-3" style={{width: "52%", display: "flex", marginLeft: "auto"}}>
                    <div style={{ marginLeft: "auto" }}>
                        <a href="#" style={{ textDecoration: "none" }}>
                        <button className="btn" style={{ fontSize: "12px", fontWeight: "700", backgroundColor: "white"}}>
                            LOGIN
                        </button>
                        </a>
                        <a href="#" style={{textDecoration: "none"}}>
                        <button classNmae="btn"
                            style={{ backgroundColor: "#e32207", color: "white", fontSize: "12px", fontWeight: "700"}}>
                            SIGNUP
                        </button>
                        </a>
                    </div>
                    </div>
                    <div className="cart-language  py-3"
                    style={{ width: "auto", display: "flex", margin: "auto", borderLeft: "1px solid #dfe2e6"}}>
                    <div style={{ marginLeft: "auto"}}>
                        <a href="#" style={{ textDecoration: "none"}}>
                        <i className="fa fa-shopping-bag" style={{ fontSize: "2vw", color: "gray", padding: "0 30px"}}></i>
                        </a>
                        <a href="#" style={{ textDecoration: "none", color: "gray", padding: "10px", fontSize: "1.5vw"}}>
                        العربية
                        </a>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-12 pt-2 ">
                <ol className="breadcrumb" style={{ justifyContent: "center"}}>
                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">cairo</a></li>
                    <li className="breadcrumb-item"><a href="#">maadi</a></li>
                    <li className="breadcrumb-item active" aria-current="page">new maadi</li>
                </ol>
                </div>
                <div className="col-12 location-side" style={{ justifyContent: "center"}}>
                <img src="https://elmenus.com/public/img/locationHeader.svg" alt="iconImage" className="imgIcon mx-2"/>
                <h4 className="headerLocation mx-2">Dine-out in <span>Maadi</span></h4>
                <button className="btn change-btn mx-2">CHANGE</button>
                </div>
            </div>
            </div>
        </section>
    
        </nav>
        
        </>
    );
}