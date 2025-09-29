import React from 'react';
import SectionTitle from '../../../../Components/SectionTitle';
import CheckoutForm from './CheckoutForm';
import { Helmet } from 'react-helmet-async';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';

// TODO: Add publishable key
const stripe_promise = loadStripe(import.meta.env.VITE_PK);
const Payment = () => {
   return (
      <section className=" px-2 md:px-5 lg:px-0">
         <Helmet>
            <title>Bistro Boss | Payment</title>
         </Helmet>
         <div className="my-52">
            <div>
               <h2 className="uppercase text-center mb-8 text-3xl px-2">
                  Payment
               </h2>
               <div>
                  <Elements stripe={stripe_promise}>
                     <CheckoutForm />
                  </Elements>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Payment;
