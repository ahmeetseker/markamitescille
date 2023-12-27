"use client";
import React, { useState } from "react";

import SvgComponent from "../../assets/images/SvgComponent";
import { toast } from "sonner";

import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import CompanyTag from "@/components/CompanyTag";

const ibanNumber = () => {
 const initialData = [
  {
   copiedText: "TR13 0011 1000 0000 0114 8090 86",
   bankInfo: {
    name: "QNB FİNANSBANK",
    currency: "TRY",
   },
  },
  {
   copiedText: "TR92 0020 5000 0980 9138 4000 01",
   bankInfo: {
    name: "GARANTİ BANKASI",
    currency: "TRY",
   },
  },
  // ... diğer kartlar
 ];

 const [cardData, setCardData] = useState(initialData);

 const handleCopyClick = (copiedText) => {
  // Panoya metin kopyala
  navigator.clipboard
   .writeText(copiedText)
   .then(() => {
    // Kopyalandı bildirimi
    toast("Kopyalandı", {});
    console.log("Metin kopyalandı:", copiedText);
   })
   .catch((err) => {
    console.error("Metin kopyalanırken bir hata oluştu:", err);
   });
 };

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
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Hesap Numarasi</h2>
     </div>
    </div>
   </section>

   <section className="mt-5">
    <div className="container">
     <div className="grid lg:grid-cols-3 grid-cols-1 gap-4  ">
      <div className="col-span-2">
       {cardData.map((data, index) => (
        <Card key={index} className="w-full mb-4">
         <CardHeader>
          <CardDescription>ONKA PATENT VE DANIŞMANLIK LİMİTED ŞİRKETİ.</CardDescription>

          <div className="flex justify-between items-center">
           <CardTitle>{data.copiedText}</CardTitle>

           <Button onClick={() => handleCopyClick(data.copiedText)}>Kopyala</Button>
          </div>
         </CardHeader>

         <CardFooter className="flex flex-col items-end">
          <p>{data.bankInfo.name}</p>
          <p>{data.bankInfo.currency}</p>
         </CardFooter>
        </Card>
       ))}
      </div>

      <CompanyTag className="mt-5" />
     </div>
    </div>
   </section>
  </>
 );
};

export default ibanNumber;
