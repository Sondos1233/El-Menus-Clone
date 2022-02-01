import '../main-style.css'
import '../Restaurant.scss'
import '../mixins.scss'
import ResCover from './ResCover/Rescover';
import ResDet from './ResDetails'
const Restaurant = () =>{
    return(
        <>
        <ResCover pcode="Code" offerdisc="Discounts on orders above 120 EGP Expires: in a month" />
        
        <div class="aRestDetDiv container-fluid">
            <div class="row ">
                <ResDet />
            </div>
        </div>

        <hr style={{width: "90%", margin: "5px auto", color: "gray", borderBottom: "2px solid gray;"}} />


        </>
    )
}
export default Restaurant;