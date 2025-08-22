import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useMenu = () => {
   const axiosPublic = useAxiosPublic();

   const { data: menu, isPending } = useQuery({
      queryKey: ['menuData'],
      queryFn: async () => {
         const { data } = await axiosPublic.get(
            `${import.meta.env.VITE_URL}/menu`
         );
         return data;
      },
   });

   return { menu, isPending };
};

export default useMenu;
