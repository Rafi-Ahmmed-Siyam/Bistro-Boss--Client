import {
   CardCvcElement,
   CardElement,
   CardExpiryElement,
   CardNumberElement,
   useElements,
   useStripe,
} from '@stripe/react-stripe-js';

import toast from 'react-hot-toast';
import useCart from '../../../../Hooks/useCart';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSecure';
import useAuth from '../../../../Hooks/useAuth';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = () => {
   const stripe = useStripe();
   const elements = useElements();
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
   // console.log(user.displayName);
   const { cart, refetch } = useCart();
   const [clientSecret, setClientSecret] = useState('');
   const [price, setPrice] = useState(0);
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      const totalPrice = cart.reduce(
         (initValue, item) => initValue + item.price * item.quantity,
         0
      );
      setPrice(totalPrice);
   }, [cart]);
   // console.log(price);

   const payment = async () => {
      const { data } = await axiosSecure.post('/create/create-payment-intent', {
         price: price,
      });
      setClientSecret(data.clientSecret);
   };

   useEffect(() => {
      if (price > 0) {
         payment();
      }
   }, [price]);

   // console.log(clientSecret);

   const handleSubmit = async (e) => {
      e.preventDefault();
      setLoading(true);
      if (!stripe || !elements) {
         return;
      }
      const card = elements.getElement(CardElement);
      if (card === null) {
         return;
      }

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });
      if (error) {
         // console.log('payment Error', error);
         toast.error(error.message);
      } else {
         // console.log('payment', paymentMethod);
      }

      // Confirm Payment
      const { paymentIntent, error: confirmError } =
         await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: card,
               billing_details: {
                  email: user?.email || 'anonymous',
                  name: user?.displayName || 'anonymous',
               },
            },
         });

      if (confirmError) {
         setLoading(false);
         toast.error('Something went wrong');
         // console.log(confirmError);
      } else {
         setLoading(false);

         card.clear();
         // console.log(paymentIntent);
         if (paymentIntent.status == 'succeeded') {
            Swal.fire({
               position: 'center',
               icon: 'success',
               title: `Payment successful!`,
               showConfirmButton: false,
               timer: 1500,
               background: '#fff', // alert box background
               color: '#000', // text color (black for readability)
               iconColor: '#C48C3A', // your sidebar golden-brown color
               customClass: {
                  popup: 'rounded-lg shadow-lg',
                  title: 'text-lg font-semibold',
               },
            });

            // Now payment details store in database
            const payment = {
               transactionId: paymentIntent.id,
               email: user.email,
               price: price,
               data: new Date(), // UTC date convert
               cartId: cart.map((item) => item._id),
               menuItemId: cart.map((item) => item.menuId),
               status: 'pending',
            };

            const { data } = await axiosSecure.post('/payments', payment);
            // console.log('payment saved', data);
            if (data?.deleteResult?.insertedId) {
               Swal.fire({
                  position: 'center',
                  icon: 'success',
                  title: `Payment successful!`,
                  showConfirmButton: false,
                  timer: 1500,
                  background: '#fff', // alert box background
                  color: '#000', // text color (black for readability)
                  iconColor: '#C48C3A', // your sidebar golden-brown color
                  customClass: {
                     popup: 'rounded-lg shadow-lg',
                     title: 'text-lg font-semibold',
                  },
               });
            }
            refetch();
            navigate('/dashboard/paymentHistory');
         }
      }
   };

   return (
      <div>
         <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
            <div className="border border-[#E8E8E8] p-4 rounded-lg  mx-auto ">
               <CardElement
                  options={{
                     style: {
                        base: {
                           fontSize: '16px',
                           color: '#32325d',
                           '::placeholder': {
                              color: '#a0aec0',
                           },
                        },
                        invalid: {
                           color: '#e53e3e',
                        },
                     },
                     iconStyle: 'solid',
                  }}
               />
            </div>

            <button
               className="btn btn-wide bg-[#570DF8] text-white mt-3 block mx-auto"
               type="submit"
               disabled={!stripe || !clientSecret || loading}
            >
               Pay
            </button>
         </form>
      </div>
   );
};

export default CheckoutForm;
