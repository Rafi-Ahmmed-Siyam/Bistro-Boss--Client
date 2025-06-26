import React from 'react';
import Banner from './Banner';
import Category from './Category';
import DiscoverBistroBoss from './DiscoverBistroBoss';
import ContactUs from './ContactUs';

const Home = () => {
   return (
      <div>
         <Banner />
         <Category />
         <DiscoverBistroBoss />
         <ContactUs />
      </div>
   );
};

export default Home;