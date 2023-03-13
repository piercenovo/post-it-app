import React from 'react'
import './globals.css'

export const metadata = {
  title: 'PostIt App',
  description: 'PostIt App, build with Next.js, TailwindCSS, Prisma and PostgreSQL. 🗞️',
  icons: {
    icon: '/icon.png'
  }
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
