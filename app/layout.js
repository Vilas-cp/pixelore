"use client"
import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from 'next-auth/react'


const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Pixalore',
//   description: 'Login to remove corruption',
// }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head><script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/d49d3484-4dad-4065-93d9-d164d7499826/webchat/config.js" defer></script></head>
      <body className={inter.className}>
        
        <SessionProvider>
    
        {children}
        </SessionProvider>
        
        </body>
    </html>
  )
}
