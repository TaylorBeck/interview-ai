'use client'

import React from 'react';
import { useRouter } from 'next/navigation';

import Image from 'next/image';
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton
} from '@clerk/nextjs';
import { usePathname } from 'next/navigation';

import { Skeleton } from '@/components/ui/skeleton';

import { Menu } from 'lucide-react';

function Header() {
  const path = usePathname();

  const router = useRouter();

  const menuItemStyle = 'hover:text-primary hover:font-semibold hover:cursor-pointer transition-all';

  return (
    <div className='flex justify-between items-center bg-secondary shadow-sm p-4'>
      <div
        className='flex items-center gap-3 hover:cursor-pointer'
        onClick={() => router.replace('/dashboard')}
      >
        <Image src={'/logo.svg'} height={60} width={60} style={{ width: '100%', height: 'auto' }} alt='logo' />
        <h1 className='font-bold text-2xl text-[#3E488F] hidden 2xs:block'><span className='font-normal'>Interview</span>AI</h1>
      </div>
      <ul className='hidden md:flex gap-6'>
        <li className={`${menuItemStyle} ${path === '/dashboard'&&'text-primary font-semibold'}`} onClick={() => router.replace('/dashboard')}>Dashboard</li>
        <li className={`${menuItemStyle} ${path === '/dashboard/interviews'&&'text-primary font-semibold'}`}>Interviews</li>
        <li className={`${menuItemStyle} ${path === '/dashboard/jobs'&&'text-primary font-semibold'}`}>Jobs</li>
        <li className={`${menuItemStyle} ${path === 'dashboard/how'&&'text-primary font-semibold'}`}>How It Works</li>
      </ul>
      <div className='flex items-center gap-4'>
        <Menu className='md:hidden h-6 w-6 text-slate-500 hover:scale-105 hover:cursor-pointer' />
        <ClerkLoading>
          <Skeleton className="h-[28px] w-[28px] bg-[#5F6BBA] rounded-full" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  )
}

export default Header
