'use client'
import React, { useEffect, useState } from 'react'
import Navbar from '@/app/components/Navbar'
import { useParams } from 'next/navigation';
import { Card , CardContent, CardDescription , CardHeader , CardTitle } from '@/components/ui/card';
import { BarChart , Bar , XAxis , YAxis , CartesianGrid , Tooltip  , ResponsiveContainer } from 'recharts';
import isInLast7Days from '@/app/utils/isInTheLast7Days';
import CustomTooltip from '@/app/components/Tooltip';
import calcTodayGoalSubject from '@/app/utils/calcTodayGoalSubject';
import { Button } from '@/components/ui/button';
import { Dialog , DialogContent , DialogHeader , DialogTitle , DialogTrigger  } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useUserData from '@/app/hooks/useUserData';
import Loading from '@/app/loading';


function subject() {

    const params = useParams();
    const id = parseInt(params.id as string) - 1;

    const [timePeriod , setTimePeriod] = useState('week');

    const { data , isLoading } = useUserData();

    useEffect(() => {
        console.log(data)
    } , [data])

    if(isLoading || !data) return <Loading />

    if(id >= data.subjects.length) return <h1 className='w-screen h-screen text-7xl text-white font-bold flex items-center justify-center'>Subject not found</h1>

    return (
        <div className='min-h-screen'>
            <Navbar />
            <div className="w-[80vw] mx-auto">
                <h1 className='text-7xl text-white font-bold'>{data.subjects[id].id}.{data.subjects[id].subject}</h1>
                {/* first row */}
                <div className='w-[80vw] mx-auto mt-10 flex gap-4'>
                    {/* number of minutes card */}
                    <div className='flex-1 bg-backgroundME border-6 border-darkME rounded-2xl h-60 flex justify-between px-3 py-3'>
                        <div className='text-white text-xl font-bold self-end'>
                            <h1 className='text-sm text-grayME'>Total time</h1>
                            <h1>{data.sessions.filter((session: any) => session.subject_name == data.subjects[id].subject && (isInLast7Days(session.creation) || timePeriod == 'all-time')).reduce((acc: number, cur: any) => acc + cur.duration, 0)} minutes</h1>
                        </div>
                        <div className='text-white border-2 rounded-full px-3 py-2 flex items-center justify-center border-primaryME self-start cursor-pointer hover:bg-primaryME'
                            onClick={() => setTimePeriod(timePeriod == 'week' ? 'all-time' : 'week')}>
                            {timePeriod}
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
                                        goal: calcTodayGoalSubject(data.goals , data.subjects[id].subject).toFixed(0)
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
                </div>
                <div className='w-[80vw] mx-auto mt-10 flex gap-4 mb-60'>
                    <Card className='flex-1 bg-darkME border-none h-90 p-5 overflow-y-scroll'>
                        <CardHeader>
                            <CardTitle className='text-white text-4xl font-bold flex items-center justify-between'>Topics
                                        <Dialog>
                                            <DialogTrigger>
                                                <div className='text-white text-xl px-2 py-2 rounded-xl bg-primaryME font-bold cursor-pointer hover:bg-primary/80'>New tag</div>
                                            </DialogTrigger>
                                            <DialogContent  className="bg-darkME">
                                                <DialogHeader>
                                                    <DialogTitle className='text-white text-3xl mb-5'>Add A New Topic</DialogTitle>
                                                </DialogHeader>
                                                <div className='flex flex-col items-center justify-center gap-5 px-10'>
                                                    <Label className='gap-7'>
                                                        <span className='text-white font-thin text-md text-nowrap'>topic Name</span>
                                                        <Input className='text-white text-2xl font-bold' placeholder='topic name' />
                                                    </Label>
                                                    <Button className=' cursor-pointer w-full border-2 border-primaryME hover:bg-primaryME'>Submit</Button>
                                                </div>

                                            </DialogContent>
                                        </Dialog>
                            </CardTitle>
                            <CardContent>
                                <div className='flex flex-col items-center justify-center gap-5 mt-5 '>
                                    {
                                        data.subjects[id]?.topics.map((topic: any) => {
                                            return (
                                                <div className='text-white text-xl bg-backgroundME font-bold w-full rounded-2xl py-4 text-center'>
                                                    {topic.topic}
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </CardContent>
                        </CardHeader>
                    </Card>
                    {/* time per topic */}
                    <Card className='flex-1/3 bg-darkME border-none h-90'>
                        <CardHeader>
                            <CardTitle className='text-white font-bold text-2xl'>Minutes per topic last week</CardTitle>
                            <CardDescription>{new Date("2025-11-19").toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" })}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="h-60 w-full">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={
                                        data.subjects[id].topics.map((topic: any) => {
                                            return {
                                                name: topic.topic,
                                                time: data.sessions.filter((session: any) => session.topic_name == topic.topic && (isInLast7Days(session.creation) || timePeriod == 'all-time')).reduce((acc: number, cur: any) => acc + cur.duration, 0)
                                            }
                                        })
                                    }>
                                        <CartesianGrid strokeDasharray="0 0" vertical={false} strokeOpacity={0.1} />
                                        <XAxis dataKey="name" tickLine={false}/>
                                        <YAxis tickFormatter={(value) => `${value} min`}/>
                                        <Tooltip content={<CustomTooltip showLabel={false} />} cursor={false} />
                                        <Bar dataKey="time" fill="#F44747" radius={10} barSize={50} />
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

export default subject