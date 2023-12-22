"use client";
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

import React from "react";
import Checkbox from "./Checkbox";

const Tables = () => {
 return (
  <div className="container mx-auto">
   <div className="flex gap-4">
    <Input />

    <Button>Ara</Button>
   </div>

   <div>
    <Checkbox />
   </div>

   <Table>
    <TableCaption>A list of your recent invoices.</TableCaption>
    <TableHeader>
     <TableRow>
      <TableHead className="w-[100px]">Invoice</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Method</TableHead>
      <TableHead className="text-right">Amount</TableHead>
     </TableRow>
    </TableHeader>
    <TableBody>
     <TableRow>
      <TableCell className="font-medium">INV001</TableCell>
      <TableCell>Paid</TableCell>
      <TableCell>Credit Card</TableCell>
      <TableCell className="text-right">$250.00</TableCell>
     </TableRow>
    </TableBody>
   </Table>
  </div>
 );
};

export default Tables;
