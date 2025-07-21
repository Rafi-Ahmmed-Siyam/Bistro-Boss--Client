import { Helmet } from 'react-helmet-async';
import bgImg from '../../assets/others/authentication.png';
import signupimg from '../../assets/others/authentication2.png';
import SocialButtons from './SocialButtons';
import { HiMiniEye, HiMiniEyeSlash } from 'react-icons/hi2';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CgDanger } from 'react-icons/cg';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const SignUp = () => {
   const { createUser, updateUserData } = useAuth();
   const navigate = useNavigate();
   const [showPass, setShowPass] = useState(false);
   const location = useLocation();

   const from = location.state?.from?.pathname || '/';

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const onSubmit = (data) => {
      const { userName, userEmail, photoURL, password } = data;

      createUser(userEmail, password)
         .then((result) => {
            return updateUserData(userName, photoURL);
         })
         .then(() => {
            reset();
            navigate(from, { replace: true });
            toast.success('Account created successfully! Welcome aboard 🎉');
         })
         .catch((error) => {
            console.log(error);
            toast.error(error?.message || 'Something went wrong!');
         });
   };

   return (
      <section>
         <Helmet>
            <title>Bistro Boss | Sign up</title>
         </Helmet>
         <div
            className="w-full h-dvh flex justify-center items-center px-4 lg:px-0"
            style={{ backgroundImage: `url(${bgImg})` }}
         >
            <div
               className="w-7xl min-h-[700px] mx-auto px-8 md:px-12 lg:px-24 py-9 border border-slate-200 shadow-2xl flex justify-around items-center gap-x-24 z-40 rounded-md bg-cover"
               style={{ backgroundImage: `url(${bgImg})` }}
            >
               {/* Left Form */}
               <div className="w-full lg:w-1/2">
                  <h2 className="text-center font-extrabold text-2xl lg:text-3xl text-[#151515] mb-3">
                     Sign Up
                  </h2>
                  {/* Sign up Form */}
                  <form onSubmit={handleSubmit(onSubmit)}>
                     {/* user name */}
                     <div>
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">
                           Name
                        </label>
                        <input
                           {...register('userName', { required: true })}
                           name="userName"
                           type="text"
                           className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           placeholder="Enter your name"
                        />
                        {errors.userName?.type === 'required' && (
                           <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                              <CgDanger />
                              Name is required
                           </span>
                        )}
                     </div>
                     {/* user Email */}
                     <div className="mt-2.5">
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">
                           Email
                        </label>
                        <input
                           {...register('userEmail', { required: true })}
                           name="userEmail"
                           type="email"
                           className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           placeholder="Enter your email"
                        />
                        {errors.userEmail?.type === 'required' && (
                           <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                              <CgDanger />
                              Email is required
                           </span>
                        )}
                     </div>
                     {/* photo url */}
                     <div className="mt-2.5">
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">
                           Photo URL
                        </label>
                        <input
                           {...register('photoURL')}
                           name="photoURL"
                           type="url"
                           className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           placeholder="Enter your Photo URL"
                        />
                     </div>

                     {/* Password */}
                     <div className="mt-2 relative">
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">
                           Password
                        </label>
                        <div className="relative">
                           <input
                              {...register('password', {
                                 required: true,
                                 minLength: 6,
                                 maxLength: 20,
                                 pattern:
                                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/,
                              })}
                              name="password"
                              type={showPass ? 'text' : 'password'}
                              className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5 pr-10"
                              placeholder="Create a Password"
                           />
                           <button
                              onClick={() => setShowPass(!showPass)}
                              type="button"
                              className="absolute right-3.5 top-1/2 -translate-y-1/2 cursor-pointer"
                           >
                              {showPass ? (
                                 <HiMiniEyeSlash className="text-xl" />
                              ) : (
                                 <HiMiniEye className="text-xl"></HiMiniEye>
                              )}
                           </button>
                        </div>

                        {errors.password?.type === 'minLength' && (
                           <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                              <CgDanger />
                              Password must be 6 characters
                           </span>
                        )}
                        {errors.password?.type === 'maxLength' && (
                           <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                              <CgDanger />
                              Password must be less than 20 characters
                           </span>
                        )}
                        {errors.password?.type === 'pattern' && (
                           <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                              <CgDanger />
                              Password must contain at least one uppercase
                              letter, one lowercase letter, one number, and one
                              special character.
                           </span>
                        )}
                        {errors.password?.type === 'required' && (
                           <span className="text-sm font-medium text-red-500 flex items-center gap-0.5 mt-1">
                              <CgDanger />
                              Password is required
                           </span>
                        )}
                     </div>

                     <button
                        type="submit"
                        className="btn mt-5 w-full text-white
                  bg-[#D1A054] hover:bg-[#d39d4c] cursor-pointer"
                     >
                        Sign Up
                     </button>
                  </form>
                  <div className="mt-5">
                     <p className="text-center text-[#D1A054] font-normal">
                        Already registered?{' '}
                        <Link to="/signin" className="font-semibold">
                           Go to log in
                        </Link>
                     </p>
                     <SocialButtons />
                  </div>
               </div>
               {/* Right Image */}
               <div className="hidden lg:block">
                  <img
                     className="w-[600px]"
                     src={signupimg}
                     alt="Login Illustration"
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default SignUp;
