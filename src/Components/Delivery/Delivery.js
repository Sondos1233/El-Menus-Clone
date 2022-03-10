import '../Delivery.scss'
import '../main-style.css'
import OffersCard from '../offersCard/offersCard';
import OffersFilter from '../offersFilter/OffersFilter';
import TDishesCard from '../TopDishes/TDishesCard';
import RestCard from '../RestayrantCard/RestCard';
import { useState } from 'react';
const Delivery = () => { 
  const [Type,setType]=useState('')
  const handleType = (e) => {
    e.preventDefault();
    // console.log(e.target.text)
    setType(e.target.text)
  };
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
            <div class="col-xl-9 col-lg-12">
              <section class="aTopDishes" id="TD">
                <TDishesCard handleType={handleType} />
              </section>
              <section class="aRestaurant mt-4">
                  
                  <RestCard Type={Type}/>
              </section>
            </div>
        </div>
      </div>
    </>
  );
};

export default Delivery;
