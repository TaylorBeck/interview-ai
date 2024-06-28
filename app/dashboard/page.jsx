import React from 'react'

import AddInterview from './_components/AddInterview'

function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="font-bold text-3xl mb-2">Dashboard</h1>
      <h1 className="text-slate-500">Create and Manage Your AI Mock Interviews</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddInterview />
      </div>
    </div>
  )
}

export default Dashboard
