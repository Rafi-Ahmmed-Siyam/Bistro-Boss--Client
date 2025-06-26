import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import img1 from '../../assets/home/01.jpg'
import img2 from '../../assets/home/02.jpg'
import img3 from '../../assets/home/03.png'
import img4 from '../../assets/home/04.jpg'
import img5 from '../../assets/home/05.png'
import img6 from '../../assets/home/06.png'

const Banner = () => {
   return (
      <div>
         <Carousel
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showArrows={true}
            swipeable={true}


         >
            <div>
               <img className='max-h-[350px] md:max-h-[730px] lg:max-h-[700px]' src={img1} alt="Slide 1" />
            </div>
            <div>
               <img className='max-h-[350px] md:max-h-[730px] lg:max-h-[700px]' src={img2} alt="Slide 1" />
            </div>
            <div>
               <img className='max-h-[350px] md:max-h-[730px] lg:max-h-[700px]' src={img3} alt="Slide 1" />
            </div>
            <div>
               <img className='max-h-[350px] md:max-h-[730px] lg:max-h-[700px]' src={img4} alt="Slide 1" />
            </div>
            <div>
               <img className='max-h-[350px] md:max-h-[730px] lg:max-h-[700px]' src={img5} alt="Slide 1" />
            </div>
            <div>
               <img className='max-h-[350px] md:max-h-[730px] lg:max-h-[700px]' src={img6} alt="Slide 1" />
            </div>

         </Carousel>
      </div>
   );
};

export default Banner;