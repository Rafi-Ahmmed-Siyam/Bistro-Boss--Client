import React from 'react';
import Cover from '../Shared/Cover';
import dessertImg from '../../assets/menu/dessert-bg.jpeg'
import useMenu from '../../Hooks/useMenu';
import MenuCategory from '../Shared/MenuCategory';

const DessertsMenu = () => {
   const { menu } = useMenu();
   const dessertMenu = menu.filter(item => item.category === "dessert");
   return (
      <div>
         <Cover
            containerClass={"px-5 md:px-5 lg:px-12 py-5 md:py-0 lg:py-0"}
            hedingTextSize={"text-2xl lg:text-3xl"}
            paraTextSize={' text-sm lg:text-base'}
            height={'h-[550px] md:h-[700px] lg:h-[550px]'}
            bgImg={dessertImg}
            title={'DESSERTS'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

         <div className='mt-20'>
            <MenuCategory category={'dessert'} hiddenClass={'hidden'} btnContent={"ORDER YOUR FAVOURITE FOOD"} menuData={dessertMenu} />
         </div>

      </div>
   );
};

export default DessertsMenu;