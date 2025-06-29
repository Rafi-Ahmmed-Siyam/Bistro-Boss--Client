import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuCard from '../../Components/MenuCard';
import { Link } from 'react-router-dom';

const MenuCategory = ({ menuData, menuHeading, menuSubHeding, btnContent, hiddenClass, category }) => {

   return (
      <div>
         <div className='mt-20 max-w-6xl mx-auto px-3 md:px-0 lg:px-0'>
            <div className={`${hiddenClass}`}>
               <SectionTitle subHeading={menuHeading} heading={menuSubHeding} />
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-9 items-center justify-items-center mt-16'>
               {
                  menuData.map(item => <MenuCard key={item._id} item={item} />)
               }

            </div>
            <div className='mt-12 flex justify-center items-center text-[#1F2937]'>
               <Link to={`/order/${category}`} className='border-b-2 pb-3 px-4 uppercase rounded-b-lg text-sm cursor-pointer font-semibold hover:text-yellow-500 active:scale-95'>{btnContent}</Link>
            </div>
         </div>
      </div>
   );
};

export default MenuCategory;