import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { BsCart4 } from 'react-icons/bs';
import { MdLogout } from 'react-icons/md';
import useCart from '../../Hooks/useCart';

const NavBar = () => {
   const { user, userSignOut } = useAuth();
   const { cart } = useCart();
   // console.log(cart);
   const linkStyle = ({ isActive }) =>
      isActive ? 'text-[#EEFF25] font-medium' : 'text-white font-normal';
   const linkStyle2 = ({ isActive }) =>
      isActive
         ? 'bg-amber-400 text-sm md:text-sm'
         : 'text-black text-sm md:text-sm';

   return (
      <div>
         <div className="navbar text-white shadow-sm px-2 md:px-2 lg:px-5 py-0 md:py-3 lg:py-3.5 bg-black/50 container fixed z-50">
            <div className="flex-1 ">
               <NavLink
                  to={'/'}
                  className="font-cinzel font-semibold md:font-bold lg:font-black text-base md:text-lg lg:text-xl "
               >
                  BISTRO BOSS
               </NavLink>
               <p className="hidden md:block lg:block font-semibold text-base tracking-widest font-cinzel mt-0.5">
                  RESTAURANT
               </p>
            </div>
            <div className="flex-none">
               <ul className="menu menu-horizontal px-1">
                  <li>
                     <NavLink to={'/'} className={linkStyle}>
                        Home
                     </NavLink>
                  </li>
                  <li className={`hidden md:block lg:block `}>
                     <NavLink to={'/contact'} className={linkStyle}>
                        Contact Us
                     </NavLink>
                  </li>
                  <li className={user ? 'block md:hidden' : 'hidden md:hidden'}>
                     <NavLink to={'/contact'} className={linkStyle}>
                        Contact Us
                     </NavLink>
                  </li>
                  <li className="hidden md:block lg:block">
                     <NavLink to={'/menu'} className={linkStyle}>
                        Our Menu
                     </NavLink>
                  </li>
                  <li className="hidden md:hidden lg:block">
                     <NavLink className={linkStyle} to={'/order'}>
                        Our Shop
                     </NavLink>
                  </li>

                  {user ? (
                     ' '
                  ) : (
                     <>
                        <li className="block md:block lg:hidden">
                           <details>
                              <summary>Others</summary>
                              <ul className="py-2 px-2.5 text-black">
                                 <li>
                                    <NavLink
                                       className={linkStyle2}
                                       to={'/dashboard'}
                                    >
                                       Dashboard
                                    </NavLink>
                                 </li>
                                 <li className="block md:hidden ">
                                    <NavLink
                                       className={linkStyle2}
                                       to={'/menu'}
                                    >
                                       Our Menu
                                    </NavLink>
                                 </li>
                                 <li>
                                    <NavLink
                                       className={linkStyle2}
                                       to={'/order'}
                                    >
                                       Our Shop
                                    </NavLink>
                                 </li>
                                 <li className="hidden md:hidden lg:hidden">
                                    <NavLink
                                       className={linkStyle2}
                                       to={'/contact'}
                                    >
                                       Contact Us
                                    </NavLink>
                                 </li>
                              </ul>
                           </details>
                        </li>
                     </>
                  )}

                  {user ? (
                     <>
                        {/* Cart option */}
                        <li className="relative">
                           <NavLink to={'/dashboard/cart'} className={`mr-1.5`}>
                              <BsCart4 className="text-2xl text-white" />
                              <span className="text-white text-xs bg-black font-medium px-1.5 text-center  rounded-full absolute left-[22px] z-50 bottom-5">
                                 {cart?.length || 0}
                              </span>
                           </NavLink>
                        </li>
                        <div className="dropdown dropdown-end ">
                           <div
                              tabIndex={0}
                              role="button"
                              className="btn btn-ghost btn-circle avatar "
                           >
                              <div className="w-10 rounded-full border-2 border-green-700">
                                 <img
                                    alt="User Photo"
                                    referrerPolicy="no-referrer"
                                    src={user?.photoURL}
                                 />
                              </div>
                           </div>
                           <ul
                              tabIndex={0}
                              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-black"
                           >
                              <li>
                                 <NavLink
                                    className={linkStyle2}
                                    to={'/dashboard'}
                                 >
                                    Dashboard
                                 </NavLink>
                              </li>
                              <li className="block md:hidden lg:hidden mt-0.5">
                                 <NavLink className={linkStyle2} to={'/menu'}>
                                    Our Menu
                                 </NavLink>
                              </li>
                              <li className="block md:block lg:hidden mt-0.5">
                                 <NavLink className={linkStyle2} to={'/order'}>
                                    Our Shop
                                 </NavLink>
                              </li>
                              <li
                                 onClick={() => userSignOut()}
                                 className="btn btn-sm  text-black mt-2.5 rounded-lg bg-red-700 hover:bg-red-800 border-none "
                              >
                                 <span className="text-white flex items-center">
                                    Sign Out
                                    <MdLogout className="text-white text-lg" />
                                 </span>
                              </li>
                           </ul>
                        </div>
                     </>
                  ) : (
                     <li className="text-black">
                        <NavLink to={'/signin'} className={linkStyle}>
                           Sign in
                        </NavLink>
                     </li>
                  )}
               </ul>
            </div>
         </div>
      </div>
   );
};

export default NavBar;
