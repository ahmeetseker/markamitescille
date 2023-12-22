import React from 'react'

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

const CompanyTag = () => {
  return (
    <Card   >
    <CardHeader>
      <img width={100} src="	https://www.markamitescille.com/wp-content/uploads/2023/06/logo.png" alt="" />
  
      <CardTitle className='space-y-4'>
          
          <small className="text-[#ae101e]"> Künye</small>
          <p> Şirket Künyesi</p> 
  
         <p className="text-base">ONKA PATENT VE DANISMANLIK LIMITED SIRKETI</p> 
         
          </CardTitle>
  
    </CardHeader>
    <CardContent className="space-y-2">
          <p className="font-bold">Vergi Dairesi:</p> 
               <p>ESENYURT</p>  
  
  
              <p className="font-bold" >Vergi No:</p> 
             <p>6430781198</p>  
  
  
            <p className="font-bold" > Adres:</p> 
            <p>Yakuplu, Geçit Sk. NO:17/6, 34524 Beylikdüzü/İstanbul</p>  
  
  
           <p className="font-bold"  > Mersis No:</p>  
             <p   >0643078119800001</p> 
  
  
              <p className="font-bold"  >Ticaret Sicil No:</p> 
            <p>408191-5</p>  
    </CardContent>
  
          </Card>
  )
}

export default CompanyTag