"use client"
import React, { useEffect } from 'react'
import Image from 'next/image';
import { FileClock, History, Home, Settings, WalletIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import UsageTrack from './UsageTrack';

function SideNav() {

  const MenuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard"
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history"
    },
    {
      name: "Billing",
      icon: WalletIcon,
      path: "/dashboard/billing"
    },
    {
      name: "Setting",
      icon: Settings,
      path: "/dashboard/setting"
    },
  ]
  const router = useRouter();
  const path = usePathname();
  useEffect(()=>{
    
  },[])

  return (
    <div className='h-screen relative p-5 shadow-sm border bg-white'>
      <div className="flex justify-center">
        <Image onClick={() => router.push(MenuList[0].path)} src={"/logo.svg"} alt={''} width={120} height={100}/>
      </div>
      <hr className='my-9 border'/>
      <div className="mt-3">
        {MenuList.map((menu, index)=>(
            <div 
            key={index}
              onClick={() => router.push(menu.path)}
              className={`
              flex gap-2 p-3 mb-2
              hover:bg-primary hover:text-white rounded-lg
              cursor-pointer items-center
              ${path === menu.path && 'bg-primary text-white'}
            `}>
                <menu.icon className='h-6 w-6'/>
                <h2 className='text-lg'>{menu.name}</h2>
            </div>
        ))}
      </div>
      <div className="absolute bottom-10 left-0 w-full">
        <UsageTrack/>
      </div>
    </div>
  );
};

export default SideNav;