'use client'
import React , {useState} from 'react'
import Navbar from '../components/Navbar'
import SubjectCard from '../components/SubjectCard'
import useUserData  from '../hooks/useUserData'
import Loading from '../loading'
import NewSubject from '../components/NewSubject'

function Subjects() {

    const { data , isLoading } = useUserData();

    if(isLoading || !data) return <Loading />

    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className='w-[80vw] mx-auto mt-10'>
                <div className='flex items-center justify-between'>
                    <h1 className='text-7xl font-bold text-white mb-5'>Subjects</h1>
                    <NewSubject />
                </div>
                <div className='flex items-center flex-wrap gap-5'>
                    {
                        data.subjects.map((subject: any) => (
                            <SubjectCard key={subject.id} subject={subject} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Subjects