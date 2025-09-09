import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { IoIosSend } from 'react-icons/io';
import { Helmet } from 'react-helmet-async';

const ContactForm = () => {
   return (
      <section className="mt-20 lg:mt-28 max-w-7xl mx-auto">
         <SectionTitle
            subHeading={'Send Us a Message'}
            heading={'CONTACT FORM'}
         />

         <div className=" px-3.5 md:px-0 lg:px-0">
            <div className="  w-full bg-[#F3F3F3] p-2 md:p-6 lg:p-10">
               <div className="card-body">
                  <form className="fieldset">
                     <div className="flex flex-col md:flex-row lg:flex-row gap-5">
                        <div className="flex-1/2">
                           <label className="label mb-3 font-semibold text-base text-[#444444]">
                              Name*
                           </label>
                           <input
                              type="text"
                              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                              placeholder="Enter your phone number"
                           />
                        </div>
                        <div className="flex-1/2">
                           <label className="label mb-3 font-semibold text-base text-[#444444]">
                              Email*
                           </label>
                           <input
                              type="email"
                              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                              placeholder="Enter your phone number"
                           />
                        </div>
                     </div>
                     <div className="flex-1/2 mt-4">
                        <label className="label mb-3 font-semibold text-base text-[#444444]">
                           Phone*
                        </label>
                        <input
                           type="number"
                           className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           placeholder="Enter your phone number"
                        />
                     </div>
                     <div className="mt-4">
                        <label className="label mb-3 font-semibold text-base text-[#444444]">
                           Message*
                        </label>
                        <div>
                           <textarea
                              className="bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                              rows={10}
                              placeholder="Write your message here"
                           ></textarea>
                        </div>
                     </div>
                     <div className="flex justify-center items-center mt-8">
                        <button className="btn btn-neutral  bg-gradient-to-r from-[#835D23] to-[#B58130]">
                           Send Message
                           <IoIosSend className="text-2xl" />
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ContactForm;
