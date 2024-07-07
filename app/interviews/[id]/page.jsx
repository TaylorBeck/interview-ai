'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { toast } from "sonner";
import Webcam from 'react-webcam';
import { WebcamIcon, ShieldAlert, X, Play, Pause } from 'lucide-react';

import {
  Skeleton
} from '@/components/shadcn/skeleton';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/shadcn/card';
import { Button } from '@/components/shadcn/button';
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from '@/components/shadcn/alert';

export default function Interview() {
  const [interview, setInterview] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const params = useParams();

  const [showWebcam, setShowWebcam] = useState(false);
  const [showAlert, setShowAlert] = useState(true);

  useEffect(() => {
    const fetchInterview = async () => {
      try {
        const response = await fetch(`/api/interviews/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch interview');
      }
        const data = await response.json();
        setInterview(data.interview);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchInterview();
  }, [params.id]);

  const onWebcamError = (error) => {
    setShowWebcam(false);
    toast("Webcam Error", {
      description: error.message
    });
  }

  return (
    <>
      <div className="flex justify-between mt-12">
        <div className="flex flex-col justify-between items-start">
          {interview ?
            <Card className="flex flex-col w-[400px] h-[320px] shadow-md">
              <CardHeader>
                <CardTitle className="mb-3">{showWebcam ? 'Question 1' : interview.jobTitle}</CardTitle>
                <CardDescription>{showWebcam ? 'Can you explain how the useEffect hook works in React? What is the difference between useEffect and useState? When would you not want to use a useEffect hook? Are there any alternatives to using a useEffect hook in a scalable application?' : interview.jobDescription}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">

              </CardContent>
              <CardFooter className="flex-grow justify-between items-end">
                <Button variant="outline">Cancel</Button>
                <Button
                  variant={showWebcam ? 'destructive' : ''}
                  onClick={() => setShowWebcam(!showWebcam)}
                >
                  {showWebcam ?
                    <>
                      <Pause fill='white' className="w-4 h-4 mr-1" />
                      Pause
                    </>
                  : 
                    <>
                      <Play fill='white' className="w-4 h-4 mr-1" />
                      Start
                    </>
                  }
                </Button>
              </CardFooter>
            </Card>
          :
            <Skeleton className="w-[400px] h-[320px] rounded-lg" />
          }
        </div>
          {showWebcam ?
            <Webcam
              onUserMedia={() => setShowWebcam(true)}
              onUserMediaError={(error) => onWebcamError(error)}
              mirrored={true}
              videoConstraints={
                {
                  width: 400,
                  height: 320,
                  facingMode: "user"
                }
              }
              style={{
                borderRadius: 8
              }}
            /> 
          :
            <div className="flex justify-center items-center w-[400px] h-[320px] border-2 border-dashed border-gray-300 rounded-md">
              <WebcamIcon
                className="h-24 w-24 p-6 text-gray-300"
                onClick={() => setShowWebcam(true)}
              />
            </div>
          }
      </div>
      <Alert
        className="bg-yellow-100 mt-8"
        style={{
          zIndex: 1,
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          opacity: !showAlert ? "0" : "1",
          transition: "all .2s",
          visibility: !showAlert ? "hidden" : "visible",
        }}
      >
        <ShieldAlert className="h-5 w-5" />
        <AlertTitle>
          Heads up!
        </AlertTitle>
        <AlertDescription>
          <X
            className="absolute top-2 right-2 w-4 h-4 hover:cursor-pointer hover:scale-105 hover:-rotate-3"
            onClick={() => setShowAlert(false)}
          />
          We never save your video. Instead, we transcribe the audio and save your answers in a text format. Your answers can be deleted or exported at any time.
        </AlertDescription>
      </Alert>
    </>
  );
}

