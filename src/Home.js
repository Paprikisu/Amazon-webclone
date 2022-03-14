import React from 'react'
import { Bounce, Slide, ToastContainer } from 'react-toastify'
import "./Home.css"
import logo from './Images/banner.png'
import Product from './Product'




function Home() {


  return (
    <div className="home">
        <div className="home_container">
          <div className='home_toastContainer'>
            <ToastContainer
            closeButton={false}
            position="top-right"
            transition={Slide}
            autoClose={4000}
            hideProgressBar
            closeOnClick
            rtl={false}
            pauseOnFocusLoss={false}
            draggable={false}
            pauseOnHover={false} />
            
          </div>
            <img className="home_image" src={logo} alt=""/>

            <div className="home_row">
              <Product
              id="9128512"
              title ="Learn enough JavaScript to be dangerous | Complete JavaScript tutorial for dummies "
              price={39.99} 
              image='https://softcover.s3.amazonaws.com/636/learn_enough_javascript/images/cover-web.png'
              rating={5}
              />
              <Product
              id="1241236"
              title ="Kunnon Moccamaster - Silver brew edition  | Beautiful coffee "
              price={59.99} 
              image='https://www.gigantti.fi/primaryimage/H741AOMS'
              rating={4}
              />
              <Product
              id="1986182"
              title ="Yamahoto Driver Professionals | Electric Motorbike  "
              price={1449.99} 
              image='https://www.autocar.co.uk/sites/autocar.co.uk/files/styles/gallery_slide/public/images/car-reviews/first-drives/legacy/2._zero_srs.jpg?itok=Q7rBecGL'
              rating={5}
              />
               
            </div>
            <div className="home_row">
              <Product
              id="00125812"
              title ="Pikachu Costume | Be your childhood hero!"
              price={34.99} 
              image='https://www.punanaamio.fi/media/catalog/product/cache/6410a3e8e8efd24c57d7a3cb725c434e/7/0/700246-pikachu-naamiaisasu.jpg'
              rating={3}
              />
              <Product
              id="5443129"
              title ="Flower Beauty | Wall Art"
              price={54.99} 
              image='https://ae01.alicdn.com/kf/HTB1U.8ZaEvrK1RjSspcq6zzSXXaG/Beautiful-Girl-Flower-Canvas-Painting-Wall-Art-Posters-Print-Pictures-For-Bedroom-Home-Decoration-No-Frame.jpg_Q90.jpg_.webp'
              rating={4}
              />
              <Product
              id="1209871"
              title ="Epic Gaming PC | ITX 6000 - Rizen 9010 - Multicache Technology"
              price={3699.99} 
              image='https://cdn.originpc.com/img/compare-all/gaming-desktops/genesis-7000-series-system-image.png'
              rating={5}
              />
              <Product
              id="4918271"
              title ="Sony HF419A5 Camera - Ultrazoom aspect"
              price={24.99} 
              image='https://cf-images.dustin.eu/cdn-cgi/image/format=auto,quality=75,width=640/image/d200001002187533/sony-a7-iii-ilce-7m3k-fe-28-70-f35-56-oss.jpg'
              rating={5}
              />
             
              
              
              
              
            </div>
            <div className="home_row">
              <Product
              id="5881792"
              title ="Maija Poppanainen | Classic 6-string Guitar"
              price={93.99} 
              image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMZwnK7z8bfk46Ej1-hpKKkDcDSsEixYlnUA&usqp=CAU'
              rating={3}
              />
              <Product
              id="5910271"
              title ="Cat tree | Ambidextrous feline housing unit"
              price={58.39} 
              image='https://i5.walmartimages.com/asr/d059a1b1-3b6a-4961-a398-41e5bddd3685.836d32d0fef576d6303cf190a942b52c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff'
              rating={2}
              />
              
              
              
            </div>

            <div className="home_row">
            <Product
              id="5910271"
              title ="Cat tree | Ambidextrous feline housing unit"
              price={58.39} 
              image='https://i5.walmartimages.com/asr/d059a1b1-3b6a-4961-a398-41e5bddd3685.836d32d0fef576d6303cf190a942b52c.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff'
              rating={2}
              />
              
            </div>
            
            
            


        </div>
    </div>
  )
}

export default Home