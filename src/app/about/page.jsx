import React from "react";

import CompanyTag from "@/components/CompanyTag";

import SvgComponent from "../../assets/images/SvgComponent";

const About = () => {
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
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">Hakkimizda</h2>
     </div>
    </div>
   </section>

   <section>
    <div className="container mx-auto">
     <div className="grid lg:grid-cols-3 grid-cols-1 gap-4  mt-8   ">
      <div className="col-span-2">
       <p>
        MarkamıTescille, ticaret ve rekabet ortamını zenginleştiren en önemli unsur olan markaları bir dikey uzmanlık alanı olarak seçerek öncelikli olarak marka tescili ve patent işlemleri konusunda hizmet verme amaçlı kurulmuştur. Fikri
        ve Sınai Haklar Hukuku alanında aktif olarak faaliyette bulunan şahıslarca yönetilen firmamız, Türk Patent ve Marka Kurumu nezdindeki işlemleri sektörde pek karşılanamayan bir talep olan hukuk süzgecinden geçirerek gerçekleştirmeyi
        ilke edinmiştir.
       </p>

       <p>&nbsp;</p>
       <p>
        Son yıllarda ülkemizde internet kullanım oranlarının da artmasıyla, mal ve hizmet çeşitliliğinde tüketicilerin seçim yapmakta zorlanacağı kadar büyük artışlar gözlemlenmiştir. Bu durum markalara olan rağbetin çoğalmasına ve dolaylı
        olarak fikri ve sınai hakların korunmasında yaygınlaşmaya yol açmıştır. HemenTescille; bu alandaki talebi doğrudan konusunda uzman marka ve patent vekilleri aracılığıyla karşılamaktadır. Gelişmiş teknolojik altyapısı ile
        rakiplerinden ayrılan firmamız, şeffaf bir hizmet politikası güderek kendisini müşterilerinin stratejik ortağı olarak görmektedir.
       </p>
       <p>&nbsp;</p>
       <p>
        MarkamıTescille, basit işleyişi ile marka patent konusunda alışılagelmişin dışında hızlı ve sistemli sonuç üretmeyi amaçlayan bir e-iş modelidir ve online yürütülen işlemler sayesinde markaların tescil aşamasıyla ilgili her detay
        hakkında bilgi sahibi olma olanağı vermektedir. Sadece birkaç tıklamayla daha önce birçok bürokratik konuyla vakit harcanarak yapılan işlemler, en kısa sürede ve güvenli şekilde yapılabilmektedir.
       </p>
       <p>&nbsp;</p>
       <p>markamitescille.com Onka Patent ve Danışmanlık LTD. ŞTİ. kuruluşudur</p>
      </div>

      <CompanyTag />
     </div>
    </div>
   </section>
  </>
 );
};

export default About;
