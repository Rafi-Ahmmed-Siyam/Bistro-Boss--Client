import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import { ImSpoonKnife } from 'react-icons/im';
import { CgDanger } from 'react-icons/cg';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import { uploadImage } from '../../../Utilities';
import toast from 'react-hot-toast';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const UpdateItem = () => {
   const { id } = useParams();
   const navigate = useNavigate();
   const loaderData = useLoaderData();
   const { category, image, name, price, recipe } = loaderData;
   const axiosPublic = useAxiosPublic();
   const axiosSecure = useAxiosSecure();

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const handleUpdate = async (updateData) => {
      // console.log(updateData);
      try {
         let imgUrl = image;
         // console.log('initial', imgUrl);
         if (updateData.image && updateData.image.length > 0) {
            const imgInfo = await uploadImage(updateData.image);
            imgUrl = imgInfo.url;
            // console.log('url var', imgUrl);
         }
         const updatedItem = {
            name: updateData.recipeName,
            recipe: updateData.details,
            image: imgUrl,
            category: updateData.category,
            price: parseFloat(updateData.price),
         };

         // console.log(updatedItem);
         const { data } = await axiosSecure.patch(`/menu/${id}`, updatedItem);
         // console.log(data);
         if (data.modifiedCount > 0) {
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: `Menu Updated Successfully!`,
               showConfirmButton: false,
               timer: 1500,
               background: '#fff', // alert box background
               color: '#000', // text color (black for readability)
               iconColor: '#C48C3A', // your sidebar golden-brown color
               customClass: {
                  popup: 'rounded-lg shadow-lg',
                  title: 'text-lg font-semibold',
               },
            });
            navigate('/dashboard/manageItems');
         }
      } catch {
         toast.error('Something wants wrong');
      }
   };

   return (
      <section className="my-1.5 lg:my-11 max-w-4xl mx-auto px-4 lg:px-0">
         <Helmet>
            <title>Bistro Boss | Update Item</title>
         </Helmet>
         <SectionTitle heading={'UPDATE ITEMS'} />

         <div className="  w-full bg-[#F3F3F3] border border-slate-200 p-1 md:p-4 lg:p-4">
            <div className="card-body">
               {/* Add item form */}
               <form onSubmit={handleSubmit(handleUpdate)} className="fieldset">
                  {/* Recipe name */}
                  <div className="flex-1/2 ">
                     <label className="label mb-3 font-semibold text-base text-[#444444]">
                        Recipe name*
                     </label>
                     <input
                        {...register('recipeName')}
                        defaultValue={name}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                        placeholder="Enter your phone number"
                     />
                  </div>
                  {/* Category  */}
                  <div className="flex flex-col md:flex-row lg:flex-row gap-5 mt-3.5">
                     <div className="flex-1/2">
                        <label className="label mb-3 font-semibold text-base text-[#444444]">
                           Category*
                        </label>

                        <select
                           {...register('category')}
                           defaultValue={category}
                           className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-4 "
                        >
                           <option value="" disabled>
                              Select a Category
                           </option>
                           <option value="salad">Salad</option>
                           <option value="pizza">Pizza</option>
                           <option value="soup">Soup</option>
                           <option value="dessert">Dessert</option>
                           <option value="drinks">Drinks</option>
                        </select>
                     </div>
                     <div className="flex-1/2">
                        <label className="label mb-3 font-semibold text-base text-[#444444]">
                           Price*
                        </label>
                        <input
                           {...register('price')}
                           defaultValue={price}
                           type="number"
                           step="any"
                           className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           placeholder="Price"
                        />
                     </div>
                  </div>
                  {/* Details */}
                  <div className="mt-3.5">
                     <label className="label mb-3 font-semibold text-base text-[#444444]">
                        Recipe Details*
                     </label>
                     <div>
                        <textarea
                           {...register('details')}
                           defaultValue={recipe}
                           className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           rows={10}
                           placeholder="Recipe Details"
                        ></textarea>
                     </div>
                  </div>
                  {/* File  */}
                  <div className="my-4">
                     <input
                        {...register('image')}
                        type="file"
                        className="file-input file-input-ghost bg-[#E8E8E8]"
                     />
                  </div>
                  <div className="flex justify-start items-center">
                     <button
                        // disabled={loading}
                        type="submit"
                        className="btn btn-neutral text-white  bg-gradient-to-r from-[#835D23] to-[#B58130] px-5"
                     >
                        {/* {loading ? (
                           <span className="loading loading-spinner text-white"></span>
                        ) : (
                           <>Update Item</>
                        )} */}
                        Update Item
                        <ImSpoonKnife className="text-white text-xl lg:text-xl" />
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default UpdateItem;
