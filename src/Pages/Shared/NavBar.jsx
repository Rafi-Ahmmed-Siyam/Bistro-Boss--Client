import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const NavBar = () => {
   const { user, userSignOut } = useAuth();
   const linkStyle = ({ isActive }) =>
      isActive ? "text-[#EEFF25] font-medium" : "text-white font-normal";

   const handleLogout = () => {
      userSignOut();
   }

   return (
      <div>
         <div className="navbar text-white shadow-sm px-2 md:px-2 lg:px-5 bg-black/50 container fixed z-50">
            <div className="flex-1 ">
               <NavLink to={'/'} className="font-semibold md:font-bold lg:font-extrabold text-base md:text-lg lg:text-xl ">BISTRO BOSS</NavLink>
               <p className='hidden md:block lg:block font-semibold text-base tracking-widest font-cinzel mt-0.5'>RESTURENT</p>
            </div>
            <div className="flex-none">
               <ul className="menu menu-horizontal px-1">
                  <li><NavLink to={'/'} className={linkStyle}>Home</NavLink></li>
                  <li className={`hidden md:block lg:block `}><NavLink to={'/contact'} className={linkStyle}>Contact Us</NavLink></li>
                  <li className={user ? 'block md:hidden' : 'hidden md:hidden'}>
                     <NavLink to={'/contact'} className={linkStyle}>Contact Us</NavLink>
                  </li>
                  <li className='hidden md:block lg:block' ><NavLink to={'/menu'} className={linkStyle}>Our Menu</NavLink></li>
                  <li className='hidden md:hidden lg:block'><NavLink className={linkStyle} to={'/order'}>Our Shop</NavLink></li>

                  {
                     user ? " " : <li className='block md:block lg:hidden'>
                        <details>
                           <summary>Others</summary>
                           <ul className="py-2 px-2.5 text-black">
                              <li><NavLink>Dashboard</NavLink></li>
                              <li ><NavLink to={'/menu'}>Our Menu</NavLink></li>
                              <li ><NavLink to={'/order'} >Our Shop</NavLink></li>
                              <li className='hidden md:hidden lg:hidden'><NavLink to={'/contact'} >Contact Us</NavLink></li>
                           </ul>
                        </details>
                     </li>
                  }

                  {
                     (user) ?
                        <div className="dropdown dropdown-end ">
                           <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar ">
                              <div className="w-10 rounded-full border-2 border-green-700">
                                 <img

                                    alt="User Photo"
                                    referrerPolicy='no-referrer'
                                    src={user?.photoURL} />
                              </div>
                           </div>
                           <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black">
                              <li><NavLink>Dashboard</NavLink></li>
                              <li className='block md:hidden lg:hidden'><NavLink to={'/menu'}>Our Menu</NavLink></li>
                              <li className='block md:block lg:hidden'><NavLink to={'/order'} >Our Shop</NavLink></li>
                              <li onClick={handleLogout} className='btn'>Sign Out</li>
                           </ul>
                        </div>
                        :

                        <li><NavLink to={'/signin'} className={linkStyle}>Sign in</NavLink></li>
                  }





               </ul>
            </div>
         </div>
      </div>
   );
};

export default NavBar;