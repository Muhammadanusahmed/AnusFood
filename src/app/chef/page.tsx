import Head from 'next/head'
import { chefs } from '@/context/context'
import React from 'react'

// const chefs = [
//   { name: 'Tahmina Rumi', title: 'Chef', img: '/chef/chef5.jpg' },
//   { name: 'Jorina Begum', title: 'Chef', img: '/chef/chef6.jpg' },
//   { name: 'M.Mohammad', title: 'Chef', img: '/chef/chef7.jpg' },
//   { name: 'Munna Kathy', title: 'Chef', img: '/chef/chef8.jpg' },
//   { name: 'Tahmina Rumi', title: 'Chef', img: '/chef/chef9.jpg' },
//   { name: 'Bisnu devgon', title: 'Chef', img: '/chef/chef10.jpg' },
//   { name: 'Motin Molladsf', title: 'Chef', img: '/chef/chef11.jpg' },
//   { name: 'William Rumi', title: 'Chef', img: '/chef/chef12.jpg' },
//   { name: 'Kets william roy', title: 'Chef', img: '/chef/chef13.jpg' },
//   { name: 'Mahmud kholli', title: 'Chef', img: '/chef/chef14.jpg' },
//   { name: 'Ataur Rahman', title: 'Chef', img: '/chef/chef15.jpg' },
//   { name: 'Monalisa holly', title: 'Chef', img: '/chef/chef16.jpg' }
// ]

export default function page(){

  let chefjs = chefs.name
  

  return (
    // <div>
    //   <Head>
    //     <title>M.ANUS AHMED Chef's</title>
    //   </Head>
    //   <div className='relative'>
    //     <img
    //       src='/nav/navbarbg.jpg'
    //       alt='Fresh vegetables with dark background'
    //       className='w-full h-64 object-cover'
    //     />
    //     <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
    //       <h1 className='text-3xl font-bold'>Our Chef</h1>
    //       <p className='text-lg'>
    //         <span>Home</span> <span className='text-yellow-500'>› Menu</span>
    //       </p>
    //     </div>
    //   </div>
    //   <div className='container mx-auto p-4'>
    //     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
    //       {chefs.map((chef:{name:string,title:string,img:string}, index:number) => (
    //         <div
    //           key={index}
    //           className='bg-white shadow-md rounded-lg overflow-hidden'
    //         >
    //           {/* <img
    //             src={chef.img}
    //             alt={`Image of ${chef.name}`}
    //             className='w-full h-96 object-cover' 
    //           /> */}
    //           <div className='p-4 text-center'>
    //             <h2 className='text-lg text-[#333] font-semibold'>{chef.name}</h2>
    //             <p className='text-[#333]'>{chef.title}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //   </div>
    // </div>
    <div>{chefjs.map((chef:{name:string,position:string,img:string}, index:number) => (
    <div key={index}>
      {chef.name}
      <br />
      {chef.position}
      <br />
      {chef.img}
      </div>))}</div>
  )
}
