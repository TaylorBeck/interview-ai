'use client'

import React, { useState } from 'react';

import { Button } from '@/components/ui/button';
import InterviewDialog from './InterviewDialog';

import { Plus } from 'lucide-react';

function AddInterview() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => setIsDialogOpen(true);
  const closeDialog = () => setIsDialogOpen(false);

  return (
    <div>  
      <Button size='icon' onClick={openDialog}>
        <Plus className="h-6 w-6" />
      </Button>
      <InterviewDialog isOpen={isDialogOpen} onClose={closeDialog} />
    </div>
  )
}

export default AddInterview;
