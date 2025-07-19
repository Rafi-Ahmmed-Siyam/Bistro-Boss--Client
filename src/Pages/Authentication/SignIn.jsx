import loginImg from '../../assets/others/authentication2.png';
import bgImg from '../../assets/others/authentication.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialButtons from './SocialButtons';
import {
   loadCaptchaEnginge,
   LoadCanvasTemplate,
   validateCaptcha,
} from 'react-simple-captcha';
import { useEffect, useRef, useState } from 'react';
import { FaCheck, FaRegEye } from 'react-icons/fa';
import { HiMiniEye, HiMiniEyeSlash } from 'react-icons/hi2';
import { Helmet } from 'react-helmet-async';
import useAuth from '../../Hooks/useAuth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const SignIn = () => {
   const { signIn } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();

   const from = location.state?.from?.pathname || '/';

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm();

   const [signInDisable, setSignInDisable] = useState(true);
   const [showPass, setShowPass] = useState(false);
   const capchaRef = useRef();

   const handleSignin = (data) => {
      const { userEmail, password } = data;
      signIn(userEmail, password)
         .then(() => {
            reset();
            navigate(from, { replace: true });
            toast.success('Sign in successful!');
         })
         .catch((error) => {
            console.log(error);
            toast.error(error?.message || 'Something went wrong!');
         });
   };

   const handleValidateCapchaValue = () => {
      const capchaValue = capchaRef.current.value;
      if (validateCaptcha(capchaValue)) {
         setSignInDisable(false);
      } else {
         setSignInDisable(true);
      }
   };

   useEffect(() => {
      loadCaptchaEnginge(6);
   }, []);

   return (
      <section>
         <Helmet>
            <title>Bistro Boss | Sign in</title>
         </Helmet>
         <div
            className="w-full h-dvh flex justify-center items-center px-4 lg:px-0"
            style={{ backgroundImage: `url(${bgImg})` }}
         >
            <div
               className="w-7xl min-h-[700px] mx-auto px-8 md:px-12 lg:px-24 py-9 border border-slate-200 shadow-2xl flex justify-around items-center gap-x-24 z-40 rounded-md bg-cover"
               style={{ backgroundImage: `url(${bgImg})` }}
            >
               {/* Left Image */}
               <div className="hidden lg:block">
                  <img
                     className="w-[600px]"
                     src={loginImg}
                     alt="Login Illustration"
                  />
               </div>

               {/* Right Form */}
               <div className="w-full lg:w-1/2">
                  <h2 className="text-center font-extrabold text-2xl lg:text-3xl text-[#151515] mb-3">
                     Login
                  </h2>
                  <form onSubmit={handleSubmit(handleSignin)}>
                     <div>
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">
                           Email
                        </label>
                        <input
                           {...register('userEmail')}
                           name="userEmail"
                           type="email"
                           className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           placeholder="Enter your email"
                           required
                        />
                     </div>
                     {/* Password */}
                     <div className="mt-2 relative">
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">
                           Password
                        </label>
                        <input
                           {...register('password')}
                           name="password"
                           type={showPass ? 'text' : 'password'}
                           className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           placeholder="Enter your password"
                           required
                        />
                        <button
                           onClick={() => setShowPass(!showPass)}
                           type="button"
                           className="btn btn-xs lg:btn-sm btn-circle border-none bg-transparent absolute right-2.5 bottom-3.5 md:bottom-3.5 lg:bottom-2.5"
                        >
                           {showPass ? (
                              <HiMiniEyeSlash className="text-xl" />
                           ) : (
                              <HiMiniEye className="text-xl" />
                           )}{' '}
                        </button>
                     </div>
                     <div className="mt-3.5">
                        <label className="label text-sm font-semibold text-[#5D5FEF]">
                           <LoadCanvasTemplate />
                        </label>
                     </div>
                     {/* Capcha input */}
                     <div className="mt-1.5 relative ">
                        <input
                           ref={capchaRef}
                           name="capchaText"
                           type="text"
                           className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5"
                           placeholder="Type the text above and click check button"
                           required
                        />
                        <button
                           onClick={handleValidateCapchaValue}
                           type="button"
                           className="btn btn-xs lg:btn-sm btn-circle absolute top-4 md:top-4 lg:top-3 right-3 lg:right-3.5 bg-blend-normal lg:bg-transparent"
                        >
                           <FaCheck className="text-green-500 text-xs lg:text-xs" />
                        </button>
                     </div>
                     <div className="mt-1.5">
                        <Link
                           to={'/update-Password'}
                           className="link link-hover font-medium text-sm text-red-600"
                        >
                           Forgot password?
                        </Link>
                     </div>
                     <button
                        type="submit"
                        disabled={signInDisable}
                        className="btn mt-4 w-full text-white
                  bg-[#D1A054] hover:bg-[#d39d4c] cursor-pointer"
                     >
                        Sign In
                     </button>
                  </form>
                  <div className="mt-5">
                     <p className="text-center text-[#D1A054] font-normal">
                        New here?{' '}
                        <Link to="/signup" className="font-semibold">
                           Create your account
                        </Link>
                     </p>
                     <SocialButtons />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default SignIn;
