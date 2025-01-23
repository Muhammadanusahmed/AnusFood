import React from 'react'
import Head from 'next/head'  
import Image from 'next/image'
const Page = () => {
  return (
    <div>
      <Head>
        <title>Our Menu</title>
      </Head>
      <div className='relative'>
        <img
          src='/nav/navbarbg.jpg'
          alt='Fresh vegetables with dark background'
          className='w-full h-64 object-cover'
        />
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white'>
          <h1 className='text-3xl font-bold'>Our Menu</h1>
          <p className='text-lg'>
            <span>Home</span> <span className='text-yellow-500'>› Menu</span>
          </p>
        </div>
      </div>

      {/* Starter Menu Start */}
      <div className='flex flex-col md:flex-row items-center w-full container mx-auto p-4'>
        <div className='w-full md:w-1/2 mb-4 md:mb-0 flex justify-center '>
          <img
            src='/menu/menu10.jpg'
            alt='A bowl of salad with various vegetables and a fork on the side'
            className=' rounded-lg shadow-lg flex '
          />
        </div>

        <div className='w-full md:w-1/2 md:pl-8 flex flex-col md:py-20 '>
          <img src='/menu/Coffee.png' alt='coffee' className='w-6' />
          <div className='flex items-center mb-4'>
            <h1 className='text-3xl text-[#333] font-bold'>Starter Menu</h1>
          </div>
          <div className='space-y-6'>
           
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h1 className='text-xl font-bold text-[#333] font-Helvetica'>
                  Alder Grilled Chinook Salmon
                </h1>


                <p className='text-[#4f4f4f] font-Helvetica'>
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className='text-[#828282] font-Helvetica'>560 CAL</p>
                </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>32$</div>

            </div>


            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold font-Helvetica text-[#FF9F0D]'>
                  Berries and creme tart
                </h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className='text-[#828282] font-Helvetica'>700 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>43$</div>
            </div>


            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>
                  Tormentoso Bush Pizza Pintoage
                </h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className='text-[#828282] font-Helvetica'>1000 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>14$</div>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>Spicy Vegan Potato Curry</h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className='text-[#828282] font-Helvetica'>560 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>35$</div>
            </div>


          </div>
        </div>


      </div>
      {/* Starter Menu*/}

      {/* Main Course*/}
      <div className='sm:flex justify-center items-center md:items-start container mx-auto p-4 md:p-8 '>
        <div className='sm:w-1/2 md:pr-8 flex flex-col md:py-20'>
        <img src='/menu/Coffee.png' alt='coffee' className='w-6' />
          <div className='flex items-center mb-4'>
            <h1 className='text-3xl font-bold text-[#333]'>Main Course</h1>
          </div>
          <div className='space-y-6'>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>
                  Optic Big Breakfast Combo Menu
                </h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className='text-[#828282] font-Helvetica'>560 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>32$</div>
            </div>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>
                  Cashew Chicken With Stir-Fry
                </h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className='text-[#828282] font-Helvetica'>700 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>43$</div>
            </div>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>Vegetables & Green Salad</h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className='text-[#828282] font-Helvetica'>1000 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>14$</div>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>Spicy Vegan Potato Curry</h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className='text-[#828282] font-Helvetica'>560 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>35$</div>
            </div>
          </div>
        </div>
        <div className='w-full md:pl-8 md:w-1/2 mb-4 md:mb-0 flex justify-center '>
          <Image
            src={'/menu/menu11.jpg'}
            alt='A bowl of salad with various vegetables and a fork on the side'
            width={500}
            height={500}
            className='w-full rounded-lg shadow-lg'
          />
        </div>
      </div>
      {/* Main Course End */}

      <div
        className='flex justify-center items-center bg-black bg-opacity-70 py-16 relative'
        style={{
          backgroundImage: "url('/menubg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className='absolute inset-0 bg-black opacity-70'></div>

        <div className='relative z-10 grid grid-cols-1 md:grid-cols-4 gap-24 text-center text-white'>
          <div className='flex flex-col items-center'>
            <img src='/icons/ChefHead.png' className='text-6xl text-yellow-500 mb-4' />
            <h2 className='text-4xl font-bold'>420</h2>
            <p className='text-lg'>Professional Chefs</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src='/icons/Burger.png' className='text-6xl text-yellow-500 mb-4' />
            <h2 className='text-4xl font-bold'>320</h2>
            <p className='text-lg'>Items Of Food</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src='/icons/Spoon.png' className='text-6xl text-yellow-500 mb-4' />
            <h2 className='text-4xl font-bold'>30+</h2>
            <p className='text-lg'>Years Of Experience</p>
          </div>
          <div className='flex flex-col items-center'>
            <img src='/icons/Pizza.png' className='text-6xl text-yellow-500 mb-4' />
            <h2 className='text-4xl font-bold'>220</h2>
            <p className='text-lg'>Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Desart Menu Start */}
      <div className='flex flex-col md:flex-row items-center container w-full mx-auto md:items-start p-4 md:p-8'>
        <div className='w-full  md:w-1/2 mb-4 md:mb-0  flex justify-center '>
          <img
            src='/menu/menu12.jpg'
            alt='A bowl of salad with various vegetables and a fork on the side'
            className=' rounded-lg shadow-lg flex '
          />
        </div>

        <div className='w-full md:w-1/2 md:pl-8 flex flex-col md:py-20 '>
        <img src='/menu/Coffee.png' alt='coffee' className='w-6' />
          <div className='flex items-center mb-4'>
            <h1 className='text-3xl font-bold text-[#333]'>Desart</h1>
          </div>
          <div className='space-y-6'>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>Fig & Lemon Cake</h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className='text-[#828282] font-Helvetica'>560 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>32$</div>
            </div>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>
                  Creamy Mascarpone cake
                </h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className='text-[#828282] font-Helvetica'>700 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>43$</div>
            </div>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>
                  Pastr, Blueberries, Lemon Juice
                </h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className='text-[#828282] font-Helvetica'>1000 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>14$</div>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>Pain Au Chocolate</h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Spreadable cream Cheese, Crumbled blue cheese
                </p>
                <p className='text-[#828282] font-Helvetica'>560 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>35$</div>
            </div>
          </div>
        </div>
      </div>
      {/* Desart Menu End */}

      {/* Drink Menu Start */}
      <div className='flex flex-col md:flex-row items-center md:items-start container w-full mx-auto p-4 md:p-8 '>
        <div className='w-full md:w-1/2 md:pr-8 flex flex-col md:py-20'>
        <img src='/menu/Coffee.png' alt='coffee' className='w-6' />
          <div className='flex items-center mb-4'>
            <h1 className='text-3xl font-bold text-[#333]'>Drinks</h1>
          </div>
          <div className='space-y-6'>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>Caffe Maccihiato</h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Toasted French bread topped with romano, cheddar
                </p>
                <p className='text-[#828282] font-Helvetica'>560 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>32$</div>
            </div>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>
                  Aperol Spritz Capacianno
                </h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Gorgonzola, ricotta, mozzarella, taleggio
                </p>
                <p className='text-[#828282] font-Helvetica'>700 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>43$</div>
            </div>
            <div className='flex justify-between items-center border-b pb-2'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>Caffe Latte Compuri</h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Ground cumin, avocados, peeled and cubed
                </p>
                <p className='text-[#828282] font-Helvetica'>1000 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>14$</div>
            </div>
            <div className='flex justify-between items-center'>
              <div>
                <h2 className='text-xl font-bold text-[#333] font-Helvetica'>
                  Tormentoso BushTea Pintoage
                </h2>
                <p className='text-[#4f4f4f] font-Helvetica'>
                  Spreadable cream cheese, crumbled blue cheese
                </p>
                <p className='text-[#828282] font-Helvetica'>560 CAL</p>
              </div>
              <div className='text-[#FF9F0D] text-xl font-bold'>35$</div>
            </div>
          </div>
        </div>
        <div className='w-full md:w-1/2 mb-4 md:mb-0 flex justify-center '>
          <img
            src='/menu/menu13.jpg'
            alt='A bowl of salad with various vegetables and a fork on the side'
            className='rounded-lg shadow-lg flex'
          />
        </div>
      </div>
      {/* Drink Menu End */}

      <div id='Partners' className='text-center py-10'>
        <h2 className='text-sm text-gray-500'>Partners & Clients</h2>
        <h1 className='text-3xl font-bold text-gray-800 my-4'>
          We work with the best people
        </h1>
        <div className='flex flex-wrap justify-center items-center space-x-8 mt-8'>
          <img
            src='/menu/menu14.jpg'
            alt='Restaurant logo'
            className='h-16 md:h-20'
          />
          <img src='/menu/menu15.jpg' alt='Bakery logo' className='h-16 md:h-20' />
          <img
            src='/menu/menu16.jpg'
            alt='Fork & Spoon logo'
            className='h-16 md:h-20'
          />
          <img
            src='/menu/menu17.jpg'
            alt='Wolf Coffee logo'
            className='h-16 md:h-20'
          />
          <img src='/menu/menu18.jpg' alt='Bistro logo' className='h-16 md:h-20' />
          <img src='/menu/menu19.jpg' alt='Bakery logo' className='h-16 md:h-20' />
        </div>
      </div>
      </div>

   
  )
}

export default Page
