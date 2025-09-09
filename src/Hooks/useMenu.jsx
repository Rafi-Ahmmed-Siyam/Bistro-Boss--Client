import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
   const axiosPublic = useAxiosPublic();

   const {
      data: menu,
      isPending,
      isError,
      refetch,
   } = useQuery({
      queryKey: ['menuData'],
      queryFn: async () => {
         const { data } = await axiosPublic.get(`/menu`);
         return data;
      },
   });

   return { menu, isPending, refetch };
};

export default useMenu;
