import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMenu from '../../Hooks/useMenu';
import ItemCard from '../../Components/ItemCard';

const tabStyles = {
   textTransform: 'uppercase',
   fontWeight: 700,
   fontSize: '16px',
   color: '#000',
   '&.Mui-selected': {
      color: '#D99904',
   },
   '&.Mui-selected::after': {
      content: '""',
      display: 'block',
      marginTop: '4px',
      width: '100%',
      height: '3px',
      backgroundColor: '#D99904',
   },
};

const ColorTabs = () => {
   const { menu } = useMenu();
   const [value, setValue] = React.useState('salad');

   const handleChange = (event, newValue) => {
      setValue(newValue);
   };

   const filteredItems = menu.filter(item => item.category === value);
   // console.log(filteredItems)
   return (
      <Box sx={{ width: '100%' }}>
         <div className='flex justify-center items-center'>
            <Tabs
               value={value}
               onChange={handleChange}
               textColor="inherit"
               TabIndicatorProps={{ style: { display: 'none' } }}
               variant="scrollable"
               scrollButtons="auto"
               allowScrollButtonsMobile
            >
               <Tab label="Salad" value="salad" sx={tabStyles} />
               <Tab label="Pizza" value="pizza" sx={tabStyles} />
               <Tab label="Soups" value="soup" sx={tabStyles} />
               <Tab label="Desserts" value="dessert" sx={tabStyles} />
               <Tab label="Drinks" value="drinks" sx={tabStyles} />
            </Tabs>


         </div>
         <div className='mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center justify-items-center gap-5 max-w-7xl mx-auto sm:px-3.5 md:px-0 lg:px-0'>
            {
               filteredItems.map(foodItem => <ItemCard key={foodItem._id} foodItem={foodItem} />)
            }
         </div>
      </Box>
   );
};

export default ColorTabs;