import '../offersCard/Delivery.scss'
import '../main-style.css'
import OffersCard from '../offersCard/offersCard';
import OffersFilter from '../offersFilter/OffersFilter';
const Delivery = () => {
  return (
    <>
      <section class="container-fluid" id="aDiscountdiv">
        <div class="p-1" id="aDiscountPar">
          50EGP OFF your 1st order for a limited time on orders above 120 EGP
          Use Code: FIRST50 | 🍔🍕 <a href="#TD">Click here to start </a>
        </div>
      </section>

      <OffersCard />

      <div class="container-fluid mt-4 ">
        <div class="row">
            <div class="col-lg-3">
                <OffersFilter />
            </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
