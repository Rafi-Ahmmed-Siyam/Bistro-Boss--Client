import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
   return (
      <div className='font-inter'>
         <header>

         </header>
         <main>
            <Outlet></Outlet>
         </main>
         <footer>
            <Footer />
         </footer>
      </div>
   );
};

export default Main;