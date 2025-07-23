import axios from 'axios';
import React from 'react';

const axiosInstance = axios.create({
   baseURL: import.meta.env.VITE_URL,
});

const useAxiosSecure = () => {
   return axiosInstance;
};

export default useAxiosSecure;
