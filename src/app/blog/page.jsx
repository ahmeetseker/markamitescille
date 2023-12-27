import React from "react";

import SvgComponent from "../../assets/images/SvgComponent";
import Link from "next/link";

const Blog = () => {
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
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Blog</h2>
     </div>
    </div>
   </section>

   <section className="mt-5">
    <div className="container mx-auto">
     <div className="-mx-4 flex flex-wrap">
      <SingleCard
       image="https://i.ibb.co/MVv7h59/image-01.jpg"
       CardTitle="MARKA YENİLEME (NORMAL)"
       titleHref="#"
       btnHref="/blog/website-builder9s"
       CardDescription="Marka Yenileme (NORMAL) işlemi yapılacak markanın 10 Yıllık koruma süresinin dolmamış gerekmektedir."
       Button="Detaylar"
      />
      <SingleCard
       image="https://i.ibb.co/R7M31z0/image-02.jpg"
       CardTitle="MARKA YENİLEME (CEZALI)"
       titleHref="#"
       btnHref="/blog/website-builder5"
       CardDescription="Marka Yenileme (CEZALI) işlemi yapılacak markanın 10 Yıllık koruma süresinin dolmuş olup üzerinden 6 ay geçmemesi gerekmektedir."
       Button="Detaylar"
      />
      <SingleCard
       image="https://i.ibb.co/R7SrWtJ/image-03.jpg"
       CardTitle="MARKA İZLEME"
       titleHref="#"
       btnHref="/blog/website-builder6"
       CardDescription="Markanızın taklidi her an ortaya çıkabilir. Koruma altına alınan markanızın mutlaka takip edilmesi de gerekiyor."
       Button="Detaylar"
      />
      <SingleCard
       image="https://i.ibb.co/dkdXLc3/image-04.jpg"
       CardTitle="MARKA DEVİR"
       titleHref="#"
       btnHref="/blog/website-builder7"
       CardDescription="Markanın tescil edildiği mal veya hizmetlerin tamamının veya bir kısmının başka bir şahıs ya da firmaya devredilmesidir."
       Button="Detaylar"
      />
     </div>
    </div>
   </section>
  </>
 );
};

export default Blog;

const SingleCard = ({ image, Button, CardDescription, CardTitle, titleHref, btnHref }) => {
 return (
  <div className="w-full px-4 lg:w-1/2 xl:w-1/2">
   <div className="relative z-10 mb-10 block items-center overflow-hidden rounded-lg bg-gray-50 sm:flex sm:items-stretch md:items-center lg:block xl:flex xl:items-stretch">
    <div className="w-full sm:max-w-[200px] md:max-w-[250px] lg:max-w-full xl:max-w-[200px] 2xl:max-w-[240px]">
     <div className="h-[250px] sm:h-full lg:h-[250px] xl:h-full">
      <img src={image} alt="image" className="h-full w-full object-cover object-center" />
     </div>
    </div>
    <div className="w-full p-8 sm:p-6 md:p-8">
     <h3>
      <a href={titleHref} className="text-dark hover:text-primary mb-3 block text-xl font-semibold">
       {CardTitle}
      </a>
     </h3>
     <p className="text-body-color mb-5 text-base leading-relaxed">{CardDescription}</p>
     {Button && (
      <Link href={btnHref} className="border-primary text-primary hover:border-primary hover:bg-primary inline-block rounded-full border py-2 px-6 text-sm font-medium transition hover:text-white">
       {Button}
      </Link>
     )}
    </div>
    <span className="absolute bottom-2 right-2 z-[-1]">
     <svg width="22" height="30" viewBox="0 0 22 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20.3422" cy="28.6142" r="1.07573" transform="rotate(180 20.3422 28.6142)" fill="#ae101e" />
      <circle cx="20.3422" cy="10.3271" r="1.07573" transform="rotate(180 20.3422 10.3271)" fill="#ae101e" />
      <circle cx="20.3383" cy="19.3631" r="1.07573" transform="rotate(180 20.3383 19.3631)" fill="#ae101e" />
      <circle cx="20.3422" cy="1.07564" r="1.07573" transform="rotate(180 20.3422 1.07564)" fill="#ae101e" />
      <circle cx="10.7094" cy="28.6142" r="1.07573" transform="rotate(180 10.7094 28.6142)" fill="#ae101e" />
      <circle cx="10.7094" cy="10.3271" r="1.07573" transform="rotate(180 10.7094 10.3271)" fill="#ae101e" />
      <circle cx="10.7094" cy="19.3631" r="1.07573" transform="rotate(180 10.7094 19.3631)" fill="#ae101e" />
      <circle cx="10.7094" cy="1.07564" r="1.07573" transform="rotate(180 10.7094 1.07564)" fill="#ae101e" />
      <circle cx="1.07661" cy="28.6142" r="1.07573" transform="rotate(180 1.07661 28.6142)" fill="#ae101e" />
      <circle cx="1.07661" cy="10.3271" r="1.07573" transform="rotate(180 1.07661 10.3271)" fill="#ae101e" />
      <circle cx="1.07661" cy="19.3631" r="1.07573" transform="rotate(180 1.07661 19.3631)" fill="#ae101e" />
      <circle cx="1.07661" cy="1.07564" r="1.07573" transform="rotate(180 1.07661 1.07564)" fill="#ae101e" />
     </svg>
    </span>
   </div>
  </div>
 );
};
