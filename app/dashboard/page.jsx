import React from 'react'

import Image from 'next/image'

import AddInterview from './_components/AddInterview'

function Dashboard() {
  return (
    <div className="py-10">
      <div className="flex justify-between items-end my-5">
        <div>
          <h1 className="font-bold text-3xl mb-2">Dashboard</h1>
          <h1 className="text-slate-500">Create and Manage AI Mock Interviews</h1>
        </div>
        <AddInterview />
      </div>

      <div className="flex flex-col justify-center items-center h-[400px] border-2 border-dashed rounded-xl">
        <Image src={'/person-list.svg'} height={300} width={300} style={{ width: '300px', height: '300px' }} alt='logo' />
        <p className="text-slate-400">You don't have any interviews, yet...</p>
      </div>
    </div>
  )
}

export default Dashboard
