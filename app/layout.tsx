import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'
import React from 'react'
// eslint-disable-next-line camelcase
import {Inter,Space_Grotesk} from 'next/font/google'
import type {Metadata} from 'next';
import { ThemeProvider } from '@/context/ThemeProvider';

export const metadata:Metadata={
  title:'codequest',
  description:'codequest is a blah blah',
  icons:{
    icon:'/assets/images/site-logo.svg'
  }
}

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <ClerkProvider>
        <ThemeProvider>
                {/* <h1 className="h1-bold"> Font</h1> */}
                {children}
          </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
    
  )
}

// Remove the line with the undefined variable "helo"
