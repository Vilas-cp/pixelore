'use client'
import Image from 'next/image'
import React from 'react';
import Header from './components/Header';
import { useSession } from 'next-auth/react';
import './globals.css'

export default function Home() {
  const session = useSession();
  console.log(session?.data?.user);
  return (
   <div>
    <Header/>
    <video autoPlay loop muted id="bgVideo" >
      <source src='vidu.mp4' type='video/mp4'></source>
      <source src='vidu.mp4'></source>
    </video>
    <div>
    <h1 className='font-bold flex items-center justify-center h-screen text-7xl '>Pixelore
    <br></br>A dive into corruption free future</h1>
    
    
   </div>
   </div>
  )
}
