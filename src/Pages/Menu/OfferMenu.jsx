import React from 'react';
import useMenu from '../../Hooks/useMenu';
import MenuCategory from '../Shared/MenuCategory';

const OfferMenu = () => {
   const { menu, isPending } = useMenu();
   const offerMenu = menu?.filter((item) => item.category === 'offered');

   return (
      <div>
         <MenuCategory
            category={'salad'}
            btnContent={'ORDER YOUR FAVOURITE FOOD'}
            menuHeading={"Don't miss "}
            menuSubHeding={"TODAY'S OFFER"}
            menuData={offerMenu}
            loading={isPending}
         />
      </div>
   );
};

export default OfferMenu;
