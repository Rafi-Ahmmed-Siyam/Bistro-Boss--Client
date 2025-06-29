import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';

import coverBg from '../../assets/menu/banner3.jpg'

import MenuCategory from '../Shared/MenuCategory';
import OfferMenu from './OfferMenu';
import DessertsMenu from './DessertsMenu';
import PizzaMenu from './PizzaMenu';
import SaladsMenu from './SaladsMenu';
import SoupsMenu from './SoupsMenu';

const MenuPage = () => {
   return (
      <div>
         <Helmet><title>Bistro Boss | Menu</title></Helmet>
         <Cover
            hedingTextSize={"text-3xl md:text-6xl lg:text-7xl"}
            paraTextSize={'text-base md:text-base lg:text-lg'}
            height={'h-[550px] md:h-[700px] lg:h-[700px]'}
            bgImg={coverBg} title={"OUR MENU"}
            subTitle={"Would you like to try a dish?"} />

         {/* Offer Menu */}
         <section className='mt-24'>
            <OfferMenu />
         </section>
         
         {/* Desserts */}
         <section className='mt-11'>
            <DessertsMenu />
         </section>

         {/* Pizza */}
         <section className='mt-11'>
            <PizzaMenu />
         </section>

         {/* Salads */}
         <section className='mt-11'>
            <SaladsMenu />
         </section>

         {/* Soups */}
         <section className='mt-11'>
            <SoupsMenu />
         </section>
      </div>
   );
};

export default MenuPage;