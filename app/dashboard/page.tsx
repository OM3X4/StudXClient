'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar'
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

function Dashboard() {

    const dayOfMonth = new Date().getDate();

    const today = new Date();

    const dayOfWeek = today.toLocaleDateString("en-US", { weekday: "long" }); // e.g., "Saturday"
    const monthName = today.toLocaleDateString("en-US", { month: "long" });   // e.g., "May"

    const [timePeriod, setTimePeriod] = useState('week');
    const [targetPeriod, setTargetPeriod] = useState('week');


    const [data, setData] = useState({
        "id": 1,
        "username": "omar",
        "email": "omar@omar.com",
        "subjects": [
            {
                "id": 1,
                "subject": "Math",
                "topics": [
                    {
                        "id": 1,
                        "topic": "Algebra Basics"
                    },
                    {
                        "id": 2,
                        "topic": "Calculus"
                    },
                    {
                        "id": 3,
                        "topic": "Geometry"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 2,
                "subject": "Science",
                "topics": [
                    {
                        "id": 4,
                        "topic": "Physics Laws"
                    },
                    {
                        "id": 5,
                        "topic": "Chemical Reactions"
                    },
                    {
                        "id": 6,
                        "topic": "Biochemistry"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 3,
                "subject": "History",
                "topics": [
                    {
                        "id": 7,
                        "topic": "Ancient History"
                    },
                    {
                        "id": 8,
                        "topic": "Modern History"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 4,
                "subject": "Art",
                "topics": [
                    {
                        "id": 9,
                        "topic": "Impressionism"
                    },
                    {
                        "id": 10,
                        "topic": "Renaissance Art"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 5,
                "subject": "Geography",
                "topics": [
                    {
                        "id": 11,
                        "topic": "World Geography"
                    },
                    {
                        "id": 12,
                        "topic": "Economic Geography"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 6,
                "subject": "English",
                "topics": [
                    {
                        "id": 13,
                        "topic": "Shakespearean Plays"
                    },
                    {
                        "id": 14,
                        "topic": "Poetry Analysis"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 7,
                "subject": "Biology",
                "topics": [
                    {
                        "id": 15,
                        "topic": "Genetics"
                    },
                    {
                        "id": 16,
                        "topic": "Evolution Theory"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 8,
                "subject": "Chemistry",
                "topics": [
                    {
                        "id": 17,
                        "topic": "Organic Chemistry"
                    },
                    {
                        "id": 18,
                        "topic": "Inorganic Chemistry"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 9,
                "subject": "Physics",
                "topics": [
                    {
                        "id": 19,
                        "topic": "Newtonian Mechanics"
                    },
                    {
                        "id": 20,
                        "topic": "Quantum Physics"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 10,
                "subject": "Philosophy",
                "topics": [
                    {
                        "id": 21,
                        "topic": "Ethical Philosophy"
                    },
                    {
                        "id": 22,
                        "topic": "Political Philosophy"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 11,
                "subject": "Math",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 12,
                "subject": "Science",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 13,
                "subject": "History",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 14,
                "subject": "Art",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 15,
                "subject": "Geography",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 16,
                "subject": "English",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 17,
                "subject": "Biology",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 18,
                "subject": "Chemistry",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 19,
                "subject": "Physics",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 20,
                "subject": "Philosophy",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 21,
                "subject": "Math",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 22,
                "subject": "Science",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 23,
                "subject": "History",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 24,
                "subject": "Art",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 25,
                "subject": "Geography",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 26,
                "subject": "English",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 27,
                "subject": "Biology",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 28,
                "subject": "Chemistry",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 29,
                "subject": "Physics",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 30,
                "subject": "Philosophy",
                "topics": [],
                "color": "#1d5fc2"
            },
            {
                "id": 31,
                "subject": "omar",
                "topics": [
                    {
                        "id": 23,
                        "topic": "omar"
                    }
                ],
                "color": "#1d5fc2"
            },
            {
                "id": 32,
                "subject": "omar1",
                "topics": [
                    {
                        "id": 24,
                        "topic": "green"
                    }
                ],
                "color": "#omar11"
            }
        ],
        "sessions": [
            {
                "id": 1,
                "subject": 1,
                "subject_name": "Math",
                "topic": 1,
                "topic_name": "Algebra Basics",
                "tag": 1,
                "tag_name": "Focus",
                "focus": 45,
                "duration": 60
            },
            {
                "id": 2,
                "subject": 2,
                "subject_name": "Science",
                "topic": 4,
                "topic_name": "Physics Laws",
                "tag": 2,
                "tag_name": "Study",
                "focus": 30,
                "duration": 60
            },
            {
                "id": 3,
                "subject": 3,
                "subject_name": "History",
                "topic": 7,
                "topic_name": "Ancient History",
                "tag": 3,
                "tag_name": "Review",
                "focus": 60,
                "duration": 60
            },
            {
                "id": 4,
                "subject": 4,
                "subject_name": "Art",
                "topic": 10,
                "topic_name": "Renaissance Art",
                "tag": 4,
                "tag_name": "Practice",
                "focus": 50,
                "duration": 60
            },
            {
                "id": 5,
                "subject": 5,
                "subject_name": "Geography",
                "topic": 12,
                "topic_name": "Economic Geography",
                "tag": 5,
                "tag_name": "Exam Prep",
                "focus": 35,
                "duration": 60
            },
            {
                "id": 6,
                "subject": 6,
                "subject_name": "English",
                "topic": 13,
                "topic_name": "Shakespearean Plays",
                "tag": 6,
                "tag_name": "Homework",
                "focus": 45,
                "duration": 60
            },
            {
                "id": 7,
                "subject": 7,
                "subject_name": "Biology",
                "topic": 16,
                "topic_name": "Evolution Theory",
                "tag": 7,
                "tag_name": "Research",
                "focus": 30,
                "duration": 60
            },
            {
                "id": 8,
                "subject": 8,
                "subject_name": "Chemistry",
                "topic": 18,
                "topic_name": "Inorganic Chemistry",
                "tag": 8,
                "tag_name": "Lecture",
                "focus": 60,
                "duration": 60
            },
            {
                "id": 9,
                "subject": 9,
                "subject_name": "Physics",
                "topic": 19,
                "topic_name": "Newtonian Mechanics",
                "tag": 9,
                "tag_name": "Group Work",
                "focus": 50,
                "duration": 60
            },
            {
                "id": 10,
                "subject": 10,
                "subject_name": "Philosophy",
                "topic": 20,
                "topic_name": "Quantum Physics",
                "tag": 10,
                "tag_name": "Self Study",
                "focus": 40,
                "duration": 60
            },
            {
                "id": 11,
                "subject": 32,
                "subject_name": "omar1",
                "topic": null,
                "tag": null,
                "focus": 4,
                "duration": 70
            },
            {
                "id": 12,
                "subject": 32,
                "subject_name": "omar1",
                "topic": null,
                "tag": null,
                "focus": 4,
                "duration": 70
            },
            {
                "id": 13,
                "subject": 32,
                "subject_name": "omar1",
                "topic": null,
                "tag": null,
                "focus": 4,
                "duration": 70
            },
            {
                "id": 14,
                "subject": 32,
                "subject_name": "omar1",
                "topic": null,
                "tag": null,
                "focus": 4,
                "duration": 70
            },
            {
                "id": 15,
                "subject": 32,
                "subject_name": "omar1",
                "topic": null,
                "tag": null,
                "focus": 4,
                "duration": 70
            }
        ],
        "goals": [
            {
                "id": 1,
                "end": "2025-06-01",
                "minutes": 600,
                "subject": 1,
                "topic": 1,
                "subject_name": "Math",
                "topic_name": "Algebra Basics"
            },
            {
                "id": 2,
                "end": "2025-06-01",
                "minutes": 400,
                "subject": 2,
                "topic": 4,
                "subject_name": "Science",
                "topic_name": "Physics Laws"
            },
            {
                "id": 3,
                "end": "2025-06-01",
                "minutes": 500,
                "subject": 3,
                "topic": 7,
                "subject_name": "History",
                "topic_name": "Ancient History"
            },
            {
                "id": 4,
                "end": "2025-06-01",
                "minutes": 450,
                "subject": 4,
                "topic": 10,
                "subject_name": "Art",
                "topic_name": "Renaissance Art"
            },
            {
                "id": 5,
                "end": "2025-06-01",
                "minutes": 350,
                "subject": 5,
                "topic": 12,
                "subject_name": "Geography",
                "topic_name": "Economic Geography"
            },
            {
                "id": 6,
                "end": "2025-06-01",
                "minutes": 600,
                "subject": 6,
                "topic": 13,
                "subject_name": "English",
                "topic_name": "Shakespearean Plays"
            },
            {
                "id": 7,
                "end": "2025-06-01",
                "minutes": 550,
                "subject": 7,
                "topic": 16,
                "subject_name": "Biology",
                "topic_name": "Evolution Theory"
            },
            {
                "id": 8,
                "end": "2025-06-01",
                "minutes": 700,
                "subject": 8,
                "topic": 18,
                "subject_name": "Chemistry",
                "topic_name": "Inorganic Chemistry"
            },
            {
                "id": 9,
                "end": "2025-06-01",
                "minutes": 800,
                "subject": 9,
                "topic": 19,
                "subject_name": "Physics",
                "topic_name": "Newtonian Mechanics"
            },
            {
                "id": 10,
                "end": "2025-06-01",
                "minutes": 900,
                "subject": 10,
                "topic": 20,
                "subject_name": "Philosophy",
                "topic_name": "Quantum Physics"
            }
        ],
        "tags": [
            {
                "tag": "Focus"
            },
            {
                "tag": "Study"
            },
            {
                "tag": "Review"
            },
            {
                "tag": "Practice"
            },
            {
                "tag": "Exam Prep"
            },
            {
                "tag": "Homework"
            },
            {
                "tag": "Research"
            },
            {
                "tag": "Lecture"
            },
            {
                "tag": "Group Work"
            },
            {
                "tag": "Self Study"
            },
            {
                "tag": "Morning"
            }
        ],
        "studied_today": 280,
        "studied_this_week": 950,
        "studied_all_time": 950
    })

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
                <div className='w-[80vw] mx-auto mt-10'>
                    <div className='bg-darkME w-1/4 h-60 rounded-2xl px-2 py-2'>
                        <div className='bg-backgroundME rounded-2xl h-30 flex justify-between px-3 py-3'>
                            <div className='text-white text-xl font-bold self-end'>
                                <h1 className='text-sm text-grayME'>Total time</h1>
                                <h1>{timePeriod == 'week' ? data.studied_this_week : data.studied_all_time} minutes</h1>
                            </div>
                            <div className='text-white bg-primaryME self-start'>
                                {timePeriod}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard