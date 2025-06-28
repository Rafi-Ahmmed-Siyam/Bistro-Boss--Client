import React from 'react';

import imgSoup from '../../assets/menu/soup-bg.jpg'
import useMenu from '../../Hooks/useMenu';
import Cover from '../Shared/Cover';
import MenuCategory from '../Shared/MenuCategory';

const SoupsMenu = () => {
   const { menu } = useMenu();
   const soupMenu = menu.filter(item => item.category === "soup");

   return (
      <div className='mb-24'>
         <Cover
            containerClass={"py-10 lg:py-0 px-5 lg:px-0"}
            hedingTextSize={"text-3xl"}
            paraTextSize={'px-0 lg:px-12 text-sm'}
            height={'h-[550px] md:h-[700px] lg:h-[550px]'}
            bgImg={imgSoup}
            title={'Soups'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

         <div className='mt-20'>
            <MenuCategory hiddenClass={'hidden'} btnContent={"ORDER YOUR FAVOURITE FOOD"} menuData={soupMenu} />
         </div>
      </div>
   );
};

export default SoupsMenu;