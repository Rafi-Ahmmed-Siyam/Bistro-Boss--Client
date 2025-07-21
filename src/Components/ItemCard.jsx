import React from 'react';
import {
   Link,
   Navigate,
   replace,
   useLocation,
   useNavigate,
} from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import Swal from 'sweetalert2';
import { axiosInstance } from '../Hooks/useAxiosSecure';
import toast from 'react-hot-toast';

const ItemCard = ({ foodItem }) => {
   const navigate = useNavigate();
   const location = useLocation();
   const { name, recipe, image, category, price, _id } = foodItem || {};
   const { user } = useAuth();

   const handleCart = async (food) => {
      if (user) {
         const cartItem = {
            menuId: _id,
            email: user?.email,
            name,
            image,
            price,
            quantity: 1,
         };

         try {
            const { data, status } = await axiosInstance.post(
               '/carts',
               cartItem
            );
            console.log(data, status);
            if (status === 200)
               return toast.success(`${name} quantity updated in your cart!`);
            toast.success(`${name} added to cart successfully!`);
         } catch (err) {
            toast.error('❌ Failed to add to cart. Please try again.');
            console.log(err);
         }
      } else {
         Swal.fire({
            title: 'Please Login First!',
            text: 'You need to login before adding to cart.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#D99904',
            cancelButtonColor: '#151515',
            confirmButtonText: 'Login Now',
            cancelButtonText: 'Cancel',
            background: '#fff',
            color: '#151515',
            iconColor: '#D99904',
         }).then((result) => {
            if (result.isConfirmed) {
               navigate('/signin', {
                  state: {
                     from: {
                        pathname:
                           location?.pathname === '/order'
                              ? `/order/${category}`
                              : location?.pathname,
                     },
                  },
                  replace: true,
               });
            }
         });
      }
   };
   return (
      <div className="rounded overflow-hidden border border-slate-200 pb-6 flex flex-col justify-between h-full bg-[#F3F3F3] relative">
         {/* Image */}
         <img
            className="w-full min-h-[200px] lg:min-h-[250px] "
            src={image || 'https://i.ibb.co/ycWFjBZD/soup-bg.jpg'}
            referrerPolicy="no-referrer"
            alt={name || 'Food photo'}
         />

         <p className="bg-[#111827] text-white text-center text-base font-medium py-2 px-3 absolute right-5 top-5">
            ${price || 'Price'}
         </p>
         <div className="bg-[#F3F3F3]">
            <div className="px-6 py-4 flex-grow">
               <h2 className="text-center mb-2 font-semibold text-xl text-dark">
                  {name || 'Food Name'}
               </h2>
               <p className="text-gray-700 text-base text-center">
                  {recipe || 'Food Recipe'}
               </p>
            </div>

            <div className="flex justify-center items-center">
               <button
                  onClick={() => handleCart(foodItem)}
                  className="btn uppercase border-b-3 rounded-b-lg hover:bg-[#1F2937] bg-[#E8E8E8] border-b-[#BB8506] text-[#BB8506]"
               >
                  Add to cart
               </button>
            </div>
         </div>
      </div>
   );
};

export default ItemCard;
