'use client'

import ChatWidget from '@/components/ui/ChatWidget';
import {
  MessageSquareText,
  MessagesSquare,
  FileCheck,
  ScrollText,
  Webcam,
  BriefcaseBusiness,
  CircleCheck,
  CirclePlus,
  CircleMinus
} from 'lucide-react';

import Footer from '@/components/ui/Footer';

export default function Home() {
  return (
    <>
      <div className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-[80vh] lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mb-4">
              Interview Hub
            </h1>
            <h2 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl mb-8 sm:block">Job Applications Made Easy</h2>
            <p className="mx-auto max-w-xl sm:text-xl/relaxed">AI-generated resumes, cover letters, and mock interviews.</p>
      
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-white focus:outline-none focus:ring active:text-opacity-75 sm:w-auto" href="#"> Get Started </a>
      
              <a className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto" href="#pricing"> Pricing </a>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Tired of getting ghosted?</h2>

            <p className="mt-4 text-gray-300">
              Over 75% of resumes get rejected by Applicant Tracking Systems. Our resumes are designed to pass these.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <ScrollText className="h-8 w-8 text-indigo-600" />

              <h2 className="mt-4 text-xl font-bold text-white">Resumes</h2>

              <p className="mt-1 text-sm text-gray-300">
                Based on recruiter feedback, we quickly generate different resumes geared specifically for the job you're applying to.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <MessageSquareText className="h-8 w-8 text-indigo-600" />

              <h2 className="mt-4 text-xl font-bold text-white">Cover Letters</h2>

              <p className="mt-1 text-sm text-gray-300">
                Annoyed by having to write another cover letter? Copy & Paste the job description to generate 3 cover letters you can immediately use on LinkedIn.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <Webcam className="h-8 w-8 text-indigo-600" />

              <h2 className="mt-4 text-xl font-bold text-white">Mock Interviews</h2>

              <p className="mt-1 text-sm text-gray-300">
                Need to practice soft skills? Copy & Paste a job description to generate real-world mock interviews you can answer with video.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <BriefcaseBusiness className="h-8 w-8 text-indigo-600" />

              <h2 className="mt-4 text-xl font-bold text-white">Job Board</h2>

              <p className="mt-1 text-sm text-gray-300">
                With our built in job board, apply to jobs chosen specifically for the languages and frameworks you know best.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <FileCheck className="h-8 w-8 text-indigo-600" />

              <h2 className="mt-4 text-xl font-bold text-white">Feedback</h2>

              <p className="mt-1 text-sm text-gray-300">
                Get immediate feedback on your interview answers and suggestions to improve your answers.
              </p>
            </a>

            <a
              className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-pink-500/10"
              href="#"
            >
              <MessagesSquare className="h-8 w-8 text-indigo-600" />

              <h2 className="mt-4 text-xl font-bold text-white">AI Assistant</h2>

              <p className="mt-1 text-sm text-gray-300">
                Ask any questions you have related to your resume, cover letters, interviews, and applications.
              </p>
            </a>
          </div>

          <div className="mt-12 text-center">
            <a
              href="#"
              className="inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>

      <div id='pricing' className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:items-center md:gap-8">
          <div
            className="rounded-2xl border border-indigo-600 p-6 shadow-sm ring-1 ring-indigo-600 sm:order-last sm:px-8 lg:p-12"
          >
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Pro
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">$37 </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">100 Resumes</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">100 Cover Letters</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">50 Mock Interviews</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">AI Assistant</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">Email Support</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">Chat Support</span>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 block rounded-full border border-indigo-600 bg-indigo-600 px-12 py-3 text-center text-sm font-medium text-white hover:bg-indigo-700 hover:ring-1 hover:ring-indigo-700 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get Started
            </a>
          </div>

          <div className="rounded-2xl border border-gray-200 p-6 shadow-sm sm:px-8 lg:p-12">
            <div className="text-center">
              <h2 className="text-lg font-medium text-gray-900">
                Basic
                <span className="sr-only">Plan</span>
              </h2>

              <p className="mt-2 sm:mt-4">
                <strong className="text-3xl font-bold text-gray-900 sm:text-4xl">$27 </strong>
                <span className="text-sm font-medium text-gray-700">/month</span>
              </p>
            </div>

            <ul className="mt-6 space-y-2">
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">1 Resume</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">1 Cover Letter</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">1 Mock Interview</span>
              </li>
              <li className="flex items-center gap-1">
                <CircleCheck className="h-4 w-4 text-[#50C878]" />
                <span className="text-gray-700">Email Support</span>
              </li>
            </ul>

            <a
              href="#"
              className="mt-8 block rounded-full border border-indigo-600 bg-white px-12 py-3 text-center text-sm font-medium text-indigo-600 hover:ring-1 hover:ring-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
            >
              Get Started
            </a>
          </div>
        </div>

        {/* Frequently Asked Questions */}
        <div className="divide-y divide-gray-100 rounded-xl border border-gray-100 bg-white mt-16">
          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden" open>
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-semibold">How does it work?</h2>
              <span className="relative h-5 w-5 shrink-0">
                <CirclePlus className="absolute inset-0 h-5 w-5 opacity-100 transition-opacity duration-200 group-open:opacity-0" />
                <CircleMinus className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-200 group-open:opacity-100" />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              Simply copy & paste a job description into Interview Hub's dashboard and a resume and cover letter will be generated for you. Then, you can take mock video interviews to prepare and practice your soft skills.
            </p>
          </details>
        
          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-semibold">Can I download my resumes?</h2>
              <span className="relative h-5 w-5 shrink-0">
                <CirclePlus className="absolute inset-0 h-5 w-5 opacity-100 transition-opacity duration-200 group-open:opacity-0" />
                <CircleMinus className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-200 group-open:opacity-100" />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
            Yes, you can download your resumes anytime after saving them and export them as .docx and .pdf formats. We recommend mass applying with the .docx file and only using .pdf when sending your resume directly to recruiters in a direct message.
            </p>
          </details>

          <details className="group p-6 [&_summary::-webkit-details-marker]:hidden">
            <summary className="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
              <h2 className="text-lg font-semibold">What happens when I cancel?</h2>
              <span className="relative h-5 w-5 shrink-0">
                <CirclePlus className="absolute inset-0 h-5 w-5 opacity-100 transition-opacity duration-200 group-open:opacity-0" />
                <CircleMinus className="absolute inset-0 h-5 w-5 opacity-0 transition-opacity duration-200 group-open:opacity-100" />
              </span>
            </summary>
            <p className="mt-4 leading-relaxed text-gray-700">
              When you cancel your membership, you can export all of your resumes and cover letters. After canceling, all of your data will be <span className="font-medium text-red-600">permanently deleted</span>.
            </p>
          </details>
        </div>
      </div>

      <Footer />
      <ChatWidget />
    </>
  );
}
