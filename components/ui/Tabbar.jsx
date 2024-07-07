'use client'

import React, { useState } from 'react';

import {
  Home,
  BriefcaseBusiness,
  User,
  Video
} from 'lucide-react';

function Tabbar({ className }) {
  const [activeTab, setActiveTab] = useState(0);

  const activeClasses = 'font-semibold scale-105';

  return (
    <div className={`fixed bottom-0 w-full bg-secondary shadow-lg ${className}`}>
      <div className="flex justify-between p-4">
        <div className="flex flex-col items-center">
          <Home className="w-6 h-6" onClick={() => setActiveTab(0)} />
          <span className={`text-sm ${activeTab === 0 && activeClasses}`}>Dashboard</span>
        </div>
        <div className="flex flex-col items-center">
          <Video className="w-6 h-6" onClick={() => setActiveTab(1)} />
          <span className={`text-sm ${activeTab === 1 && activeClasses}`}>Interviews</span>
        </div>
        <div className="flex flex-col items-center">
          <BriefcaseBusiness className="w-6 h-6" onClick={() => setActiveTab(2)} />
          <span className={`text-sm ${activeTab === 2 && activeClasses}`}>Jobs</span>
        </div>
        <div className="flex flex-col items-center">
          <User className="w-6 h-6" onClick={() => setActiveTab(3)} />
          <span className={`text-sm ${activeTab === 3 && activeClasses}`}>Profile</span>
        </div>
      </div>
    </div>
  )
}

export default Tabbar;