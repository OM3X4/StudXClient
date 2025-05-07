'use client'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button";

function page() {

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const [isLogin, setIsLogin] = useState(true)

    const [isPasswordShown , setIsPasswordShown] = useState(false)

    useEffect(() => {
        console.log(loginData)
    })


    return (
        <div className='min-h-screen'>
            {
                isLogin ?
                    <div className='min-h-screen flex gap-5 justify-center flex-col mx-[40vw]'>
                        <h1 className='text-4xl font-bold text-white'>Stud<span className='text-5xl'>X</span></h1>
                        <div>
                            <h1 className='text-5xl text-white font-bold'>Welcome Back</h1>
                            <p className='text-grayME'>Don't have an account ? <span className='text-primaryME underline cursor-pointer'>Sign Up</span></p>
                        </div>
                        <Input onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} type='text'
                        placeholder='username' className='text-white text-2xl bg-transparent border-white/20 border-b-2 focus:border-primaryME focus:outline-none placeholder:text-white/50'/>
                        <div className="relative">
                            <Input onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                type={isPasswordShown ? 'text' : 'password'} placeholder='password' className='relative text-white text-2xl bg-transparent border-white/20 border-b-2 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                                <span onClick={() => setIsPasswordShown(!isPasswordShown)}
                                    className="absolute text-white top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:text-primaryME">{isPasswordShown ? <AiFillEyeInvisible/> : <AiFillEye /> }</span>
                        </div>
                        <Button className="text-white text-2xl px-5 py-6 rounded-lg bg-primaryME font-bold cursor-pointer hover:bg-primary/80">Log In</Button>

                    </div>
                    :
                    <div className='flex items-center justify-center'>
                        <Input placeholder='username' className='text-white text-2xl bg-transparent border-white/20 border-b-2 flex-1 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                        <Input placeholder='username' className='text-white text-2xl bg-transparent border-white/20 border-b-2 flex-1 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                    </div>
            }
        </div>
    )
}

export default page