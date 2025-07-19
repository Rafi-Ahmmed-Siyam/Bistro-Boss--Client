import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../Components/Spinner';

const PrivetRoute = ({ children }) => {
   const { user, loading } = useAuth();
   const location = useLocation();

   if (loading)
      return (
         <div className="min-h-[calc(100vh-120px)] flex justify-center items-center">
            <Spinner />
         </div>
      );
   if (user) {
      return children;
   }
   return <Navigate to={'/signin'} state={{ from: location }} replace />;
};

export default PrivetRoute;
