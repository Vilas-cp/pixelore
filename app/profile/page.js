"use client"
import React from 'react'
import Header from '../components/Header'
import "../profile/page.css"
import { useSession } from 'next-auth/react';



function Page() {
    const {data:session}=useSession();
    console.log(session)
  return (

    
        
        <div > 
        <img alt='' src={session?.user?.image} />
            <div className='hi1'>
            <img class="pic1" alt='' src={session?.user?.image}/>
            <h2 className='text-grey'>{session?.user?.name}</h2>
            <p className='text-grey'>{session?.user?.email}</p>
            <p className='text-grey'>Location: Chicago , Illinois ,U.S</p>
            <p className='text-grey'>Bio: CEO of openAI since 2019</p>
            </div>
    
    </div>
    

  )
}

export default Page