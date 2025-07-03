import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = ({ foodItem }) => {
   const { name, recipe, image, category, price } = foodItem || {};
   return (
      <div className="rounded overflow-hidden border border-slate-200 pb-6 flex flex-col justify-between h-full bg-[#F3F3F3] relative">
         {/* Image */}
         <img
            className="w-full min-h-[200px] lg:min-h-[250px] "
            src={image || "https://i.ibb.co/ycWFjBZD/soup-bg.jpg"}
            referrerPolicy='no-referrer'
            alt={name || "Food photo"}
         />

         <p className='bg-[#111827] text-white text-center text-base font-medium py-2 px-3 absolute right-5 top-5'>${price || "Price"}</p>
         <div className='bg-[#F3F3F3]'>
            <div className="px-6 py-4 flex-grow">
               <h2 className="text-center mb-2 font-semibold text-xl text-dark">{name || 'Food Name'}</h2>
               <p className="text-gray-700 text-base text-center">{recipe || "Food Recipi"}</p>
            </div>


            <div className="flex justify-center items-center">
               <button className="btn uppercase border-b-3 rounded-b-lg hover:bg-[#1F2937] bg-[#E8E8E8] border-b-[#BB8506] text-[#BB8506]">
                  Add to cart
               </button>
            </div>
         </div>
      </div>
   );
};

export default ItemCard;