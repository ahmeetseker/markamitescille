"use client";
import React from "react";
import { Radar } from "lucide-react";
import { ShoppingBasket } from "lucide-react";
import { ShieldCheck } from "lucide-react";
import { Button } from "./ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Card = () => {
 return (
  <section className="bg-white pt-20 pb-10 lg:pt-[120px] lg:pb-20">
   <div className="container mx-auto">
    <h2 className="text-center text-4xl	">Nasıl Çalışır?</h2>

    <div className="flex justify-between ml-8    mr-8   mt-4 mb-4">
     <div className="flex items-center">
      <Radar className="pr-2" size={48} color="#ea2a2a" />
      <span className="text-xl">Sorgula</span>
     </div>

     <div className="flex items-center ">
      <ShoppingBasket className="pr-2" size={48} color="#ea2a2a" strokeWidth={1.5} />
      <span className="text-xl">Basvur</span>
     </div>

     <div className="flex items-center ">
      <ShieldCheck className="pr-2" size={48} color="#ea2a2a" strokeWidth={1.5} />
      <span className="text-xl">Tescille</span>
     </div>
    </div>
    <div>
     <h2 className="font-bold text-2xl mb-4 ">Hizmetlerimiz</h2>
    </div>
    <div className="-mx-4 flex flex-wrap justify-center">
     <SingleCard
      image="https://i.ibb.co/z7HBQDM/image-01.jpg"
      CardTitle="MARKA YENİLEME "
      CardSubtitle="NORMAL"
      titleHref="/services/website-builder"
      CardDescription="Marka Yenileme (NORMAL) işlemi yapılacak markanın 10 Yıllık koruma süresinin dolmamış gerekmektedir."
     />
     <SingleCard
      image="https://i.ibb.co/zf4Xq4V/image-02.jpg"
      CardTitle="MARKA YENİLEME "
      CardSubtitle="CEZALI"
      titleHref="/services/website-builder2"
      CardDescription="Marka Yenileme (CEZALI) işlemi yapılacak markanın 10 Yıllık koruma süresinin dolmuş olup üzerinden 6 ay geçmemesi gerekmektedir"
     />
     <SingleCard
      image="https://i.ibb.co/z7HBQDM/image-01.jpg"
      CardTitle="MARKA İZLEME"
      CardSubtitle="İZLEME"
      titleHref="/services/website-builder3"
      CardDescription="Markanızın taklidi her an ortaya çıkabilir. Koruma altına alınan markanızın mutlaka takip edilmesi de gerekiyor."
     />
     <SingleCard
      image="https://i.ibb.co/z7HBQDM/image-01.jpg"
      CardTitle="MARKA DEVİR"
      CardSubtitle="DEVİR"
      titleHref="/services/website-builder4"
      CardDescription="Markanın tescil edildiği mal veya hizmetlerin tamamının veya bir kısmının başka bir şahıs ya da firmaya devredilmesidir."
     />
     <SingleCard image="https://i.ibb.co/z7HBQDM/image-01.jpg" CardTitle="MARKA YAYINA İTİRAZ" CardSubtitle="İTİRAZ" titleHref="#" CardDescription="Marka tescil belgesinin verilmesine karşı kurum nezdinde itirazda bulunabilirler." />

     <SingleCard
      image="https://i.ibb.co/z7HBQDM/image-01.jpg"
      CardTitle="MARKA TESCIL BELGESI DUZENLEME"
      CardSubtitle="DUZENLEME"
      titleHref="/services/website-builder5"
      CardDescription="Marka tescilinden sonra belge ücreti, başvurudan itibaren iki ay içinde ödenip kuruma teslim edilmelidir."
     />
    </div>

    <Link href="./services">
     <Button>
      Tüm Hizmetlerimiz
      <ChevronRight size={20} />
     </Button>
    </Link>
   </div>
  </section>
 );
};

export default Card;

const SingleCard = ({ image, CardDescription, CardTitle, CardSubtitle, titleHref }) => {
 return (
  <div className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3">
   <div className="relative mb-10 flex w-full items-center border border-[#E5E7EB] bg-white p-5">
    <span className="bg-primary absolute top-0 left-0 h-[3px] w-full"></span>
    <div className="mr-4 w-full">
     <span className="text-primary mb-3 block text-xs font-semibold">{CardSubtitle}</span>
     <h3>
      <Link href={titleHref} className="text-dark hover:text-primary mb-4 block text-sm font-semibold">
       {CardTitle}
      </Link>
     </h3>
     <p className="text-body-color text-xs">{CardDescription}</p>
    </div>
    <div className="mx-auto w-full max-w-[120px] sm:max-w-[140px]">
     <img src={image} alt="image" className="w-full" />
    </div>
   </div>
  </div>
 );
};
