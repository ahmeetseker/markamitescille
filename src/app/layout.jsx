"use client";
import { Inter } from "next/font/google";
import "./global.css";

import Header from "../components/Header";
import { Toaster } from "@/components/ui/sonner";
import { FloatingWhatsApp } from "react-floating-whatsapp";

import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
 return (
  <html lang="en">
   <body className={inter.className}>
    <Header />
    {children}
    <FloatingWhatsApp
     avatar={"/logo.png"}
     placeholder={"Mesaj"}
     phoneNumber={"+5555555555"}
     chatMessage={"Merhaba! Nasıl yardımcı olabiliriz?"}
     accountName={"Markami Tescille "}
     statusMessage={"Genellikle yarım saat içerisinde cevap verir"}
    />
    <Toaster />
    <Footer />
   </body>
  </html>
 );
}
