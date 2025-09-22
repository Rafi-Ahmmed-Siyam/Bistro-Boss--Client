import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../Components/SectionTitle';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';
import useAuth from '../../../Hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
import Spinner from '../../../Components/Spinner';

const PaymentHistory = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();

   const {
      data: paymentData = [],
      isPending,
      isError,
      refetch,
   } = useQuery({
      queryKey: ['paymentHistory', user?.email],
      enabled: !!user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure.get(`/payments/${user.email}`);
         return data;
      },
   });

   // console.log(paymentData);

   return (
      <section className="my-1.5 lg:my-11 ">
         <Helmet>
            <title>Bistro Boss | Payment History</title>
         </Helmet>
         <SectionTitle
            subHeading={'At a Glance!'}
            heading={'PAYMENT HISTORY'}
         />

         <div className="max-w-5xl mx-auto px-3.5 lg:px-0">
            <p className="text-[#151515]  text-lg md:text-lg lg:text-2xl font-bold font-cinzel">
               Total Payments :{' '}
               <span className="font-semibold">{paymentData.length || 0}</span>
            </p>

            {/* Table */}
            <div className="mt-3">
               <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
                  <table className="table">
                     {/* head */}
                     <thead className="bg-[#D1A054] ">
                        <tr className="text-white uppercase ">
                           <th className="text-center font-medium"></th>
                           <th className="text-center font-medium">Email</th>
                           <th className="text-center font-medium">
                              Transaction Id
                           </th>
                           <th className="text-center font-medium">Category</th>
                           <th className="text-center font-medium">
                              Total Price
                           </th>
                           <th className="text-center font-medium">
                              Payment Date
                           </th>
                           {/* <th className="text-center font-medium">Action</th>
                           <th className="text-center font-medium">Action</th> */}
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
                              {paymentData.map((item, index) => (
                                 <tr className="py-28" key={item._id}>
                                    <th className="text-[#737373] text-center text-sm ">
                                       {index + 1}
                                    </th>
                                    <td className="text-[#737373] text-center text-sm ">
                                       {item.email}
                                    </td>
                                    <td className="text-[#737373] text-center text-sm ">
                                       {item.transactionId}
                                    </td>
                                    <td className="text-[#737373] text-center text-sm ">
                                       Food Order
                                    </td>
                                    <td className="text-[#737373] text-center text-sm ">
                                       ${item.price}
                                    </td>
                                    <td className="text-[#737373] text-center text-sm ">
                                       {new Date(item.data).toLocaleString()}
                                    </td>
                                    {/* <td>Blue</td> */}
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

export default PaymentHistory;
