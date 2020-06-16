import React from 'react';
import { Slide } from 'react-slideshow-image';
 import '../carousel.css'
 import Food from '../image/food.jpg'
 import Photo1 from '../image/photo1.jpg'
 import Photo2 from '../image/photo2.jpg'
 import Photo3 from '../image/photo3.jpg'

const slideImages = [
  'image/Photo3.jpg',
  'image/Photo1.jpg',
  'image/Photo2.jpg',
];
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true,
 
  }
 
const Slideshow = () => {
    return (
      <div className="containerSlide">
        <Slide {...properties}>
          <div className="each-slide">
          <img  className= 'image-carousel'     src={Photo3}></img   >
            <div >
           
            </div>
          </div>
          <div className="each-slide">
          <img  className= 'image-carousel' src={Photo1}></img   >
            <div   >
            
            </div>
          </div>
          <div className="each-slide">

              <img   className= 'image-carousel' src={Photo2}></img   >
            <div >
          
            </div>
          </div>
        </Slide>
      </div>
    )
}
export default Slideshow 