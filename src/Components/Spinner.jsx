import React from 'react';
import { FadeLoader } from 'react-spinners';

const Spinner = () => {
   return (
      <div className="h-52 lg:min-h-[calc(100vh-392px)] flex justify-center items-center">
         <FadeLoader color="#D1A054" />
      </div>
   );
};

export default Spinner;
