import React from 'react'

import Header from './_components/Header'
import Tabbar from './_components/Tabbar'

function DashboardLayout({ children }) {
  return (
    <div>
      <Header />
      <div className="mx-5 md:mx-20 lg:mx-36">
        {children}
      </div>
      <Tabbar className="mobile:hidden" />
    </div>
  )
}

export default DashboardLayout
