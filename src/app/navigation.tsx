'use client'

import { Dispatch, SetStateAction, useState } from "react"
import NavigatorComponent from "~/components/navigation"

export default function NavigationComponent(
  {
    setDarkTheme,
    darkTheme
  }:{
    setDarkTheme: Dispatch<SetStateAction<string>>,
    darkTheme: string
  }
){
  const changeTheme = (event:any) => {
    console.log(event.target.checked)
    const theme = darkTheme === 'dark'? '':'dark';
    setDarkTheme(theme);
    localStorage.setItem('theme', theme);
  }
  return (
    <div className="h-12 flex flex-col gap-4 justify-center">
      <div className="flex flex-row gap-4 justify-end px-4">
        <NavigatorComponent name='Home' to='/' icon='' />
        <NavigatorComponent name='Projects' to='/projects' icon='' />
        <NavigatorComponent name='Resume' to='/resume' icon='' />
        <span>source-code</span>
        <input type='checkbox' checked={darkTheme==='dark'} onChange={changeTheme}/>
      </div>
    </div>
  )
}