import HeaderOfBody from "./headerOfBody";
import "../style/home.css";
import "../../main-style.css";
import CardBody from "./cardOfBody";
import order from "../../../images/Home/track-order.svg";
import noPhone from "../../../images/Home/no-phone.svg";
import FooterOfBody from "../body/footerOfBody"
export default function Body() {
  return (
    <>
      <section class="order_online pb-5 position-relative">
        <HeaderOfBody />
        <div class="order_online_body">
          <div class="container">
            <div class="row ">
              <CardBody
                srcImg={order}
                padding="py-3"
                name="Track your order"
                paragraph="Want to know your order status? 
                       No problem, Now you can know exactly 
                       where your order is throughout the delivery process."
              />
              <CardBody
                srcImg={noPhone}
                padding="py-4"
                name="No phone calls"
                paragraph="Order your favorite food easier, faster, and without
                phone calls."
              />
            </div>
          </div>
        </div>
        <FooterOfBody/>
      </section>
    </>
  );
}
