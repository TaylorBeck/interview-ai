import React from 'react';

import SideNav from '@/components/ui/SideNav';
import Tabbar from '@/components/ui/Tabbar';

function SettingsLayout({ children }) {
  return (
    <div className="min-h-screen bg-[#FCFCFA]">
      <SideNav />
      
      <div className="mx-5 md:mx-14 lg:mx-36">
        {children}
      </div>
      <Tabbar className="mobile:hidden" />
    </div>
  )
}

export default SettingsLayout;
