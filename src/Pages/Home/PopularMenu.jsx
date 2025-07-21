import React, { useEffect, useState } from 'react';

import MenuCategory from '../Shared/MenuCategory';
import useMenu from '../../Hooks/useMenu';

const PopularMenu = () => {
   const { menu, loading } = useMenu();
   const popularMenu = menu.filter((item) => item.category === 'popular');

   return (
      <div>
         <MenuCategory
            category={'salad'}
            btnContent={'View Full  Menu'}
            menuSubHeding={'FROM OUR MENU'}
            menuHeading={'Check it out'}
            menuData={popularMenu}
            loading={loading}
         />
      </div>
   );
};

export default PopularMenu;
