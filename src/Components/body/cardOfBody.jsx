import "../style/home.css";
import "../../Components/main-style.css";
const CardBody = (props) => {
  return (
    <>
      <div class="col-xl col-lg-12 ">
        <div class={`card bg-white ${props.padding} my-2`}>
          <div class="row">
            <div class="col-3">
              <img src={props.srcImg} />
            </div>
            <div class="col">
              <h3 class="text-dark">{props.name}</h3>
              <p>
               {props.paragraph}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardBody;
