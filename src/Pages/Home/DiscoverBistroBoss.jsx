import React from 'react';

import bgImg from '../../assets/home/chef-service.jpg'

const DiscoverBistroBoss = () => {
   return (
      <section className='mt-24 hidden md:hidden lg:block '>
         <div
            style={{
               backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%), url(${bgImg})`,
               backgroundSize: 'cover',
               backgroundPosition: 'center',
               backgroundRepeat: 'no-repeat',
            }}
            className=" h-[500px] max-w-7xl mx-auto bg-fixed"
         >
            <div className=' h-[500px]  flex items-center justify-center'>
               <div className='bg-white text-center py-20 px-16'>
                  <h2 className='font-cinzel font-semibold mb-2 text-2xl  text-black'>Bistro Boss</h2>
                  <p className='max-w-3xl mx-auto font-normal text-base'>At Bistro Boss, we believe that great food is more than just a meal — it's an experience. Our chefs combine passion, creativity, and the freshest ingredients to craft dishes that delight the senses. Whether you're here for a casual lunch or a special celebration.</p>
               </div>
            </div>

         </div>
      </section>
   );
};

export default DiscoverBistroBoss;