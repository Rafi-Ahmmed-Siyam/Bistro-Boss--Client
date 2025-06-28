import React from 'react';
import Banner from './Banner';
import Category from './Category';
import DiscoverBistroBoss from './DiscoverBistroBoss';
import ContactUs from './ContactUs';
import PopularMenu from './PopularMenu';
import ChefRecomends from './ChefRecomends';
import Featured from './Featured';
import Testimonials from './Testimonials';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
   return (
      <div>
         <Helmet><title>Bistro Boss | Home</title></Helmet>
         <Banner />
         <Category />
         <DiscoverBistroBoss />
         <PopularMenu />
         <ContactUs />
         <ChefRecomends />
         <Featured />
         <Testimonials />
      </div>
   );
};

export default HomePage;