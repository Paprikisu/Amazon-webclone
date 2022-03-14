import React, { forwardRef } from 'react';
import './Checkout.css';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal";
import CheckoutProduct from './CheckoutProduct';
import FlipMove from 'react-flip-move';
import { Flip } from '@mui/icons-material';


function Checkout() {
  
  const [{ basket, user }, dispatch] = useStateValue();

  
  const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1
  };
  


  return( 
    <div className='checkout'>
      <div className='checkout_left'>
        <img className='checkout_ad' src="https://images.squarespace-cdn.com/content/v1/5d1c96cfbf0ff90001f3c55c/225af1f0-ce88-4a2d-9c44-0b6f8d352edc/Generic_Outvertising_header.jpeg" alt="">
          
        </img>

        
              



        <div className='checkout_basket'>
          <h3>Hello, {user ? user.email.slice(0, user.email.indexOf('@')): "Guest"}</h3>


        

        
          
        
        <h2 className="checkout_title"> Your Shopping Basket</h2>


        <FlipMove enterAnimation={{
            from: ticketNotVisibleState,
            to: {}
          }}
          leaveAnimation={{
            from: {},
            to: ticketNotVisibleState
          }}>

      
        {basket?.map((item, index) => (
          <div key={index}>
            <CheckoutProduct
            id= {item.id}
            title= {item.title}
            image= {item.image}
            price= {item.price}
            rating= {item.rating}
    
    
            />
        </div>

        ))}

        </FlipMove> 
     


        
        
        

      </div>

   

     
      
  

      
      
        
      </div>


      <div className='checkout_right'>
        <Subtotal />
       
        
      </div>

      
    </div>

  )
}

export default Checkout