import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { FaQuoteLeft } from "react-icons/fa6";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
   const [reviews, setReviews] = useState([]);
   useEffect(() => {
      fetch('Reviews.json')
         .then(res => res.json())
         .then(result => {
            setReviews(result)
         })
   }, [])
   console.log(reviews)

   return (
      <section className='mt-16 lg:mt-28 max-w-7xl mx-auto'>
         <SectionTitle subHeading={"What Our Clients Say"} heading={"TESTIMONIALS"} />

         <div className='mb-24'>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper max-w-[1320px] mx-auto">
               {
                  reviews.map(review =>
                     <SwiperSlide key={review._id} >
                        <div className='my-9 space-y-5'>
                           <div className='flex justify-center items-center  '>
                              <Rating
                                 style={{ maxWidth: 200 }}
                                 value={review?.rating}
                                 readOnly
                              />
                           </div>
                           <div className='flex justify-center items-center '>
                              <FaQuoteLeft className='text-dark text-5xl lg:text-7xl' />
                           </div>
                           <p className='text-center max-w-5xl mx-auto px-2.5 text-para text-sm md:text-base lg:text-base'>{review?.details}</p>
                           <h2 className='text-center  font-medium text-2xl text-yellow-500 mt-2 uppercase'>{review?.name}</h2>
                        </div>
                     </SwiperSlide>)
               }
            </Swiper>
         </div>
      </section>
   );
};

export default Testimonials;