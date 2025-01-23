import Head from 'next/head'
import React from 'react'
import { FaCaretLeft, FaCaretRight } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <Head>
        <title>M.ANUS AHMED Checkout</title>
      </Head>
      <div className='relative'>
        <img
          src='/nav/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>Checkout</h1>
          <p className='text-lg'>
            <span>Home</span>{' '}
            <span className='text-[#FF9F0D]'>› Checkout</span>
          </p>
        </div>
      </div>
      
      <div className='container mx-auto p-4'>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4'>
          <div className='lg:col-span-2'>
            <h2 className='text-xl text-[#333] font-bold mb-4'>Shipping Address</h2>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
              <div>
                <label className='block mb-2 text-[#333]'>First name</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div>
                <label className='block mb-2 text-[#333]'>Last name</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div>
                <label className='block mb-2 text-[#333]'>Email address</label>
                <input
                  type='email'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div>
                <label className='block mb-2 text-[#333]'>Phone number</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div>
                <label className='block mb-2 text-[#333]'>Company</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div>
                <label className='block mb-2 text-[#333]'>Country</label>
                <select className='w-full p-2 border border-gray-300 rounded'>
                  <option>Choose country</option>
                </select>
              </div>
              <div>
                <label className='block mb-2 text-[#333]'>City</label>
                <select className='w-full p-2 border border-gray-300 rounded'>
                  <option>Choose city</option>
                </select>
              </div>
              <div>
                <label className='block mb-2 text-[#333]'>Zip code</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div>
                <label className='block mb-2 text-[#333]'>Address 1</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
              <div>
                <label className='block mb-2 text-[#333]'>Address 2</label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded'
                />
              </div>
            </div>

            <div className='mt-4'>
              <h2 className='text-xl font-bold mb-2 font-helvetica text-[#333]'>Billing Address</h2>
              <div className='flex items-center mb-4'>
                <input type='checkbox' className='mr-2' />
                <label className='text-[#4f4f4f]'>Same as shipping address</label>
              </div>

              <div className='flex w-full space-x-2'>
                <a href='/cart' className='flex items-center justify-center border border-gray-300 text-black py-2 w-1/2'>
                  
                    <FaCaretLeft className='mr-2' />
                    Back to cart
                </a>
                <button className='flex relative items-center justify-center bg-[#FF9F0D] text-black py-2 w-1/2 '>
                  Proceed to shipping
                  <FaCaretRight className='ml-2' />
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className='bg-white p-4 rounded border'>
              <div className='flex items-center mb-4'>
                <img
                  src='checkout.jpg'
                  alt='Chicken Tikka Kabab'
                  className='w-16 h-16 object-cover mr-4'
                />
                <div>
                  <h3 className='font-bold text-[#333]'>Chicken Tikka Kabab</h3>
                  <p className='text-[#4f4f4f]'>150 gm net</p>
                  <p className='text-[#4f4f4f]'>50$</p>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  src='checkout.jpg'
                  alt='Chicken Tikka Kabab'
                  className='w-16 h-16 object-cover mr-4'
                />
                <div>
                  <h3 className='font-bold text-[#333]'>Chicken Tikka Kabab</h3>
                  <p className='text-[#4f4f4f]'>150 gm net</p>
                  <p className='text-[#4f4f4f]'>50$</p>
                </div>
              </div>
              <div className='flex items-center mb-4'>
                <img
                  src='checkout.jpg'
                  alt='Chicken Tikka Kabab'
                  className='w-16 h-16 object-cover mr-4'
                />
                <div>
                  <h3 className='font-bold text-[#333]'>Chicken Tikka Kabab</h3>
                  <p className='text-[#4f4f4f]'>150 gm net</p>
                  <p className='text-[#4f4f4f]'>50$</p>
                </div>
              </div>
              <div className='border-t border-[#E0E0E0] mt-4 pt-4'>
                <div className='flex justify-between mb-2 text-[#4f4f4f]'>
                  <span>Sub-total</span>
                  <span>130$</span>
                </div>
                <div className='flex justify-between mb-2 text-[#4f4f4f]'>
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className='flex justify-between mb-2 text-[#4f4f4f]'>
                  <span>Discount</span>
                  <span>25%</span>
                </div>
                <div className='flex justify-between mb-2 text-[#4f4f4f]'>
                  <span>Tax</span>
                  <span>54.76$</span>
                </div>
                <div className='flex justify-between font-bold text-lg text-[#4f4f4f]'>
                  <span>Total</span>
                  <span>432.65$</span>
                </div>
              </div>
              <button className='bg-[#FF9F0D] text-white w-full py-2 mt-4 rounded'>
                Place an order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
