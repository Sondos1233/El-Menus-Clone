import '../offersCard/Delivery.scss'
import '../main-style.css'
const OffersFilter = ()=>{
    return(
        <>
        <section className="aFilterSec container-fluid">
                    <h3 className="aShowWord"> Show results for: </h3>
                    <div className="aOnlineOrder row">
                        <label className="switch position-relative d-inline-block mt-3 col-6">
                            <input type="checkbox" name="" id="" />
                            <span className="slider round position-absolute"></span>
                        </label>
                        <p className="col-6 aOnlinetext mt-3">Online ordering &nbsp;&nbsp;
                            <span style={{color: "#4caf50"}}>
                                <i className="fas fa-check-circle"></i> Order online
                            </span>
                        </p>
                    </div>
                    <hr />
                    <div>
                        <label className="abox position-relative d-block">
                            <input type="checkbox" name="" />
                            <span className="acheck position-absolute"><i className="fas fa-check acheckmark"></i></span>
                        </label>
                        <i className="fas fa-door-open" style={{color: "#7b7d7f" ,marginLeft: "40px", fontSize:"15px"}}> &nbsp;
                            Open now</i>
                        <br />
                        <label className="abox position-relative d-block mt-2">
                            <input type="checkbox" name="" />
                            <span className="acheck position-absolute"><i className="fas fa-check acheckmark"></i></span>
                        </label>
                        <i className="fas fa-percent" style={{color: "#7b7d7f" ,marginLeft: "40px", fontSize:"15px"}}> &nbsp;
                            Promo</i>
                    </div>
                    <hr />
                    <h5 className="aSortbyTitle">Sort by:</h5>
                    <div className="container-fluid acontainerSort">
                        <div className="row">
                            <div className="col-2">
                                <label className="aRadio">
                                    <input type="radio" name="sort" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10 aSortType">Popular</div>

                            <div className="col-2 ">
                                <label className="aRadio">
                                    <input type="radio" name="sort" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10 aSortType">Rating</div>
                            <div className="col-2 ">
                                <label className="aRadio">
                                    <input type="radio" name="sort" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10  aSortType">Delivery Time</div>
                        </div>
                    </div>
                    <hr />
                    <h5 className="aSortbyTitle">Dishes:</h5>
                    <div className="container-fluid acontainerSort">
                        <div className="row" id="afilterRowButtons">
                            <div className="col-2">
                                <label className="aRadio">
                                    <input type="radio" name="type" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10 aSortType">Pizza</div>

                            <div className="col-2 ">
                                <label className="aRadio">
                                    <input type="radio" name="type" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10 aSortType">Fried Chicken</div>
                            <div className="col-2 ">
                                <label className="aRadio">
                                    <input type="radio" name="type" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10  aSortType">Pasta</div>
                            <div className="col-2 ">
                                <label className="aRadio">
                                    <input type="radio" name="type" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10  aSortType">Grilled Chicken</div>
                            <div className="col-2 ">
                                <label className="aRadio">
                                    <input type="radio" name="type" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10  aSortType">Burgers</div>
                            <div className="col-2 ">
                                <label className="aRadio">
                                    <input type="radio" name="type" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10  aSortType">Shawerma</div>
                            <div className="col-2 ">
                                <label className="aRadio">
                                    <input type="radio" name="type" id="" />
                                    <span className="adot"></span> <i className="fas fa-dot-circle aCheckdot"> </i>
                                </label>
                            </div>
                            <div className="col-10  aSortType">Grilles</div>
                            <div className="mt-2 mb-2"><a href="#" className="aLink33More">+33 more</a></div>
                        
                        
                        </div>
                    </div>
              </section>
        </>
    )
}

export default OffersFilter;