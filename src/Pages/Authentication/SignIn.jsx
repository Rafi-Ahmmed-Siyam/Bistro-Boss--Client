import loginImg from '../../assets/others/authentication2.png';
import bgImg from '../../assets/others/authentication.png';
import { Link } from 'react-router-dom';
import SocialButtons from './SocialButtons';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useEffect, useState } from 'react';

const SignIn = () => {
   const [signInDisable, setSignInDisable] = useState(true);

   const handleLogin = (e) => {
      e.preventDefault();
      const form = e.target;
      const email = form.userEmail.value;
      const password = form.password.value;
      console.log(email, password);
   };

   const validateCapchaValue = (e) => {
      const capchaValue = e.target.value;
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
      <div className="w-full h-dvh flex justify-center items-center px-4 lg:px-0" style={{ backgroundImage: `url(${bgImg})` }}>
         <div className="w-7xl min-h-[700px] mx-auto px-8 md:px-12 lg:px-24 py-9 border border-slate-200 shadow-2xl flex justify-around items-center gap-x-24 z-40 rounded-md bg-cover" style={{ backgroundImage: `url(${bgImg})` }}>
            {/* Left Image */}
            <div className="hidden lg:block">
               <img className="w-[600px]" src={loginImg} alt="Login Illustration" />
            </div>

            {/* Right Form */}
            <div className="w-full lg:w-1/2">
               <h2 className="text-center font-extrabold text-2xl lg:text-3xl text-[#151515] mb-3">Login</h2>
               <form onSubmit={handleLogin}>
                  <div>
                     <label className="label text-base font-semibold mb-2.5 text-[#444444]">Email</label>
                     <input name="userEmail" type="email" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Enter your email" required />
                  </div>
                  <div className="mt-2">
                     <label className="label text-base font-semibold mb-2.5 text-[#444444]">Password</label>
                     <input name="password" type="password" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Enter your password" required />
                  </div>
                  <div className="mt-3.5">
                     <label className="label text-sm font-semibold text-[#5D5FEF]"><LoadCanvasTemplate /></label>
                  </div>
                  <div className="mt-1.5">
                     <input onBlur={validateCapchaValue} name="capchaText" type="text" className="bg-white border border-gray-300 text-black text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full py-4 px-5" placeholder="Type the text above" required />
                  </div>
                  <div className="mt-2">
                     <a className="link link-hover text-sm text-blue-600">Forgot password?</a>
                  </div>
                  <button disabled={signInDisable} className="btn mt-4 w-full text-white bg-[#D1A054B3] hover:bg-[#d39d4c] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:bg-gray-950"
                  >Sign In</button>

               </form>
               <div className="mt-5">
                  <p className="text-center text-[#D1A054B3] font-normal">
                     New here? <Link to="/signup" className="font-semibold">Create your account</Link>
                  </p>
                  <SocialButtons />
               </div>

            </div>
         </div>
      </div>
   );
};

export default SignIn;
