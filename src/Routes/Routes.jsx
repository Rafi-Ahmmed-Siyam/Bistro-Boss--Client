import {
   createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import HomePage from "../Pages/Home/HomePage";
import MenuPage from "../Pages/Menu/MenuPage";


const router = createBrowserRouter([
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
         }
      ]
   },
]);


export default router;