import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'


  export interface ShopDataType {
    _id: string,
    name: string,
    price: number,
    DiscountPrice?: string,
    image_url: string,
    tags?: string
  }
  
export const Shop = async () => {
    try{
        const foodData =  await client.fetch(`*[_type == "food"][]{
            _id,
            name,
            category,
            price,
            DiscountPrice,
            tags,
            "image_url": image.asset->url,
            description,
            available
            }`)
            return foodData
    }
    catch{"error"}
}

const Page = async () => {
    const Data:ShopDataType[]= await Shop()
  return (
    <div>
       <Head>
        <title>Our Shop</title>
      </Head>
      <div className='relative'>
        <img
          src='/nav/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>Shop Page</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-yellow-500'>› Shop</span>
          </p>
        </div>
      </div>
      <div className='container mx-auto p-4 flex flex-col lg:flex-row'>
        <div className='w-full lg:w-3/4'>
          <div className='flex justify-between items-center mb-4'>
            <div className='flex items-center'>
              <label className='mr-2 text-[#333]'>Sort By:</label>
              <select className='border border-gray-300 rounded p-2'>
                <option className='text-[#4f4f4f]'>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
            <div className='flex items-center'>
              <label className='mr-2 text-[#333]'>Show:</label>
              <select className='border border-gray-300 rounded p-2'>
                <option className='text-[#4f4f4f]'>Default</option>
                <option>10</option>
                <option>20</option>
              </select>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

        {Data.map((product) =>{
            return (
              
      <Link key={product._id} href={`/product/${product._id}`} className='bg-white p-4 rounded-lg shadow-md cursor-pointer'>
      <div className='relative'>
        {product.tags && (
          <span className='absolute top-2 left-2 bg-[#FF9F0D] text-white px-2 py-1 text-xs rounded'>
            {product.tags}
          </span>
        )}
        <img
          alt={product.name || 'Product Image'}
          className='w-full h-48 object-cover rounded-t-lg'
          src={product.image_url || 'https://placehold.co/300x300'}
        />
      </div>
      <div className='mt-4'>
        <h3 className='text-lg text-[#333] font-semibold'>
          {product.name || 'Unnamed Product'}
        </h3>
        <div className='flex items-center'>
          <span className='text-[#FF9F0D] text-xl font-bold'>
            Rs.{product.price || '0.00'}
          </span>
          {product.DiscountPrice && (
            <span className='text-gray-500 line-through ml-2'>
              Rs.{product.DiscountPrice}
            </span>
            // end
          )}
        </div>
      </div>
    </Link>
            )

        })}

            
        
          </div>
          <div className='flex justify-center mt-4'>
            <button className='border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition'>
              «
            </button>
            <button className='border border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 bg-[#FF9F0D] text-white flex items-center justify-center hover:bg-orange-600 transition'>
              1
            </button>
            <button className='border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition'>
              2
            </button>
            <button className='border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition'>
              3
            </button>
            <button className='border text-[#FF9F0D] text-xl border-gray-300 rounded-lg p-0 w-10 h-10 mx-1 flex items-center justify-center hover:bg-gray-200 transition'>
              »
            </button>
          </div>
        </div>
        <div className='w-full lg:w-1/4 lg:pl-4 mt-4 lg:mt-0'>
          <div className='bg-white p-4 rounded-lg shadow-md'>
           <div className='flex border bg-[#FF9F0D1A]'> 
            <input
              className='w-full text-white rounded p-2'
              placeholder='Search Product'
              type='text'
            />
            <div className='bg-[#FF9F0D] p-3'>
            <img src="/icons/MagnifyingGlass.png" alt="MagnifyingGlass" />
            </div>
            </div>
            <div className='mb-4'>
              <h3 className='text-lg font-semibold mb-2 text-[#333]'>Category</h3>
              <div className='flex flex-col'>
                <label className='mb-1 text-[#333] '>
                  <input className='mr-2' type='checkbox' />
                  Sandwiches
                </label>
                <label className='mb-1 text-[#333] '>
                  <input className='mr-2 ' type='checkbox' />
                  Burger
                </label>
                <label className='mb-1 text-[#333] '>
                  <input className='mr-2 ' type='checkbox' />
                  Chicken Chup
                </label>
                <label className='mb-1 text-[#333] '>
                  <input className='mr-2 ' type='checkbox' />
                  Drink
                </label>
                <label className='mb-1 text-[#333] '>
                  <input className='mr-2 ' type='checkbox' />
                  Pizza
                </label>
                <label className='mb-1 text-[#333] '>
                  <input className='mr-2' type='checkbox' />
                  Thi
                </label>
                <label className='mb-1 text-[#333]'>
                  <input className='mr-2 ' type='checkbox' />
                  Non Veg
                </label>
                <label className='mb-1 text-[#333]'>
                  <input className='mr-2 ' type='checkbox' />
                  Uncategorized
                </label>
              </div>
            </div>
            <img src="/shop/shopbanner.jpg" alt="banner" className='cover' />
            {/* Filter */}
            <div className='mb-4'>
              <h3 className='text-lg font-semibold text-[#333] my-2'>Filter by Price</h3>
              <input className='w-full mb-2' max='8000' min='0' type='range' />
              <div className='flex justify-between text-sm'>
                <span className='text-[#333]'>From $0</span>
                <span className='text-[#333]'>to $8000</span>
              </div>
             
            </div>
            <div className='mb-4'>
              <h3 className='text-lg font-semibold text-[#333] mb-2'>Latest Products</h3>
              <div className='flex flex-col'>
                <div className='flex items-center mb-2'>
                  <img
                    alt='Pizza'
                    className='w-12 h-12 object-cover rounded mr-2'
                    height='50'
                    src='/shop/latest.jpg'
                    width='50'
                  />
                  <div>
                    <h4 className='text-sm font-semibold text-[#333]'>Pizza</h4>
                    <div className='flex gap-0.5'>
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/darkStar.png" alt="star" />
                      <img src="/shop/darkStar.png" alt="star" />
                    </div>
                    <span className='text-sm text-gray-500'>$35.00</span>
                  </div>
                </div>
                <div className='flex items-center mb-2'>
                  <img
                    alt='Cupcake'
                    className='w-12 h-12 object-cover rounded mr-2'
                    height='50'
                    src='/shop/latest.jpg'
                    width='50'
                  />
                  <div>
                    <h4 className='text-sm font-semibold  text-[#333]'>Cupcake</h4>
                    <div className='flex gap-0.5'>
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/darkStar.png" alt="star" />
                      <img src="/shop/darkStar.png" alt="star" />
                    </div>
                    <span className='text-sm text-gray-500'>$35.00</span>
                  </div>
                </div>
                <div className='flex items-center mb-2'>
                  <img
                    alt='Cookies'
                    className='w-12 h-12 object-cover rounded mr-2'
                    height='50'
                    src='/shop/latest.jpg'
                    width='50'
                  />
                  <div>
                    <h4 className='text-sm font-semibold  text-[#333]'>Cookies</h4>
                    <div className='flex gap-0.5'>
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/darkStar.png" alt="star" />
                      <img src="/shop/darkStar.png" alt="star" />
                    </div>
                    <span className='text-sm text-gray-500'>$35.00</span>
                  </div>
                </div>
                <div className='flex items-center mb-2'>
                  <img
                    alt='Burger'
                    className='w-12 h-12 object-cover rounded mr-2'
                    height='50'
                    src='/shop/latest.jpg'
                    width='50'
                  />
                  <div>
                    <h4 className='text-sm font-semibold  text-[#333]'>Burger</h4>
                    <div className='flex gap-0.5'>
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/star.png" alt="star" />
                      <img src="/shop/darkStar.png" alt="star" />
                      <img src="/shop/darkStar.png" alt="star" />
                    </div>
                    <span className='text-sm text-gray-500'>$35.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='mb-4'>
              <h3 className='text-lg font-semibold mb-2 text-[#333]'>Product Tags</h3>
              <div className='flex flex-wrap'>
                <span className=' text-gray-700  px-1 py-1 text-sm mr-2 mb-2'>
                  Services
                </span>
                <span className=' text-gray-700  px-1 py-1 text-sm mr-2 mb-2'>
                  Our Menu
                </span>
                <span className=' text-gray-700  px-1 py-1 text-sm mr-2 mb-2'>
                  Pizza
                </span>
                <span className=' text-gray-700  px-1 py-1 text-sm mr-2 mb-2'>
                  Cupcake
                </span>
                <span className='border-b border-[#FF9F0D] text-[#FF9F0D]  px-1 py-1 text-sm mr-2 mb-2'>
                  Burger
                </span>
                <span className=' text-gray-700  px-1 py-1 text-sm mr-2 mb-2'>
                  Cookies
                </span>
                <span className=' text-gray-700  px-1 py-1 text-sm mr-2 mb-2'>
                  Our Shop
                </span>
                <span className=' text-gray-700  px-1 py-1 text-sm mr-2 mb-2'>
                  Tandoori Chicken
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
const main = () => {
  return (<Page/>)
}
export default main