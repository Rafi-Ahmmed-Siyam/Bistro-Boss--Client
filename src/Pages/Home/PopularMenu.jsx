import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Components/SectionTitle';
import MenuCard from '../../Components/MenuCard';

const PopularMenu = () => {
   const [menu, setMenu] = useState([])
   useEffect(() => {

      fetch('Menu.json')
         .then((res) => res.json())
         .then((data) => {
            const popularItems = data.filter(item => item.category === "popular");
            setMenu(popularItems)
         })
   }, [])
   console.log(menu)
   return (
      <div className='mt-20 max-w-7xl mx-auto px-3 md:px-0 lg:px-0'>
         <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />

         <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-9 items-center justify-items-center mt-16'>
            {
               menu.map(item => <MenuCard key={item._id} item={item} />)
            }

         </div>
         <div className='mt-12 flex justify-center items-center text-[#1F2937]'>
            <button className='border-b-2 pb-3 px-4 uppercase rounded-b-lg text-sm cursor-pointer font-semibold hover:text-yellow-500 active:scale-95'>View Full  Menu</button>
         </div>
      </div>
   );
};

export default PopularMenu;