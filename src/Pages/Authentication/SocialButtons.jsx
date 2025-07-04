import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';

const SocialButtons = () => {
   return (
      <div className='mt-5'>
         <p className='font-medium text-base text-center  text-[#444444]'>Or sign in with</p>
         <div className='flex justify-center items-center gap-8 mt-3'>
            <button className="btn btn-circle border-[#444444]"><FaFacebookF className='text-xl' /></button>
            <button className="btn btn-circle border-[#444444]"><FaGoogle className='text-xl' /></button>
            <button className="btn btn-circle border border-[#444444]"><FaGithub className='text-xl ' /></button>
         </div>
      </div>
   );
};

export default SocialButtons;