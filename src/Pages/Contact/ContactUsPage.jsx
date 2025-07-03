import React from 'react';
import { Helmet } from 'react-helmet-async';
import Cover from '../Shared/Cover';
import contactImg from '../../assets/contact/banner.jpg'
import Location from './Location';
import ContactForm from './ContactForm';

const ContactUsPage = () => {
   return (
      <div>
         <Helmet><title>Bistro Boss | Contact Us</title></Helmet>
         <Cover
            hedingTextSize={"text-3xl md:text-6xl lg:text-6xl"}
            paraTextSize={'text-base md:text-base lg:text-lg'}
            height={'h-[550px] md:h-[700px] lg:h-[600px]'}
            bgImg={contactImg} title={"CONTACT US"}
            subTitle={"Would you like to try a dish?"} />

         <Location />
         <ContactForm />
      </div>
   );
};

export default ContactUsPage;