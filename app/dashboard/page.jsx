'use client'

import React, { useState, useEffect } from 'react';

import { useRouter } from 'next/navigation';

import Image from 'next/image';

import dayjs from 'dayjs';

import AddInterview from './_components/AddInterview';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton'
import { Trash2, Pencil, Play } from 'lucide-react';

function Dashboard() {
  const [interviews, setInterviews] = useState([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    async function fetchInterviews() {
      try {
        setLoading(true);
        const response = await fetch('/api/interviews');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setInterviews(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
      }
    }

    fetchInterviews();
  }, []);

  return (
    <div className="py-10">
      <div className="flex flex-col">
        <div className="flex justify-between items-end my-5">
          <div>
            <h1 className="font-bold text-3xl mb-2">Dashboard</h1>
            <h1 className="text-slate-500">Create and Manage AI Mock Interviews</h1>
          </div>
          <AddInterview />
        </div>

        {loading &&
          <div className="grid grid-cols-1 gap-8 gap-y-8 mobile:grid-cols-2 md:grid-cols-3 mt-8">
            <Skeleton className="h-[175px] w-[275px] rounded-lg" />
            <Skeleton className="h-[175px] w-[275px] rounded-lg" />
            <Skeleton className="h-[175px] w-[275px] rounded-lg" />
            <Skeleton className="h-[175px] w-[275px] rounded-lg" />
            <Skeleton className="h-[175px] w-[275px] rounded-lg" />
            <Skeleton className="h-[175px] w-[275px] rounded-lg" />
            <Skeleton className="h-[175px] w-[275px] rounded-lg" />
            <Skeleton className="h-[175px] w-[275px] rounded-lg" />
            <Skeleton className="h-[175px] w-[275px] rounded-lg" />
          </div>
        }
        {(!loading && interviews.length > 0) &&
          <div className="grid grid-cols-1 gap-8 gap-y-8 mobile:grid-cols-2 md:grid-cols-3 mt-8">
            {interviews.map((interview) => {
              const createdAt = interview.createdAt.replace(/^"(.*)"$/, '$1');

              return (
                <Card key={interview.interviewId} className="shadow-md">
                  <CardHeader>
                    <CardTitle className="truncate">{interview.jobTitle}</CardTitle>
                    <CardDescription>{dayjs(createdAt).format('MMMM D, YYYY [at] h:mm A')}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {/* TODO: Add Content */}
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <div className="flex gap-4">
                      <Trash2 className="h-5 w-5 text-red-500 hover:cursor-pointer hover:-rotate-3" />
                      <Pencil className="h-5 w-5 text-slate-500 hover:cursor-pointer hover:scale-105" />
                    </div>
                    <Play
                      className="h-5 w-5 text-primary hover:cursor-pointer hover:scale-105"
                      onClick={() => router.push(`/dashboard/interviews/${interview.interviewId}`)}
                    />
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        }
      </div>

      {(!loading && interviews.length) === 0 &&
        <div className="flex flex-col justify-center items-center h-[400px] border-2 border-dashed rounded-xl">
          <Image src={'/person-list.svg'} height={300} width={300} style={{ width: '300px', height: '300px' }} alt='logo' />
          <p className="text-slate-400">You don't have any interviews, yet...</p>
        </div>
      }
    </div>
  )
}

export default Dashboard;
