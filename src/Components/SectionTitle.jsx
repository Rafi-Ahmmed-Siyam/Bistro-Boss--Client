import React from 'react';

const SectionTitle = ({ subHeading, heading }) => {
   return (
      <div>

         <p className='text-center text-yellow-500 italic text-base md:text-lg lg:text-lg font-medium'>---{subHeading}---</p>
         <hr className='border-2 text-[#E8E8E8] w-[320px] md:w-[424px] lg:w-[424px] mx-auto mt-4' />
         <h2 className='text-xl md:text-2xl lg:text-3xl mt-5 uppercase text-center font-normal text-gray-900'>{heading}</h2>
         <hr className='border-2 text-[#E8E8E8] w-[335px] md:w-[424px] lg:w-[424px] mx-auto mt-4 mb-11' />

      </div>
   );
};

export default SectionTitle;