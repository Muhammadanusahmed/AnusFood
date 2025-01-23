"use client";
import { useState } from 'react';
import Image from 'next/image';

// export default function Menu() {
//   const menuData : any = {
//     breakfast: [
//       {
//         name: "Desi Breakfast Platter",
//         desc: "Paratha with Omelette, Chai, and Chickpeas",
//         price: "350$",
//         img: "/blog/blog14.jpg"
//       },
//       {
//         name: "Pancake Stack",
//         desc: "Fresh pancakes with maple syrup and fruits",
//         price: "299$",
//         img: "/blog/blog11.jpg"
//       },
//       {
//         name: "Eggs Benedict",
//         desc: "Poached eggs with hollandaise sauce",
//         price: "399$",
//         img: "/blog/blog12.jpg"
//       },
//       {
//         name: "Morning Glory Bowl",
//         desc: "Fruits, granola, and yogurt parfait",
//         price: "275$",
//         img: "products/product1.jpg"
//       }
//     ],
//     lunch: [
//       {
//         name: "Chicken Biryani",
//         desc: "Aromatic rice with tender chicken pieces",
//         price: "450$",
//         img: "products/product1.jpg"
//       },
//       {
//         name: "Beef Burger",
//         desc: "Juicy patty with fresh vegetables",
//         price: "399$",
//         img: "products/product1.jpg"
//       },
//       {
//         name: "Caesar Salad",
//         desc: "Fresh romaine lettuce with grilled chicken",
//         price: "349$",
//         img: "menu/menu1.jpg"
//       },
//       {
//         name: "Pasta Alfredo",
//         desc: "Creamy pasta with garlic bread",
//         price: "425$",
//         img: "products/latest.jpg"
//       }
//     ],
//     dinner: [
//       {
//         name: "Grilled Salmon",
//         desc: "Fresh salmon with seasonal vegetables",
//         price: "899$",
//         img: "/products/checkout.jpg"
//       },
//       {
//         name: "BBQ Platter",
//         desc: "Assorted grilled meats and sides",
//         price: "1299$",
//         img: "/products/checkout.jpg"
//       },
//       {
//         name: "Butter Chicken",
//         desc: "Classic curry with naan bread",
//         price: "599$",
//         img: "/products/checkout.jpg"
//       },
//       {
//         name: "Steak",
//         desc: "Grilled to perfection with mushroom sauce",
//         price: "1199$",
//         img: "/products/checkout.jpg"
//       }
//     ],
//     dessert: [
//       {
//         name: "Chocolate Lava Cake",
//         desc: "Warm cake with molten chocolate center",
//         price: "299$",
//         img: "/blog/blog16.jpg"
//       },
//       {
//         name: "Cheesecake",
//         desc: "New York style with berry compote",
//         price: "349$",
//         img: "/blog/blog16.jpg"
//       }
//     ],
//     drink: [
//       {
//         name: "Fresh Juice",
//         desc: "Selection of seasonal fruits",
//         price: "199$",
//         img: "/products/product5.jpg"
//       },
//       {
//         name: "Milkshake",
//         desc: "Choose from chocolate, vanilla, or strawberry",
//         price: "249$",
//         img: "/products/product5.jpg"
//       }
//     ],
//     snack: [
//       {
//         name: "Chicken Wings",
//         desc: "6 pieces with choice of sauce",
//         price: "399$",
//         img: "/products/product9.jpg"
//       },
//       {
//         name: "French Fries",
//         desc: "Crispy fries with dips",
//         price: "199$",
//         img: "/products/product9.jpg"
//       }
//     ],
//     soups: [
//       {
//         name: "Chicken Corn Soup",
//         desc: "Creamy soup with sweet corn",
//         price: "249$",
//         img: "/products/product5.jpg"
//       },
//       {
//         name: "Hot & Sour Soup",
//         desc: "Traditional Chinese style",
//         price: "249$",
//         img: "/products/product5.jpg"
//       }
//     ]
//   };
//   const [selectedCategory, setSelectedCategory] = useState('breakfast');
  
//   const categories = [
//     { id: 'breakfast', label: 'Breakfast' },
//     { id: 'lunch', label: 'Lunch' },
//     { id: 'dinner', label: 'Dinner' },
//     { id: 'dessert', label: 'Dessert' },
//     { id: 'drink', label: 'Drink' },
//     { id: 'snack', label: 'Snack' },
//     { id: 'soups', label: 'Soups' }
//   ];

//   return (
//     <section>
//       <div className="flex justify-center items-center min-h-screen bg-black text-white">
//         <div className="container mx-auto px-4">
//           <div className="text-center mb-8">
//             <h2 
//               className="text-[#FF9F0D] italic"
//               style={{ fontFamily: 'Great Vibes, cursive' }}
//             >
//               Choose & pick
//             </h2>
//             <h1 className="text-4xl font-bold">
//               <span className="text-[#FF9F0D]">Fr</span>om Our Menu
//             </h1>
//           </div>
          
//           <div className="flex justify-center mb-8">
//             <ul className="flex flex-wrap space-x-4 text-lg md:gap-12 lg:gap-16">
//               {categories.map(category => (
//                 <li 
//                   key={category.id}
//                   className={`cursor-pointer transition-colors duration-300 ${
//                     selectedCategory === category.id ? 'text-[#FF9F0D]' : 'hover:text-[#FF9F0D]'
//                   }`}
//                   onClick={() => setSelectedCategory(category.id)}
//                 >
//                   {category.label}
//                 </li>
//               ))}
//             </ul>
//           </div>

//           <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 flex-wrap items-center justify-center">
//             <div className="w-full sm:w-full p-4">
//               <Image
//                 src={"/main/salad.png"}
//                 alt="Featured dish"
//                 height={700}
//                 width={700}
//                 className="w-full mx-auto mb-4"
//               />
//             </div>
                

                
//             <div className="space-y-4 md:space-y-8 m-2">
//               {menuData[selectedCategory].slice(0, Math.ceil(menuData[selectedCategory].length / 2)).map((item:{
//                 name: string;
//                 desc: string;
//                 price: string;
//                 img: string
//               }, index:number) => (
//                 <div className="flex items-center space-x-4" key={index}>
//                   <img
//                     alt={item.name}
//                     className="w-16 h-16 rounded-sm object-cover"
//                     src={item.img}
//                   />
//                   <div>
//                     <h3 className="text-xl font-bold">{item.name}</h3>
//                     <p className="text-gray-400">{item.desc}</p>
//                     <p className="text-[#FF9F0D] font-bold">{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="space-y-4 md:space-y-8 m-2">
//               {menuData[selectedCategory].slice(Math.ceil(menuData[selectedCategory].length / 2)).map((item:{
//                 name: string;
//                 desc: string;
//                 price: string;
//                 img: string
//               }, index:number) => (
//                 <div className="flex items-center space-x-4" key={index}>
//                   <img
//                     alt={item.name}
//                     className="w-16 h-16 rounded-sm object-cover"
//                     src={item.img}
//                   />
//                   <div>
//                     <h3 className="text-xl font-bold">{item.name}</h3>
//                     <p className="text-gray-400">{item.desc}</p>
//                     <p className="text-[#FF9F0D] font-bold">{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
            
            
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }