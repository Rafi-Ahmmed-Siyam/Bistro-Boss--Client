import React from 'react';
import { BsShop } from 'react-icons/bs';
import { FaCartShopping, FaShop, FaStar } from 'react-icons/fa6';
import { IoWallet, IoWalletSharp } from 'react-icons/io5';
import { PiPhoneCallFill } from 'react-icons/pi';
import useAuth from '../../../Hooks/useAuth';
import { FaCalendarAlt } from 'react-icons/fa';

const UserHome = () => {
   const { user } = useAuth();
   return (
      <section className="px-8 py-10">
         <h1 className="text-3xl font-bold font-cinzel text-[#151515]">
            Hi, Welcome Back!
         </h1>

         {/* Status card */}
         <div className="mt-7 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 lg:gap-7 justify-center items-center ">
            {/* Card */}
            <div className="card bg-[#C44BF7] text-neutral-content  ">
               <div className="card-body items-center text-center">
                  <div className="flex justify-center items-center gap-4">
                     <div>
                        <IoWalletSharp className="text-5xl" />
                     </div>
                     <div>
                        <p className="text-2xl font-bold">250</p>
                        <p className="text-base">Menu</p>
                     </div>
                  </div>
               </div>
            </div>
            {/* Card */}
            <div className="card bg-[#E1BA7A] text-neutral-content  ">
               <div className="card-body items-center text-center">
                  <div className="flex justify-center items-center gap-4">
                     <div>
                        <FaShop className="text-5xl" />
                     </div>
                     <div>
                        <p className="text-2xl font-bold">250</p>
                        <p className="text-base">Shop</p>
                     </div>
                  </div>
               </div>
            </div>
            {/* Card */}
            <div className="card bg-[#FF6194] text-neutral-content  ">
               <div className="card-body items-center text-center">
                  <div className="flex justify-center items-center gap-4">
                     <div>
                        <PiPhoneCallFill className="text-5xl" />
                     </div>
                     <div>
                        <p className="text-2xl font-bold">250</p>
                        <p className="text-base">Contact</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Activity section */}
         <div className="mt-8 ">
            <div className="flex justify-center items-center flex-col md:flex-row">
               <div className="flex-1/2 w-full flex justify-center items-center  bg-[#FFEDD5] h-[500px] py-8 md:py-0">
                  <div>
                     <div className="">
                        <img
                           className="rounded-full max-w-56 border-2 bg-white border-[#D1A054]"
                           src={
                              user.photoURL ||
                              'https://i.ibb.co.com/0R2DNb1P/user-1.png'
                           }
                           alt="user Photo"
                        />
                     </div>
                     <h2 className="text-center uppercase text-2xl mt-6 font-bold font-cinzel text-[#151515]">
                        {user.displayName || 'Your Name'}
                     </h2>
                  </div>
               </div>
               {/* Activity */}
               <div className="flex-1/2 w-full flex justify-center items-center bg-[#FEF9C3] h-[500px] py-8 md:py-0">
                  <div>
                     <h2 className="text-start uppercase text-2xl mt-6 font-bold font-cinzel text-[#151515]">
                        Your Activity
                     </h2>
                     {/* Activities */}
                     <div className="text-blue-500 font-cinzel flex items-center gap-1 mt-5">
                        <FaCartShopping className=" text-xl" />{' '}
                        <span className="font-semibold">Orders: 6</span>
                     </div>
                     <div className="text-green-400 font-cinzel flex items-center gap-1 mt-2">
                        <FaStar className=" text-xl" />{' '}
                        <span className="font-semibold">Reviews: 6</span>
                     </div>
                     <div className="text-yellow-300 font-cinzel flex items-center gap-1 mt-2">
                        <FaCalendarAlt className=" text-xl" />{' '}
                        <span className="font-semibold">Boo0kings: 6</span>
                     </div>
                     <div className="text-orange-500 font-cinzel flex items-center gap-1 mt-2">
                        <IoWallet className=" text-xl" />{' '}
                        <span className="font-semibold">Payments: 6</span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default UserHome;
