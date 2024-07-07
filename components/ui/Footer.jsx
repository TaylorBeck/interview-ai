import React from 'react'

import Image from 'next/image'

import {
  Twitter,
  Facebook,
  Youtube
} from 'lucide-react';

function Footer() {
  const iconStyles = 'text-gray-500  hover:text-blue-600 hover:scale-105 hover:cursor-pointer';
  return (
    <div className="hidden xs:block sticky xs:top-[100vh]">
      <div className='flex justify-between items-center bg-slate-300 shadow-sm p-4 h-[80px]'>
        <div className="flex items-center gap-4">
          <Image src={'/logo-dark.svg'} width={50} height={50} style={{ width: '50px', height: '50px' }} alt='logo' />
          <p className="text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Interview AI • Copyright &copy; 2024. All rights reserved.
          </p>
        </div>
        <div className="flex gap-3">
          <Twitter className={iconStyles} />
          <Facebook className={iconStyles} />
          <Youtube className={iconStyles} />
        </div>
      </div>
    </div>
  )
}

export default Footer
