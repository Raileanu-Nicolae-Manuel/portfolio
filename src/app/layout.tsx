"use client"

import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import NavigationComponent from "./navigation";
import { useEffect, useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [darkTheme, setDarkTheme] = useState<string>('');
  useEffect(()=>{
    if(typeof window !== 'undefined'){
      const theme = localStorage.getItem('theme');
      console.log(theme, darkTheme)
      if(theme !== darkTheme && theme){
        setDarkTheme(theme);
      }
    }
  }, [])
  return (
    <html lang="en" className={`${GeistSans.variable} min-h-screen bg-gradient-to-b from-[#d6e6ec] to-[#0400f97a] text-[#101010] dark:from-[#2e026d] dark:to-[#15162c] dark:text-white ${darkTheme}`}>
      <body>
        <NavigationComponent setDarkTheme={setDarkTheme} darkTheme={darkTheme}/>
        {children}
        </body>
    </html>
  );
}
