import React from 'react';

const ItemCard = ({ array }) => {

   return (
      <div>
         <div className="rounded overflow-hidden shadow-lg pb-6">
            <img
               className="w-full"
               src={array[2]}
               alt="Sunset in the mountains"
            />
            <div className="px-6 py-4">
               <h2 className=" text-center mb-2 font-semibold text-xl text-dark">Caeser Salad</h2>
               <p className="text-gray-700 text-base text-center">
                  Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
               </p>
            </div>
            <div className="flex justify-center items-center">
               <button className='btn uppercase border-b-3 rounded-b-lg hover:bg-[#1F2937] bg-[#E8E8E8] border-b-[#BB8506] text-[#BB8506]'>add to cart</button>
            </div>
         </div>
      </div>
   );
};

export default ItemCard;