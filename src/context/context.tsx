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


export async function FoodFunc(){
  
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

