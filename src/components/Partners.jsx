"use client";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Brand = () => {
 return (
  <>
   <section className="bg-white ">
    <div className="container  mt-2  h-[50vh] text-center">
     <h2 className="text-3xl font-bold py-8 leading-tight text-black sm:text-4xl lg:text-5xl">Çözüm Ortaklarımız</h2>

     <Carousel
      arrows
      autoPlaySpeed={3000}
      centerMode={false}
      draggable
      infinite
      keyBoardControl
      minimumTouchDrag={80}
      responsive={{
       desktop: {
        breakpoint: {
         max: 3000,
         min: 1024,
        },
        items: 4,
        partialVisibilityGutter: 40,
       },
       mobile: {
        breakpoint: {
         max: 464,
         min: 0,
        },
        items: 1,
        partialVisibilityGutter: 30,
       },
       tablet: {
        breakpoint: {
         max: 1024,
         min: 464,
        },
        items: 2,
        partialVisibilityGutter: 30,
       },
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={1}
      swipeable
     >
      <SingleImage Alt="Trendyol" href="./" imgSrc="https://hementescille.com/_next/image?url=https%3A%2F%2Fcms.hementescille.com%2Fuploads%2Ftrendyol_logo_132adc0069.png&w=384&q=75" />
      <SingleImage Alt="Trendyol" href="./" imgSrc="https://hementescille.com/_next/image?url=https%3A%2F%2Fcms.hementescille.com%2Fuploads%2Fhepsiburadaylogo_568c346d3c.png&w=384&q=75" />
      <SingleImage Alt="Trendyol" href="./" imgSrc="https://hementescille.com/_next/image?url=https%3A%2F%2Fcms.hementescille.com%2Fuploads%2Fhepsiburadaylogo_568c346d3c.png&w=384&q=75" />
      <SingleImage Alt="Trendyol" href="./" imgSrc="https://hementescille.com/_next/image?url=https%3A%2F%2Fcms.hementescille.com%2Fuploads%2Fhepsiburadaylogo_568c346d3c.png&w=384&q=75" />
     </Carousel>
    </div>
   </section>
   {/* ====== Brands Section End */}
  </>
 );
};

export default Brand;

const SingleImage = ({ href, imgSrc, Alt }) => {
 return (
  <>
   <a href={href} className="mx-4 flex w-[150px] items-center py-4 justify-center  2xl:w-[180px]">
    <img src={imgSrc} alt={Alt} className="h-[150px]" />
   </a>
  </>
 );
};
