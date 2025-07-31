import React from 'react';

import imgSoup from '../../assets/menu/soup-bg.jpg';
import useMenu from '../../Hooks/useMenu';
import Cover from '../Shared/Cover';
import MenuCategory from '../Shared/MenuCategory';

const SoupsMenu = () => {
   const { menu, loading } = useMenu();
   const soupMenu = menu.filter((item) => item.category === 'soup');

   return (
      <div className="mb-24">
         <Cover
            containerClass={'px-5 md:px-5 lg:px-12 py-5 md:py-0 lg:py-0'}
            hedingTextSize={'text-2xl lg:text-3xl'}
            paraTextSize={'text-sm lg:text-base'}
            height={'h-[330px] md:h-[700px] lg:h-[550px]'}
            bgImg={imgSoup}
            title={'Soups'}
            subTitle={
               'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            }
         />

         <div className="mt-20">
            <MenuCategory
               category={'soup'}
               hiddenClass={'hidden'}
               btnContent={'ORDER YOUR FAVOURITE FOOD'}
               menuData={soupMenu}
               loading={loading}
            />
         </div>
      </div>
   );
};

export default SoupsMenu;
