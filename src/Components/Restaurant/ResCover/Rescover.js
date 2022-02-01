import '../../main-style.css'
import '../../Restaurant.scss'
import '../../mixins.scss'
const ResCover = (props) => {
    return(
        <>
        <div className="aDivImgCover">
        <img className="aImgCover" src="https://www.elmenus.com/public/img/default-cover.png" alt="" />
        <div>
            <div className="aDivPromo">
                <h3>
                    30 EGP on orders above 120 EGP
                </h3>
                <h5>
                    {props.offerdisc}
                </h5>
                <div className="ms-3 aPromoActivation">
                    <span className=" p-1"> {props.pcode} </span>
                    <button className="btn float-end"> Apply offer </button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default ResCover;