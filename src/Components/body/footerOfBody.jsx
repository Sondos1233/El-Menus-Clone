import check from '../../images/Home/check-mark-circle.svg'
export default function FooterOfBody() {
    return (
      <>
        <div class="order_online_footer mt-5">
           <div class="container">
             <h3 class="mt-5 mb-2">Looking for delivery </h3>
             <p class="mt-2">
               Look for restaurants that have this sign
               <span class="mx-3"><img src={check} class="me-1"/>Order online</span>

             </p>
             <a href="" class="btn btn-primary delivery-btn p-3">ORDER ONLINE NOW</a>
           </div>
         </div>
      </>
    );
  }