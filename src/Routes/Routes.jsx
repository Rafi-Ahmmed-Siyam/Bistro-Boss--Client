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
            }
         ]
      },
   ],
   {
      future: {
         v7_startTransition: true
      }
   }
);

export default router;
