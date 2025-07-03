import React from 'react';

const MenuCard = ({ item }) => {
   const { name, recipe, image, price } = item;
   return (
      <div>
         <div className='flex gap-x-5 items-start'>
            {/* img Div */}
            <div className=''>
               <img className='border-2 border-[#E8E8E8] rounded-bl-full rounded-tl-none rounded-tr-full rounded-br-full w-[118px]' src={image} alt={name} />
            </div>
            {/* Text div */}
            <div className=''>
               <h2 className='font-cinzel text-lg md:text-xl lg:text-xl font-medium text-dark flex '>{name} <span className='hidden md:block lg:block'>------------</span></h2>
               <p className='w-auto md:max-w-[443px] lg:max-w-[443px] text-para mt-1 lg:mt-2 text-sm lg:text-base'>{recipe}</p>
            </div>
            {/* Price div */}
            <div className=''>
               <p className='text-yellow-500'>${price}</p>
            </div>
         </div>
      </div>
   );
};

export default MenuCard;