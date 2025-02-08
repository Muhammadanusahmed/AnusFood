import Link from "next/link"
import Head from "next/head"

export default function blog(){
 return(
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

          <Link href={"/blog"} className="hover:scale-110 duration-300 bg-black border-2 flex-col border-gray-700 rounded-lg overflow-hidden">
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
                    <Link href="#" className="text-white">
                      Learn More
                    </Link>
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
          <Link href={"/blog"} className="hover:scale-110 duration-300 bg-black border-2 flex-col border-gray-700 rounded-lg overflow-hidden">
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
                    <Link href="#" className="text-white">
                      Learn More
                    </Link>
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
                    <Link href="#" className="text-white">
                      Learn More
                    </Link>
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
       
    )
}
