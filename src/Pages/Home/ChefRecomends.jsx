import React from 'react';
import SectionTitle from '../../Components/SectionTitle';
import ItemCard from '../../Components/ItemCard';
import useMenu from '../../Hooks/useMenu';
import MenuCard from '../../Components/MenuCard';

const ChefRecomends = () => {
   const { menu, isPending } = useMenu();
   const recommendsMenu = menu?.filter((item) => item.category === 'recommend');
   return (
      <section className="mt-14 lg:mt-24 max-w-7xl mx-auto">
         <SectionTitle subHeading={'Should Try'} heading={'CHEF RECOMMENDS'} />

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center items-center mt-12 gap-4 px-7 md:px-0 lg:px-0">
            {recommendsMenu?.map((menu) => (
               <ItemCard key={menu._id} foodItem={menu} />
            ))}
         </div>
      </section>
   );
};

export default ChefRecomends;
