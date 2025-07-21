import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

import router from './Routes/Routes.jsx';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Providers/AuthProvider.jsx';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
   <StrictMode>
      <HelmetProvider>
         <Toaster position="top-center" reverseOrder={false} />
         <AuthProvider>
            <div className="container mx-auto ">
               <RouterProvider router={router} />
            </div>
         </AuthProvider>
      </HelmetProvider>
   </StrictMode>
);
