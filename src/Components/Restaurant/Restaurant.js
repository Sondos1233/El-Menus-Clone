import '../main-style.css'
import '../Restaurant.scss'
import '../mixins.scss'
import ResCover from './ResCover/Rescover'
const Restaurant = () =>{
    return(
        <>
        <ResCover pcode="Code" offerdisc="Discounts on orders above 120 EGP Expires: in a month" />
        </>
    )
}
export default Restaurant;