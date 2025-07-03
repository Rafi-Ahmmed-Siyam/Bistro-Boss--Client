import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import { MdPhoneInTalk } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { BsFillClockFill } from "react-icons/bs";

const Location = () => {
   return (
      <section className='mt-16 max-w-7xl mx-auto'>
         <SectionTitle subHeading={'Visit Us'} heading={'OUR LOCATION'} />

         <div className="max-w-7xl mx-auto px-0 md:px-0 lg:px-3.5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-6 ">
            {/* Card 1 */}
            <div className="border border-slate-100 h-56 col-span-5 md:col-span-1 lg:col-span-1 mx-auto">
               <div className="bg-[#D1A054] text-white text-2xl p-4 flex justify-center">
                  <MdPhoneInTalk />
               </div>
               <div className="bg-gray-100 text-center p-6 w-[350px] min-h-[132px] mx-auto">
                  <h3 className="text-lg font-medium mb-2 ">PHONE</h3>
                  <p className='text-[#444444]'>+38 (012) 34 56 789</p>
               </div>
            </div>

            {/* Card 2 */}
            <div className="border border-slate-100 h-56 col-span-5 md:col-span-1 lg:col-span-1 mx-auto">
               <div className="bg-[#D1A054] text-white text-2xl p-4 flex justify-center">
                  <ImLocation />
               </div>
               <div className="bg-gray-100 text-center p-6 w-[350px] min-h-[132px] mx-auto">
                  <h3 className="text-lg font-medium mb-2 ">ADDRESS</h3>
                  <p className='text-[#444444]'>+38 (012) 34 56 789</p>
               </div>
            </div>

            {/* Card 3 */}
            <div className="border border-slate-100 h-56 col-span-5 md:col-span-2 lg:col-span-1 mx-auto">
               <div className="bg-[#D1A054] text-white text-2xl p-4 flex justify-center">
                  <BsFillClockFill />
               </div>
               <div className="bg-gray-100 text-center p-6 w-[350px] min-h-[132px] mx-auto">
                  <h3 className="text-lg font-medium mb-2 ">WORKING HOURS</h3>
                  <p className='text-[#444444]'>Mon - Fri: 08:00 - 22:00</p>
                  <p className='text-[#444444]'>Mon - Fri: 08:00 - 22:00</p>

               </div>
            </div>
         </div>
      </section>
   );
};

export default Location;