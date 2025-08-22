import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();

   const {
      data: cart = [],
      isPending,
      isError,
   } = useQuery({
      queryKey: ['cartData', user?.email],
      enabled: !!user?.email,
      queryFn: async () => {
         const { data } = await axiosSecure.get(`/carts/${user?.email}`);
         return data;
      },
   });

   const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
   return { cart, cartCount, isPending, isError };
};

export default useCart;
