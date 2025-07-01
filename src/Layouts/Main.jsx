import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';
import NavBar from '../Pages/Shared/NavBar';


const Main = () => {
   return (
      <div className='font-inter'>
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