'use client'
import React, { useState, useEffect } from 'react'
import CustomTooltip from '../components/Tooltip';
import Navbar from '../components/Navbar'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import calcTodayGoal from '../utils/calcTodayGoal';
import calcWeekGoal from '../utils/calcWeekGoal';
import getLast12MonthsDaysList from '../utils/getLastYear';
import calcTodayGoalSubject from '../utils/calcTodayGoalSubject';
import useUserData from '../hooks/useUserData';
import Loading from '../loading';


const sameDay = (a: string, b: string) => new Date(a).toDateString() === new Date(b).toDateString();


function Dashboard() {

    const dayOfMonth = new Date().getDate();

    const heatmapArray = getLast12MonthsDaysList();


    const today = new Date();

    const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" }); // e.g., "Saturday"
    const monthName = today.toLocaleDateString("en-US", { month: "long" });   // e.g., "May"

    const [timePeriod, setTimePeriod] = useState('week');
    const [targetPeriod, setTargetPeriod] = useState('week');

    let averageTime = 0;

    const { data , isLoading} = useUserData();

    if(data) averageTime = Math.ceil(data.heatmap.reduce((a: any, b: any) => a + b.duration, 0) / 365.25)


    if(isLoading) return <Loading />;


    return (
        <div className='min-h-screen'>
            <Navbar />
            <div>
                <div className='w-[80vw] mx-auto mt-10 flex items-center justify-between'>
                    <div>
                        <h1 className='text-white text-6xl font-bold'>Good Morning , {data.username}</h1>
                        <h1 className='text-2xl text-grayME'>You have studied <span className='text-primaryME font-bold text-3xl'>{data.studied_today}</span> minutes today</h1>
                    </div>
                    <div>
                        <div className='flex items-center justify-center gap-5'>
                            <div className='text-white text-3xl font-bold border-4 border-white rounded-full w-20 h-20 flex items-center justify-center'>
                                <h1>{dayOfMonth}</h1>
                            </div>
                            <div className='text-white text-3xl font-bold'>
                                <h1 className='text-2xl'>{dayOfWeek.slice(0, 3)}</h1>
                                <h1>{monthName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                {/* first row */}
                <div className='w-[80vw] mx-auto mt-10 flex gap-4'>
                    {/* number of minutes card */}
                    <div className='bg-darkME flex-1 h-60 rounded-2xl px-2 py-2'>
                        <div className='bg-backgroundME rounded-2xl h-30 flex justify-between px-3 py-3'>
                            <div className='text-white text-xl font-bold self-end'>
                                <h1 className='text-sm text-grayME'>Total time</h1>
                                <h1>{timePeriod == 'week' ? data.studied_this_week : data.studied_all_time} minutes</h1>
                            </div>
                            <div className='text-white border-2 rounded-full px-3 py-2 flex items-center justify-center border-primaryME self-start cursor-pointer hover:bg-primaryME'
                                onClick={() => setTimePeriod(timePeriod == 'week' ? 'all-time' : 'week')}>
                                {timePeriod}
                            </div>
                        </div>
                        <div className='h-25 flex justify-between px-3 py-3'>
                            <div className='text-white text-xl font-bold self-end'>
                                <h1 className='text-sm text-grayME'>Total time</h1>
                                <h1>{targetPeriod == 'week' ? data.studied_this_week : data.studied_all_time} minutes</h1>
                            </div>
                            <div className='text-white border-2 rounded-full px-3 py-2 flex items-center justify-center border-primaryME self-start cursor-pointer hover:bg-primaryME'
                                onClick={() => setTargetPeriod(targetPeriod == 'week' ? 'all-time' : 'week')}>
                                {targetPeriod}
                            </div>
                        </div>
                    </div>
                    <Card className='flex-1 bg-darkME border-none h-60'>
                        <CardHeader>
                            <CardTitle className='text-white font-bold text-2xl'>Today's Goal</CardTitle>
                            <CardDescription>{new Date("2025-11-19").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-28 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={[{
                                        name: "Today",
                                        today: data.studied_today,
                                        goal: calcTodayGoal(data.goals).toFixed(0)
                                    }]}>
                                        <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0.1} />
                                        <Tooltip content={<CustomTooltip showLabel={false} />} cursor={false} />
                                        <Bar dataKey="today" fill="#F44747" radius={10} barSize={50} />
                                        <Bar dataKey="goal" fill="#007ACC" radius={10} barSize={50} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>

                    </Card>
                    <Card className='flex-1 bg-darkME border-none h-60'>
                        <CardHeader>
                            <CardTitle className='text-white font-bold text-2xl'>Week's Goal</CardTitle>
                            <CardDescription>{new Date("2025-11-19").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-28 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={[{
                                        name: "Today",
                                        week: data.studied_this_week,
                                        goal: calcWeekGoal(data.goals).toFixed(0)
                                    }]}>
                                        <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0.1} />
                                        <Tooltip content={<CustomTooltip showLabel={false} />} cursor={false} />
                                        <Bar dataKey="week" fill="#F44747" radius={10} barSize={50} />
                                        <Bar dataKey="goal" fill="#007ACC" radius={10} barSize={50} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>

                    </Card>
                </div>
                {/* heatmap */}
                <div className='w-[80vw] bg-darkME mx-auto rounded-2xl  mt-10 px-20 py-5 '>
                    <h1 className='text-white font-bold text-2xl mb-5'>Last 12 Months</h1>
                    <div className='flex flex-wrap gap-x-1 gap-y-2'>
                        {
                            heatmapArray.map((day: any, index: any) => {

                                let opcty = 0
                                const dayData = data.heatmap.filter((heatmapItem: any) => heatmapItem.creation.slice(0, 10) == day.slice(0, 10))
                                if (dayData.length > 0) {
                                    if (dayData[0].duration > (averageTime * 2)) {
                                        opcty = 1
                                    } else if (dayData[0].duration > averageTime) {
                                        opcty = 0.75
                                    } else if (dayData[0].duration > (averageTime / 2)) {
                                        opcty = 0.5
                                    } else {
                                        opcty = 0.25
                                    }
                                }


                                return (
                                    <div className='cursor-pointer size-4 bg-grayME rounded-[4px] relative group'>
                                        <div className='opacity-0 group-hover:delay-300 group-hover:opacity-100 absolute top-1/2  group-hover:top-0 left-1/2 -translate-x-1/2  -translate-y-[130%] text-white z-10 bg-darkME rounded-sm px-3 py-1 w-fit '>
                                            <span className='flex items-center justify-center gap-2 text-nowrap text-white'>{dayData.length > 0 ? dayData[0].duration : "0"} min on {new Date("2025-11-13T14:43:40.558Z").toLocaleDateString("en-GB", {
                                                day: "2-digit",
                                                month: "short",
                                                year: "numeric",
                                            })}</span>
                                        </div>
                                        <h1 className=' absolute top-0 left-0 z-5 size-4 bg-primaryME rounded-[4px]'
                                            style={{ opacity: opcty }}>
                                        </h1>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                {/* third row */}
                <div className='w-[80vw] mx-auto mt-10 flex gap-4'>
                    <Card className='flex-1 bg-darkME border-none h-80'>
                        <CardHeader>
                            <CardTitle className='text-white font-bold text-2xl'>Top Tags - Today</CardTitle>
                            <CardDescription>{new Date("2025-11-19").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-50 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data.tags.map((tag: any) => {
                                        return {
                                            name: tag.tag,
                                            duration: data.sessions.filter((item: any) => new Date(item.creation).toDateString() === new Date().toDateString() && item.tag_name == tag.tag).reduce((acc: any, cur: any) => acc + cur.duration, 0),
                                        }
                                    }).sort((a: any, b: any) => b.duration - a.duration).slice(0, 5)}>
                                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                        <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0.1} />
                                        <Tooltip content={<CustomTooltip showLabel={false} />} cursor={false} />
                                        <Bar dataKey="duration" fill="#007ACC" radius={8} barSize={40} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='flex-1 bg-darkME border-none h-80'>
                        <CardHeader>
                            <CardTitle className='text-white font-bold text-2xl'>Top Tags - Week</CardTitle>
                            <CardDescription>{new Date("2025-11-19").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-50 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data.tags.map((tag: any) => {
                                        return {
                                            name: tag.tag,
                                            duration: data.sessions.filter((item: any) => new Date(item.creation) >= new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) && item.tag_name == tag.tag).reduce((acc: any, cur: any) => acc + cur.duration, 0),
                                        }
                                    }).sort((a: any, b: any) => b.duration - a.duration).slice(0, 5)}>
                                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                        <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0.1} />
                                        <Tooltip content={<CustomTooltip showLabel={false} />} cursor={false} />
                                        <Bar dataKey="duration" fill="#007ACC" radius={8} barSize={40} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                {/* fourth row */}
                <div className='w-[80vw] mx-auto mt-10 flex gap-4 mb-60'>
                    <Card className='flex-1 bg-darkME border-none h-80'>
                        <CardHeader>
                            <CardTitle className='text-white font-bold text-2xl'>Remaining minutes for each subject</CardTitle>
                            <CardDescription>{new Date("2025-11-19").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-50 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={data.subjects.map((subject: any) => {
                                        return {
                                            name: subject.subject,
                                            remaining_minutes: (calcTodayGoalSubject(data.goals , subject.subject) - data.sessions.filter((item: any) => sameDay(item.creation, new Date().toISOString()) && item.subject_name == subject.subject).reduce((acc: any, cur: any) => acc + cur.duration, 0)).toFixed(0)
                                        }
                                    }).sort((a: any, b: any) => b.remaining_minutes - a.remaining_minutes).slice(0, 5).reverse()}>
                                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                        <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0.1} />
                                        <Tooltip content={<CustomTooltip showLabel={false} />} cursor={false} formatter={(value: any) => `${value} min`}/>
                                        <Bar dataKey="remaining_minutes" fill="#007ACC" radius={8} barSize={50} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                    <Card className='flex-1 bg-darkME border-none h-80'>
                        <CardHeader>
                            <CardTitle className='text-white font-bold text-2xl'>This week goal</CardTitle>
                            <CardDescription>{new Date("2025-11-19").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-50 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={[{
                                        name: 'Goal',
                                        goal: calcWeekGoal(data.goals).toFixed(0),
                                        studied: data.studied_this_week
                                    }]}>
                                        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                                        <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0.1} />
                                        <Tooltip content={<CustomTooltip showLabel={false} />} cursor={false} />
                                        <Bar dataKey="studied" fill="#F44747" radius={8} barSize={50} />
                                        <Bar dataKey="goal" fill="#007ACC" radius={8} barSize={50} />
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard