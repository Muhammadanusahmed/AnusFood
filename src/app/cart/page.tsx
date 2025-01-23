import Head from 'next/head'
import React from 'react'
import { FaCheckSquare } from 'react-icons/fa'

const page = () => {
  return (
    <div>
      <Head>
        <title>Shopping Cart</title>
      </Head>
      <div className='relative'>
        <img
          src='/nav/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>Shopping Cart</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-yellow-500'>› Cart</span>
          </p>
        </div>
      </div>

      <div className='container mx-auto p-4'>
        <div className='overflow-x-auto'>
          <table className='min-w-full bg-white'>
            <thead>
              <tr>
                <th className='py-2 px-4 text-[#333] border-b text-left'>Product</th>
                <th className='py-2 px-4 border-b text-[#333] text-left'>Price</th>
                <th className='py-2 px-4 text-[#333] border-b text-left'>Quantity</th>
                <th className='py-2 px-4 text-[#333] border-b text-left'>Total</th>
                <th className='py-2 px-4 text-[#333] border-b text-left'>Remove</th>
              </tr>
            </thead>
            <tbody>
              {[
                {
                  name: 'Burger',
                  price: 35,
                  total: 221,
                  img: '/cart/shopping1.jpg',
                  quantity: 1
                },
                {
                  name: 'Fresh Lime',
                  price: 25,
                  total: 521,
                  img: '/cart/shopping2.jpg',
                  quantity: 1
                },
                {
                  name: 'Pizza',
                  price: 15,
                  total: 421,
                  img: '/cart/shopping3.jpg',
                  quantity: 1
                },
                {
                  name: 'Chocolate Muffin',
                  price: 45,
                  total: 521,
                  img: '/cart/shopping4.jpg',
                  quantity: 1
                },
                {
                  name: 'Cheese Butter',
                  price: 15,
                  total: 325,
                  img: '/cart/shopping5.jpg',
                  quantity: 1
                }
              ].map((item, index) => (
                <tr key={index} className='mb-4 md:mb-0'>
                  {' '}
                  {/* Add margin-bottom for mobile */}
                  <td className='py-2 px-4 border-b flex items-center'>
                    <img
                      src={item.img}
                      alt={`${item.name} image`}
                      className='w-16 h-16 object-cover mr-4'
                    />
                    <div>
                      <div className='text-[#333]' >{item.name}</div>
                      <div className='text-gray-500 flex text-sm'>
                        <img src="/cart/Star.png" alt="star" />
                        <img src="/cart/Star.png" alt="star" />
                        <img src="/cart/Star.png" alt="star" />
                        <img src="/cart/darkStar.png" alt="star" />
                        <img src="/cart/darkStar.png" alt="star" />
                        
                      </div>
                    </div>
                  </td>
                  <td className='py-2 text-[#4f4f4f] px-4 border-b'>${item.price}.00</td>
                  <td className='py-2 px-4 border-b'>
                    <div className='flex items-center'>
                      <button className='px-4 border text-[#333] border-gray-300 rounded-l-full h-10'>
                        -
                      </button>
                      <input
                        type='text'
                        className='w-12 text-center border-t text-[#333] border-b border-gray-300 h-10'
                        value='1'
                        readOnly
                      />
                      <button className='px-4 border text-[#333] border-gray-300 rounded-r-full h-10'>
                        +
                      </button>
                    </div>
                  </td>
                  <td className='py-2 text-[#333] px-4 border-b'>${item.total}.00</td>
                  <td className='py-2 px-4 border-b text-red-500 cursor-pointer'>
                    ✕
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex flex-col md:flex-row mt-8'>
          <div className='md:w-1/2 p-4 bg-white'>
            <h2 className='text-lg font-semibold text-[#333] mb-4'>Coupon Code</h2>
            <p className='text-gray-600 mb-4'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non.
            </p>
            <div className='flex'>
              <input
                type='text'
                placeholder='Enter Here code'
                className='border p-2 flex-grow'
              />
              <button className='bg-[#FF9F0D] text-gray-700 px-4 py-2'>
                Apply
              </button>
            </div>
          </div>
          <div className='md:w-1/2 p-4 bg-white mt-4 md:mt-0 md:ml-4 '>
            <h2 className='text-lg font-semibold text-[#333] font-helvetica mb-4'>Total Bill</h2>
            <div className='border rounded-t-lg  p-4'>
              <div className='flex justify-between   mb-2'>
                <span className='text-[#333] font-bold font-helvetica'>Cart Subtotal</span>
                <span className='text-[#333] font-bold font-helvetica'>$120.00</span>
              </div>
              <div className='flex justify-between  mb-2'>
                <span className='text-[#4f4f4f] font-helvetica'>Shipping Charge</span>
                <span className='text-[#4f4f4f] font-helvetica'>$00.00</span>
              </div>
            </div>
            <div className='flex justify-between font-semibold text-lg mb-4 border rounded-b-lg  p-4'>
              <span className='text-[#333] font-helvetica'>Total Amount</span>
              <span className='text-[#333] font-helvetica'>$205.00</span>
            </div>
            <div className='flex justify-center'>
              <a href='/checkout' className='w-full'>
                <button className='bg-[#FF9F0D] text-gray-700 py-2 w-full flex items-center justify-center'>
                  <span>Proceed to Checkout</span>
                  <FaCheckSquare className='ml-2' />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page
