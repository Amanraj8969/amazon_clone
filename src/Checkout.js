import React from 'react'
import "./Checkout.css";
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
// import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  const [{basket,user},dispatch]=useStateValue();
  return (
    <div className='checkout'>
      <div className='checkout_left'>
        <img src='https:images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' className='checkout_ad'/>
        <div>
           <h3>Hello,{user?.email}</h3>
            <h2 className='checkout_title'>
                Your Shopping Basket</h2>

               {basket.map(item=>(
                <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                
                
                
                />
               ))}

                {/* checkout product */}
                 {/* checkout product */}
                  {/* checkout product */}
                   {/* checkout product */}
                    {/* checkout product */}
                 
            
        </div>
      </div>
      {/* right checkout page */}
      <div className='checkout_right'>
      <Subtotal/>

      </div>
    </div>
  )
}

export default Checkout;