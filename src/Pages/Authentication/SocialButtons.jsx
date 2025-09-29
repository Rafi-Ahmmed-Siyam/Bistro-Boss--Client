import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import useAxiosPublic from '../../Hooks/useAxiosPublic';

const SocialButtons = () => {
   const { pathname } = useLocation();
   const { googleLogin, facebookLogin, gitHubLogin } = useAuth();
   const axiosPublic = useAxiosPublic();
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || '/';

   const handleGoogleLogin = async () => {
      try {
         const result = await googleLogin();
         const userInfo = {
            userName: result?.user?.displayName,
            userEmail: result?.user?.email,
         };
         const { data } = await axiosPublic.post('/users', userInfo);
         navigate(from, { replace: true });
         toast.success('Sign in successful!');
      } catch (error) {
         // console.log(error);
         toast.error(error?.message || 'Something went wrong!');
      }
   };

   const handleFacebookLogin = () => {
      facebookLogin()
         .then(() => {
            navigate(from, { replace: true });
            toast.success('Sign in successful!');
         })
         .catch((error) => {
            // console.log(error);
            toast.error(error?.message || 'Something went wrong!');
         });
   };

   const handleGithubLogin = async () => {
      try {
         const result = await gitHubLogin();
         // console.log(result);
         const userInfo = {
            userName: result?.user?.displayName,
            userEmail: result?.user?.email,
         };
         const { data } = await axiosPublic.post('/users', userInfo);
         navigate(from, { replace: true });
         toast.success('Sign in successful!');
      } catch (error) {
         // console.log(error);
         toast.error(error?.message || 'Something went wrong!');
      }
   };

   return (
      <div className="mt-5">
         <p className="font-medium text-base text-center  text-[#444444]">
            {pathname === '/signin' ? 'Or sign in with' : 'Or sign up with'}
         </p>
         <div className="flex justify-center items-center gap-8 mt-3">
            <button
               disabled
               onClick={handleFacebookLogin}
               className="btn btn-circle disabled:cursor-not-allowed border-[#444444]"
            >
               <FaFacebookF className="text-xl" />
            </button>
            <button
               onClick={handleGoogleLogin}
               className="btn btn-circle border-[#444444]"
            >
               <FaGoogle className="text-xl" />
            </button>
            <button
               onClick={handleGithubLogin}
               className="btn btn-circle border border-[#444444]"
            >
               <FaGithub className="text-xl " />
            </button>
         </div>
      </div>
   );
};

export default SocialButtons;
