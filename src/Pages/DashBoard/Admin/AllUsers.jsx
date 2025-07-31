import React from 'react';
import SectionTitle from '../../../Components/SectionTitle';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import { RiDeleteBin2Fill } from 'react-icons/ri';
import Spinner from '../../../Components/Spinner';
import { FaUsers } from 'react-icons/fa';
import { Tooltip } from 'flowbite-react';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { FaUserShield } from 'react-icons/fa6';

const AllUsers = () => {
   const axiosSecure = useAxiosSecure();
   const queryClient = useQueryClient();

   const {
      data: users,
      isLoading,
      refetch,
   } = useQuery({
      queryFn: async () => {
         const { data } = await axiosSecure.get('users');
         return data;
      },
      queryKey: ['users'],
   });

   const { mutateAsync } = useMutation({
      mutationFn: async (id) => {
         const { data } = await axiosSecure.delete(`/users/${id}`);
         return data;
      },
      onSuccess: (result) => {
         console.log(result);
         if (result.deletedCount > 0) {
            toast.success('The user has been successfully removed.');
            queryClient.invalidateQueries({ queryKey: ['users'] });
         } else {
            toast.error('Something went wrong. Try again');
         }
      },
      onError: (error) => {
         toast.error('Something went wrong. Try again');
      },
   });

   const handleDeleteUser = async (user) => {
      console.log(user._id);
      Swal.fire({
         title: `Delete ${user?.userName || 'This User'}?`,
         text: 'Are you sure you want to permanently remove this user?',
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#D1A054',
         cancelButtonColor: '#B91C1C',
         confirmButtonText: 'Yes, delete user',
         cancelButtonText: 'Cancel',
         background: '#F3F3F3',
         color: '#1F2937',
      }).then(async (result) => {
         if (result.isConfirmed) {
            await mutateAsync(user._id);
         }
      });
   };

   const handleSetAdmin = async (user) => {
      console.log(user._id);

      Swal.fire({
         title: `Make ${user?.userName || 'this user'} an Admin?`,
         text: 'This user will gain admin privileges.',
         icon: 'question',
         showCancelButton: true,
         confirmButtonColor: '#1E40AF',
         cancelButtonColor: '#B91C1C',
         confirmButtonText: 'Yes, make admin',
         cancelButtonText: 'Cancel',
         background: '#F3F3F3',
         color: '#1F2937',
      }).then(async (result) => {
         if (result.isConfirmed) {
            try {
               const { data } = await axiosSecure.patch(
                  `users/admin/${user._id}`
               );
               console.log(data);

               if (data?.modifiedCount > 0) {
                  refetch();
                  Swal.fire({
                     icon: 'success',
                     title: `${user?.userName} is now an Admin!`,
                     showConfirmButton: false,
                     timer: 1500,
                     background: '#F3F3F3',
                     color: '#1F2937',
                  });
               } else {
                  Swal.fire({
                     icon: 'warning',
                     title: 'No Change Detected',
                     text: 'Something went wrong. Please try again.',
                     confirmButtonColor: '#B91C1C',
                     background: '#F3F3F3',
                     color: '#1F2937',
                  });
               }
            } catch (error) {
               console.log(error);
               Swal.fire({
                  icon: 'error',
                  title: 'Failed to make admin',
                  text: 'Something went wrong. Please try again.',
                  confirmButtonColor: '#B91C1C',
                  background: '#F3F3F3',
                  color: '#1F2937',
               });
            }
         }
      });
   };

   return (
      <section className="my-1.5 lg:my-11 ">
         <SectionTitle subHeading={'How many??'} heading={'MANAGE ALL USERS'} />

         <div className="max-w-5xl mx-auto px-3.5 lg:px-0">
            <p className="text-[#151515]  text-lg md:text-lg lg:text-2xl font-bold font-cinzel">
               Total Users:{' '}
               <span className="font-semibold">{users?.length || 0}</span>
            </p>

            {/* Table */}
            <div className="mt-3">
               <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                  <table className="table">
                     {/* head */}
                     <thead className="bg-[#D1A054] ">
                        <tr className="text-white uppercase ">
                           <th></th>
                           <th className="text-center font-medium">Name</th>
                           <th className="text-center font-medium">Email</th>
                           <th className="text-center font-medium">Role</th>
                           <th className="text-center font-medium">action</th>
                        </tr>
                     </thead>

                     <tbody>
                        {isLoading ? (
                           <tr>
                              <td colSpan={5} className="text-center py-6">
                                 <Spinner />
                              </td>
                           </tr>
                        ) : (
                           <>
                              {users.map((user, index) => (
                                 <tr key={user._id}>
                                    <th className=" text-[#151515] text-center text-sm lg:text-base">
                                       {index + 1}
                                    </th>
                                    <td className="text-[#737373] text-center text-sm lg:text-base">
                                       {user?.userName}
                                    </td>
                                    <td className="text-[#737373] text-center text-sm lg:text-base">
                                       {user?.userEmail}
                                    </td>

                                    <td className=" text-center">
                                       {user.role ? (
                                          <span className="badge bg-[#1E40AF] text-white ">
                                             <FaUserShield className="text-lg" />
                                             Admin
                                          </span>
                                       ) : (
                                          <button
                                             onClick={() =>
                                                handleSetAdmin(user)
                                             }
                                             className=" btn btn-square bg-[#D1A054] hover:bg-yellow-400"
                                          >
                                             <FaUsers className="inline-block text-white mx-auto text-2xl " />{' '}
                                          </button>
                                       )}
                                    </td>
                                    <td className="flex justify-between items-center">
                                       <button
                                          onClick={() => handleDeleteUser(user)}
                                          className="btn btn-square text-center bg-[#B91C1C] rounded-md text-white hover:bg-red-600 mx-auto"
                                       >
                                          <RiDeleteBin2Fill className="text-lg lg:text-xl" />
                                       </button>
                                    </td>
                                 </tr>
                              ))}
                           </>
                        )}

                        {/* row 1 */}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </section>
   );
};

export default AllUsers;
