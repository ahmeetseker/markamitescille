"use client";

import React from "react";

import SvgComponent from "../../assets/images/SvgComponent";
import { FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import CompanyTag from "@/components/CompanyTag";

const pdfContract = () => {
 const handleDownload = (filename) => {
  const downloadUrl = `/pdfs/${filename}.pdf`;
  const link = document.createElement("a");
  link.href = downloadUrl;
  link.download = `${filename}.pdf`;
  link.click();
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
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Yasal Bilgiler</h2>
     </div>
    </div>
   </section>

   <div className="container mx-auto">
    <section>
     <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      <div className="col-span-1 space-y-4 mt-4">
       <Card className="flex items-center justify-between	 p-4 ">
        <div className="flex gap-2">
         <FileText color="#b30000" strokeWidth={1.75} />
         <p>Mesafeli Satıs Sozlesmesi</p>
        </div>
        <Button onClick={() => handleDownload("Mesafeli-Satıs-Sozlesmesi")}> İndir </Button>
       </Card>

       <Card className="flex items-center justify-between	 p-4 ">
        <div className="flex gap-2 items-center">
         <FileText color="#b30000" strokeWidth={1.75} />
         <p>Fiyat Politikası Ve Kosullar</p>
        </div>
        <Button onClick={() => handleDownload("Fiyat-Politikası-Ve-Kosullar")}> İndir </Button>
       </Card>

       <Card className="flex items-center justify-between	 p-4 ">
        <div className="flex gap-2">
         <FileText color="#b30000" strokeWidth={1.75} />
         <p>Gizlilik Sözleşmesi</p>
        </div>
        <Button onClick={() => handleDownload("Gizlilik-Sozlesmesi")}> İndir </Button>
       </Card>
      </div>

      <div className="mt-4 col-span-1 ">
       <CompanyTag />
      </div>
     </div>
    </section>
   </div>
  </>
 );
};

export default pdfContract;
