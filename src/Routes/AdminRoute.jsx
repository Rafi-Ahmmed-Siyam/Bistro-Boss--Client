import React from 'react';
import useAdmin from '../Hooks/useAdmin';
import useAuth from '../Hooks/useAuth';
import Spinner from '../Components/Spinner';
import { Navigate, useLocation } from 'react-router-dom';

const AdminRoute = ({ children }) => {
   const location = useLocation();
   const { user, loading } = useAuth();
   const { isAdmin, isPending, isError } = useAdmin();

   if (loading || isPending)
      return (
         <div className="min-h-[calc(100vh-120px)] flex justify-center items-center">
            <Spinner />
         </div>
      );
   if (user && isAdmin) {
      return children;
   }
   return <Navigate to={'/signin'} />;
};

export default AdminRoute;
