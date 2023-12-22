"use client"
import React from 'react';
import Link from "next/link"
import '../components/Header.css'
import { signIn,signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

const Header = () => {
  const {data:session}=useSession();
  const router=useRouter();
  
  return (
    
    <div className={'container mx-auto flex items-center border-b-2 px-6 py-2 h-24 '}>
        <h2 className='font-bold text-xl'>Pixelore</h2>
        <div className='grow'>
            <div className='flex items-center justify-center gap-2 md:gap-8 '>
                <button onClick={()=>{
                  router.push('/')
                }} className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>Home</button>
                <Link href="blog" className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 '>Tenders</Link>
                <Link href="complaint" className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>Complaints</Link>
                <Link href="quality" className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>Quality Check</Link>
                <Link href="about" className='bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700'>About us</Link>
                
                
            </div>
        </div>
    
        <div>
          {session ? (<div className='flex items-center'><button  className='mr-2 font-bold pr-4 ' onClick={signOut}>Signout</button>
          <button >
    <img src={session.user?.image }
      alt='profile.pic'
      className='h-10 rounded-full cursor-pointer' 
      />
      </button></div>):(<div><button
       className='mr-2 font-bold'>Sign up</button>| <button onClick={signIn} 
      className='font-bold cursor-pointer'>Login</button></div>)}
    
    
    </div>
    </div>
    
  
    

  );
  };

export default Header;


 