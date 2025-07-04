import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import NavBar from '../Pages/Shared/NavBar';
import ScrollToTop from '../Components/ScrollToTop';


const Main = () => {
   const { pathname } = useLocation();
   console.log(pathname)
   const noHeaderFooter = pathname.toLowerCase().includes('/signin') || pathname.toLowerCase().includes('/signup');
   return (
      <div className='font-inter'>
         <ScrollToTop />
         {!noHeaderFooter && (<header>
            <NavBar />
         </header >)}
         <main className='min-h-[calc(100vh-392px)]'>
            <Outlet></Outlet>
         </main>
         {
            !noHeaderFooter && (<footer>
               <Footer />
            </footer>)
         }
      </div>
   );
};

export default Main;