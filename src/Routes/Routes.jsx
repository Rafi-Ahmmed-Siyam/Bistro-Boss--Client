import { createBrowserRouter } from 'react-router-dom';
import Main from '../Layouts/Main';
import HomePage from '../Pages/Home/HomePage';
import MenuPage from '../Pages/Menu/MenuPage';
import OrderFood from '../Pages/OrderFood/OrderFood';
import ContactUs from '../Pages/Home/ContactUs';
import ContactUS from '../Pages/Contact/ContactUsPage';
import ContactUsPage from '../Pages/Contact/ContactUsPage';
import SignIn from '../Pages/Authentication/SignIn';
import SignUp from '../Pages/Authentication/Signup';
import ForgotPassword from '../Pages/Authentication/ForgotPassword';
import DashBoard from '../Layouts/DashBoard';

import PrivetRoute from './PrivetRoute';
import Cart from '../Pages/DashBoard/User/Cart';
import AllUsers from '../Pages/DashBoard/Admin/AllUsers';
import AdminRoute from './AdminRoute';
import AddItems from '../Pages/DashBoard/Admin/AddItems';
import ManageItems from '../Pages/DashBoard/Admin/ManageItems';
import UpdateItem from '../Pages/DashBoard/Admin/UpdateItem';

const router = createBrowserRouter(
   [
      {
         path: '/',
         element: <Main />,
         children: [
            {
               path: '/',
               element: <HomePage />,
            },
            {
               path: 'menu',
               element: <MenuPage />,
            },
            {
               path: 'order/:category',
               element: <OrderFood />,
            },
            {
               path: 'order',
               element: <OrderFood />,
            },
            {
               path: 'contact',
               element: <ContactUsPage />,
            },
            {
               path: 'signin',
               element: <SignIn />,
            },
            {
               path: 'signup',
               element: <SignUp />,
            },
            {
               path: 'update-Password',
               element: <ForgotPassword />,
            },
         ],
      },

      // DashBoard
      {
         path: 'dashboard',
         element: (
            <PrivetRoute>
               <DashBoard />
            </PrivetRoute>
         ),
         children: [
            {
               path: 'cart',
               element: <Cart />,
            },

            // Admin Routes
            {
               path: 'users',
               element: (
                  <AdminRoute>
                     <AllUsers />
                  </AdminRoute>
               ),
            },
            {
               path: 'addItems',
               element: (
                  <AdminRoute>
                     <AddItems />
                  </AdminRoute>
               ),
            },
            {
               path: 'manageItems',
               element: (
                  <AdminRoute>
                     <ManageItems />
                  </AdminRoute>
               ),
            },
            {
               path: 'updateItem/:id',
               element: (
                  <AdminRoute>
                     <UpdateItem />
                  </AdminRoute>
               ),
               loader: ({ params }) =>
                  fetch(`${import.meta.env.VITE_URL}/menu/${params.id}`),
            },
         ],
      },
   ],
   {
      future: {
         v7_startTransition: true,
      },
   }
);

export default router;
