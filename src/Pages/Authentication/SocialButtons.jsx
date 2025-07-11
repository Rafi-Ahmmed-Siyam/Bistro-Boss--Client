import React from 'react';
import { FaFacebookF, FaGithub, FaGoogle } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const SocialButtons = () => {
   const { pathname } = useLocation();
   const { googleLogin, facebookLogin, gitHubLogin } = useAuth();
   const navigate = useNavigate();
   const handleGoogleLogin = () => {
      googleLogin()
         .then(result => {
            navigate('/')
         })
         .catch(err => {
            console.log(err.message)
         })
   }
   const handleFacebookLogin = () => {
      facebookLogin()
         .then(result => {
            navigate('/')
         })
         .catch(err => {
            console.log(err.message)
         })
   }
   const handleGithubLogin = () => {
      gitHubLogin()
         .then(result => {
            navigate('/')
         })
         .catch(err => {
            console.log(err.message)
         })
   }



   return (
      <div className='mt-5'>
         <p className='font-medium text-base text-center  text-[#444444]'>{pathname === '/signin' ? "Or sign in with" : "Or sign up with"}</p>
         <div className='flex justify-center items-center gap-8 mt-3'>
            <button onClick={handleFacebookLogin} className="btn btn-circle border-[#444444]"><FaFacebookF className='text-xl' /></button>
            <button onClick={handleGoogleLogin} className="btn btn-circle border-[#444444]"><FaGoogle className='text-xl' /></button>
            <button onClick={handleGithubLogin} className="btn btn-circle border border-[#444444]"><FaGithub className='text-xl ' /></button>
         </div>
      </div>
   );
};

export default SocialButtons;