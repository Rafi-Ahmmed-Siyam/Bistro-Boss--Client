import React from 'react';
import { FaFacebookF, FaInstagram, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
   return (
      <div>
         <section>
            {/* Main div */}
            <div className=' flex-none md:flex lg:flex  items-center'>
               {/* 1st div */}
               <div className='flex-1/2 min-h-60 md:min-h-80 lg:min-h-80 bg-gray-800 flex justify-center items-center'>
                  <div className='text-white text-center'>
                     <h1 className='mb-5 custom-heading'>CONTACT US</h1>
                     <p className='custom-paragraph'>123 ABS Street, Uni 21, Bangladesh</p>
                     <p className='custom-paragraph'>
                        +88 123456789
                     </p>
                     <p className='custom-paragraph'>Mon - Fri: 08:00 - 22:00
                     </p>
                     <p className='custom-paragraph'>Sat - Sun: 10:00 - 23:00</p>
                  </div>
               </div>
               {/* 2nd Div */}
               <div className='flex-1/2 min-h-60 md:min-h-80 lg:min-h-80 bg-gray-900 flex justify-center items-center'>
                  <div className='text-white text-center '>
                     <h1 className='custom-heading'>Follow US</h1>
                     <p className='text-base mt-3 custom-paragraph'>Join us on social media</p>
                     <div className='flex justify-center items-center gap-2.5 mt-5'>
                        <div><a href="#" target='_blank'><FaFacebookF className='text-2xl' /></a></div>
                        <div><a href="#" target='_blank'><FaInstagram className='text-2xl' /></a></div>
                        <div><a href="#" target='_blank'><FaXTwitter className='text-2xl' /></a></div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="footer sm:footer-horizontal footer-center bg-[#151515] text-white border-none p-4">
               <aside>
                  <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
               </aside>
            </div>
         </section>
      </div>
   );
};

export default Footer;