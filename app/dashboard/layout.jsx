import React from 'react';

import Header from './_components/Header';
import Footer from './_components/Footer';
import Tabbar from './_components/Tabbar';

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="mx-5 md:mx-14 lg:mx-36">
        {children}
      </div>
      <Footer />
      <Tabbar className="mobile:hidden" />
    </div>
  )
}

export default DashboardLayout;
