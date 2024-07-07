'use client'

import React from 'react';

import { usePathname } from 'next/navigation';

import Link from 'next/link';

import Image from 'next/image';
import {
  Home,
  MessageSquareText,
  ScrollText,
  Settings,
  Webcam,
  BriefcaseBusiness
} from 'lucide-react';
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton
} from '@clerk/nextjs';
import {
  TooltipProvider,
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/shadcn/tooltip';
import { Skeleton } from '@/components/shadcn/skeleton';

function SideNav() {
  const pathname = usePathname();
  const isActive = (path) => pathname.startsWith(path);

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background bg-[#fcfcfa] sm:flex mr-4">
      <nav className="flex flex-col items-center gap-4 px-2 py-4">
        <Link
          href='/dashboard'
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Image className="transition-all group-hover:scale-110" src={'/logo.svg'} height={24} width={24} />
          <span className="sr-only">Interview AI</span>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/dashboard'
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive('/dashboard') && 'bg-muted font-semibold'}`}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/interviews'
                className={`flex h-9 w-9 items-center justify-center rounded-lg transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive('/interviews') && 'bg-muted font-semibold'}`}
              >
                <Webcam className="h-5 w-5" />
                <span className="sr-only">Interviews</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Interviews</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/jobs'
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive('/jobs') && 'bg-muted font-semibold'}`}
              >
                <BriefcaseBusiness className="h-5 w-5" />
                <span className="sr-only">Jobs</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Jobs</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/resumes'
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive('/resumes') && 'bg-muted font-semibold'}`}
              >
                <ScrollText className="h-5 w-5" />
                <span className="sr-only">Resumes</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Resumes</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/cover-letters'
                className={`flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${isActive('/cover-letters') && 'bg-muted font-semibold'}`}
              >
                <MessageSquareText className="h-5 w-5" />
                <span className="sr-only">Cover Letters</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Cover Letters</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-4">
        <ClerkLoading>
          <Skeleton className="h-[28px] w-[28px] bg-[#5F6BBA] rounded-full" />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
        <span className="sr-only">Profile</span>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href='/settings'
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  )
}

export default SideNav;
