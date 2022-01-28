import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "../style/home.css";
import "./../../Components/main-style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRulerHorizontal } from "@fortawesome/free-solid-svg-icons";
export default function HeaderOfBody() {
  return (
    <>
      <header class="text-center pt-4">
        <h3>
          <FontAwesomeIcon icon={faRulerHorizontal} />
          Now you Can
          <FontAwesomeIcon icon={faRulerHorizontal} />
        </h3>
        <h2>Order online</h2>
      </header>
    </>
  );
}
