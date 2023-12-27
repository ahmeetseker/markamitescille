"use client";

import CompanyTag from "@/components/CompanyTag";

import React, { useState } from "react";

import SvgComponent from "../../assets/images/SvgComponent";

import { Player, Controls } from "@lottiefiles/react-lottie-player";

const question = () => {
 const [activeIndex, setActiveIndex] = useState(null);
 const toggleAccordion = (index) => {
  setActiveIndex(activeIndex === index ? null : index);
 };

 const faqData = [
  {
   question: "1) Neden MarkamiTescille?",
   answer: "İhtiyacınız olan bilgiyi ve danışmanlığı en sade haliyle sizlere sunmak için varız.",
  },
  {
   question: "2) Marka ne kadar sürede tescillenir?",
   answer: "Marka başvurunuz yapıldıktan sonra ortalama 6 ay içerisinde markanız tescil aşamasına gelmektedir.",
  },
  {
   question: "3) İstediğim marka tescil edilmiş, ne yapabilirim?",
   answer:
    "Öncelikle markalar sınıflara göre tescil edilmektedir. Düşündüğünüz markanın faaliyet göstermeyi planladığınız sektörde tescil edilip edilmediğini kontrol edin. Eğer tescili gerçekleşmemişse şansınız olabilir.Bir diğer seçenek ise düşündüğünüz markayı biraz değiştirerek özgün hale getirebilirsiniz. Başına ya da sonuna tescil edilen markadan farklı hale getirecek ekler getirmeyi deneyin.",
  },
  {
   question: "4) Marka başvurunuza RED gelmesi durumunda nasıl destek sağlıyorsunuz?",
   answer:
    "Marka tescil başvurunuz Türk Patent ve Marka Kurumu tarafından ilk inceleme aşamasında RED kararı gelmesi halinde şirketimiz tarafından bir sonra ki başvurunuz ÜCRETSİZ olarak gerçekleştirilmektedir. İlk inceleme haricinde yayım süresinde itiraz yahut dava ile markanızın tescil edilmemesi durumunda marka vekillerimiz tarafından ücretli destek sağlanmaktadır.",
  },
  {
   question: "5) Tescil aldığım markanın koruma süresi ne kadardır? Koruma sürem dolduğunda ne yapmam gerekir?",
   answer:
    "Marka tescili, başvuru tarihinden itibaren on yıl süre ile koruma sağlamaktadır. 10 yıllık süre dolmadan 6 ay önce marka uzmanlarımız tarafından yenileme işleminin yapılacağına dair tarafınıza bilgilendirme yapılır. Yenileme ücretini yatırılması ve işleminizin gerçekleştirilmesi halinde markanız 10 yıl daha koruma altında kalacaktır.",
  },
  {
   question: "6) Ödeme yöntemleriniz nelerdir? Kredi kartı ile ödeme yapabilir miyim?",
   answer: "Yasal bilgiler alanında yer alan Resmi Hesap Numaralarımıza EFT, Havale ile ödeme yapabilirsiniz, ek olarak Online ödeme ile dilerseniz tek çekim, dilerseniz taksitlendirme yapabilirsiniz. Tüm Sorular",
  },
 ];

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
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Sıkça Sorulan Sorular</h2>
     </div>
    </div>
   </section>

   <section>
    <div className="container mx-auto">
     <div className="grid lg:grid-cols-3 grid-cols-1 gap-4  mt-8   ">
      <div className="col-span-2">
       <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
         {faqData.map((item, index) => (
          <div key={index} className={`transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50 ${activeIndex === index ? "bg-gray-50" : ""}`}>
           <button type="button" className="flex items-center justify-between w-full px-4 py-5 sm:p-6" onClick={() => toggleAccordion(index)}>
            <div className="flex text-start text-lg font-semibold text-black">{item.question}</div>

            <svg className={`w-6 h-6 text-gray-400 ${activeIndex === index ? "rotate-180" : ""}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
           </button>

           <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${activeIndex === index ? "" : "hidden"}`}>
            <p>{item.answer}</p>
           </div>
          </div>
         ))}
        </div>
       </div>
      </div>

      <Player autoplay loop src="https://lottie.host/261b3f4c-4402-4dda-a9bb-430bcb0351ea/bA73f6X05C.json" style={{ height: "700px", width: "500px" }}></Player>
     </div>
    </div>
   </section>
  </>
 );
};

export default question;
