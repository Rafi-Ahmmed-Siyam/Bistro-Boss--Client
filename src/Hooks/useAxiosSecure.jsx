import axios from 'axios';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
   baseURL: import.meta.env.VITE_URL,
});

const useAxiosSecure = () => {
   const navigate = useNavigate();
   const { userSignOut } = useAuth();

   useEffect(() => {
      // Request Interceptor
      const reqInterceptor = axiosSecure.interceptors.request.use((config) => {
         const token = localStorage.getItem('access-token');
         if (token) config.headers.authorization = `Bearer ${token}`;
         return config;
      });

      // Response Interceptor
      const resInterceptor = axiosSecure.interceptors.response.use(
         (response) => response,
         async (error) => {
            const status = error.response?.status;
            // console.log(error.response);
            if (status === 401 || status === 403) {
               await userSignOut();
               navigate('/signin');
            }
            return Promise.reject(error);
         }
      );

      return () => {
         axiosSecure.interceptors.request.eject(reqInterceptor);
         axiosSecure.interceptors.response.eject(resInterceptor);
      };
   }, [navigate, userSignOut]);

   return axiosSecure;
};

export default useAxiosSecure;
