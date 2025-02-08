import { client } from "@/sanity/lib/client"

export async function ChefFunc(){
  
  const chefData =  await client.fetch(`*[_type == "chef"][]{
    _id,
    name,
    position,
    "image_url": image.asset->url
    }`)
    return chefData
}


