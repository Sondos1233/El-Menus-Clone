import '../Delivery.scss'
import '../main-style.css'
import OffersCard from '../offersCard/offersCard';
import OffersFilter from '../offersFilter/OffersFilter';
import TDishesCard from '../TopDishes/TDishesCard';
import RestCard from '../RestayrantCard/RestCard';
import Offers from '../Offers/Offers'

//Carousel imports
import { Carousel } from '@trendyol-js/react-carousel';
import { useState } from 'react';





const Delivery = () => {
  const offersCardsCarouselNumber = 4;
  const tastyCardsCarouselNumber = 6;

  const [itemsArr, setItemsArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  return (
    <>

      {/*/////////// CAROUSEL TEMPLATE : COPY - PASTE TO USE IT ANYWHERE/////////// */}
      {/* <Carousel show={4} slide={2} transition={0.5}>
        {itemsArr.map(item => {
          return item
        })}
      </Carousel> */}


      <section class="container-fluid" id="aDiscountdiv">
        <div class="p-1" id="aDiscountPar">
          50EGP OFF your 1st order for a limited time on orders above 120 EGP
          Use Code: FIRST50 | 🍔🍕 <a href="#TD">Click here to start </a>
        </div>
      </section>


      {/* //////////Tasty Offers Carousel /////////////*/}
      <section>
        <div className="container-fluid" id="aWords">
          <div className="row">

            <div className="col-6">
              <p id="aTastPar">Tasty Offers</p>
            </div>

            <div className="col-6 ">
              <a className="float-end p-2" id="aSeeallLink" href="#">
                See All{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-caret-right-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <Carousel show={offersCardsCarouselNumber} slide={2} transition={0.5}>
          {itemsArr.map(item => {
            return <OffersCard />
          })}
        </Carousel>

      </section>

      <div class="container-fluid mt-4 ">
        <div class="row">

          <div class="col-lg-3">
            <OffersFilter />
          </div>

          <div class="col-xl-9 col-lg-12">
            {/* <section class="aTopDishes" id="TD"> */}

                <div className="container-fluid" id="aWords">
                  <div className="row">

                    <div className="col-6">
                      <p id="aTastPar">Discover Top Dishes</p>
                    </div>

                    <div className="col-6 ">
                      <a className="float-end p-2" id="aSeeallLink" href="#">
                        See All{" "}
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="bi bi-caret-right-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <Carousel show={tastyCardsCarouselNumber} slide={2} transition={0.5}>
                  {itemsArr.map(item => {
                    return <TDishesCard />
                  })}
                </Carousel>

            {/* </section> */}



            <section class="aRestaurant mt-4">
              <p id="aTastPar">Restaurants <span style={{ fontSize: "medium" }}>( 96 )</span> </p>
              <RestCard />
            </section>


            
          </div>
        </div>
      </div>

    </>
  );
};

export default Delivery;
