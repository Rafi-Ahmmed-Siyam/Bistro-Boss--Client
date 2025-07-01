import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import HomePage from "../Pages/Home/HomePage";
import MenuPage from "../Pages/Menu/MenuPage";
import OrderFood from "../Pages/OrderFood/OrderFood";

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
               element: <OrderFood />
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
