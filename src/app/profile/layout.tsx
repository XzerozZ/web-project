"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";


import React, { use } from 'react'
import { Avatar, Placeholder, Tabs } from 'rsuite'
import 'rsuite/dist/rsuite.min.css';
import Comment from '@/app/components/commentComponent';

import { Button,Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState,useEffect } from "react";

import { Uploader, Message, Loader, useToaster } from 'rsuite';
import AvatarIcon from '@rsuite/icons/legacy/Avatar';
import Link from 'next/link';

import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
 


  return (
    <>
      
      <main>
        {children}
  </main>
      
      
      
      
    </>
  );
}
