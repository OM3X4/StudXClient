import { FaHistory } from "react-icons/fa";
import { SlBadge } from "react-icons/sl";
import { BiTrendingUp } from "react-icons/bi";
import { FiTarget } from "react-icons/fi";
import { BiNote } from "react-icons/bi";
import { BsFillPencilFill } from "react-icons/bs";
import React from 'react'
import { Button } from '@/components/ui/button'

const cards = [
    {
        head: "Custom Subject & Topics",
        para: "Organize your learning your way. Create subjects and break them into topics to track your focus and time with precision.",
        icon: <BsFillPencilFill />
    },
    {
        head: "Easy Session Logging",
        para: "Log how long you studied, choose the topic, and add tags or notes — simple and distraction-free.",
        icon: <BiNote />
    },
    {
        head: "Goal System",
        para: "Set time-based goals for any subject or topic. Stay on track with visual progress indicators and reminders.",
        icon: <FiTarget />
    },
    {
        head: "Analytics Dashboard",
        para: "Turn your effort into insights. Get clear, beautiful charts showing where your time goes — by subject, topic, or tag.",
        icon: <BiTrendingUp />
    },
    {
        head: "Streaks & Badges",
        para: "Build consistency and stay motivated with streaks and achievement badges. Small wins, big momentum.",
        icon: <SlBadge />
    },
    {
        head: "Insightful Session History",
        para: "Build consistency and stay motivated with streaks and achievement badges. Small wins, big momentum.",
        icon: <FaHistory />
    }
]

function App() {




    return (
        <div>
            <div className='z-50 fixed top-8 left-1/2 -translate-x-1/2 w-[60vw] h-20 rounded-2xl backdrop-blur-md backdrop-brightness-125 bg-white/10 border-b border-white/20'>
                <div className='flex items-center justify-between px-10 w-full h-full gap-10'>
                    <h1 className='text-4xl font-bold text-white cursor-pointer hover:text-primaryME'>Stud<span className='text-5xl text-shadow-lg text-shadow-primaryME'>X</span></h1>
                    <div className='flex items-center justify-center gap-10'>
                        <h1 className='text-white cursor-pointer hover:text-primaryME text-lg'>Pricing</h1>
                        <h1 className='text-white cursor-pointer hover:text-primaryME text-lg'>Features</h1>
                        <h1 className='text-white cursor-pointer hover:text-primaryME text-lg'>Contact</h1>
                    </div>
                    <Button className=' text-white text-2xl px-5 py-6 rounded-2xl bg-primaryME font-bold cursor-pointer hover:bg-primary/80'>Get Started</Button>
                </div>
            </div>
            <div className='lander-gradient  flex items-center justify-center h-screen flex-col px-[10vw] gap-5 pt-30'>
                <h1 className='text-white text-8xl font-bold whitespace-pre-line text-center'>{"Track. Analyze.\nMaster Your Study Time."}</h1>
                <p className='text-grayME text-2xl text-center'>Track your study time, set goals, and visualize your progress — all in one clean,
                    powerful dashboard. Stay focused, stay consistent, and study smarter.</p>
                <Button className='border-b-2 border-white/50 text-white text-5xl px-5 py-10 rounded-2xl bg-primaryME font-bold cursor-pointer hover:bg-primary/80'>Get Started</Button>
            </div>
            <div className='flex items-center justify-center h-screen flex-col px-[10vw] gap-5'>
                <h1 className='text-white text-8xl font-bold whitespace-pre-line text-center'>Built to Make You a Better Learner</h1>
                <p className='text-grayME text-2xl text-center'>Track your time, set goals, and stay consistent with a study tracker designed to fit your learning style.
                Every feature is built to help you stay focused, motivated, and in control.</p>
            </div>
            <div className="flex items-center justify-center h-screen px-[10vw] gap-5 flex-wrap">
                {
                    cards.map((card: any, index: number) => (
                        <div className="bg-darkME rounded-2xl p-5 flex items-center justify-center flex-col size-80 gap-5">
                            <span className="text-white text-8xl">{card.icon}</span>
                            <h1 className="text-white text-2xl">{card.head}</h1>
                            <p className="text-grayME">{card.para}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default App