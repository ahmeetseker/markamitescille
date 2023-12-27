"use client";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";


const Hero12 = () => {
 return (
  <>
   <Navbar />
  </>
 );
};

export default Hero12;

const Navbar = () => {
 const [open, setOpen] = useState(false);

 return (
  <>
   {/* <!-- ====== Navbar Section Start --> */}
   <header>
    <div className="h-[120px]">
     <div className=" z-[9999] flex items-center shadow-sticky justify-between left-0 z-40 w-full transition-all duration-300 top-0  fixed bg-white/80 py-3 shadow-sticky backdrop-blur-[15px] backdrop-saturate-[150%] dark:bg-tg-dark-bg lg:py-0">
      <div className="w-60 max-w-full px-4">
       <a href="/#" className="block w-full py-5">
        <img src="https://www.markamitescille.com/wp-content/uploads/2023/06/logo.png" alt="logo" className="w-full" />
       </a>
      </div>
      <div className="flex w-full items-center justify-between px-4">
       <div>
        <button onClick={() => setOpen(!open)} className={` ${open && "navbarTogglerActive"} ring-primary bg-black absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden`}>
         <span className="bg-white relative my-[6px] block h-[2px] w-[30px]"></span>
         <span className="bg-white relative my-[6px] block h-[2px] w-[30px]"></span>
         <span className="bg-white relative my-[6px] block h-[2px] w-[30px]"></span>
        </button>
        <nav className={`absolute right-4 top-full z-40 w-full max-w-[250px] rounded-lg bg-white py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:shadow-none ${!open && "hidden"} `}>
         <ul className="block lg:flex">
          <ListItem NavLink="/#">Anasayfa</ListItem>
          <ListItem NavLink="/about">Hakkımızda</ListItem>
          <ListItem NavLink="/services">Hizmetlerimiz</ListItem>
          <ListItem NavLink="/blog">Blog</ListItem>
          <ListItem NavLink="/contact">İletişim</ListItem>
         </ul>
        </nav>
       </div>
       <div className="hidden justify-end pr-16 sm:flex lg:pr-0">

       <a href="tel:+123456789">
       <Button  className="rounded-full bg-black py-6 px-7 text-base font-medium text-white hover:bg-opacity-90">
         02129510203
        </Button>
       </a>
       
       
       </div>
      </div>
     </div>
    </div>
   </header>
   {/* <!-- ====== Navbar Section End -->    */}
  </>
 );
};

const ListItem = ({ children, NavLink }) => {
 return (
  <>
   <li>
    <Link href={NavLink} className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex">
     {children}
    </Link>
   </li>
  </>
 );
};
