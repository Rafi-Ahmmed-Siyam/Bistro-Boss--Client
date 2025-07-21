import React from 'react';
import useMenu from '../../Hooks/useMenu';
import pizzaImg from '../../assets/menu/pizza-bg.jpg';
import Cover from '../Shared/Cover';
import MenuCategory from '../Shared/MenuCategory';

const PizzaMenu = () => {
   const { menu, loading } = useMenu();
   const pizzaMenu = menu.filter((item) => item.category === 'pizza');

   return (
      <div>
         <Cover
            containerClass={'px-5 md:px-5 lg:px-12 py-5 md:py-0 lg:py-0'}
            hedingTextSize={'text-2xl lg:text-3xl'}
            paraTextSize={'text-sm lg:text-base'}
            height={'h-[550px] md:h-[700px] lg:h-[550px]'}
            bgImg={pizzaImg}
            title={'PIZZA'}
            subTitle={
               'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
            }
         />

         <div className="mt-20">
            <MenuCategory
               category={'pizza'}
               hiddenClass={'hidden'}
               btnContent={'ORDER YOUR FAVOURITE FOOD'}
               menuData={pizzaMenu}
               loading={loading}
            />
         </div>
      </div>
   );
};

export default PizzaMenu;
