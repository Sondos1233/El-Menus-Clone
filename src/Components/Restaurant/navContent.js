import '../main-style.css'
import '../Restaurant.scss'
import '../mixins.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";


const NavContent = (props) =>{
    return(
        <>
<div className="tab-pane fade show active" id={props.id} role="tabpanel" aria-labelledby="pills-home-tab">

                    <div className="aScrollSpy">
                        <div className="row">
                            <div className="col-3">
                                <div id="list-example" className="list-group sticky-top">
                                    <a className="list-group-item  list-group-item-action active" href="#list-item-1">Pizza
                                        <span className=" aRightIcon float-end "><FontAwesomeIcon
                                              icon={faArrowRight}  className="fas  "></FontAwesomeIcon></span></a>
                                    <a className="list-group-item list-group-item-action" href="#list-item-2">Alexandrian
                                        hawawshi <span className="float-end aRightIcon"><FontAwesomeIcon
                                              icon={faArrowRight}  className="fas  "></FontAwesomeIcon></span></a>
                                    <a className="list-group-item list-group-item-action" href="#list-item-3">Savory
                                        Feteer <span className="float-end aRightIcon"><FontAwesomeIcon
                                              icon={faArrowRight}  className="fas  "></FontAwesomeIcon></span></a>
                                    <a className="list-group-item list-group-item-action" href="#list-item-4">Feteer
                                        Meshaltet <span className="float-end aRightIcon"><FontAwesomeIcon
                                             icon={faArrowRight}   className="fas  "></FontAwesomeIcon></span></a>
                                    <a className="list-group-item list-group-item-action" href="#list-item-5">Saroukh <span
                                            className="float-end aRightIcon"><FontAwesomeIcon className="fas  " icon={faArrowRight}></FontAwesomeIcon></span></a>
                                    <a className="list-group-item list-group-item-action" href="#list-item-6">Fries <span
                                            className="float-end aRightIcon"><FontAwesomeIcon className="fas  " icon={faArrowRight}></FontAwesomeIcon></span></a>
                                    <a className="list-group-item list-group-item-action" href="#list-item-7">Sweet
                                        Feteer <span className="float-end aRightIcon"><FontAwesomeIcon
                                                className="fas  " icon={faArrowRight}></FontAwesomeIcon></span></a>
                                </div>

                            </div>

                            <div className="col-6">
                                <div className="vertical"></div>
                                <div data-bs-spy="scroll" data-bs-target="#list-example" data-bs-offset="0"
                                    className="scrollspy-example ms-3" tabindex="0">

                                    
                                    <div className="aSearchdiv d-flex mb-2 sticky-top">
                                        <input style={{width: "50%"}} className="form-control me-2" type="search"
                                            placeholder="Search for a Dish" aria-label="Search" />
                                        <a className="aLinkMenuScan" style={{textAlign: "end", width: "50%"}} href="#">View
                                            Scanned Menu <FontAwesomeIcon className="fas fa-caret-right"></FontAwesomeIcon></a>
                                    </div>

                                    <div className="aItemsDiv ms-3">
                                        <section>
                                            <h4 id="list-item-1" className="aItem mt-4 mb-4">Pizza </h4>
                                            <section className="d-flex flex-column ">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <h5 className="aDishType"> Vegetables </h5>
                                                        <p className="aDishDet"> Mozzarella, pizza sauce, tomato, pepper,
                                                            olives</p>
                                                        <div>
                                                            <span style={{color: "var(--first-color)"}}> <FontAwesomeIcon
                                                                    className="fas fa-plus-circle"></FontAwesomeIcon> </span>
                                                            <p className="d-inline-block aDishPrice"> 35 - 55 EGP</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <img className="rounded-3" style={{width: "80%"}}
                                                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8a4a435e-74df-4a49-bf4e-15c73f1a08e6.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <span style={{color: "#464748"}}> count </span>
                                                    <span className="aThumbIcon" style={{color: "#a9acae"}}><FontAwesomeIcon
                                                            className="far fa-thumbs-up"></FontAwesomeIcon></span>
                                                </div>
                                            </section>
                                            <hr style={{color: "gray", marginTop: "-2px"}} />
                                            <section className="d-flex flex-column ">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <h5 className="aDishType"> Vegetables </h5>
                                                        <p className="aDishDet"> Mozzarella, pizza sauce, tomato, pepper,
                                                            olives</p>
                                                        <div>
                                                            <span style={{color: "var(--first-color)"}}> <FontAwesomeIcon
                                                                    className="fas fa-plus-circle"></FontAwesomeIcon> </span>
                                                            <p className="d-inline-block aDishPrice"> 35 - 55 EGP</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <img className="rounded-3" style={{width:"80%"}}
                                                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8a4a435e-74df-4a49-bf4e-15c73f1a08e6.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <span style={{color:"#464748"}}> count </span>
                                                    <span className="aThumbIcon" style={{color:"#a9acae"}}><FontAwesomeIcon
                                                            className="far fa-thumbs-up"></FontAwesomeIcon></span>
                                                </div>
                                            </section>
                                            <hr style={{color:"gray", marginTop:"-2px"}} />
                                            <section className="d-flex flex-column ">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <h5 className="aDishType"> Vegetables </h5>
                                                        <p className="aDishDet"> Mozzarella, pizza sauce, tomato, pepper,
                                                            olives</p>
                                                        <div>
                                                            <span style={{color: "var(--first-color)"}}> <FontAwesomeIcon
                                                                    className="fas fa-plus-circle"></FontAwesomeIcon> </span>
                                                            <p className="d-inline-block aDishPrice"> 35 - 55 EGP</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <img className="rounded-3" style={{width:"80%"}}
                                                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8a4a435e-74df-4a49-bf4e-15c73f1a08e6.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <span style={{color:"#464748"}}> count </span>
                                                    <span className="aThumbIcon" style={{color:"#a9acae"}}><FontAwesomeIcon
                                                            className="far fa-thumbs-up"></FontAwesomeIcon></span>
                                                </div>
                                            </section>
                                            <hr style={{color:"gray", marginTop:"-2px"}} />

                                        </section>
                                        <section>
                                            <h4 id="list-item-2" className="aItem mt-4 mb-4">Alexandrian hawawshi</h4>
                                            <section className="d-flex flex-column ">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <h5 className="aDishType"> Vegetables </h5>
                                                        <p className="aDishDet"> Mozzarella, pizza sauce, tomato, pepper,
                                                            olives</p>
                                                        <div>
                                                            <span style={{color: "var(--first-color)"}}> <FontAwesomeIcon
                                                                    className="fas fa-plus-circle"></FontAwesomeIcon> </span>
                                                            <p className="d-inline-block aDishPrice"> 35 - 55 EGP</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <img className="rounded-3" style={{width:"80%"}}
                                                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/fe4d68b9-ac1f-4681-9000-e25b4aba56bd.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <span style={{color:"#464748"}}> count </span>
                                                    <span className="aThumbIcon" style={{color:"#a9acae"}}><FontAwesomeIcon
                                                            className="far fa-thumbs-up"></FontAwesomeIcon></span>
                                                </div>
                                            </section>
                                            <hr style={{color:"gray", marginTop:"-2px"}} />
                                            <section className="d-flex flex-column ">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <h5 className="aDishType"> Vegetables </h5>
                                                        <p className="aDishDet"> Mozzarella, pizza sauce, tomato, pepper,
                                                            olives</p>
                                                        <div>
                                                            <span style={{color: "var(--first-color)"}}> <FontAwesomeIcon
                                                                    className="fas fa-plus-circle"></FontAwesomeIcon> </span>
                                                            <p className="d-inline-block aDishPrice"> 35 - 55 EGP</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <img className="rounded-3" style={{width:"80%"}}
                                                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/fe4d68b9-ac1f-4681-9000-e25b4aba56bd.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <span style={{color:"#464748"}}> count </span>
                                                    <span className="aThumbIcon" style={{color:"#a9acae"}}><FontAwesomeIcon
                                                            className="far fa-thumbs-up"></FontAwesomeIcon></span>
                                                </div>
                                            </section>
                                            <hr style={{color:"gray", marginTop:"-2px"}} />
                                            <section className="d-flex flex-column ">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <h5 className="aDishType"> Vegetables </h5>
                                                        <p className="aDishDet"> Mozzarella, pizza sauce, tomato, pepper,
                                                            olives</p>
                                                        <div>
                                                            <span style={{color: "var(--first-color)"}}> <FontAwesomeIcon
                                                                    className="fas fa-plus-circle"></FontAwesomeIcon> </span>
                                                            <p className="d-inline-block aDishPrice"> 35 - 55 EGP</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <img className="rounded-3" style={{width:"80%"}}
                                                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/fe4d68b9-ac1f-4681-9000-e25b4aba56bd.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <span style={{color:"#464748"}}> count </span>
                                                    <span className="aThumbIcon" style={{color:"#a9acae"}}><FontAwesomeIcon
                                                            className="far fa-thumbs-up"></FontAwesomeIcon></span>
                                                </div>
                                            </section>
                                            <hr style={{color:"gray", marginTop:"-2px"}} />
                                        </section>
                                        <section>
                                            <h4 id="list-item-3" className="aItem">Savory Feteer</h4>
                                            <section className="d-flex flex-column ">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <h5 className="aDishType"> Mozerella cheese </h5>
                                                        <p className="aDishDet"> Mozzarella, pizza sauce, tomato, pepper,
                                                            olives</p>
                                                        <div>
                                                            <span style={{color: "var(--first-color)"}}> <FontAwesomeIcon
                                                                    className="fas fa-plus-circle"></FontAwesomeIcon> </span>
                                                            <p className="d-inline-block aDishPrice"> 35 - 55 EGP</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <img className="rounded-3" style={{width:"80%"}}
                                                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/bf5870ca-ec53-4faf-a0ec-71771f357a42.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <span style={{color:"#464748"}}> count </span>
                                                    <span className="aThumbIcon" style={{color:"#a9acae"}}><FontAwesomeIcon
                                                            className="far fa-thumbs-up"></FontAwesomeIcon></span>
                                                </div>
                                            </section>
                                            <hr style={{color:"gray", marginTop:"-2px"}} />
                                            <section className="d-flex flex-column ">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <h5 className="aDishType"> Vegetables </h5>
                                                        <p className="aDishDet"> Mozzarella, pizza sauce, tomato, pepper,
                                                            olives</p>
                                                        <div>
                                                            <span style={{color: "var(--first-color)"}}> <FontAwesomeIcon
                                                                    className="fas fa-plus-circle"></FontAwesomeIcon> </span>
                                                            <p className="d-inline-block aDishPrice"> 35 - 55 EGP</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <img className="rounded-3" style={{width:"80%"}}
                                                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8a4a435e-74df-4a49-bf4e-15c73f1a08e6.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <span style={{color:"#464748"}}> count </span>
                                                    <span className="aThumbIcon" style={{color:"#a9acae"}}><FontAwesomeIcon
                                                            className="far fa-thumbs-up"></FontAwesomeIcon></span>
                                                </div>
                                            </section>
                                            <hr style={{color:"gray", marginTop:"-2px"}} />
                                            <section className="d-flex flex-column ">
                                                <div className="d-flex flex-row">
                                                    <div>
                                                        <h5 className="aDishType"> Vegetables </h5>
                                                        <p className="aDishDet"> Mozzarella, pizza sauce, tomato, pepper,
                                                            olives</p>
                                                        <div>
                                                            <span style={{color: "var(--first-color)"}}> <FontAwesomeIcon
                                                                    className="fas fa-plus-circle"></FontAwesomeIcon> </span>
                                                            <p className="d-inline-block aDishPrice"> 35 - 55 EGP</p>
                                                        </div>
                                                    </div>
                                                    <div className="ms-auto">
                                                        <img className="rounded-3" style={{width:"80%"}}
                                                            src="https://s3-eu-west-1.amazonaws.com/elmenusv5-stg/Thumbnail/8a4a435e-74df-4a49-bf4e-15c73f1a08e6.jpg"
                                                            alt="" />
                                                    </div>
                                                </div>
                                                <div className="ms-auto">
                                                    <span style={{color:"#464748"}}> count </span>
                                                    <span className="aThumbIcon" style={{color:"#a9acae"}}><FontAwesomeIcon
                                                            className="far fa-thumbs-up"></FontAwesomeIcon></span>
                                                </div>
                                            </section>
                                            <hr style={{color:"gray", marginTop:"-2px"}} />
                                        </section>
                                        <h4 id="list-item-4" className="aItem">Feteer Meshaltet</h4>
                                        <h4 id="list-item-5" className="aItem">Saroukh</h4>
                                        <h4 id="list-item-6" className="aItem">Fries</h4>
                                        <h4 id="list-item-7" className="aItem">Sweet Feteer</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="aDeliverAddr">
                                    <div className="d-flex flex-column">
                                        <span className="aMotoIcon"><FontAwesomeIcon className="fas fa-motorcycle"></FontAwesomeIcon></span>
                                        <p className="aDeliverto">
                                            <span>Delivers to</span>
                                            Corniche El Maadi Maadi
                                        </p>
                                        <button className="btn">
                                            Change Address <FontAwesomeIcon className="fas   float-right"></FontAwesomeIcon>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
        </>
    )
}
export default NavContent;