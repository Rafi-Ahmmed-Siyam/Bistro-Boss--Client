import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import 'swiper/css';

// import required modules
import { Pagination } from 'swiper/modules';

import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide2.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide4.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Category = () => {
   return (
      <section className='mt-12 lg:mt-20'>
         <SectionTitle subHeading={'From 11:00am to 10:00pm'} heading={'ORDER ONLINE'} />
         <div className='max-w-7xl mx-auto mb-2 hidden md:hidden lg:block'>
            <Swiper
               slidesPerView={1}
               spaceBetween={1}
               pagination={{ clickable: true }}
               breakpoints={{
                  '@0.00': {
                     slidesPerView: 1,
                     spaceBetween: 8,
                  },
                  '@0.75': {
                     slidesPerView: 2,
                     spaceBetween: 10,
                  },
                  '@1.00': {
                     slidesPerView: 3,
                     spaceBetween: 14,
                  },
                  '@1.50': {
                     slidesPerView: 4,
                     spaceBetween: 16,
                  },
               }}
               modules={[Pagination]}
               className="mySwiper"
            >
               <SwiperSlide className='relative'>
                  <img src={slide1} alt="slide image" />
                  <h2 className='font-cinzel text-xl text-shadow-sm uppercase text-center 
                   text-gray-50 font-medium absolute bottom-3 left-1/2 transform -translate-x-1/2'>Salads</h2>
               </SwiperSlide>
               <SwiperSlide className='relative'>
                  <img src={slide3} alt="slide image" />
                  <h2
                     className='font-cinzel text-xl text-shadow-sm uppercase text-center 
                   text-gray-50 font-medium absolute bottom-3 left-1/2 transform -translate-x-1/2'>
                     Soups</h2>
               </SwiperSlide>
               <SwiperSlide className='relative'>
                  <img src={slide2} alt="slide image" />
                  <h2 className='font-cinzel text-xl text-shadow-sm uppercase text-center 
                   text-gray-50 font-medium absolute bottom-3 left-1/2 transform -translate-x-1/2'>Pizzas</h2>
               </SwiperSlide>
               <SwiperSlide className='relative'>
                  <img src={slide4} alt="slide image" />
                  <h2 className='font-cinzel text-xl text-shadow-sm uppercase text-center 
                   text-gray-50 font-medium absolute bottom-3 left-1/2 transform -translate-x-1/2'>Desserts</h2>
               </SwiperSlide>
               <SwiperSlide className='relative'>
                  <img src={slide5} alt="slide image" />
                  <h2 className='font-cinzel text-xl text-shadow-sm uppercase text-center 
                   text-gray-50 font-medium absolute bottom-3 left-1/2 transform -translate-x-1/2'>Salads</h2>
               </SwiperSlide>

            </Swiper>
         </div>
      </section>
   );
};

export default Category;