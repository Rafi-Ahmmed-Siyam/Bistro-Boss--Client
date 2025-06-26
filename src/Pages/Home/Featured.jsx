import React from 'react';
import bgImg from '../../assets/home/featured.jpg'
import SectionTitle from '../../Components/SectionTitle';

const Featured = () => {
   return (
      <section
         className=' mt-28  min-h-[700px]'
         style={{
            backgroundImage: `url(${bgImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",

         }}>
         <div className='bg-linear-to-b from-[#151515B3] to-[#151515B3] min-h-[700px] flex justify-center items-center'>
            <div className=''>
               <div className='text-white'>
                  <SectionTitle subHeading={"Check it out"} heading={"FROM OUR MENU"} />
               </div>
               <div className='flex justify-center items-center gap-16'>
                  <div className=''>
                     <img className='max-w-[550px]' src={bgImg} alt="" />
                  </div>
                  <div className='text-white max-w-[600px]'>
                     <p className='mb-1'>March 20, 2023</p>
                     <h2 className='mb-1'>WHERE CAN I GET SOME?</h2>
                     <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim, voluptatum in perferendis nemo ex necessitatibus totam non est repellat perspiciatis quis! Fugiat iste maiores fugit natus! Ducimus atque cum nostrum molestiae odit ipsam eaque culpa sequi, fugit, est enim error excepturi minima! Iure quaerat doloremque minus eos ab in ipsam aliquam rem neque nihil harum exercitationem molestiae nisi quisquam soluta, accusantium, inventore labore ut, velit doloribus. Expedita minus </p>
                     <button className='border-b-2 pb-3 px-4 uppercase rounded-b-lg text-sm cursor-pointer font-semibold hover:text-yellow-500 active:scale-95 mt-7'>Read More</button>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default Featured;