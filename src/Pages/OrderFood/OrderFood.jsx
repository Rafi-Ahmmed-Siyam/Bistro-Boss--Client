import React from 'react';
import { Helmet } from 'react-helmet-async';
import shopImg from '../../assets/shop/banner2.jpg';
import Cover from '../Shared/Cover';
import useMenu from '../../Hooks/useMenu';
import ColorTabs from './TabMenu';
import TabMenu from './TabMenu';
import { useParams } from 'react-router-dom';

const OrderFood = () => {
   const { category } = useParams();
   return (
      <div>
         <Helmet>
            <title>Bistro Boss | Shop</title>
         </Helmet>
         <Cover
            hedingTextSize={'text-3xl md:text-6xl lg:text-7xl'}
            paraTextSize={'text-base md:text-base lg:text-lg'}
            height={'h-[300px] md:h-[700px] lg:h-[600px]'} //h-[300px] md:h-[700px] lg:h-[600px]
            bgImg={shopImg}
            title={'OUR SHOP'}
            subTitle={'Would you like to try a dish?'}
         />

         <div className="mt-20">
            <TabMenu category={category} />
         </div>
      </div>
   );
};

export default OrderFood;
