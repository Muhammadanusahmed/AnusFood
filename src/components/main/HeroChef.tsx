import Link from "next/link";
import { ChefFunc , ChefDataType } from "@/app/chef/page";
import Image from "next/image";

export default async function Chef() {

  const Data:ChefDataType[] = await ChefFunc()
  const chefData:ChefDataType[] = Data.slice(0, 4);

    return (
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
                    {chefData.map((chef) => (
                      <div
                        key={chef._id}
                        className="bg-white hover:scale-110 duration-300  text-black rounded-lg overflow-hidden shadow-lg relative font-poppins"
                      >
                         {chef.image_url && (
                        <Image
                          src={chef.image_url}
                          alt={`Chef ${chef.name}`}
                          width={500}
                          height={500}
                          className="w-full h-80 object-cover"
                        />
                         )}
                        <div className="absolute bottom-0 left-0 right-28 bg-white  p-2 text-center">
                          <h3 className="font-bold text-black font-poppins">
                            {chef.name}
                          </h3>
                          <h3 className="font-bold text-black font-poppins">
                            {chef.position}
                          </h3>
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
    );
}