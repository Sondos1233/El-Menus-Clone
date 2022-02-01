
const ResCover = (props) => {
    return(
        <>
        <div class="aDivImgCover">
        <img class="aImgCover" src="https://www.elmenus.com/public/img/default-cover.png" alt="" />
        <div>
            <div class="aDivPromo">
                <h3>
                    30 EGP on orders above 120 EGP
                </h3>
                <h5>
                    {props.offerdisc}
                </h5>
                <div class="ms-3 aPromoActivation">
                    <span class=" p-1"> {props.pcode} </span>
                    <button class="btn float-end"> Apply offer </button>
                </div>
            </div>
        </div>
    </div>
        </>
    )
}

export default ResCover;