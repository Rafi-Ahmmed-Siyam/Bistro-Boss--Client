import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import HomePage from "../Pages/Home/HomePage";
import MenuPage from "../Pages/Menu/MenuPage";
import OrderFood from "../Pages/OrderFood/OrderFood";
import axios from "axios";
import ContactUs from "../Pages/Home/ContactUs";
import ContactUS from "../Pages/Contact/ContactUsPage";
import ContactUsPage from "../Pages/Contact/ContactUsPage";
import SignIn from "../Pages/Authentication/SignIn";
import SignUp from "../Pages/Authentication/Signup";

const router = createBrowserRouter(
   [
      {
         path: "/",
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
               element: <OrderFood />
            },
            {
               path: 'order',
               element: <OrderFood />,

            },
            {
               path: 'contact',
               element: <ContactUsPage />
            },
            {
               path: 'signin',
               element: <SignIn />
            },
            {
               path: 'signup',
               element: <SignUp />
            }

         ]
      },
      // This is for sign in
      // {
      //    path: '/auth',
      //    element: <AuthenticationLayout />,
      //    children: [
      //       {
      //          path: 'signin',
      //          element: <SignIn />
      //       },
      //       {
      //          path: 'signup',
      //          element: <SignUp />
      //       }
      //    ]
      // }
   ],
   {
      future: {
         v7_startTransition: true
      }
   }
);

export default router;
