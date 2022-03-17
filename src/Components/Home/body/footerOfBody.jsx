import check from '../../../images/Home/check-mark-circle.svg'
import { Link } from 'react-router-dom';
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
             <Link to="/Delivery" class="btn btn-primary  p-3">ORDER ONLINE NOW</Link>
           </div>
         </div>
      </>
    );
  }