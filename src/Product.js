import React, { useState } from 'react';
import "./Product.css";
import { useStateValue } from './StateProvider';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


toast.configure()
function Product({ id, title, image, price, rating }) {

    const [{ basket }, dispatch] = useStateValue();


    // Console check for basket.
    // console.log('this is the basket >>>', basket)




    const addToBasket = () => {

        // dispatch the item into the data layer
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,


            },
        });

        toast(

            <div className='toast__container'>
                <div className='toast__imageContainer'>
                    <img className='toast__imageProduct' src={image} />

                </div>

                <div>
                    Added "<strong>{title}</strong>" to basket
                </div>

            </div>






        )


    };



    return (
        <div className='product'>

            <div className="product_info">
                <p>{title}</p>
                <p className='product_price'>
                    <small>€</small>
                    <strong>{price}</strong>
                    <p>
                        <div className='product_rating'>
                            {Array(rating)
                                .fill()
                                .map((_, i) => (
                                    <p>⭐</p>
                                ))}


                        </div>
                    </p>

                </p>
            </div>
            <img className='product_image' src={image} alt='' />


            <button onClick={addToBasket}>Add to Basket</button>

        </div>
    )
}

export default Product