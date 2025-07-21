import axios from 'axios';
import React from 'react';

export const axiosInstance = axios.create({
   baseURL: import.meta.env.VITE_URL,
});

const useAxiosSecure = () => {
   return instance;
};

export default useAxiosSecure;
