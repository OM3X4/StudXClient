'use client'
import React, { useEffect, useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import useUserData from '../hooks/useUserData'
import usePostSubject from '../hooks/usePostSubject'


function NewSubject() {

    const [subjectData, setSubjectData] = useState({
        subject: ""
    })


    const { data } = useUserData()
    const { mutate: fetchPost } = usePostSubject()


    function logSession() {
        fetchPost(subjectData)
    }




    return (
        <Dialog>
            <DialogTrigger>
                <div className='text-white text-2xl px-5 py-3 rounded-2xl bg-primaryME font-bold cursor-pointer hover:bg-primary/80'>New subject</div>
            </DialogTrigger>
            <DialogContent className='bg-darkME'>
                <DialogHeader>
                    <DialogTitle className='text-white text-2xl'>Log Session</DialogTitle>
                </DialogHeader>
                <div className='flex flex-col justify-center gap-5 px-20'>
                    <Input placeholder='Subject Name'
                        onChange={(e) => setSubjectData({ ...subjectData, subject: e.target.value })}
                        className='text-white text-2xl bg-transparent border-white/20 border-b-2 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                    <div
                        onClick={() => logSession()}
                        className='text-white text-center text-2xl px-3 py-2 rounded-xl hover:bg-primaryME font-bold cursor-pointer border-2 border-primaryME'>Log Session</div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default NewSubject