import React from 'react'
import { Button } from '@/components/ui/button'

function Navbar() {



    return (
        <div className='w-[90vw] mx-auto flex items-end justify-between py-8'>
            <div className='font-ubuntu text-4xl text-white font-bold cursor-pointer hover:text-primaryME'>
                Stud<span className='text-5xl'>X</span>
            </div>
            <div>
                <ul className='flex items-center justify-center gap-5 font-bold'>
                    <li className='text-white text-xl cursor-pointer hover:text-primaryME'>Dashboard</li>
                    <li className='text-white text-xl cursor-pointer hover:text-primaryME'>Subjects</li>
                    <li className='text-white text-xl cursor-pointer hover:text-primaryME'>Goals</li>
                    <li className='text-white text-xl cursor-pointer hover:text-primaryME'>Profile</li>
                </ul>
            </div>
            <div>
                <Button className='text-white text-2xl px-5 py-6 rounded-2xl bg-primaryME font-bold cursor-pointer hover:bg-primary/80'>Log Session</Button>
            </div>
        </div>
    )
}

export default Navbar