import React from "react";

import SvgComponent from "../../../assets/images/SvgComponent";

import BlogDetails from "../../../components/BlogDetail";

const BlogDetail = ({ params }) => {
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
    <BlogDetails>{params.slug}</BlogDetails>
   </section>
  </>
 );
};

export default BlogDetail;