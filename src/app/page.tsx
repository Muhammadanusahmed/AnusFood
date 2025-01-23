"use client"
import Image from "next/image";
import Head from "next/head";
import HeroVideo from "@/components/HeroVideo";
// import HeroShortMenu from "@/components/HeroShortMenu"
import Link from "next/link";
import {
  FaCheck,
  FaFacebook,
  FaPinterestP,
  FaStar,
  FaTwitter,
} from "react-icons/fa";

const chefs = [
  { name: "D.Estwood", title: "Chief Chef", image: "/chef/chef1.jpg" },
  { name: "D.Scoriesh", title: "Assistant Chef", image: "/chef/chef2.jpg" },
  {
    name: "M. William",
    title: "Advertising Chef",
    image: "/chef/chef3.jpg",
  },
  { name: "W.Readfroad", title: "Chef", image: "/chef/chef4.jpg" },
];

export default function Home() {
  return (
    <main>
      {/* HERO SECTION START */}
      <section>
        <div className="bg-black text-white min-h-screen flex flex-col md:flex-row items-center justify-center p-4">
          <div className="text-center md:text-left md:w-1/2 flex flex-col items-center md:items-center ">
            <div className="flex flex-col items-center md:items-start px-4 border-l-2 border-[#FF9F0D] md:py-4  md:ml-6">
              <p className="text-[#FF9F0D] font-GreatVibes text-lg italic">
                It&apos;s Quick &amp; Amusing!
              </p>
              <h1 className="text-4xl font-bold text-white">
                <span className="text-[#FF9F0D]">Th</span>e Art of Speed <br />
                Food Quality
              </h1>
            </div>

            <div className="flex flex-col items-center py-4  md:items-start md:flex md:mr-56">
              <div className="flex flex-col space-y-4 md:mr-16">
                <Link
                  href="https://www.facebook.com/profile.php?id=100082079742308"
                  target="_blank"
                >
                  <FaFacebook className="text-white text-xl hover:text-[#FF9F0D]" />
                </Link>
                <Link
                  href={"https://github.com/Muhammadanusahmed"}
                  target="_blank"
                >
                  <FaTwitter className="text-white text-xl hover:text-[#FF9F0D]" />
                </Link>
                <Link href={"https://www.pinterest.com/"} target="_blank">
                  <FaPinterestP className="text-white text-xl hover:text-[#FF9F0D]" />
                </Link>
              </div>
            </div>

            <div className="flex flex-col items-center md:items-start px-4 border-l-2 border-[#FF9F0D] md:py-4 md:ml-32">
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />{" "}
                Varius sed pharetra dictum neque massa congue.
              </p>
              <Link
                href="/menu"
                className="bg-[#FF9F0D] text-black py-2 px-6 rounded-full inline-block text-center"
              >
                See Menu
              </Link>
            </div>
          </div>

          <div className="relative md:w-1/2 p-4 flex justify-center md:ml-4">
            <Image
              src={"/hero/hero.jpg"}
              alt="A delicious dish"
              width={375}
              height={375}
              className="rounded-full w-3/4 h-auto"
            />
          </div>
        </div>
      </section>
      {/* HERO SECTION END */}

      {/* ABOUT SECTION END */}
      <section>
        <div className="bg-black text-white min-h-screen flex items-center justify-center p-8">
          <div className="container w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col items-center lg:items-start lg:justify-center">
              <h2 className="text-[#FF9F0D] font-GreatVibes text-lg mb-4">
                About us
              </h2>
              <h1 className="text-white text-4xl font-bold mb-4">
                <span className="text-[#FF9F0D]">We</span> Create the best{" "}
                <br />
                foody product
              </h1>
              <p className="text-gray-400 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam <br />
                pellentesque bibendum non dui volutpat fringilla bibendum. Urna,
                elit <br />
                augue urna, vitae feugiat pretium donec id elementum. Ultrices
                mattis sed <br />
                vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in
                consequat.
              </p>
              <ul className="text-gray-400 my-4 space-y-2">
                <li className="flex items-center my-2">
                  <FaCheck className="text-[#FF9F0D] mr-2" />
                  Lacus nisi, et ac dapibus sit eu velit in consequat.
                </li>

                <li className="flex items-center my-2">
                  <FaCheck className="text-[#FF9F0D] mr-2" />
                  Quisque diam pellentesque bibendum non dui volutpat fringilla.
                </li>

                <li className="flex items-center my-2">
                  <FaCheck className="text-[#FF9F0D] mr-2" />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </li>
              </ul>
              <a
                href="/about"
                className="bg-[#FF9F0D] text-white py-2 px-6 rounded-full hover:bg-orange-600 transition duration-300 inline-block text-center"
              >
                Read More
              </a>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <img
                src="/hero/about1.jpg"
                alt="Delicious food with eggs and greens"
                className="rounded-lg w-full h-auto object-cover lg:col-span-2"
              />
              <img
                src="/hero/about2.jpg"
                alt="Tasty dish with various ingredients"
                className="rounded-lg w-full h-auto object-cover"
              />
              <img
                src="/hero/about3.jpg"
                alt="Sandwich with fresh vegetables"
                className="rounded-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ABOUT SECTION END */}

      {/* FOOD ITEM SECTION START */}
      <section>
        <div className="bg-black text-white min-h-screen">
          <title>M.ANUS AHMED Food Category</title>

          <div className="flex flex-col container w-full mx-auto items-center py-10">
            <h1 className="text-4xl font-GreatVibes font-bold text-[#FF9F0D]">
              Food Category
            </h1>
            <h2 className="lg:text-5xl font-bold text-white mt-2 text-4xl">
              <span className="text-[#FF9F0D]">Ch</span>oose Food Item
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
              <div className="relative">
                <img
                  alt="A plate of food with a variety of vegetables and a wooden spoon"
                  className="rounded-lg"
                  height="300"
                  src="hero/food1.jpg"
                  width="300"
                />
                <div className="absolute top-28 left-24 bg-gray-100 text-[#FF9F0D] font-semibold text-xl px-2 py-1 rounded">
                  Save 30%
                </div>
                <div className="absolute bottom-28 left-0 bg-[#FF9F0D] text-white font-semibold px-4 py-2 rounded">
                  Fast Food Dish
                </div>
              </div>

              <div>
                <img
                  alt="A burger with lettuce and tomato on a sesame seed bun"
                  className="rounded-lg"
                  height="300"
                  width="300"
                  src="/hero/food2.jpg"
                />
              </div>
              <div>
                <img
                  alt="A plate of salad with chicken and pomegranate seeds"
                  className="rounded-lg"
                  height="300"
                  src="/hero/food3.jpg"
                  width="300"
                />
              </div>
              <div>
                <img
                  alt="A stack of donuts with chocolate and sprinkles"
                  className="rounded-lg"
                  height="300"
                  src="/hero/food4.jpg"
                  width="300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FOOD ITEM SECTION END */}

      {/* WHY FOODTUCK START */}
      <section>
        <div className="bg-black text-white min-h-screen p-6 lg:px-36">
          <Head>
            <title>Food Experience</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
          </Head>
          <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 row-span-2 rounded-lg overflow-hidden">
                <img
                  src="/hero/food5.jpg"
                  alt="Description 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/hero/food6.jpg"
                  alt="Description 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/hero/food7.jpg"
                  alt="Description 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/hero/food8.jpg"
                  alt="Description 4"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/hero/food9.jpg"
                  alt="Description 5"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/hero/food10.jpg"
                  alt="Description 6"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="lg:w-1/2 lg:pl-12 mt-8 lg:mt-0 items-center justify-center">
              <h2
                className="text-[#FF9F0D] text-lg font-semibold"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                Why Choose us
              </h2>
              <h1 className="text-5xl font-bold mt-2">
                <span className="text-[#FF9F0D]">Ex</span>tra ordinary taste{" "}
                <br />
                And Experienced
              </h1>
              <p className="text-gray-400 mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus
                sit eu velit in consequat.
              </p>
              <div className="flex justify-start  mt-8">
                <div className="text-center">
                  <div className="bg-[#FF9F0D] m-4 p-4 rounded-md">
                    <img
                      src="/icons/Hamburger.png"
                      alt="hamburger"
                      className=" p-2 text-5xl"
                    />
                  </div>
                  <p className="mt-2">Fast Food</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#FF9F0D]  m-4 p-4 rounded-md">
                    <img
                      src="/icons/Cookie.png"
                      alt="cookie"
                      className=" p-2 text-5xl"
                    />
                  </div>
                  <p className="mt-2">Lunch</p>
                </div>
                <div className="text-center">
                  <div className="bg-[#FF9F0D]  m-4 p-4 rounded-md">
                    <img
                      src="/icons/Wine.png"
                      alt="wine"
                      className=" p-2 text-5xl"
                    />
                  </div>
                  <p className="mt-2">Dinner</p>
                </div>
              </div>
              <div className="bg-white w-80 justify-center bg-cover text-black p-4 rounded-lg mt-8 flex items-center border-l-8 border-[#FF9F0D]">
                <div className="text-4xl font-bold text-[#FF9F0D] pr-4">
                  30+
                </div>
                <div className="ml-4 pl-4">
                  <p className="text-lg">Years of</p>
                  <p className="text-lg font-bold">Experienced</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* WHY FOODTUCK END */}

      {/* ICON SECTION START */}
      <section>
        <div
          className="relative h-[40vh] bg-cover bg-center sm:h-[60vh] md:h-[80vh]"
          style={{
            backgroundImage: "url(/bg.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-70 flex justify-center items-center">
            <div className="flex flex-wrap justify-center items-center  p-4 rounded-lg w-full max-w-4xl mx-auto sm:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                <div className="text-center text-white flex flex-col items-center">
                  <img
                    src="/icons/ChefHead.png"
                    alt="ChefHead"
                    className="text-6xl text-[#FF9F0D] mb-4"
                  />
                  <h3 className="text-lg">Professional Chefs</h3>
                  <p className="text-3xl font-bold">420</p>
                </div>

                <div className="text-center text-white flex flex-col items-center">
                  <img
                    src="/icons/Burger.png"
                    alt="Burger"
                    className="text-6xl text-[#FF9F0D] mb-4"
                  />
                  <h3 className="text-lg">Items Of Food</h3>
                  <p className="text-3xl font-bold">320</p>
                </div>

                <div className="text-center text-white flex flex-col items-center">
                  <img
                    src="/icons/Spoon.png"
                    alt="spoon"
                    className="text-6xl text-[#FF9F0D] mb-4"
                  />
                  <h3 className="text-lg">Years Of Experienced</h3>
                  <p className="text-3xl font-bold">30+</p>
                </div>

                <div className="text-center text-white flex flex-col items-center">
                  <img
                    src="/icons/Pizza.png"
                    alt="pizza"
                    className="text-6xl text-[#FF9F0D] mb-4"
                  />
                  <h3 className="text-lg">Happy Customers</h3>
                  <p className="text-3xl font-bold">220</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ICON SECTION END */}

      {/* short menu start */}
      {/* <HeroShortMenu /> */}
      {/* short menu end */}

      {/* CHEFS START */}
      <section>
        <div className="flex flex-col items-center py-10 bg-black">
          <h2
            className="text-[#FF9F0D] text-2xl mb-2"
            style={{ fontFamily: "Great Vibes, cursive" }}
          >
            Chefs
          </h2>
          <h1 className="text-4xl font-bold mb-10 text-white">
            <span className="text-[#FF9F0D]">Me</span>et Our Chef
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {chefs.map((chef, index) => (
              <div
                key={index}
                className="bg-white hover:scale-110 duration-300  text-black rounded-lg overflow-hidden shadow-lg relative font-poppins"
              >
                <img
                  src={chef.image}
                  alt={`Chef ${chef.name}`}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-28 bg-white  p-2 text-center">
                  <h3 className="font-bold text-black font-poppins">
                    {chef.name}
                  </h3>
                  <p className="text-black font-poppins">{chef.title}</p>
                </div>
              </div>
            ))}
          </div>
          <Link
            href="/chef"
            className="bg-transparent border-2 border-[#FF9F0D] text-[#FF9F0D] py-2 px-6 rounded-full hover:bg-[#FF9F0D] hover:text-black transition duration-300"
          >
            See More
          </Link>
        </div>
      </section>
      {/* CHEFS END */}

      {/* TESTIMONIALS START */}
      <section className='bg-black'>
          <div className='container w-full mx-auto px-4 py-8'>
                  
                   <section className='text-center mb-16'>
                    <h2 className='font-GreatVibes text-start text-[#FF9F0D] text-4xl'>
                       Testimonials
                     </h2>
                     
                     <img src="/about/flower.png" alt="leaf" className='absolute right-0 transform -translate-x-1/3'/>
                     
                     <h3 className='text-3xl text-start text-[#fff] font-bold mt-2'>
                       What our client are saying
                     </h3>
                     <div className='mt-8 flex justify-center'>
                       <div className=' shadow-lg bg-white shadow-[#CDCDCD40] rounded-lg p-8 max-w-2xl'>
                          <Image
                           width={500}
                           height={500}
                           src={'/about/Customer1.jpg'}
                           alt={'Client photo'}
                           className='w-24 h-24 rounded-full mx-auto mb-4'
                         /> 
                         <div className='mb-4 w-full flex justify-center'>
                         <img src="/about/Quotes.png" alt="Qoutes"/></div>
                         <p className='text-gray-600 mb-4'>
                           Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                           Quisque diam pellentesque bibendum non dui volutpat
                           fringilla bibendum. Ut ac augue urna. Vitae feugiat pretium
                           donec id elementum. Ultrices mattis sed vitae mus risus.
                           Lacus nisi, et ac dapibus sit eu velit in consequat.
                         </p>
                         <div className='flex justify-center items-center mb-4'>
                           <FaStar className='text-[#FF9F0D] text-2xl' />
                           <FaStar className='text-[#FF9F0D] text-2xl' />
                           <FaStar className='text-[#FF9F0D] text-2xl' />
                           <FaStar className='text-[#FF9F0D] text-2xl' />
                           <FaStar className='text-gray-500 text-2xl' />
                         </div>
                         <h4 className='text-xl text-[#333] font-bold'>Alamin Hasan</h4>
                         <p className='text-gray-500'>Food Specialist</p>
                         <div className='flex justify-center mt-4'>
                           <div className='w-2 h-2 bg-yellow-500 rounded-full mx-1'></div>
                           <div className='w-2 h-2 bg-gray-300 rounded-full mx-1'></div>
                           <div className='w-2 h-2 bg-gray-300 rounded-full mx-1'></div>
                           <div className='w-2 h-2 bg-gray-300 rounded-full mx-1'></div>
                         </div>
                       </div>
                     </div>
                   </section>
       
       
       
  
                 </div>
       
      </section>
      {/* TESTIMONIALS END */}

      {/* video section */}
      <HeroVideo />
      {/* video section */}

      {/* BLOG SECTION START  */}
      <section>
        <div className="bg-black text-white min-h-screen ">
          <Head>
            <title>Latest News & Blog</title>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
            />
          </Head>
          <div className="container mx-auto p-4">
            <div className="text-center mb-8">
              <h2
                className="text-[#FF9F0D] md:pt-8 lg:pt-12 text-2xl"
                style={{ fontFamily: "Great Vibes, cursive" }}
              >
                Blog Post
              </h2>
              <h1 className="text-4xl font-bold text-white">
                <span className="text-[#FF9F0D]">La</span>test News & Blog
              </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Link href={"/blog"} className="hover:scale-110 duration-300 bg-black border border-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/blog/blog2.jpg"
                  alt="A delicious burger with fries and salad"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-[#FF9F0D] mb-2">10 February 2022</p>
                  <h3 className="text-xl font-bold mb-4">
                    Pellentesque Non Efficitur Mi Aliquam Convallis Mi Quis
                  </h3>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-white">
                      Learn More
                    </a>
                    <div className="flex space-x-2 text-[#FF9F0D]">
                      <img
                        src="/icons/ThumbsUp.png"
                        alt="thumsup"
                        className="text-white"
                      />
                      <img
                        src="/icons/ChatDots.png"
                        alt="comment"
                        className="text-[#FF9F0D]"
                      />
                      <img
                        src="/icons/ShareNetwork.png"
                        alt="share"
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={"/blog"} className="hover:scale-110 duration-300 bg-black border border-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/blog/blog3.jpg"
                  alt="A delicious pizza with various toppings"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-[#FF9F0D] mb-2">10 February 2022</p>
                  <h3 className="text-xl font-bold mb-4">
                    Morbi Sodales Tellus Elit, In Blandit Risus Suscipit A
                  </h3>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-white">
                      Learn More
                    </a>
                    <div className="flex space-x-2 text-[#FF9F0D]">
                      <img
                        src="/icons/ThumbsUp.png"
                        alt="thumsup"
                        className="text-white"
                      />
                      <img
                        src="/icons/ChatDots.png"
                        alt="comment"
                        className="text-[#FF9F0D]"
                      />
                      <img
                        src="/icons/ShareNetwork.png"
                        alt="share"
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              </Link>
              <Link href={"/blog"} className="hover:scale-110 duration-300 bg-black border border-gray-700 rounded-lg overflow-hidden">
                <img
                  src="/blog/blog4.jpg"
                  alt="A hand squeezing lime over tacos"
                  className="w-full h-96 object-cover"
                />
                <div className="p-6">
                  <p className="text-[#FF9F0D] mb-2">10 February 2022</p>
                  <h3 className="text-xl font-bold mb-4">
                    Curabitur rutrum velit ac congue malesuada
                  </h3>
                  <div className="flex justify-between items-center">
                    <a href="#" className="text-white">
                      Learn More
                    </a>
                    <div className="flex space-x-2 text-[#FF9F0D]">
                      <img
                        src="/icons/ThumbsUp.png"
                        alt="thumsup"
                        className="text-white"
                      />
                      <img
                        src="/icons/ChatDots.png"
                        alt="comment"
                        className="text-[#FF9F0D]"
                      />
                      <img
                        src="/icons/ShareNetwork.png"
                        alt="share"
                        className="text-white"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
