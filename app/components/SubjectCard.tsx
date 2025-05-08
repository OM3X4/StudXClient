import React from 'react'
import Link from 'next/link'

function SubjectCard({ subject }: any) {
    return (
        <Link href={`/subject/${subject.id}`} className='size-64 bg-darkME rounded-2xl flex flex-col items-center p-5 cursor-pointer hover:bg-primaryME hover:scale-110'>
            <h1 className='text-white text-xl self-start'>{subject.id}</h1>
            <h1 className='text-3xl font-bold text-white'>{subject.subject}</h1>
        </Link>
    )
}

export default SubjectCard