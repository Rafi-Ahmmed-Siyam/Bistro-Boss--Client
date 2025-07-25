import React from 'react';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaPlus, FaMinus } from 'react-icons/fa';

import SectionTitle from '../../../Components/SectionTitle';
import useCart from '../../../Hooks/useCart';
import Spinner from '../../../Components/Spinner';
import useAuth from '../../../Hooks/useAuth';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const Cart = () => {
   const { cart, cartCount, isLoading } = useCart();

   const { user } = useAuth();
   const axiosSecure = useAxiosSecure();
   const queryClient = useQueryClient();
   const totalPrice = cart.reduce((initValue, item) => {
      return initValue + item.price * item.quantity;
   }, 0);

   const { mutateAsync } = useMutation({
      mutationFn: async (updateData) => {
         const { data } = await axiosSecure.patch('/carts/update', updateData);
         return data;
      },
      onSuccess: (result) => {
         queryClient.invalidateQueries({ queryKey: ['cartData'] });
         if (
            result.message ===
            'The item has been successfully deleted from your cart!'
         )
            toast.success(result.message);

         console.log(result.message);
      },
      onError: (err) => {
         console.log(err);
      },
   });

   const handleIncrease = async (id) => {
      const updateData = {
         itemId: id,
         email: user?.email,
         number: 1,
      };
      await mutateAsync(updateData);
   };

   const handleDecrease = async (id) => {
      const updateData = {
         itemId: id,
         email: user?.email,
         number: -1,
      };
      await mutateAsync(updateData);
   };

   const handleDeleteCart = async (id) => {
      const updateData = {
         itemId: id,
         email: user?.email,
         number: 0,
      };

      Swal.fire({
         title: 'Confirm Deletion',
         text: 'Do you really want to remove this item from your cart?',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#D1A054',
         cancelButtonColor: '#B91C1C',
         confirmButtonText: 'Yes, delete it!',
         background: '#F3F3F3',
         color: '#1F2937',
      }).then(async (result) => {
         if (result.isConfirmed) {
            await mutateAsync(updateData);
         }
      });
   };

   return (
      <section className="my-1.5 lg:my-11">
         <SectionTitle subHeading={'My Cart'} heading={'WANNA ADD MORE?'} />

         {/* Payment section */}
         <div className="sticky top-0 z-40 max-w-4xl mx-3 md:mx-5 lg:mx-auto bg-[#D1A054] rounded-t-xs rounded-b-md  shadow-inner font-cinzel">
            <div className=" px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-2">
               <p className="text-[#151515]  text-lg md:text-lg lg:text-xl font-semibold">
                  Total Order:{' '}
                  <span className="font-semibold">{cartCount}</span>
               </p>
               <p className="text-[#151515]  text-lg md:text-lg lg:text-xl font-semibold">
                  Total Price:{' '}
                  <span className="font-semibold">
                     ${totalPrice.toFixed(1)}
                  </span>
               </p>
               <button className="btn bg-[#D1A054] hover:bg-[#b98636] text-white">
                  Pay
               </button>
            </div>
         </div>

         {cart.length === 0 ? (
            <>
               <div className="text-center py-10 min-h-96 flex justify-center items-center">
                  <div>
                     <h2 className="text-2xl font-semibold text-gray-600">
                        Your cart is empty
                     </h2>
                     <p className="text-gray-500 mt-2">
                        Looks like you haven’t added anything yet.
                     </p>
                     <Link to="/menu">
                        <button className="btn bg-[#D1A054] mt-5">
                           Browse Menu
                        </button>
                     </Link>
                  </div>
               </div>
            </>
         ) : (
            <div className="max-w-4xl mx-3 md:mx-5 lg:mx-auto mt-3.5">
               <div className="space-y-4 ">
                  {isLoading ? (
                     <>
                        <Spinner />
                     </>
                  ) : (
                     cart.map((item) => (
                        <div
                           key={item._id}
                           className="bg-white border border-slate-50 flex flex-col md:flex-row lg:flex-row justify-between items-end md:items-center lg:items-center px-5 py-5 gap-4 rounded-md shadow "
                        >
                           <div className="flex items-center gap-4 w-full md:w-1/2 ">
                              <img
                                 src={
                                    item?.image ||
                                    'https://i.ibb.co/hRf6N6xr/aaq-IMG-4327fhor-6181e5de2fc54d5580765a30b278130f.jpg'
                                 }
                                 className="w-[125px] object-cover rounded"
                                 alt="Pizza"
                              />
                              <div className="text-gray-700 font-medium ">
                                 <h3 className="text-sm md:text-base font-semibold text-[#737373]">
                                    {item?.name || 'Item Name'}
                                 </h3>
                                 <p className="mt-1.5 text-[#737373]">
                                    ${item?.price || 0.0}
                                 </p>
                              </div>
                           </div>

                           <div className=" flex items-center justify-between gap-16 lg:gap-28">
                              <div className="flex items-center gap-2 ">
                                 <button
                                    onClick={() => handleDecrease(item._id)}
                                    disabled={item.quantity === 1}
                                    className="btn btn-xs   hover:bg-gray-300"
                                 >
                                    <FaMinus className="text-black" />
                                 </button>
                                 <span className="font-semibold text-[#151515]">
                                    {item?.quantity || 0}
                                 </span>
                                 <button
                                    onClick={() => handleIncrease(item._id)}
                                    className="btn btn-xs   hover:bg-gray-300"
                                 >
                                    <FaPlus className="text-black" />
                                 </button>
                              </div>
                              <button
                                 onClick={() => handleDeleteCart(item._id)}
                                 className="btn btn-square bg-[#B91C1C] rounded-md text-white hover:bg-red-600"
                              >
                                 <RiDeleteBin2Fill className="text-lg lg:text-xl" />
                              </button>
                           </div>
                        </div>
                     ))
                  )}
               </div>
            </div>
         )}
      </section>
   );
};

export default Cart;
