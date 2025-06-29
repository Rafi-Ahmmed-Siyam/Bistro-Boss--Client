
import { Parallax } from 'react-parallax';
const Cover = ({ bgImg, title, containerClass, subTitle, height, hedingTextSize, paraTextSize }) => {
   return (
      <Parallax
         blur={{ min: -20, max: 20 }}
         bgImage={bgImg}
         bgImageAlt="the dog"
         strength={-200}
      >
         <div>
            <div
               className={`hero ${height}  `}

            >

               <div className="hero-content text-neutral-content text-center">
                  <div className={`w-[330px] md:w-[600px] lg:w-5xl min-h-[150px] md:min-h-[250px] lg:min-h-[300px] flex justify-center items-center bg-black/50 `} >
                     <div className={`${containerClass}`}>
                        <h1 className={`mb-5 ${hedingTextSize}  font-bold font-cinzel uppercase text-white`}>{title}</h1>
                        <p className={`mb-5 font-cinzel uppercase font-medium ${paraTextSize}  text-white`}>
                           {subTitle}
                        </p>
                     </div>

                  </div>
               </div>
            </div>
         </div>
      </Parallax>

   );
};

export default Cover;