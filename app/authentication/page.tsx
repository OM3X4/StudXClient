'use client'
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from "@/components/ui/button";
import { useLogin } from "../hooks/useLogin";
import { useRegister } from "../hooks/useRegister";
import Ringloader from "../components/ringloader";
import { toast } from "sonner";

function page() {

    const { mutate: fetchLogin, isPending: isLoadingLogin } = useLogin()
    const { mutate: fetchRegister, isPending: isLoadingRegister } = useRegister()

    const [loginData, setLoginData] = useState({
        username: '',
        password: ''
    })

    const [registerData, setRegisterData] = useState({
        username: '',
        email: '',
        password: '',
        passwordver: ''
    })


    const [isLogin, setIsLogin] = useState(true)

    const [isPasswordShown, setIsPasswordShown] = useState(false)

    const registerFunction = () => {
        if(registerData.password !== registerData.passwordver){
            toast.error("Password doesn't match")
            return;
        }

        if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(registerData.email) === false){
            toast.error("Invalid Email")
            return;
        }

        fetchRegister({
            username: registerData.username,
            email: registerData.email,
            password: registerData.password
        })
    }


    return (
        <div className={`min-h-screen`}>
            {
                isLogin ?
                    <div className='min-h-screen min-w-screen flex items-center justify-center'>
                        <div className='w-[50%] h-[80%] flex gap-5 justify-center flex-col '>
                            <h1 className='text-4xl font-bold text-white'>Stud<span className='text-5xl'>X</span></h1>
                            <div>
                                <h1 className='text-5xl text-white font-bold'>Welcome Back {isLoadingLogin && <Ringloader color="white" size={25} stroke={3} />}</h1>
                                <p className='text-grayME' onClick={() => setIsLogin(false)}
                                >Don't have an account ? <span className='text-primaryME underline cursor-pointer'>Sign Up</span></p>
                            </div>
                            <Input onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} type='text'
                                placeholder='username' className='text-white text-2xl bg-transparent border-white/20 border-b-2 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                            <div className="relative">
                                <Input onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                                    type={isPasswordShown ? 'text' : 'password'} placeholder='password' className='relative text-white text-2xl bg-transparent border-white/20 border-b-2 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                                <span onClick={() => setIsPasswordShown(!isPasswordShown)}
                                    className="absolute text-white top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:text-primaryME">{isPasswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}</span>
                            </div>
                            <Button onClick={() => fetchLogin(loginData)}
                                className="text-white text-2xl px-5 py-6 rounded-lg bg-primaryME font-bold cursor-pointer hover:bg-primary/80">Log In</Button>
                        </div>
                    </div>
                    :
                    <div className='min-h-screen min-w-screen flex items-center justify-center'>
                        <div className='w-[50%] h-[80%] flex gap-5 justify-center flex-col '>
                            <h1 className='text-4xl font-bold text-white '>Stud<span className='text-5xl'>X</span></h1>
                            <div>
                                <h1 className='text-5xl text-white font-bold'>Register {isLoadingRegister && <Ringloader color="white" size={25} stroke={3} />}</h1>
                                <p className='text-grayME' onClick={() => setIsLogin(true)}
                                >Don't have an account ? <span className='text-primaryME underline cursor-pointer'>Sign Up</span></p>
                            </div>
                            {/* username */}
                            <Input onChange={(e) => setRegisterData({ ...registerData, username: e.target.value })} type='text'
                                placeholder='username' className='text-white text-2xl bg-transparent border-white/20 border-b-2 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                            <Input onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })} type='text'
                                placeholder='email' className='text-white text-2xl bg-transparent border-white/20 border-b-2 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                            {/* password */}
                            <div className="relative">
                                <Input onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                                    type={isPasswordShown ? 'text' : 'password'} placeholder='password' className='relative text-white text-2xl bg-transparent border-white/20 border-b-2 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                                <span onClick={() => setIsPasswordShown(!isPasswordShown)}
                                    className="absolute text-white top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:text-primaryME">{isPasswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}</span>
                            </div>
                            {/* password verification */}
                            <div className="relative">
                                <Input onChange={(e) => setRegisterData({ ...registerData, passwordver: e.target.value })}
                                    type={isPasswordShown ? 'text' : 'password'} placeholder='verify password' className='relative text-white text-2xl bg-transparent border-white/20 border-b-2 focus:border-primaryME focus:outline-none placeholder:text-white/50' />
                                <span onClick={() => setIsPasswordShown(!isPasswordShown)}
                                    className="absolute text-white top-1/2 -translate-y-1/2 right-3 cursor-pointer hover:text-primaryME">{isPasswordShown ? <AiFillEyeInvisible /> : <AiFillEye />}</span>
                            </div>
                            <Button onClick={() => registerFunction()}
                            className="text-white text-2xl px-5 py-6 rounded-lg bg-primaryME font-bold cursor-pointer hover:bg-primary/80">Log In</Button>

                        </div>
                    </div>
            }
        </div>
    )
}

export default page