import useAxiosPublic from './Hooks/useAxiosPublic';

const image_hosting_KEY = import.meta.env.VITE_ImageBB_Hosting_KEY;
const image_hosting_API = `https://api.imgbb.com/1/upload?key=${image_hosting_KEY}`;

export const uploadImage = async (imgFile) => {
   const imageFile = { image: imgFile[0] };
   const axiosPublic = useAxiosPublic();
   const { data } = await axiosPublic.post(image_hosting_API, imageFile, {
      headers: { 'Content-Type': 'multipart/form-data' },
   });
   console.log(data);
   return data.data;
};
