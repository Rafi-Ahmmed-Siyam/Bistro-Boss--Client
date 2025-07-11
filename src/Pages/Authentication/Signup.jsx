import { Helmet } from 'react-helmet-async';
import signupimg from '../../assets/others/authentication2.png'
import bgImg from '../../assets/others/authentication.png';
import SocialButtons from './SocialButtons';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { useState } from 'react';

const SignUp = () => {
   const { createUser, updateUserData } = useAuth();
   const navigate = useNavigate();
   const [showPass, setShowPass] = useState(false);
   const [passError, setPassError] = useState('')
   const handleSignUp = (e) => {
      e.preventDefault();
      const form = e.target;
      const name = form.userName.value;
      const email = form.userEmail.value;
      const photoUrl = form.photoURL.value;
      const password = form.password.value;

      setPassError(" ")

      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).*$/;
      if (password.length < 8) {
         return setPassError("Password must be at least 8 characters long.")
      }
      if (!passwordRegex.test(password)) {
         return setPassError("Password must include at least one uppercase, one lowercase, one number, and one special character.")
      }

      createUser(email, password)
         .then(result => {
            return updateUserData(name, photoUrl);
         })
         .then(() => {
            alert("Signup Successfill")
            form.reset();
            navigate('/')

         })

   }

   return (
      <section>
         <Helmet><title>Sign up</title></Helmet>
         <div className="w-full h-dvh flex justify-center items-center px-4 lg:px-0" style={{ backgroundImage: `url(${bgImg})` }}>
            <div className="w-7xl min-h-[700px] mx-auto px-8 md:px-12 lg:px-24 py-9 border border-slate-200 shadow-2xl flex justify-around items-center gap-x-24 z-40 rounded-md bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
               {/* Left Form */}
               <div className="w-full lg:w-1/2">
                  <h2 className="text-center font-extrabold text-2xl lg:text-3xl text-[#151515] mb-3">Sign Up</h2>
                  <form onSubmit={handleSignUp}>
                     {/* user name */}
                     <div>
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">Name</label>
                        <input name="userName" type="text" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Enter your name" required />
                     </div>
                     {/* user Email */}
                     <div className='mt-2.5'>
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">Email</label>
                        <input name="userEmail" type="email" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Enter your email" required />
                     </div>
                     {/* photo url */}
                     <div className='mt-2.5'>
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">Photo URL</label>
                        <input name="photoURL" type="url" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Enter your Photo URL" />
                     </div>

                     {/* Password */}
                     <div className="mt-2 relative">
                        <label className="label text-base font-semibold mb-2.5 text-[#444444]">Password</label>
                        <input name="password" type={showPass ? 'text' : 'password'} className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Create a Password" required />
                        <button onClick={() => setShowPass(!showPass)} type='button' className='btn btn-xs lg:btn-sm btn-circle border-none bg-transparent absolute right-2.5 bottom-3.5 md:bottom-3.5 lg:bottom-2.5'>{showPass ? <IoEyeOff className='text-xl' /> : <IoEye className='text-xl' />} </button>

                     </div>
                     <div className='mt-2'>
                        {
                           (passError) && <label className="text-sm font-medium text-red-500 text-center break-words max-w-sm">{passError}</label>
                        }
                     </div>
                     <button type='submit' className="btn mt-4 w-full text-white
                  bg-[#D1A054] hover:bg-[#d39d4c] cursor-pointer"
                     >Sign Up</button>

                  </form>
                  <div className="mt-5">
                     <p className="text-center text-[#D1A054] font-normal">
                        Already registered? <Link to="/signin" className="font-semibold">Go to log in</Link>
                     </p>
                     <SocialButtons />
                  </div>

               </div>
               {/* Right Image */}
               <div className="hidden lg:block">
                  <img className="w-[600px]" src={signupimg} alt="Login Illustration" />
               </div>

            </div>
         </div>
      </section>
   );
};

export default SignUp;