import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle';
import useMenu from '../../../Hooks/useMenu';
import Spinner from '../../../Components/Spinner';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import { FaUsers } from 'react-icons/fa6';
import { FaRegEdit } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
   const { menu, isPending, refetch, isError } = useMenu();
   const axiosSecure = useAxiosSecure();

   const handleDeleteItem = (itemInfo) => {
      Swal.fire({
         title: `Delete ${itemInfo?.name || 'This Item'}?`,
         text: 'Are you sure you want to permanently remove this item?',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#D1A054',
         cancelButtonColor: '#B91C1C',
         confirmButtonText: 'Yes, delete item',
         cancelButtonText: 'Cancel',
         background: '#F3F3F3',
         color: '#1F2937',
      }).then(async (result) => {
         if (result.isConfirmed) {
            // await mutateAsync(user._id);
            // console.log(itemInfo._id);
            const { data } = await axiosSecure.delete(`/menu/${itemInfo._id}`);
            if (data.deletedCount > 0) {
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `${itemInfo?.name} Deleted Successfully!`,
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
            }
         }
      });
   };

   return (
      <section className="my-1.5 lg:my-11 ">
         <Helmet>
            <title>Bistro Boss | Manage Items</title>
         </Helmet>
         <SectionTitle subHeading={'Hurry Up!'} heading={'MANAGE ALL ITEMS'} />
         <div className="max-w-4xl mx-auto px-3.5 lg:px-0">
            <p className="text-[#151515]  text-lg md:text-lg lg:text-2xl font-bold font-cinzel">
               Total Menu:{' '}
               <span className="font-semibold">{menu?.length || 0}</span>
            </p>

            {/* Table */}
            <div className="mt-3">
               <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                  <table className="table">
                     {/* head */}
                     <thead className="bg-[#D1A054] ">
                        <tr className="text-white uppercase ">
                           <th></th>
                           <th className="text-center font-medium">
                              Item image
                           </th>
                           <th className="text-center font-medium">
                              Item Name
                           </th>
                           <th className="text-center font-medium">Price</th>
                           <th className="text-center font-medium">Action</th>
                           <th className="text-center font-medium">Action</th>
                        </tr>
                     </thead>

                     <tbody>
                        {isPending || isError ? (
                           <tr>
                              <td colSpan={6} className="text-center py-6">
                                 <Spinner />
                              </td>
                           </tr>
                        ) : (
                           <>
                              {menu.map((item, index) => (
                                 <tr key={item._id}>
                                    <th className=" text-[#151515] text-center text-sm ">
                                       {index + 1}
                                    </th>
                                    <td>
                                       <div className="flex justify-center gap-3">
                                          <div className="avatar">
                                             <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                   src={item?.image}
                                                   referrerPolicy="no-referrer"
                                                   alt="Avatar Tailwind CSS Component"
                                                />
                                             </div>
                                          </div>
                                       </div>
                                    </td>
                                    <td className="text-[#737373] text-center text-sm ">
                                       {item?.name}
                                    </td>
                                    <td className="text-[#737373] text-center text-sm ">
                                       ${item?.price}
                                    </td>
                                    <th className="text-center">
                                       <Link
                                          to={`/dashboard/updateItem/${item._id}`}
                                          // onClick={() => handleEditItem(item)}
                                          className="btn btn-square text-center bg-[#D1A054] rounded-md text-white hover:bg-[#b48b4c] mx-auto"
                                       >
                                          <FaRegEdit className="text-lg lg:text-xl" />
                                       </Link>
                                    </th>
                                    <th className="flex justify-between items-center">
                                       <button
                                          onClick={() => handleDeleteItem(item)}
                                          className="btn btn-square text-center bg-[#B91C1C] rounded-md text-white hover:bg-red-600 mx-auto"
                                       >
                                          <RiDeleteBin2Fill className="text-lg lg:text-xl" />
                                       </button>
                                    </th>
                                 </tr>
                              ))}
                           </>
                        )}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ManageItems;
