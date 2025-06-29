import React, { useEffect, useState } from 'react';

import MenuCategory from '../Shared/MenuCategory';
import useMenu from '../../Hooks/useMenu';



const PopularMenu = () => {
   const { menu } = useMenu()
   const popularMenu = menu.filter(item => item.category === "popular");

   return (
      <div>
         <MenuCategory btnContent={"View Full  Menu"} menuSubHeding={"FROM OUR MENU"} menuHeading={'Check it out'} menuData={popularMenu} />
      </div>
   );
};

export default PopularMenu;