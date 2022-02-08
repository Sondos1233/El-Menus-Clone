import 'bootstrap/dist/css/bootstrap.min.css';
// import './../Dineout.css'


export default function FilterCard(props) {

    return (
        <div>
            <div class="item-1 px-2 p-2">
                <div class="box-newResturants" style={{ height: "35vh" }}>
                    <div class="slide-img">
                        <img
                            src={props.image} style={{ height: "19vh" }}
                            alt="" />
                        <div class="detail-box" style={{ flexDirection: "column", justifyContent: "center" }}>
                            <a style={{ cursor: "pointer", fontSize:"15px" }} class="meal-kind" >{props.name}</a>
                            <p>{props.type[0]}, {props.type[1]}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}