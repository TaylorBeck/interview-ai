import React, { useState } from 'react'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import {
  WandSparkles,
  LoaderCircle
} from 'lucide-react'

function InterviewDialog({ isOpen, onClose }) {
  const [jobTitle, setJobTitle] = useState('')
  const [jobDescription, setJobDescription] = useState('')
  const [yearsOfExperience, setYearsOfExperience] = useState('0')
  const [loading, setLoading] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()

    setLoading(true);
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-xl">
        <DialogHeader>
          <DialogTitle className="text-2xl">Create a Mock Interview</DialogTitle>
          <DialogDescription>
            Tell us about the job you're applying for.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <Label htmlFor='job-title'>Job Title</Label>
            <Input
              id='job-title'
              className="mt-2"
              type='text'
              placeholder='Frontend Developer'
              onChange={(event) => setJobTitle(event.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <Label htmlFor='job-description'>Job Description</Label>
            <Textarea
              id='job-description'
              className="min-h-[180px] xs:min-h-[120px] max-h-[334px] mt-2"
              placeholder={`Implementing visual elements that users see and interact with in a web application. Translating UI/UX design wireframes into actual code. Ensuring the technical feasibility of UI/UX designs. Optimizing application for maximum speed and scalability. Proficiency in HTML, CSS, JavaScript, and frameworks such as React or Angular is required.`}
              onChange={(event) => setJobDescription(event.target.value)}
              required
            />
          </div>

          <Label htmlFor='yoe'>Years of Experience</Label>
          <Select onValueChange={value => setYearsOfExperience(value)} value={yearsOfExperience}>
            <SelectTrigger className="w-[135px] mt-2">
              <SelectValue placeholder="Select years" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value='0'>Entry Level</SelectItem>
                <SelectItem value='1'>1</SelectItem>
                <SelectItem value='2'>2</SelectItem>
                <SelectItem value='3'>3</SelectItem>
                <SelectItem value='4'>4</SelectItem>
                <SelectItem value='5'>5</SelectItem>
                <SelectItem value='6'>6</SelectItem>
                <SelectItem value='7'>7</SelectItem>
                <SelectItem value='8'>8</SelectItem>
                <SelectItem value='9'>9</SelectItem>
                <SelectItem value='10'>10</SelectItem>
                <SelectItem value='11'>11</SelectItem>
                <SelectItem value='12'>12</SelectItem>
                <SelectItem value='13'>13</SelectItem>
                <SelectItem value='14'>14</SelectItem>
                <SelectItem value='15'>15+</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <div className="flex justify-end gap-5">
            <Button className="text-red-600" variant='ghost' onClick={onClose}>Cancel</Button>
            <Button type='submit' disabled={loading}>
            {
              loading ? (
                <>
                  <LoaderCircle className="mr-2 h-4 w-4 animate-spin" /> Generating
                </>

              ) : (
                <>
                  <WandSparkles className="mr-2 h-4 w-4" /> Generate
                </>
              )
            }
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}

export default InterviewDialog
