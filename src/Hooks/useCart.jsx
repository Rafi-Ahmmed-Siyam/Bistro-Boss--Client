import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';

const useCart = () => {
   const axiosSecure = useAxiosSecure();
   const { user } = useAuth();
   const { data: cart = [] } = useQuery({
      queryKey: ['cartData', user?.email],
      queryFn: async () => {
         const { data } = await axiosSecure.get(`/carts/${user?.email}`);
         return data;
      },
   });
   return { cart };
};

export default useCart;
