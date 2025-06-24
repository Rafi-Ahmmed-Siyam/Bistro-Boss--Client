import React from 'react';

const NavBar = () => {

   // fixed z -50
   return (
      <div>
         <div className="navbar text-white shadow-sm px-2 md:px-2 lg:px-5 bg-black/50 container fixed z-50">
            <div className="flex-1 ">
               <p className="font-extrabold text-xl ">BISTRO BOSS</p>
               <p className='hidden md:block lg:block font-black tracking-widest font-cinzel mt-0.5'>RESTURENT</p>
            </div>
            <div className="flex-none">
               <ul className="menu menu-horizontal px-1">


                  <li ><a>Home</a></li>
                  <li ><a>Contact Us</a></li>
                  <li className='hidden md:hidden lg:block'><a>Our Menu</a></li>
                  <li className='hidden md:hidden lg:block'><a>Our Shop</a></li>
                  {/* <li ><a>Sign in</a></li> */}

                  <div className="dropdown dropdown-end ">
                     <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                           <img
                              alt="Tailwind CSS Navbar component"
                              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                     </div>
                     <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                        <li><a>Dashboard</a></li>
                        <li className='block md:block lg:hidden'><a>Our Menu</a></li>
                        <li className='block md:block lg:hidden'><a>Our Shop</a></li>
                        <li><a>Sign Out</a></li>
                     </ul>
                  </div>

               </ul>
            </div>
         </div>
      </div>
   );
};

export default NavBar;