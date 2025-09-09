import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle';
import { IoIosSend } from 'react-icons/io';
import { ImSpoonKnife } from 'react-icons/im';
import { set, useForm } from 'react-hook-form';
import { CgDanger } from 'react-icons/cg';
import useAxiosPublic from '../../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import Swal from 'sweetalert2';
import useMenu from '../../../Hooks/useMenu';

const image_hosting_KEY = import.meta.env.VITE_ImageBB_Hosting_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_KEY}`;
const AddItems = () => {
   const axiosPublic = useAxiosPublic();
   const axiosSecure = useAxiosSecure();
   const { refetch } = useMenu();
   const [loading, setLoading] = useState(false);
   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const onSubmit = async (fromData) => {
      setLoading(true);
      const imageFile = { image: fromData.image[0] };
      console.log(fromData);
      const { data } = await axiosPublic.post(image_hosting_API, imageFile, {
         headers: { 'Content-Type': 'multipart/form-data' },
      });

      console.log(data.data.url);
      if (data.success) {
         const menuItem = {
            name: fromData.recipeName,
            category: fromData.category,
            price: parseFloat(fromData.price),
            recipe: fromData.details,
            image: data.data.url,
         };
         console.log(menuItem);
         const { data: res } = await axiosSecure.post('/menu', menuItem);
         console.log(res);
         if (res.insertedId) {
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: `${fromData.recipeName} Added Successfully!`,
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
            refetch();
            setLoading(false);
            reset();
         }
      }
   };

   return (
      <section className="my-1.5 lg:my-11 max-w-4xl mx-auto px-4 lg:px-0">
         <Helmet>
            <title>Bistro Boss | Add Items</title>
         </Helmet>
         <SectionTitle subHeading={"What's new?"} heading={'ADD AN ITEM'} />

         <div className="  w-full bg-[#F3F3F3] border border-slate-200 p-1 md:p-4 lg:p-4">
            <div className="card-body">
               {/* Add item form */}
               <form onSubmit={handleSubmit(onSubmit)} className="fieldset">
                  {/* Recipe name */}
                  <div className="flex-1/2 ">
                     <label className="label mb-3 font-semibold text-base text-[#444444]">
                        Recipe name*
                     </label>
                     <input
                        {...register('recipeName', { required: true })}
                        type="text"
                        className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                        placeholder="Name"
                     />
                     {errors.recipeName?.type === 'required' && (
                        <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                           <CgDanger />
                           Recipe name is required
                        </span>
                     )}
                  </div>
                  {/* Category  */}
                  <div className="flex flex-col md:flex-row lg:flex-row gap-5 mt-3.5">
                     <div className="flex-1/2">
                        <label className="label mb-3 font-semibold text-base text-[#444444]">
                           Category*
                        </label>

                        <select
                           {...register('category', { required: true })}
                           defaultValue=""
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

                        {errors.category?.type === 'required' && (
                           <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                              <CgDanger />
                              Category is required
                           </span>
                        )}
                     </div>
                     <div className="flex-1/2">
                        <label className="label mb-3 font-semibold text-base text-[#444444]">
                           Price*
                        </label>
                        <input
                           {...register('price', { required: true })}
                           type="number"
                           step="any"
                           className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           placeholder="Price"
                        />
                        {errors.price?.type === 'required' && (
                           <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                              <CgDanger />
                              Price is required
                           </span>
                        )}
                     </div>
                  </div>
                  {/* Details */}
                  <div className="mt-3.5">
                     <label className="label mb-3 font-semibold text-base text-[#444444]">
                        Recipe Details*
                     </label>
                     <div>
                        <textarea
                           {...register('details', { required: true })}
                           className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           rows={10}
                           placeholder="Recipe Details"
                        ></textarea>
                        {errors.details?.type === 'required' && (
                           <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                              <CgDanger />
                              Details is required
                           </span>
                        )}
                     </div>
                  </div>
                  {/* File  */}
                  <div className="my-4">
                     <input
                        // defaultValue={}
                        {...register('image', { required: true })}
                        type="file"
                        className="file-input file-input-ghost bg-[#E8E8E8]"
                     />
                     {errors.details?.type === 'required' && (
                        <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                           <CgDanger />
                           Image is required
                        </span>
                     )}
                  </div>
                  <div className="flex justify-start items-center">
                     <button
                        disabled={loading}
                        type="submit"
                        className="btn btn-neutral text-white  bg-gradient-to-r from-[#835D23] to-[#B58130] px-5"
                     >
                        {loading ? (
                           <span className="loading loading-spinner text-white"></span>
                        ) : (
                           <>Add Item</>
                        )}

                        <ImSpoonKnife className="text-white text-xl lg:text-xl" />
                     </button>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default AddItems;
