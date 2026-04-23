import React, { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { LoginImages } from './constants';
import { toast } from 'react-toastify';
import { setItemToLocalStorage } from './helpers/helper';
import RippleButton from './components/RippleButton';

const Login = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isRemember, setIsRemember] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [login, setLogin] = useState(false);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRef = useRef(null);
    const navigate = useNavigate();

    const toggleRememberMe = () => setIsRemember(!isRemember);

    const userLogin = async () => {
        try {
            if(email.trim() === "" || !emailRegex.test(email)){
                return alert("Invalid Email Input!")
            }else if(username.trim() === ""){
                return alert("Please Enter Username!")
            }else if(password.trim() === ""){
                return alert("Please Enter Password!")
            }

            setIsLoading(true);

            const response = await axios.post(login ? 'http://localhost:8080/api/v1/user/' : 'http://localhost:8080/api/v1/user/login',
                {
                    name: username, 
                    email: email, 
                    phoneNumber: phoneNumber, 
                    password: password,
                    rememberMe: isRemember
                })
                
            //traditional fetching api
            // const response1 = await fetch(
            //     login ? 'http://localhost:8080/api/v1/user' : 'http://localhost:8080/api/v1/user/login',
            //     {
            //         method: "POST",
            //         headers: {
            //             "Content-Type": "application/json",
            //         },
            //         body: JSON.stringify({
            //             name: username,
            //             email: email,
            //             phoneNumber: phoneNumber,
            //             password: password
            //         })
            //     }
            // )

            if (response.data.success) {
                console.log("Response", response.data)
                toast.success(response.data.message)
                setItemToLocalStorage("user-data", response.data);
                setTimeout(() => {
                    setIsLoading(false)
                    navigate("/")
                }, 1000);
            }
        } catch (error) {
            const errorResponse = error;
            console.log("Register Error", errorResponse.response.data.message);
            toast.error(errorResponse.response.data.message);
        } finally {
            setIsLoading(false);
        }
    }

  return (
    <div className='flex items-center justify-center h-screen'>
        <video
        src="/src/assests/videos/loginAndSignUp.mp4"
        autoPlay
        loop
        muted
        className='absolute top-0 left-0 w-full h-full object-cover -z-10'
        />
        <div className='flex w-3/5'>
            <div className='w-3/5 rounded-l-3xl shadow-2xl border border-white/30'>
                <img src={LoginImages[1]} alt="#" className='w-full h-full rounded-l-3xl' />
            </div>
            <form action="" 
            onSubmit={(e) => {
                e.preventDefault();
                userLogin();
            }}
            className='flex flex-col w-2/5 bg-white/10 backdrop-blur-lg border border-white/30 rounded-r-3xl shadow-2xl p-3 py-10 px-5 gap-2'>
                <div className='text-center text-2xl font-bold'>
                    {login ? 'Create An Account' : 'Welcome Back!'}
                </div>
                <div className='flex flex-col'>
                    {login ? 
                    <div className='flex flex-col gap-2'>
                        <label htmlFor="userName" className='font-semibold'>Username</label>
                        <input
                        type="text"
                        id='userName'
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter Your Username' 
                        className='bg-white rounded-sm outline-none w-full font-semibold p-2' />

                        <label htmlFor="email" className='font-semibold'>Email</label>
                        <input
                        type="email"
                        id='email'
                        value={email}
                        ref={passwordRef}
                        onChange={(e) => setEmail(e.target.value)}
                        onKeyDown={(e) => {
                            e.key === "Enter" && passwordRef.current.focus()
                        }}
                        placeholder='Enter Your Email' 
                        className='bg-white rounded-sm outline-none w-full font-semibold p-2' />

                        <label htmlFor="phoneNumber" className='font-semibold'>Phone Number</label>
                        <input
                        type="text"
                        id='phoneNumber'
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder='Enter Your Phone Number' 
                        className='bg-white rounded-sm outline-none w-full font-semibold p-2' />

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='font-semibold'>Password</label>
                            <div className='flex justify-between items-center p-2 bg-white rounded-sm'>
                                <input 
                                ref={passwordRef}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={(e) => {
                                    e.key === "Enter"
                                }}
                                type={isShowPassword ? "text" : "password"} 
                                id="password" 
                                placeholder='Enter Your Password' 
                                className='outline-none font-semibold' />
                                {
                                    isShowPassword ?
                                    <FaEye onClick={() => setIsShowPassword(!isShowPassword)} />
                                    :
                                    <FaEyeSlash onClick={() => setIsShowPassword(!isShowPassword)} />
                                }
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-col py-3 justify-center gap-2'>
                        <label htmlFor="username" className='font-semibold'>Username</label>
                        <input
                        type="text" 
                        id='username' 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter Your Username' 
                        className='bg-white rounded-sm outline-none font-semibold w-full p-2' />

                        <label htmlFor="email" className='font-semibold'>Email</label>
                        <input
                        type="email" 
                        id='email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Enter Your Email' 
                        className='bg-white rounded-sm outline-none font-semibold w-full p-2' />

                        <div className='flex flex-col gap-2'>
                            <label htmlFor="password" className='font-semibold'>Password</label>
                            <div className='flex justify-between items-center p-2 bg-white rounded-sm'>
                                <input 
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type={isShowPassword ? "text" : "password"} 
                                id="password" placeholder='Enter Your Password' 
                                className='outline-none font-semibold' />
                                {
                                    isShowPassword ?
                                    <FaEye onClick={() => setIsShowPassword(!isShowPassword)} />
                                    :
                                    <FaEyeSlash onClick={() => setIsShowPassword(!isShowPassword)} />
                                }
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex items-center justify-center gap-2'>
                                <div onClick={toggleRememberMe} className={`relative py-2.5 cursor-pointer px-5 rounded-xl ${isRemember ? 'bg-txtColor4 transition-all duration-300': 'bg-primary transition-all duration-300'}`}>
                                    <div className={`absolute top-1/2 -translate-y-1/2 p-2 mx-0.5 ${isRemember ? 'bg-primary left-5 transition-all duration-300': 'bg-txtColor4 left-0 transition-all duration-300'} rounded-full`}></div>
                                </div>
                                <div className='font-semibold cursor-pointer' onClick={toggleRememberMe}>
                                    Remember Me
                                </div>
                            </div>
                            <Link className='font-semibold'>Forgot password?</Link>
                        </div>
                    </div>
                    }
                </div>
                <RippleButton
                    type="submit"
                    className={`rounded-sm p-2 mt-5 text-txtColor2 ${isLoading ? 'animate-pulse' : ''} bg-primary text-center font-semibold btnHover w-full`}>
                    {login ? 'Register' : 'Login'}
                </RippleButton>
                {/* <button
                className={`rounded-sm p-2 mt-5 text-txtColor2 ${isLoading ? 'animate-pulse' : ''} bg-primary text-center font-semibold btnHover`}>
                    {login ? 'Register' : 'Login'}
                </button> */}
                <div className='flex  flex-col gap-2'>
                    <div className='text-center font-semibold'>
                        OR
                    </div>
                    <Link
                    to={'#'}
                    className='bg-primary text-txtColor2 text-center cursor-pointer btnHover rounded-sm font-semibold p-2'>
                        {login ? "Sign Up With Google" : "Login With Google"}
                    </Link>
                    <div className='flex gap-2 justify-center font-semibold'>
                        <div>
                            {login ? "Already have an account?" : "Don't have an account?"}
                        </div>
                        <div 
                        onClick={() => setLogin(!login)}
                        className='underline cursor-pointer'>
                            {login ? "Login" : "Sign Up"}
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Login