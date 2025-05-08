'use client'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectTrigger, SelectItem, SelectValue } from '@/components/ui/select'
import useUserData from '../hooks/useUserData'
import useLog from '../hooks/useLog'
import { toast } from 'sonner'

function LogSession() {

    const [sessionData, setSessionData] = useState({
        duration: '',
        subject: '',
        topic: '',
        focus: 5
    })


    const { data } = useUserData()
    const { mutate: fetchLog } = useLog()


    function logSession() {
        if (!sessionData.duration) {
            toast.error('Duration is required')
            return;
        }
        const filteredData = Object.fromEntries(
            Object.entries(sessionData).filter(
                ([key, value]) =>
                    !(key === 'subjectId' && value === '') &&
                    !(key === 'topicId' && value === '')
            )
        )


        fetchLog(filteredData)
    }




    return (
        <Dialog>
            <DialogTrigger>
                <div className='text-white text-2xl px-5 py-3 rounded-2xl bg-primaryME font-bold cursor-pointer hover:bg-primary/80'>Log Session</div>
            </DialogTrigger>
            <DialogContent className='bg-darkME'>
                <DialogHeader>
                    <DialogTitle className='text-white text-2xl'>Log Session</DialogTitle>
                </DialogHeader>
                <div className='flex flex-col justify-center gap-5 px-20'>
                    <Label className='gap-5'>
                        <span className='text-white font-thin'>subject</span>
                        <Select onValueChange={(subjectId) => setSessionData({ ...sessionData, subject: subjectId })}>
                            <SelectTrigger className='text-white'>
                                <SelectValue placeholder='Select subject' className='text-white w-full' />
                            </SelectTrigger>
                            <SelectContent className='bg-darkME text-white'>
                                {
                                    data.subjects.map((subject: any) => (
                                        <SelectItem key={subject.id} value={subject.id}>{subject.subject}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </Label>
                    <Label className='gap-5'>
                        <span className='text-white font-thin'>Topic</span>
                        <Select onValueChange={(topicId) => setSessionData({ ...sessionData, topic:topicId })}>
                            <SelectTrigger className='text-white'>
                                <SelectValue placeholder='Select subject' className='text-white w-full' />
                            </SelectTrigger>
                            <SelectContent className='bg-darkME text-white'>
                                {
                                    data.subjects.filter((item: any) => item.id === parseInt(sessionData.subject))[0]?.topics.map((topic: any) => (
                                        <SelectItem key={topic.id} value={topic.id}>{topic.topic}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </Select>
                    </Label>
                    <Label>
                        <span className='text-white font-thin'>duration</span>
                        <div className='relative w-[200px]'>
                            <Input placeholder='duration' className='pr-10 text-white'
                                onKeyDown={(e) => {
                                    if (!/[\d]/.test(e.key) && e.key !== "Backspace" && e.key !== "Delete" && e.key !== "ArrowLeft" && e.key !== "ArrowRight") {
                                        e.preventDefault()
                                    }
                                }}
                                onChange={(e) => setSessionData({ ...sessionData, duration: e.target.value })} />
                            <span className="absolute right-3 top-1/2 -translate-y-1/2 text-sm text-muted-foreground">
                                min
                            </span>
                        </div>
                    </Label>
                    <div
                        onClick={() => logSession()}
                        className='text-white text-center text-2xl px-3 py-2 rounded-xl hover:bg-primaryME font-bold cursor-pointer border-2 border-primaryME'>Log Session</div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default LogSession