import React from 'react';

// import Header from './_components/Header';
// import Footer from './_components/Footer';
import SideNav from './_components/SideNav';
import Tabbar from './_components/Tabbar';

function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen">
      <SideNav />
      
      <div className="mx-5 md:mx-14 lg:mx-36">
        {children}
      </div>
      <Tabbar className="mobile:hidden" />
    </div>
  )
}

export default DashboardLayout;
