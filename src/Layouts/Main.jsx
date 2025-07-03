import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import NavBar from '../Pages/Shared/NavBar';
import ScrollToTop from '../Components/ScrollToTop';


const Main = () => {
   return (
      <div className='font-inter'>
         <ScrollToTop />
         <header>
            <NavBar />
         </header >
         <main className='min-h-[calc(100vh-392px)]'>
            <Outlet></Outlet>
         </main>
         <footer>
            <Footer />
         </footer>
      </div>
   );
};

export default Main;