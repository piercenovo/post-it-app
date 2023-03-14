import React from 'react'
import './globals.css'
import { Poppins as poppins } from 'next/font/google'
import { Navbar } from '@/components/Navbar'

export const font = poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700']
})

export const metadata = {
  title: 'PostIt',
  description: 'PostIt App, build with Next.js, TailwindCSS, Prisma and PostgreSQL. 🗞️',
  icons: {
    icon: '/icon.png'
  }
}

export default function RootLayout ({
  children
}) {
  return (
    <html lang='en'>
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
