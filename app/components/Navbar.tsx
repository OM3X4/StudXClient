import React from 'react'
import LogSession from './LogSession'
import Link from 'next/link'


function Navbar() {



    return (
        <div className='w-[90vw] mx-auto flex items-end justify-between py-8'>
            <Link href="/dashboard" className='font-ubuntu text-4xl text-white font-bold cursor-pointer hover:text-primaryME'>
                Stud<span className='text-5xl text-shadow-lg text-shadow-primaryME'>X</span>
            </Link>
            <div>
                <ul className='flex items-center justify-center gap-5 font-bold'>
                    <Link href={"/dashboard"} className='text-white text-xl cursor-pointer hover:text-primaryME'>Dashboard</Link>
                    <Link href={"/subjects"} className='text-white text-xl cursor-pointer hover:text-primaryME'>Subjects</Link>
                </ul>
            </div>
            <div>
                <LogSession />
            </div>
        </div>
    )
}

export default Navbar