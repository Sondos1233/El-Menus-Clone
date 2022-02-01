import '../main-style.css'
import '../Restaurant.scss'
import '../mixins.scss'
import ResCover from './ResCover/Rescover';
import ResDet from './ResDetails';
import NavBills from './navbills';
import NavContent from './navContent'
const Restaurant = () =>{
    return(
        <>
        <ResCover pcode="Code" offerdisc="Discounts on orders above 120 EGP Expires: in a month" />
        
        <div class="aRestDetDiv container-fluid">
            <div class="row ">
                <ResDet />
            </div>
        </div>

        <hr style={{width: "90%", margin: "5px auto", color: "gray", borderBottom: "2px solid gray"}} />

        <div class="container-fluid aTapsDiv mt-4">
            <div class="row">
                <div class="col-6">
                    <NavBills />
                </div>
                <div className="tab-content" id="pills-tabContent">
                <NavContent id="pills-home" />
                </div>
                <div class="col-6">
                <div class="d-flex flex-row justify-content-end">
                    <div class="ms-3" style={{width:"fitContent"}}>
                        <span class="d-inline-block aIcont"><i class="fas fa-map-marker-alt"></i></span>
                        <p class="d-inline-block aIcont">Live Tracking</p>
                    </div>
                    <div class="ms-3" style={{width:"fitContent"}}>
                        <span class="d-inline-block aIcond"><i class="fas fa-motorcycle"></i></span>
                        <p class="d-inline-block aIcond">45 mins</p>
                    </div>
                    <div class="ms-3" style={{width:"fitContent"}}>
                        <span class="d-inline-block aIconw"><i class="fas fa-wallet"></i></span>
                        <p class="d-inline-block aIconw">0 Egp</p>
                    </div>
                    <div class="ms-3" style={{width:"fitContent"}}>
                        <span class="d-inline-block aIconc"><i class="far fa-clock"></i></span>
                        <p class="d-inline-block aIconc">02:00 PM - 01:30 AM</p>
                    </div>
                </div>
            </div>
            </div>
        </div>

        </>
    )
}
export default Restaurant;