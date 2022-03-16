import React from 'react'
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import FlipMove from 'react-flip-move';
import { Link } from 'react-router-dom';

function Payment() {

  const ticketNotVisibleState = {
    transform: "translateX(-100%)",
    opacity: 0.1
  };


  const [{ basket, user }, dispatch] = useStateValue();



  return (
    <div className='payment'>
      <div className='payment_container'>

        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items 
          </Link>)
        </h1>
        {/*  Payment Section - Delivery Address    */}


        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Delivery Address</h3>

          </div>
          <div className='payment_address'>
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Joensuu, Finland</p>

          </div>


        </div>


        {/*  Payment Section - Review Items   */}
        <div className='payment_section'>
          <div className='payment_title'>
            <h3>Review Items and Delivery</h3>

          </div>



          <div className='payment_items'>

            <FlipMove maintainContainerHeight="true"
             enterAnimation={{
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

                    id={item.id}
                    title={item.title}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}


                  />
                </div>

              ))}

            </FlipMove>
          </div>

        </div>


        {/*  Payment Section - Payment Methiod    */}
        <div className='payment_section'>
          <div className='payment_title'>
                <h3>Payment Method</h3>
          </div>
          <div className='payment_details'>
                {/* Stripe Magic here!*/}
          </div>

        </div>

      </div>
    </div>
  )
}

export default Payment