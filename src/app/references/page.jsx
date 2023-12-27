import React from "react";

import SvgComponent from "../../assets/images/SvgComponent";

const references = () => {
 return (
  <>
   <section className="relative py-10 overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32">
    <div className="absolute inset-0">
     <SvgComponent />
    </div>

    <div className="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"></div>

    <div className="absolute inset-0 block bg-black/60 md:hidden"></div>

    <div className="relative px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
     <div className="text-center md:w-2/3 lg:w-1/2 xl:w-1/3 md:text-left">
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Mutlu Müşterilerimiz</h2>
     </div>
    </div>
   </section>

   <section className="mt-5">
    <div className="container mx-auto">
     <div className="w-full px-4 ">
      <div className="flex flex-wrap items-center justify-center">
       <SingleImage href="#" Alt="Brand Image" imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/graygrids.svg" />
       <SingleImage href="#" Alt="Brand Image" imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/lineicons.svg" />
       <SingleImage href="#" Alt="Brand Image" imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/uideck.svg" />
       <SingleImage href="#" Alt="Brand Image" imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ayroui.svg" />
       <SingleImage href="#" Alt="Brand Image" imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/plainadmin.svg" />
       <SingleImage href="#" Alt="Brand Image" imgSrc="https://cdn.tailgrids.com/1.0/assets/images/brands/ecom.svg" />
      </div>
     </div>
    </div>
   </section>
  </>
 );
};

export default references;

const SingleImage = ({ href, imgSrc, Alt }) => {
 return (
  <>
   <a href={href} className="border-gray-[#dadada] flex h-[110px] max-w-[188px] items-center justify-center !bg-opacity-10 border border-opacity-0 px-7 hover:bg-[#9a0e1b]">
    <img src={imgSrc} alt={Alt} className="w-full h-10" />
   </a>
  </>
 );
};
