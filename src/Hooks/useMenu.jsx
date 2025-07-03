import axios from "axios";
import { useEffect, useState } from "react";


const useMenu = () => {
   const [menu, setMenu] = useState([]);
   const [loading, setLoding] = useState(true)
   useEffect(() => {
      getMenuData();
   }, []);

   const getMenuData = async () => {
      const { data } = await axios.get(`${import.meta.env.VITE_URL}/menu`);
      setLoding(false)
      setMenu(data)
   }

   return { menu, loading }

};

export default useMenu;