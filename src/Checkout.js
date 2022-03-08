import React from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';

function Checkout() {
  
  const [{ basket }, dispatch] = useStateValue();


  return( 
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src="https://images.squarespace-cdn.com/content/v1/5d1c96cfbf0ff90001f3c55c/225af1f0-ce88-4a2d-9c44-0b6f8d352edc/Generic_Outvertising_header.jpeg" alt="">
          
        </img>

        <div>
        <h2 className="checkout_title"> Your Shopping Basket</h2>

        {basket.map(item => (
          <CheckoutProduct
          id= {item.id}
          title= {item.title}
          image= {item.image}
          price= {item.price}
          rating= {item.rating}
          
          />


        ))}

      </div>
        
      </div>


      <div className='checkout_right'>
        <Subtotal />
       
        
      </div>

      
    </div>

  )
}

export default Checkout