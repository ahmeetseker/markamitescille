"use client";

import React from "react";
import SvgComponent from "../../assets/images/SvgComponent";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

import { Input } from "@/components/ui/input";

const About = () => {
 const formSchema = z.object({
  lastName: z.string({}).min(2, {
   message: "Minumum 2 karakter olmalı.",
  }),

  fistName: z.string().min(2, {
   message: "Minumum 2 karakter olmalı.",
  }),

  phoneNumber: z.string().refine((value) => /^\d{10}$/.test(value), {
   message: "Lütfen geçerli bir 10 haneli telefon numarası giriniz.",
  }),
  email: z.string().email({
   message: "Lütfen e-posta adresinizi giriniz.",
  }),

  bio: z
   .string()
   .min(10, {
    message: "Mesajınız en az 10 karakter olmalıdır.",
   })
   .max(160, {
    message: "Mesajınız 30 karakterden uzun olmamalıdır..",
   }),
 });

 const onSubmit = (data) => {
  console.log(data);
 };

 const form = useForm({
  resolver: zodResolver(formSchema),
 });

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
      <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">İletişim</h2>
     </div>
    </div>
   </section>

   <section className="overflow-hidden py-24">
    <div className="container mx-auto">
     <div className="flex flex-wrap justify-center">
      <div className="w-full px-4 xl:w-10/12">
       <div className="bg-[#5f1f27] -mx-4 mb-16 flex flex-wrap py-14 px-5 sm:p-14">
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
         <div className="mb-5 flex lg:mb-0">
          <div className="mr-4">
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
             d="M28.4996 5.4502H3.49961C1.89961 5.4502 0.599609 6.7502 0.599609 8.3502V23.7002C0.599609 25.3002 1.89961 26.6002 3.49961 26.6002H28.4996C30.0996 26.6002 31.3996 25.3002 31.3996 23.7002V8.3502C31.3996 6.7502 30.0996 5.4502 28.4996 5.4502ZM28.4996 7.2002C28.7496 7.2002 28.9496 7.2502 29.1496 7.4002L16.6996 14.9502C16.2496 15.2002 15.7496 15.2002 15.2996 14.9502L2.84961 7.4002C3.04961 7.3002 3.24961 7.2002 3.49961 7.2002H28.4996ZM28.4996 24.8002H3.49961C2.89961 24.8002 2.34961 24.3002 2.34961 23.6502V9.1502L14.3496 16.4502C14.8496 16.7502 15.3996 16.9002 15.9496 16.9002C16.4996 16.9002 17.0496 16.7502 17.5496 16.4502L29.5496 9.1502V23.6502C29.6496 24.3002 29.0996 24.8002 28.4996 24.8002Z"
             fill="white"
            />
           </svg>
          </div>
          <div>
           <h5 className="text-lg font-semibold text-white">Email</h5>
           <p className="text-base font-medium text-white">info@example.com</p>
           <p className="text-base font-medium text-white">sales@yourmail.com</p>
          </div>
         </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
         <div className="mb-5 flex lg:mb-0">
          <div className="mr-4">
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
             d="M28.8493 18.45C28.7493 17.3 27.7993 16.5 26.6493 16.5H5.34935C4.19935 16.5 3.29935 17.35 3.14935 18.45L2.09935 28.95C2.04935 29.55 2.24935 30.2 2.64935 30.65C3.04935 31.1 3.64935 31.35 4.29935 31.35H27.7493C28.3493 31.35 28.9493 31.1 29.3993 30.65C29.7993 30.2 29.9993 29.6 29.9493 28.95L28.8493 18.45ZM28.0493 29.5C27.9993 29.55 27.8993 29.65 27.6993 29.65H4.29935C4.14935 29.65 3.99935 29.55 3.94935 29.5C3.89935 29.45 3.79935 29.35 3.84935 29.15L4.89935 18.6C4.89935 18.35 5.09935 18.2 5.34935 18.2H26.6993C26.9493 18.2 27.0993 18.35 27.1493 18.6L28.1993 29.15C28.1493 29.3 28.0993 29.45 28.0493 29.5Z"
             fill="white"
            />
            <path
             d="M16 20.4004C14.05 20.4004 12.5 21.9504 12.5 23.9004C12.5 25.8504 14.05 27.4004 16 27.4004C17.95 27.4004 19.5 25.8504 19.5 23.9004C19.5 21.9504 17.95 20.4004 16 20.4004ZM16 25.6504C15.05 25.6504 14.25 24.8504 14.25 23.9004C14.25 22.9504 15.05 22.1504 16 22.1504C16.95 22.1504 17.75 22.9504 17.75 23.9004C17.75 24.8504 16.95 25.6504 16 25.6504Z"
             fill="white"
            />
            <path
             d="M3.3 9.80019C3.4 12.0002 5.35 12.9002 6.35 12.9002H9.85C9.9 12.9002 9.9 12.9002 9.9 12.9002C11.4 12.8002 12.9 11.8002 12.9 9.80019V8.6002C14.55 8.6002 18.35 8.6002 20 8.6002V9.80019C20 11.8002 21.5 12.8002 23 12.9002H23.05H26.5C27.5 12.9002 29.45 12.0002 29.55 9.80019C29.55 9.6502 29.55 9.10019 29.55 8.6002C29.55 8.2002 29.55 7.8502 29.55 7.8002C29.55 7.7502 29.55 7.70019 29.55 7.70019C29.4 6.3002 28.9 5.1502 28.05 4.2502L28 4.20019C26.75 3.05019 25.25 2.4002 24.1 2.0002C20.75 0.700195 16.55 0.700195 16.35 0.700195C13.4 0.750195 11.5 1.0002 8.65 2.0002C7.55 2.3502 6.05 3.0002 4.8 4.1502L4.75 4.20019C3.9 5.10019 3.4 6.2502 3.25 7.6502C3.25 7.7002 3.25 7.7502 3.25 7.7502C3.25 7.85019 3.25 8.1502 3.25 8.5502C3.3 9.0002 3.3 9.60019 3.3 9.80019ZM6 5.4002C7 4.5002 8.25 3.9502 9.3 3.55019C11.9 2.6002 13.6 2.4002 16.45 2.3502C16.65 2.3502 20.55 2.4002 23.55 3.55019C24.6 3.9502 25.85 4.4502 26.85 5.4002C27.4 6.0002 27.75 6.8002 27.85 7.7502C27.85 7.9002 27.85 8.1502 27.85 8.5502C27.85 9.05019 27.85 9.60019 27.85 9.75019C27.8 10.9002 26.7 11.1502 26.55 11.1502H23.1C22.6 11.1002 21.8 10.9002 21.8 9.80019V7.7502C21.8 7.35019 21.55 7.0502 21.2 6.9002C20.9 6.8002 12.15 6.8002 11.85 6.9002C11.5 7.0002 11.25 7.35019 11.25 7.7502V9.80019C11.25 10.9002 10.45 11.1002 9.95 11.1502H6.5C6.35 11.1502 5.25 10.9002 5.2 9.75019C5.2 9.60019 5.2 9.05019 5.2 8.5502C5.2 8.1502 5.2 7.9502 5.2 7.8002C5.1 6.8002 5.45 6.0002 6 5.4002Z"
             fill="white"
            />
           </svg>
          </div>
          <div>
           <h5 className="text-lg font-semibold text-white">Telefon Numarası</h5>
           <p className="text-base font-medium text-white">+09 098 2345 332</p>
           <p className="text-base font-medium text-white">+77 904 5673 345</p>
          </div>
         </div>
        </div>
        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
         <div className="mb-5 flex lg:mb-0">
          <div className="mr-4">
           <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
             d="M16.3496 7.44922C16.9019 7.44922 17.3496 7.0015 17.3496 6.44922C17.3496 5.89693 16.9019 5.44922 16.3496 5.44922C15.7973 5.44922 15.3496 5.89693 15.3496 6.44922C15.3496 7.0015 15.7973 7.44922 16.3496 7.44922Z"
             fill="white"
            />
            <path
             d="M29.0996 8.94961L20.6496 6.99961C20.6996 6.79961 20.6996 6.64961 20.6996 6.49961C20.6996 4.04961 18.7996 2.09961 16.3496 2.09961C13.9496 2.09961 11.9996 4.04961 11.9996 6.49961C11.9996 7.09961 12.2496 7.89961 12.5996 8.74961L11.1996 9.04961L4.34961 7.09961C3.44961 6.84961 2.49961 6.99961 1.74961 7.59961C0.999609 8.14961 0.599609 8.99961 0.599609 9.94961V24.7496C0.599609 26.0496 1.49961 27.2496 2.74961 27.5996L11.1496 29.9496L20.8496 27.9496L27.7496 29.4996C27.9496 29.5496 28.1996 29.5996 28.3996 29.5996C29.0496 29.5996 29.6996 29.3996 30.2496 28.9496C30.9496 28.3996 31.3496 27.5496 31.3496 26.6496V11.7996C31.3996 10.3996 30.4496 9.24961 29.0996 8.94961ZM16.3996 3.84961C17.8496 3.84961 18.9996 4.99961 18.9996 6.49961C18.9996 7.29961 17.9996 9.34961 16.3996 11.7996C14.7996 9.39961 13.7996 7.34961 13.7996 6.49961C13.7496 5.04961 14.9496 3.84961 16.3996 3.84961ZM13.4496 10.3496C14.0496 11.3996 14.6996 12.4496 15.3496 13.3996C15.5996 13.7496 15.9496 13.9496 16.3496 13.9496C16.7496 13.9496 17.1496 13.7496 17.3496 13.3996C18.2496 12.0496 19.2996 10.4496 19.9496 8.99961V26.3496L12.0496 27.9996V10.6496L13.4496 10.3496ZM2.39961 24.6996V9.94961C2.39961 9.54961 2.54961 9.19961 2.84961 8.99961C3.14961 8.74961 3.54961 8.69961 3.89961 8.79961L10.2996 10.5996V27.8996L3.24961 25.8996C2.74961 25.7496 2.39961 25.2496 2.39961 24.6996ZM29.6496 26.6496C29.6496 26.9996 29.4996 27.3496 29.1996 27.5996C28.8996 27.8496 28.5496 27.8996 28.1996 27.8496L21.7496 26.3496V8.99961L28.6996 10.5996C29.2496 10.7496 29.6496 11.1996 29.6496 11.7496V26.6496Z"
             fill="white"
            />
           </svg>
          </div>
          <div>
           <h5 className="text-lg font-semibold text-white">Office Address</h5>
           <p className="text-base font-medium text-white">4571 Sugar Camp Road, Owatonna, Minnesota, 55060</p>
          </div>
         </div>
        </div>
       </div>
      </div>
     </div>

     <div className="-mx-4 flex flex-wrap justify-center">
      <div className="w-full px-4 lg:w-7/12 xl:w-6/12">
       <div className="mb-12 lg:mb-0 lg:mr-4">
        <Form {...form}>
         <form onSubmit={form.handleSubmit(onSubmit)} className=" w-full space-y-8">
          <FormField
           control={form.control}
           name="fistName"
           render={({ field }) => (
            <FormItem>
             <FormLabel>İsim</FormLabel>
             <FormControl>
              <Input placeholder="İsim" {...field} />
             </FormControl>

             <FormMessage className="text-[#5f1f27]" />
            </FormItem>
           )}
          />

          <FormField
           control={form.control}
           name="lastName"
           render={({ field }) => (
            <FormItem>
             <FormLabel>Soyisim</FormLabel>
             <FormControl>
              <Input placeholder="Soyisim" {...field} />
             </FormControl>

             <FormMessage className="text-[#5f1f27]" />
            </FormItem>
           )}
          />

          <FormField
           control={form.control}
           name="phoneNumber"
           render={({ field }) => (
            <FormItem>
             <FormLabel>Numara</FormLabel>
             <FormControl>
              <Input type="tel" placeholder="1234567890" {...field} />
             </FormControl>
             <FormMessage className="text-[#5f1f27]" />
            </FormItem>
           )}
          />

          <FormField
           control={form.control}
           name="email"
           render={({ field }) => (
            <FormItem>
             <FormLabel>Email</FormLabel>
             <FormControl>
              <Input type="email" placeholder="example@example.com" {...field} />
             </FormControl>
             <FormMessage className="text-[#5f1f27]" />
            </FormItem>
           )}
          />

          <FormField
           control={form.control}
           name="bio"
           render={({ field }) => (
            <FormItem>
             <FormLabel>Mesaj</FormLabel>
             <FormControl>
              <Textarea placeholder="Mesajinizi yazin" className="resize-none" {...field} />
             </FormControl>

             <FormMessage className="text-[#5f1f27]" />
            </FormItem>
           )}
          />
          <Button type="submit">Gönder</Button>
         </form>
        </Form>
       </div>
      </div>
      <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
       <div className="map-container">
        <object
         style={{ border: "0", height: "450px", width: "100%" }}
         data="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3102.7887109309127!2d-77.44196278417968!3d38.95165507956235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDU3JzA2LjAiTiA3N8KwMjYnMjMuMiJX!5e0!3m2!1sen!2sbd!4v1545420879707"
        ></object>
       </div>
      </div>
     </div>
    </div>
   </section>
  </>
 );
};

export default About;