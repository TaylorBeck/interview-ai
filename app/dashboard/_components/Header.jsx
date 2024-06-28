'use client'

import React from 'react'
import Image from "next/image"
import { ClerkLoading, ClerkLoaded, UserButton } from '@clerk/nextjs'
import { usePathname } from 'next/navigation'
import { Skeleton } from '@/components/ui/skeleton'

function Header() {
  const path = usePathname()

  const menuItemStyle = 'hover:text-primary hover:font-semibold hover:cursor-pointer transition-all'

  return (
    <div className='flex justify-between items-center bg-secondary shadow-sm p-4'>
      <div className='flex items-center gap-3'>
        <Image src={'/logo.svg'} height={60} width={60} alt='logo' style={{ width: '100%', height: 'auto' }} />
        <h1 className='font-bold text-2xl text-[#3E488F]'><span className='font-normal'>Interview</span>AI</h1>
      </div>
      <ul className='hidden md:flex gap-6'>
        <li className={`${menuItemStyle} ${path === '/dashboard'&&'text-primary font-semibold'}`}>Dashboard</li>
        <li className={`${menuItemStyle} ${path === '/faq'&&'text-primary font-semibold'}`}>FAQ</li>
        <li className={`${menuItemStyle} ${path === '/dashboard/pricing'&&'text-primary font-semibold'}`}>Pricing</li>
        <li className={`${menuItemStyle} ${path === 'dashboard/how'&&'text-primary font-semibold'}`}>How It Works</li>
      </ul>
      <ClerkLoading>
        <Skeleton className="h-[28px] w-[28px] bg-[#5F6BBA] rounded-full" />
      </ClerkLoading>
      <ClerkLoaded>
        <UserButton />
      </ClerkLoaded>
    </div>
  )
}

export default Header
