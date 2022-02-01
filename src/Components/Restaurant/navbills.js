import '../main-style.css'
import '../Restaurant.scss'
import '../mixins.scss'
import NavContent from './navContent'
const NavBills = () =>{
    return(
        <>
        <ul className="nav nav-pills mb-3 try" id="pills-tab" role="tablist">
                    <li className="nav-item " role="presentation">
                        <button className="nav-link  active aButton" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">Menu</button>
                    </li>
                    <li className="nav-item " role="presentation">
                        <button className=" nav-link aButton " id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">About</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link aButton" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">Branches</button>
                    </li>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link aButton" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">Reviews</button>
                    </li>
                </ul>

                
        </>
    )
}

export default NavBills;