import Head from 'next/head'
import React from 'react'
import {
  FaChevronLeft,
  FaChevronRight,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube
} from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <Head>
        <title>Blog Page</title>
      </Head>
      <div className='relative'>
        <img
          src='/nav/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>Blog</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-[#FF9F0D]'>› Blog</span>
          </p>
        </div>
      </div>

      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-2'>
            <a href='/blogdetail' className='bg-white p-4 border mb-4 block'>
              <img
                src='/blog/blog1.jpg'
                alt='Tacos with a drizzle of sauce'
                className='w-full h-96 object-cover'
              />
              <div className='p-4'>
                <div className='flex items-center mb-2'>
                  <div className='bg-[#FF9F0D] text-white px-2 py-1 rounded-full text-sm'>
                    14 Feb
                  </div>
                  <div className='ml-3 text-gray-500 text-sm flex items-center'>
                    <img src='/icons/Chats.png' alt='msg' className='mr-1' /> <span>3</span>
                    <span className='mx-1'>|</span> <img src='/icons/UserCircle.png' alt="user" className='ml-1' />
                    <span className='ml-1'>Admin</span>
                  </div>
                </div>
                <h2 className='text-2xl text-[#333] font-bold mb-2'>
                  10 Reasons To Do A Digital Detox Challenge
                </h2>
                <p className='text-gray-700 mb-4'>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat
                </p>
                <button className='text-[#FF9F0D] hover:bg-[#FF9F0D] duration-100 bg-white border border-[#FF9F0D] px-4 py-2'>
                  Read More
                </button>
              </div>
            </a>

            <a href='/blogdetail' className='bg-white p-4 border mb-4 block'>
              <img
                src='/blog/blog2.jpg'
                alt='Tacos with a drizzle of sauce'
                className='w-full h-96 object-cover'
              />
              <div className='p-4'>
                <div className='flex items-center mb-2'>
                  <div className='bg-[#FF9F0D] text-white px-2 py-1 rounded-full text-sm'>
                    14 Feb
                  </div>
                  <div className='ml-3 text-gray-500 text-sm flex items-center'>
                  <img src='/icons/Chats.png' alt="msg" className='mr-1' /> <span>3</span>
                    <span className='mx-1'>|</span> <img src='/icons/UserCircle.png' alt="user" className='ml-1' />
                    <span className='ml-1'>Admin</span>
                  </div>
                </div>
                <h2 className='text-2xl font-bold text-[#333] mb-2'>
                  Traditional Soft Pretzels with Sweet Beer Cheese
                </h2>
                <p className='text-gray-700 mb-4'>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat
                </p>
                <button className='text-[#FF9F0D] hover:text-white hover:bg-[#FF9F0D] duration-100 bg-white border border-[#FF9F0D] px-4 py-2'>
                  Read More
                </button>
              </div>
            </a>

            <a href='/blogdetail' className='bg-white p-4 border mb-4 block'>
              <img
                src='/blog/blog3.jpg'
                alt='Tacos with a drizzle of sauce'
                className='w-full h-96 object-cover'
              />
              <div className='p-4'>
                <div className='flex items-center mb-2'>
                  <div className='bg-[#FF9F0D] text-white px-2 py-1 rounded-full text-sm'>
                    14 Feb
                  </div>
                  <div className='ml-3 text-gray-500 text-sm flex items-center'>
                  <img src='/icons/Chats.png' alt="msg" className='mr-1' /> <span>3</span>
                    <span className='mx-1'>|</span> <img src='/icons/UserCircle.png' alt="user" className='ml-1' />
                    <span className='ml-1'>Admin</span>
                  </div>
                </div>
                <h2 className='text-2xl font-bold mb-2  text-[#333]'>
                  The Ultimate Hangover Burger: Egg in a Hole Burger
                </h2>
                <p className='text-gray-700 mb-4'>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat
                </p>
                <button className='text-[#FF9F0D] hover:text-white hover:bg-[#FF9F0D] duration-100 bg-white border border-[#FF9F0D] px-4 py-2'>
                  Read More
                </button>
              </div>
            </a>

            <a href='/blogdetail' className='bg-white p-4 border mb-4 block'>
              <img
                src='/blog/blog4.jpg'
                alt='Tacos with a drizzle of sauce'
                className='w-full h-96 object-cover'
              />
              <div className='p-4'>
                <div className='flex items-center mb-2'>
                  <div className='bg-[#FF9F0D] text-white px-2 py-1 rounded-full text-sm'>
                    14 Feb
                  </div>
                  <div className='ml-3 text-gray-500 text-sm flex items-center'>
                    <img src='/icons/Chats.png' alt="msg" className='mr-1' /> <span>3</span>
                    <span className='mx-1'>|</span> <img src='/icons/UserCircle.png' alt="user" className='ml-1' />
                    <span className='ml-1'>Admin</span>
                  </div>
                </div>
                <h2 className='text-2xl font-bold mb-2 text-[#333]'>
                  My Favorite Easy Black Pizza Toast Recipe
                </h2>
                <p className='text-gray-700 mb-4'>
                  At vero eos et accusam et justo duo dolores et ea rebum. Stet
                  clita kasd gubergren, no sea takimata sanctus est Lorem ipsum
                  dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                  sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                  labore et dolore magna aliquyam erat
                </p>
                <button className='text-[#FF9F0D] hover:text-white hover:bg-[#FF9F0D] duration-100 bg-white border border-[#FF9F0D] px-4 py-2'>
                  Read More
                </button>
              </div>
            </a>

            <div className='flex justify-center mt-4'>
              <button className='bg-gray-200 text-[#FF9F0D] px-4 py-2  mx-1'>
                <FaChevronLeft />
              </button>
              <button className='bg-gray-200 text-[#FF9F0D] px-4 py-2  mx-1'>
                1
              </button>
              <button className='bg-[#FF9F0D] text-white px-4 py-2  mx-1'>
                2
              </button>
              <button className='bg-gray-200 text-[#FF9F0D] px-4 py-2  mx-1'>
                3
              </button>
              <button className='bg-gray-200 text-[#FF9F0D] px-4 py-2  mx-1'>
                <FaChevronRight />
              </button>
            </div>

          </div>

          
          <div>
            <div className='bg-white p-4  border mb-4 flex flex-col items-center'>
              <img
                src='/about/Customer1.jpg'
                alt='Profile picture'
                className='w-16 h-16 rounded-full mb-4'
              />
              <h3 className='text-xl text-[#333] font-bold'>Prince Miyake</h3>
              <p className='text-gray-500'>Blogger &amp; Food Enthusiast</p>

              <p className='text-gray-600 mt-2 text-center'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>

              <div className='flex mt-1'>
                <span className='text-[#FF9F0D]'>&#9733;</span>
                <span className='text-[#FF9F0D]'>&#9733;</span>
                <span className='text-[#FF9F0D]'>&#9733;</span>
                <span className='text-[#FF9F0D]'>&#9733;</span>
                <span className='text-[#FF9F0D]'>&#9733;</span>
              </div>

              <div className='flex mt-2'>
                <a href='#' className='text-gray-500 mx-1'>
                  <FaFacebook />
                </a>
                <a href='#' className='text-gray-500 mx-1'>
                  <FaTwitter />
                </a>
                <a href='#' className='text-gray-500 mx-1'>
                  <FaInstagram />
                </a>
                <a href='#' className='text-gray-500 mx-1'>
                  <FaPinterest />
                </a>
              </div>

              <input
                type='text'
                placeholder='Search Your Recipe...'
                className='w-full p-2 border rounded-full mt-4'
              />
            </div>
            <div className='bg-white p-4  border mb-4'>
              <h3 className='text-xl text-[#333] font-bold mb-4'>Recent Post</h3>
              <div className='flex items-center mb-4'>
                <img
                  src='/blog10.jpg'
                  alt='Recent post image'
                  className='w-16 h-16 rounded-lg'
                />
                <div className='ml-4'>
                  <h4 className='text-lg text-[#333]'>
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className='text-gray-500 text-sm'>Feb 14, 2023</p>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  src='/blog11.jpg'
                  alt='Recent post image'
                  className='w-16 h-16 rounded-lg'
                />
                <div className='ml-4'>
                  <h4 className='text-lg text-[#333]'>
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className='text-gray-500 text-sm'>Feb 14, 2023</p>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  src='/blog12.jpg'
                  alt='Recent post image'
                  className='w-16 h-16 rounded-lg'
                />
                <div className='ml-4'>
                  <h4 className='text-lg text-[#333]'>
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className='text-gray-500 text-sm'>Feb 14, 2023</p>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  src='/blog13.jpg'
                  alt='Recent post image'
                  className='w-16 h-16 rounded-lg'
                />
                <div className='ml-4'>
                  <h4 className='text-lg text-[#333]'>
                    Lorem ipsum dolor sit cing elit, sed do.
                  </h4>
                  <p className='text-gray-500 text-sm'>Feb 14, 2023</p>
                </div>
              </div>
            </div>

            <div className='bg-white p-4 border shadow-md mb-4 '>
              <h3 className='text-xl font-bold mb-4 text-[#333]'>Filter By Menu</h3>
              <ul>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog14.jpg'
                    alt='Chicken Fry'
                    className='w-12 h-12 mr-2'
                  />
                  <span className='text-[#333]'>Chicken Fry</span>
                  <span className='text-[#333]'>25</span>
                </li>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog15.jpg'
                    alt='Burger Feed'
                    className='w-12 h-12 mr-2'
                  />
                  <span className='text-[#333]'>Burger Feed</span>
                  <span className='text-[#333]'>16</span>
                </li>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog16.jpg'
                    alt='Pizza'
                    className='w-12 h-12 mr-2'
                  />
                  <span className='mr-2 text-[#333]'>Pizza</span> <span className='text-[#333]'>16</span>
                </li>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog17.jpg'
                    alt='Fresh Pasta'
                    className='w-12 h-12 mr-2'
                  />
                  <span className='mr-2 text-[#333]'>Fresh Pasta</span> <span className='text-[#333]'>16</span>
                </li>
                <li className='flex items-center justify-between mb-2'>
                  <img
                    src='/blog18.jpg'
                    alt='Vegetables'
                    className='w-12 h-12 mr-2'
                  />
                  <span className='text-[#333]'>Vegetables</span>
                  <span className='text-[#333]'>16</span>
                </li>
              </ul>
            </div>
            <div className='bg-white p-4 border mb-4'>
              <h3 className='text-xl font-bold mb-4 text-[#333]'>Popular Tags</h3>
              <div className='flex flex-wrap'>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border  text-lg mr-2 mb-2'>
                  Chicken
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Pizza
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Burger
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Vegetables
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Pasta
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Healthy
                </span>
                <span className='bg-gray-200 text-gray-700 px-4 py-2 border text-lg mr-2 mb-2'>
                  Food
                </span>
              </div>
            </div>
            <div className='bg-white p-4 border mb-4'>
              <h3 className='text-xl text-[#333] font-bold mb-4'>Photo Gallery</h3>
              <div className='grid grid-cols-3 gap-2'>
                <img
                  src='/blog23.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog20.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog21.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog22.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog19.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
                <img
                  src='/blog23.jpg'
                  alt='Gallery image'
                  className='w-full h-24 object-cover rounded-lg'
                />
              </div>
            </div>
            <div className='bg-white p-4 border'>
              <h3 className='text-xl text-[#333] font-bold mb-4'>Follow Us</h3>
              <div className='flex'>
                <a
                  href='#'
                  className='bg-white text-gray-900 p-2 text-4xl border mx-2'
                >
                  <FaFacebook />
                </a>
                <a
                  href='#'
                  className='bg-white text-gray-900 p-2 text-4xl border mx-2'
                >
                  <FaTwitter />
                </a>
                <a
                  href='#'
                  className='bg-[#FF9F0D] text-gray-200 p-2 text-4xl border mx-2'
                >
                  <FaInstagram />
                </a>
                <a
                  href='#'
                  className='bg-white text-gray-900 p-2 text-4xl border mx-2'
                >
                  <FaPinterest />
                </a>
                <a
                  href='#'
                  className='bg-white text-gray-900 p-2 text-4xl border mx-2'
                >
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
