import React from 'react';
import { IoIosSend } from 'react-icons/io';
import loginImg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png'
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookF, FaGithub, FaGoogle } from "react-icons/fa";
import SocialButtons from './SocialButtons';


const SignIn = () => {
   return (
      <div>
         <div className="  w-full  h-dvh flex justify-center items-center px-4 lg:px-0" style={{ backgroundImage: `url(${bgImg})`, }}>
            <div className='w-7xl  min-h-[700px] mx-auto px-8 md:px-12 lg:px-24 py-9 md:py-9 lg:py-9 border border-slate-200 shadow-2xl flex justify-around items-center gap-x-24 z-40 rounded-md' style={{ backgroundImage: `url(${bgImg})`, }}>
               {/* imgDiv */}
               <div className='hidden md:hidden lg:block'>
                  <img className='w-[600px]' src={loginImg} alt="" />
               </div>
               {/* Form div */}
               <div className=" w-full flex-1/2 ">
                  <h2 className='text-center font-extrabold text-2xl lg:text-3xl text-[#151515] mb-3'>Login</h2>
                  <div className="">
                     <form className="fieldset">
                        <div>
                           <label className="label text-base text-[#444444] font-semibold mb-2.5">Email</label>
                           <input type="text" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Enter your email" />
                        </div>
                        <div className='mt-2'>
                           <label className="label text-base text-[#444444] font-semibold mb-2.5">Password</label>
                           <input type="password" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Enter your password" />
                        </div>
                        <div className='mt-3.5'>
                           <input type="password" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="U A g l u o " />
                           <label className="label text-sm text-[#5D5FEF] font-semibold mt-2.5">Reload Captcha</label>
                        </div>
                        <div className='mt-1.5'>
                           <input type="password" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Type here" />
                        </div>

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn  bg-[#D1A054B3] text-white mt-4">Sign In</button>
                     </form>
                  </div>
                  <div className='mt-5'>
                     <p className='text-center text-[#D1A054B3] font-normal'>New hear <Link to={'/signup'} className='text-center text-[#D1A054B3] font-semibold'>Create your account</Link></p>
                     <SocialButtons />
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignIn;