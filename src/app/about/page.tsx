"use client";
import Head from "next/head";
import React from "react";
import { FaPlay, FaStar } from "react-icons/fa";
import { useState } from "react";
import Image from "next/image"
import Link from "next/link";
// import { AboutSec } from "@/components/HeroSec";

const page = () => {
  const [showMore, setShowMore] = useState(false);
  function showMoreFunc() {
    setShowMore(!showMore)
  }

  const [onVideo, setOnVideo] = useState(false);
  function showVideo() {
    setOnVideo(!onVideo);
  }

  return (
    <div>
      <Head>
        <title>About Page</title>
      </Head>
      <div className="relative">
        <img
          src="/nav/navbarbg.jpg"
          alt="Fresh vegetables with dark background"
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold">About</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-[#FF9F0D]">› About</span>
          </p>
        </div>
      </div>

      <div className="bg-white text-gray-800">
        <div className="container w-full mx-auto ">
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 px-2">
              <div className="col-span-1">
                <img
                  src="/about/about1.jpg"
                  alt="Tacos with lime"
                  className="w-full h-86 object-cover rounded-lg shadow-md"
                />
              </div>
              <div className="col-span-1 grid grid-cols-1 pt-12 gap-4">
                <img
                  src="/about/about2.jpg"
                  alt="Fried food with dip"
                  className="w-full h-74 object-cover rounded-lg shadow-md"
                />
                <img
                  src="/about/about3.jpg"
                  alt="Salad with orange juice"
                  className="w-full h-74 object-cover rounded-lg shadow-md"
                />
              </div>
            </div>
            <div className="col-span-1 flex flex-col justify-center p-4">
              <div className="flex items-center">
                {" "}
                <h2 className="text-sm text-[#FF9F0D] mb-3 font-Miniver pt-2">
                  About us
                </h2>
                <span className="pb-3 pr-2 text-[#FF9F0D] ml-2">___</span>
              </div>
              <h1 className="text-3xl font-bold mb-4">
                Food is an important part Of a balanced Diet
              </h1>
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                diam pellentesque bibendum non dui volutpat fringilla bibendum.
                Urna, elit augue urna, vitae feugiat pretium donec id elementum.
                Ultrices mattis vitae mus risus. Lacus nisi, at et dapibus sit
                eu velit in consequat.
              </p>
              <div className="mt-6 ">
                <div className="rounded-full flex gap-4">
                  <button
                    onClick={showMoreFunc}
                    className="border bg-[#FF9F0D] inline border-[#FF9F0D] text-white px-6 hover:bg-white hover:text-black py-4 rounded-lg transition duration-300"
                  >
                    {showMore ? "Show Less" : "Show More"}
                  </button>

                  <button onClick={showVideo} className=" text-black py-2 rounded-full flex items-center space-x-2 hover:bg-[#FF9F0D] transition duration-300">
                    <div className="flex items-center justify-center w-10 h-10 bg-[#FF9F0D] rounded-full">
                      <FaPlay className="text-white" />
                    </div>
                    <span className="font-bold pr-2">Watch Video</span>
                  </button>
                </div>
                
                <div className="block">
                  {showMore && (
                    <div className="mt-4 gap-4 block w-full">
                      <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quo facilis voluptates eligendi quod, vitae possimus id
                      quam mollitia fugit est. 
                      </p>
                     <p>
                      Lorem ipsum dolor sit amet
                      consectetur adipisicing elit. Facilis perspiciatis
                      voluptates dicta quos provident obcaecati sapiente porro
                      dolores unde pariatur vitae sed fugit corrupti,
                      consectetur a excepturi autem ducimus expedita maiores
                      nobis eveniet vel. Placeat eligendi vero ipsum molestiae
                      ducimus.
                     </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {
        onVideo && (
          <div className="aspect-w-16 my-12 aspect-h-9">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lUuR8jyBsXI?si=rVVpEKG-sEm2PutP" 
          title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerPolicy="strict-origin-when-cross-origin" allowFullScreen 
          className='w-full h-full '></iframe>
          </div>
        )
       }



          <section className="text-center py-12">
            <h2 className="text-3xl font-bold">Why Choose us</h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              diam pellentesque bibendum non dui volutpat fringilla bibendum.
            </p>
            <div className="mt-8">
              <img
                src="/about/about4.jpg"
                alt="Delicious food dishes"
                className="w-full h-auto"
              />
            </div>
          </section>

          <section className="text-center py-12">
            <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8">
              <div className="flex flex-col items-center">
                <img src="/about/Student.png" className="text-4xl mb-4" />

                <h3 className="text-xl font-semibold">Best Chef</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/about/Coffee.png" className="text-4xl mb-4" />
                <h3 className="text-xl font-semibold">120 Item food</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <img src="/about/Person.png" className="text-4xl mb-4" />

                <h3 className="text-xl font-semibold">Clean Environment</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* section team member */}

        <section className="relative w-full text-white text-center pt-12 transform -translate-y-50">
          {/* Background Image and Overlay */}
          <div className="absolute top-0 left-0 w-full h-3/4 bg-[url('/about/teamMemberBg.png')] bg-cover bg-center -z-10">
            <div className="absolute inset-0 bg-[#FF9F0D] opacity-70"></div>
          </div>

          <h2 className="relative text-3xl font-bold">Team Member</h2>
          <p className="relative mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia pharetra dictum. Integer maximus ligula orci.
          </p>
          <div className="container w-full flex mx-auto flex-col md:flex-row justify-center items-center mt-8 space-y-8 md:space-y-0 md:space-x-8">
            <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img
                src="/about/about5.jpg"
                alt="Team member Mark Henry"
                className="w-full h-auto"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Mark Henry</h3>
                <p className="text-gray-600">Owner</p>
              </div>
            </div>
            <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img
                src="/about/about5.jpg"
                alt="Team member Lucky Helen"
                className="w-full h-auto"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Lucky Helen</h3>
                <p className="text-gray-600">Chef</p>
              </div>
            </div>
            <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img
                src="/about/about5.jpg"
                alt="Team member Moon Henry"
                className="w-full h-auto"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Moon Henry</h3>
                <p className="text-gray-600">Founder</p>
              </div>
            </div>
            <div className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img
                src="/about/about5.jpg"
                alt="Team member Tom Monrow"
                className="w-full h-auto"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold">Tom Monrow</h3>
                <p className="text-gray-600">Specialist</p>
              </div>
            </div>
          </div>
        </section>

        <div className="container  w-full mx-auto px-4 py-8">
          <section className="text-center mb-16">
            <h2 className="font-GreatVibes text-start text-[#FF9F0D] text-4xl">
              Testimonials
            </h2>

            <img
              src="/about/flower.png"
              alt="leaf"
              className="absolute right-0 transform -translate-x-1/3"
            />

            <h3 className="text-3xl text-start font-bold mt-2">
              What our client are saying
            </h3>
            <div className="mt-8 flex justify-center">
              <div className="bg-[#fff] shadow-lg shadow-[#CDCDCD40] rounded-lg p-8 max-w-2xl">
                <Image
                  src={"/about/Customer1.jpg"}
                  alt="Client photo"
                  width={100}
                  height={100}
                  className="w-24 h-24 rounded-full mx-auto mb-4"
                />
                <div className="mb-4 w-full flex justify-center">
                  <img src="/about/Quotes.png" alt="Qoutes" />
                </div>
                <p className="text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Quisque diam pellentesque bibendum non dui volutpat fringilla
                  bibendum. Ut ac augue urna. Vitae feugiat pretium donec id
                  elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et
                  ac dapibus sit eu velit in consequat.
                </p>
                <div className="flex justify-center items-center mb-4">
                  <FaStar className="text-[#FF9F0D] text-2xl" />
                  <FaStar className="text-[#FF9F0D] text-2xl" />
                  <FaStar className="text-[#FF9F0D] text-2xl" />
                  <FaStar className="text-[#FF9F0D] text-2xl" />
                  <FaStar className="text-gray-500 text-2xl" />
                </div>
                <h4 className="text-xl font-bold">Alamin Hasan</h4>
                <p className="text-gray-500">Food Specialist</p>
                <div className="flex justify-center mt-4">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mx-1"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                  <div className="w-2 h-2 bg-gray-300 rounded-full mx-1"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="text-center px-4">
            <img
              src="/about/flower2.png"
              alt="flower"
              className="absolute z-10 left-1/2 transform -translate-x-1/2"
            />
            <h2 className="food-menu-title text-4xl font-bold">
              Our Food Menu
            </h2>
            <p className="text-gray-600 mt-2 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
              sed pharetra dictum neque massa congue.
            </p>

            <div className="mt-8">
              <nav className="flex flex-wrap justify-center space-x-4 text-lg border-b gap-8">
                <a
                  href="#"
                  className="text-[#FF9F0D] border-b-2 border-[#FF9F0D] pb-1"
                >
                  Breakfast
                </a>

                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                >
                  Lunch
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                >
                  Dinner
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                >
                  Dessert
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                >
                  Drink
                </a>
                <a
                  href="#"
                  className="text-gray-600 hover:text-[#FF9F0D] transition duration-300"
                >
                  Snack
                </a>
              </nav>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2">
                {Array.from({ length: 6 }, (_, index) => (
                  <div key={index} className="flex items-start border-b py-4">
                    <div>
                      <div className="text-left ">
                        {" "}
                        <h4 className="text-xl font-bold text-[#FF9F0D]">
                          Alder Grilled Chinook Salmon
                        </h4>
                        <p className="text-gray-600">
                          Toasted French bread topped with romano, cheddar
                        </p>
                        <p className="text-gray-400">560 CAL</p>
                      </div>
                    </div>
                    <div className="text-2xl text-right mb-2 pl-6 font-bold text-[#FF9F0D] mt-2">
                      32$
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/menu" className="mt-8 px-6 py-2 my-4 bg-[#FF9F0D] text-white rounded-full hover:bg-[#e68a00] transition duration-300">
                View Menu
              </Link>
            </div>
          </section>
          {/* <AboutSec /> */}
        </div>
      </div>
    </div>
  );
};

export default page;
