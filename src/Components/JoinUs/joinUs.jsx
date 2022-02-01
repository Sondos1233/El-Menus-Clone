import AddResForm from "./form/form";
import res from "../../images/JoinUs/bg.jpg";
import Benfit from "./Bentfits";
import Boost from "../../images/JoinUs/1.svg";
import customer from "../../images/JoinUs/2.svg";
import delivery from "../../images/JoinUs/3.svg";
import Deliv from "../../images/JoinUs/delivery.png"
import "../JoinUs/style/joinUs.css";
import "./../main-style.css";
import Step from "./step";
import logo from '../../images/JoinUs/logowithbg.png'
export default function JoinUs() {
  return (
    <>
      <div class="container">
        <div class="position-relative reach">
          <img src={res} />
          <h1 class="position-absolute">
            Reach out to more foodies and users around you!
          </h1>
          <AddResForm />
        </div>
        <div class="body mx-4">
          <div class="media"></div>
          <section class="my-4 sec1">
            <div>
              <h3>Benefits of joining elmenus</h3>
            </div>
            <div class="row my-5">
              <Benfit
                srcImg={Boost}
                name="Boost your Revenues"
                paragraph="Get more and frequent Orders"
              />
              <Benfit
                srcImg={customer}
                name="Get more customers"
                paragraph="Get exposed to more users around your Zone and Area"
              />
              <Benfit
                srcImg={delivery}
                name="Boost your Revenues"
                paragraph="elmenus will take care of the Delivery, Saving you a lot of Headache"
              />
            </div>
          </section>
            {/* --------------------------------------------------------------------- */}
          <section class="sec2">
            <div class="row">
              <div class="col-xl col-md-12">
                <img src={Deliv} />
              </div>

              <div class="col-xl col-md-12">
              <h3 class="mb-4 step">Get Started in 3 Steps</h3>
                <Step color="rgba(244, 221, 160, 1)" num="1" paragraph="Fill in the form"/>
                <Step color="rgba(198,198,198,1)" num="2" paragraph="We will contact you as soon as possible"/>
                <Step color="rgba(214,73,40,1)" num="3" paragraph="Get Ready for your first order"/>
              </div>

            </div>
          </section>
          <footer>
              {/* -------------------------------------footer--------------------------------- */}
            <img src={logo}/>
            <p class="copyright">© 2020 elmenus. All rights reserved.</p>
        </footer>
        </div>
      </div>
    </>
  );
}
