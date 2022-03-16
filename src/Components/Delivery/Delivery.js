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
  const [Type,setType]=useState('');
  const [Rating,setRating] = useState('');
  const [Promo, setPromo] = useState(false);
  const handleType = (e) => {
    e.preventDefault();
    //  console.log(e.target.text)
    setType(e.target.text)
  };
  //filter by type
  const handleType2=(e)=>{
    // console.log(e.target.value)
    setType(e.target.value)
  }
  //order by rating
  const handleRating = (e)=>{
    // console.log(e.target.value);
    if(e.target.value ==="Rating" && e.target.checked ){
      setRating(true)
    }
    else{
      setRating(false)
    }
  }
  //filter by promo
  const handlePromo = (e)=>{
    // console.log(e.target.checked);
    if(e.target.checked ){
      setPromo(true)
    }
    else{
      setPromo(false)
    }
  }



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

        {/* <Carousel show={offersCardsCarouselNumber} slide={2} transition={0.5}> */}
          {/* {itemsArr.map(item => { */}
            {/* return  */}
            <OffersCard />
          {/* })} */}
        {/* </Carousel> */}

      </section>

      <div class="container-fluid mt-4 ">
        <div class="row">
            <div class="col-lg-3">
                <OffersFilter handleType2={handleType2} handleRating={handleRating} handlePromo = {handlePromo} />
            </div>
            <div class="col-xl-9 col-lg-12">
              <section class="aTopDishes" id="TD">
                <TDishesCard handleType={handleType} />
              </section>
              <section class="aRestaurant mt-4">
                  <RestCard Type={Type} Rating={Rating} Promo={Promo} />
              </section>
            </div>
        </div>
      </div>

    </>
  );
};

export default Delivery;
