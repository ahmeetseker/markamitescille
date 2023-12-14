
import { Checkbox } from "@/components/ui/checkbox"

  
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
  
import React from 'react'

const checkbox = () => {
  return (

<>

<div className="flex">
<div className="flex  flex-col gap-2 ">


<HoverCard >
  <HoverCardTrigger>

  <div className="flex items-center space-x-2">
    <Checkbox id="class" />
    <label
      htmlFor="class"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      1
    </label>
    </div> 
  </HoverCardTrigger>

  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
  
</HoverCard>

<HoverCard>
  <HoverCardTrigger>

  <div className="flex items-center space-x-2">
    <Checkbox id="class" />
    <label
      htmlFor="class"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      2
    </label>
    </div> 
  </HoverCardTrigger>
  <HoverCardContent>
    1231241234312
  </HoverCardContent>
</HoverCard>

<HoverCard>
  <HoverCardTrigger>

  <div className="flex items-center space-x-2">
    <Checkbox id="class" />
    <label
      htmlFor="class"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      2
    </label>
    </div> 
  </HoverCardTrigger>
  <HoverCardContent>
    1231241234312
  </HoverCardContent>
</HoverCard>

<HoverCard>
  <HoverCardTrigger>

  <div className="flex items-center space-x-2">
    <Checkbox id="class" />
    <label
      htmlFor="class"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      2
    </label>
    </div> 
  </HoverCardTrigger>
  <HoverCardContent>
    1231241234312
  </HoverCardContent>
</HoverCard>

  

     

  </div>

<div className="flex  flex-col gap-2 ">


<HoverCard >
  <HoverCardTrigger>

  <div className="flex items-center space-x-2">
    <Checkbox id="class" />
    <label
      htmlFor="class"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      1
    </label>
    </div> 
  </HoverCardTrigger>

  <HoverCardContent>
    The React Framework – created and maintained by @vercel.
  </HoverCardContent>
  
</HoverCard>

<HoverCard>
  <HoverCardTrigger>

  <div className="flex items-center space-x-2">
    <Checkbox id="class" />
    <label
      htmlFor="class"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      2
    </label>
    </div> 
  </HoverCardTrigger>
  <HoverCardContent>
    1231241234312
  </HoverCardContent>
</HoverCard>

<HoverCard>
  <HoverCardTrigger>

  <div className="flex items-center space-x-2">
    <Checkbox id="class" />
    <label
      htmlFor="class"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      2
    </label>
    </div> 
  </HoverCardTrigger>
  <HoverCardContent>
    1231241234312
  </HoverCardContent>
</HoverCard>

<HoverCard>
  <HoverCardTrigger>

  <div className="flex items-center space-x-2">
    <Checkbox id="class" />
    <label
      htmlFor="class"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      2
    </label>
    </div> 
  </HoverCardTrigger>
  <HoverCardContent>
    1231241234312
  </HoverCardContent>
</HoverCard>

  

     

  </div>

  </div>
</>


  )
}

export default checkbox