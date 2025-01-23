
import Image from "next/image"
import Link from "next/link"
import { FaPlay } from 'react-icons/fa'
  import { useState } from 'react'
  

export default function HeroVideo(){
    const [onVideo, setOnVideo] = useState(false);
      function showVideo() {
        setOnVideo(!onVideo);
      }
    return(
        
      <div>
     
       <section>
        <div className='bg-black min-h-screen relative'>
          <Image
            src='/blog/blog1.jpg'
            alt='Delicious food with vegetables and meat'
            layout='fill'
            objectFit='cover'
            className='w-full h-full'
          />
           <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-end p-8 md:p-16 text-center'>
            <h2
              className='text-[#FF9F0D] text-lg md:text-xl font-great-vibes'
              style={{ fontFamily: 'Great Vibes, cursive' }}
            >
              Restaurant Active Process
            </h2>
            <h1 className='text-white text-4xl text-end md:text-5xl font-bold mt-2'>
              <span className='text-[#FF9F0D]'>We</span> Document Every Food{' '}
              <br /> Bean Process until it is saved
            </h1>
            <p className='text-gray-300 text-sm md:text-base text-end mt-4 max-w-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
              Urna, elit augue urna,.
            </p>
            <div className='mt-6 flex space-x-4 justify-center'>
              <Link href={"/blog"} className='bg-transparent border border-[#FF9F0D] text-white px-6 py-4 rounded-full hover:bg-[#FF9F0D] hover:text-black transition duration-300'>
                Read More
              </Link>
              <button onClick={showVideo} className=' text-white px-4 py-2 rounded-full flex items-center space-x-2 hover:text-black hover:bg-[#FF9F0D] transition duration-300'>
                <div className='flex items-center justify-center w-10 h-10 bg-[#FF9F0D] rounded-full'>
                  <FaPlay className='text-white' />
                </div>
                <span>Play Video</span>
              </button>
             </div>
          </div>
        </div>
      </section> 
    
        {
        onVideo && (
          <div className="container w-full mx-auto aspect-w-16 my-12 aspect-h-9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lUuR8jyBsXI?si=rVVpEKG-sEm2PutP" 
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen 
          className='w-full h-full '></iframe>
          </div>
        )
       }

      </div>
    )
}