import Head from "next/head"
import Image from "next/image"
import { client } from "@/sanity/lib/client"

export async function ChefFunc(){
  
  const chefData =  await client.fetch(`*[_type == "chef"][]{
    _id,
    name,
    position,
    "image_url": image.asset->url
    }`)
    return chefData
}



export default async function page(){

const chefData = await ChefFunc()
return(
  <div>
   <Head>
     <title>M.ANUS AHMED Chefs</title>
   </Head>
   <div className='relative'>
     <img
       src='/nav/navbarbg.jpg'
       alt='Fresh vegetables with dark background'
       className='w-full h-64 object-cover'
     />
     <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
       <h1 className='text-3xl font-bold'>Our Chef</h1>
       <p className='text-lg'>
         <span>Home</span> <span className='text-yellow-500'>› Menu</span>
       </p>
     </div>
   </div>
   <div className='container mx-auto p-4'>
     <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
       {chefData.map((chef:any) => (
         <div
           key={chef._id}
           className='bg-white shadow-md rounded-lg overflow-hidden'
         >
               {chef.image_url && (
           <Image
             src={chef.image_url}
             alt={`Image of ${chef.name}`}
             width={400}
             height={400}
             unoptimized
             className='w-full h-96 object-cover' 
           />)}
           <div className='p-4 text-center'>
             <h2 className='text-lg text-[#333] font-semibold'>{chef.name}</h2>
             <p className='text-[#333]'>{chef.position}</p>
           </div>
         </div>
       ))}
     </div>
   </div>
 </div>
)}

// {chefData.map((data:any)=>
//   (
//     <div key={data._id}>
//       {data.name}
//       <br />
//       {data.position}
//       <br />
//       {data.image_url && (
//   <Image
//     src={data.image_url}
//     alt={data.name}
//     width={200}
//     height={200}
//     unoptimized
//   />
// )}
//     </div>
//   ))}