import 'bootstrap/dist/css/bootstrap.min.css';
import './../Dineout.css'

export default function DineoutbyPlace(props) {


    return (
        <>
        <div class="col-md-4 col-6 my-1 px-1" style={{ minHeight: "100px", maxHeight: "400px"}}>  
            <div class="d-flex px-0" style={{ borderRadius: "5px",height: "100%", backgroundImage: `url(${props.urlImage})`,
                                              backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>
                <div class="dine-content2">        
                {/* "font-size: 20px; cursor: pointer;"  */}
                    <h1 class="mt-auto text-light fw-bold p-4" style={{ fontSize: "20px", cursor: "pointer"}} >{props.title}</h1>
                </div>
                </div>
            </div>    
        </>
    );
}