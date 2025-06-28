import { useEffect, useState } from "react";


const useMenu = () => {
   const [menu, setMenu] = useState([]);
   const [loading, setLoding] = useState(true)
   useEffect(() => {

      fetch('Menu.json')
         .then((res) => res.json())
         .then((data) => {
            setMenu(data)
            setLoding(false)
         })
   }, [])
   // console.log(menu)

   return { menu, loading }

};

export default useMenu;