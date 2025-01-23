// pages/404.js
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function Custom404() {
  return (
    <div>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>

      <div className="relative">
        <Image
          src="/nav/navbarbg.jpg"
          alt="Fresh vegetables with dark background"
          width={200}
          height={200}
          className="w-full h-64 object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-3xl font-bold">404 Error</h1>
          <p className="text-lg">
            <span>Home</span> <span className="text-yellow-500">› 404</span>
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="text-center">
          <h1 className="text-9xl text-[#FF9F0D] font-bold">404</h1>
          <h2 className="text-2xl text-gray-800 font-semibold mt-4">
            Oops! Looks like something went wrong
          </h2>
          <p className="text-gray-600 mt-2">
            Page cannot be found! We'll have it figured out in no time.
            <br />
            Meanwhile, check out these fresh ideas:
          </p>
          <Link href="/">
          
            {/* Use Link for navigation */}
            <button className="mt-6 px-6 py-2 bg-[#FF9F0D] text-gray-900 rounded-full">
              Go to home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
