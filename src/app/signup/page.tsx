import Head from 'next/head'
import React from 'react'
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <Head>
        <title>Our SignUp</title>
      </Head>
      <div className='relative'>
        <img
          src='/nav/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>SignUp Page</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-yellow-500'>› SignUp</span>
          </p>
        </div>
      </div>

      <div className='h-screen flex items-center justify-center min-h-screen'>
        <div className='bg-white p-8 rounded-lg shadow-md w-full max-w-md'>
          <h2 className='text-2xl font-bold font-helvetica text-[#4f4f4f] mb-6'>Sign Up</h2>
          <form className='space-y-4'>
            <div className='flex items-center border-b border-gray-300 py-2'>
                <img src='/icons/User.png' alt='user' className='text-[#4f4f4f] mr-3'/>
              <input
                type='text'
                placeholder='Name'
                className='w-full font-helvetica text-[#4f4f4f] focus:outline-none'
              />
            </div>
            <div className='flex items-center border-b border-gray-300 py-2'>
            <img src='/icons/Email.png' alt='Email' className='font-helveticatext-[#4f4f4f] mr-3'/>

              <input
                type='email'
                placeholder='Email'
                className='w-full focus:outline-none'
              />
            </div>
            <div className='flex items-center border-b border-gray-300 py-2'>
            <img src='/icons/Lock.png' alt='Lock' className='text-[#4f4f4f] mr-3'/>

              <input
                type='password'
                placeholder='Password'
                className='w-full font-helvetica text-[#4f4f4f] focus:outline-none'
              />
            </div>
            <div className='flex items-center'>
              <input type='checkbox' id='remember' className='mr-2' />
              <label htmlFor='remember' className='text-sm'>
               <span className=' font-helvetica text-[#828282]' >Remember me?</span> 
              </label>
            </div>
            <button
              type='submit'
              className='w-full bg-[#FF9F0D] text-white py-2 rounded-md'
            >
              Sign Up
            </button>
          </form>
          <div className='text-right mt-2'>
            <a href='#' className='text-sm text-gray-500'>
              Forget password?
            </a>
          </div>
          <div className='flex items-center my-4'>
            <hr className='flex-grow border-gray-300' />
            <span className='px-1 text-[#4f4f4f] font-helvetica border-2 border-[#E0E0E0]'>OR</span> 
            <hr className='flex-grow border-gray-300' />
          </div>
          <button className='w-full flex items-center justify-center border border-gray-300 py-2 rounded-md mb-2'>
            <img src='/icons/google.jpg' alt='Google logo' className='mr-2 font-helvetica text-[#4f4f4f]' />
            <span className='font-helvetica text-[#4f4f4f]'>Sign up with Google</span>
          </button>
          <button className='w-full flex items-center justify-center border border-gray-300 py-2 rounded-md'>
            <img src='/icons/apple.jpg' alt='Apple logo' className='mr-2' />
           <span className='font-helvetica text-[#4f4f4f]'>Sign up with Apple</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default page
