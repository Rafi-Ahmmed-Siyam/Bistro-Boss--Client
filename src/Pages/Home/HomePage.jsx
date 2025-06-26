import React from 'react';
import Banner from './Banner';
import Category from './Category';
import DiscoverBistroBoss from './DiscoverBistroBoss';
import ContactUs from './ContactUs';
import PopularMenu from './PopularMenu';
import ChefRecomends from './ChefRecomends';
import Featured from './Featured';

const HomePage = () => {
   return (
      <div>
         <Banner />
         <Category />
         <DiscoverBistroBoss />
         <PopularMenu />
         <ContactUs />
         <ChefRecomends />
         <Featured />
      </div>
   );
};

export default HomePage;