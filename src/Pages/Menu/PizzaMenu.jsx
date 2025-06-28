import React from 'react';
import useMenu from '../../Hooks/useMenu';
import pizzaImg from '../../assets/menu/pizza-bg.jpg'
import Cover from '../Shared/Cover';
import MenuCategory from '../Shared/MenuCategory';

const PizzaMenu = () => {
   const { menu } = useMenu();
   const pizzaMenu = menu.filter(item => item.category === "pizza");
   console.log(pizzaMenu)
   return (
      <div>
         <Cover
            containerClass={"py-10 lg:py-0 px-5 lg:px-0"}
            hedingTextSize={"text-3xl"}
            paraTextSize={'px-0 lg:px-12 text-sm'}
            height={'h-[550px] md:h-[700px] lg:h-[550px]'}
            bgImg={pizzaImg}
            title={'PIZZA'}
            subTitle={'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

         <div className='mt-20'>
            <MenuCategory hiddenClass={'hidden'} btnContent={"ORDER YOUR FAVOURITE FOOD"} menuData={pizzaMenu} />
         </div>
      </div>
   );
};

export default PizzaMenu;