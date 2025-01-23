"use client";
import { useState } from 'react';

// Sample menu data with categories


// export function HeroSec() {

//   const menuData = {
//     breakfast: [
//       {
//         name: "Desi Breakfast Platter",
//         desc: "Paratha with Omelette, Chai, and Chickpeas",
//         price: "Rs. 350",
//         img: "/menu/breakfast-1.jpg"
//       },
//       {
//         name: "Pancake Stack",
//         desc: "Fresh pancakes with maple syrup and fruits",
//         price: "Rs. 299",
//         img: "/menu/breakfast-2.jpg"
//       },
//       {
//         name: "Eggs Benedict",
//         desc: "Poached eggs with hollandaise sauce",
//         price: "Rs. 399",
//         img: "/menu/breakfast-3.jpg"
//       },
//       {
//         name: "Morning Glory Bowl",
//         desc: "Fruits, granola, and yogurt parfait",
//         price: "Rs. 275",
//         img: "/menu/breakfast-4.jpg"
//       }
//     ],
//     lunch: [
//       {
//         name: "Chicken Biryani",
//         desc: "Aromatic rice with tender chicken pieces",
//         price: "Rs. 450",
//         img: "/menu/lunch-1.jpg"
//       },
//       {
//         name: "Beef Burger",
//         desc: "Juicy patty with fresh vegetables",
//         price: "Rs. 399",
//         img: "/menu/lunch-2.jpg"
//       },
//       {
//         name: "Caesar Salad",
//         desc: "Fresh romaine lettuce with grilled chicken",
//         price: "Rs. 349",
//         img: "/menu/lunch-3.jpg"
//       },
//       {
//         name: "Pasta Alfredo",
//         desc: "Creamy pasta with garlic bread",
//         price: "Rs. 425",
//         img: "/menu/lunch-4.jpg"
//       }
//     ],
//     dinner: [
//       {
//         name: "Grilled Salmon",
//         desc: "Fresh salmon with seasonal vegetables",
//         price: "Rs. 899",
//         img: "/menu/dinner-1.jpg"
//       },
//       {
//         name: "BBQ Platter",
//         desc: "Assorted grilled meats and sides",
//         price: "Rs. 1299",
//         img: "/menu/dinner-2.jpg"
//       },
//       {
//         name: "Butter Chicken",
//         desc: "Classic curry with naan bread",
//         price: "Rs. 599",
//         img: "/menu/dinner-3.jpg"
//       },
//       {
//         name: "Steak",
//         desc: "Grilled to perfection with mushroom sauce",
//         price: "Rs. 1199",
//         img: "/menu/dinner-4.jpg"
//       }
//     ],
//     dessert: [
//       {
//         name: "Chocolate Lava Cake",
//         desc: "Warm cake with molten chocolate center",
//         price: "Rs. 299",
//         img: "/menu/dessert-1.jpg"
//       },
//       {
//         name: "Cheesecake",
//         desc: "New York style with berry compote",
//         price: "Rs. 349",
//         img: "/menu/dessert-2.jpg"
//       }
//     ],
//     drink: [
//       {
//         name: "Fresh Juice",
//         desc: "Selection of seasonal fruits",
//         price: "Rs. 199",
//         img: "/menu/drink-1.jpg"
//       },
//       {
//         name: "Milkshake",
//         desc: "Choose from chocolate, vanilla, or strawberry",
//         price: "Rs. 249",
//         img: "/menu/drink-2.jpg"
//       }
//     ],
//     snack: [
//       {
//         name: "Chicken Wings",
//         desc: "6 pieces with choice of sauce",
//         price: "Rs. 399",
//         img: "/menu/snack-1.jpg"
//       },
//       {
//         name: "French Fries",
//         desc: "Crispy fries with dips",
//         price: "Rs. 199",
//         img: "/menu/snack-2.jpg"
//       }
//     ],
//     soups: [
//       {
//         name: "Chicken Corn Soup",
//         desc: "Creamy soup with sweet corn",
//         price: "Rs. 249",
//         img: "/menu/soup-1.jpg"
//       },
//       {
//         name: "Hot & Sour Soup",
//         desc: "Traditional Chinese style",
//         price: "Rs. 249",
//         img: "/menu/soup-2.jpg"
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
//             <div className="w-full md:w-1/2 lg:w-full xl:w-1/4 p-4">
//               <img
//                 alt="Featured dish"
//                 className="w-full mx-auto mb-4"
//                 height="300"
//                 src="/main/salad.png"
//                 width="300"
//               />
//             </div>

//             <div className="space-y-4 md:space-y-8 m-2">
//               {menuData[selectedCategory].slice(0, Math.ceil(menuData[selectedCategory].length / 2)).map((item:any, index:number) => (
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
//               {menuData[selectedCategory].slice(Math.ceil(menuData[selectedCategory].length / 2)).map((item:any, index:number) => (
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

// export function AboutSec() {

//   const menuData = {
//     breakfast: [
//       {
//         name: "Desi Breakfast Platter",
//         desc: "Paratha with Omelette, Chai, and Chickpeas",
//         price: "Rs. 350",
//         img: "/menu/breakfast-1.jpg"
//       },
//       {
//         name: "Pancake Stack",
//         desc: "Fresh pancakes with maple syrup and fruits",
//         price: "Rs. 299",
//         img: "/menu/breakfast-2.jpg"
//       },
//       {
//         name: "Eggs Benedict",
//         desc: "Poached eggs with hollandaise sauce",
//         price: "Rs. 399",
//         img: "/menu/breakfast-3.jpg"
//       },
//       {
//         name: "Morning Glory Bowl",
//         desc: "Fruits, granola, and yogurt parfait",
//         price: "Rs. 275",
//         img: "/menu/breakfast-4.jpg"
//       }
//     ],
//     lunch: [
//       {
//         name: "Chicken Biryani",
//         desc: "Aromatic rice with tender chicken pieces",
//         price: "Rs. 450",
//         img: "/menu/lunch-1.jpg"
//       },
//       {
//         name: "Beef Burger",
//         desc: "Juicy patty with fresh vegetables",
//         price: "Rs. 399",
//         img: "/menu/lunch-2.jpg"
//       },
//       {
//         name: "Caesar Salad",
//         desc: "Fresh romaine lettuce with grilled chicken",
//         price: "Rs. 349",
//         img: "/menu/lunch-3.jpg"
//       },
//       {
//         name: "Pasta Alfredo",
//         desc: "Creamy pasta with garlic bread",
//         price: "Rs. 425",
//         img: "/menu/lunch-4.jpg"
//       }
//     ],
//     dinner: [
//       {
//         name: "Grilled Salmon",
//         desc: "Fresh salmon with seasonal vegetables",
//         price: "Rs. 899",
//         img: "/menu/dinner-1.jpg"
//       },
//       {
//         name: "BBQ Platter",
//         desc: "Assorted grilled meats and sides",
//         price: "Rs. 1299",
//         img: "/menu/dinner-2.jpg"
//       },
//       {
//         name: "Butter Chicken",
//         desc: "Classic curry with naan bread",
//         price: "Rs. 599",
//         img: "/menu/dinner-3.jpg"
//       },
//       {
//         name: "Steak",
//         desc: "Grilled to perfection with mushroom sauce",
//         price: "Rs. 1199",
//         img: "/menu/dinner-4.jpg"
//       }
//     ],
//     dessert: [
//       {
//         name: "Chocolate Lava Cake",
//         desc: "Warm cake with molten chocolate center",
//         price: "Rs. 299",
//         img: "/menu/dessert-1.jpg"
//       },
//       {
//         name: "Cheesecake",
//         desc: "New York style with berry compote",
//         price: "Rs. 349",
//         img: "/menu/dessert-2.jpg"
//       }
//     ],
//     drink: [
//       {
//         name: "Fresh Juice",
//         desc: "Selection of seasonal fruits",
//         price: "Rs. 199",
//         img: "/menu/drink-1.jpg"
//       },
//       {
//         name: "Milkshake",
//         desc: "Choose from chocolate, vanilla, or strawberry",
//         price: "Rs. 249",
//         img: "/menu/drink-2.jpg"
//       }
//     ],
//     snack: [
//       {
//         name: "Chicken Wings",
//         desc: "6 pieces with choice of sauce",
//         price: "Rs. 399",
//         img: "/menu/snack-1.jpg"
//       },
//       {
//         name: "French Fries",
//         desc: "Crispy fries with dips",
//         price: "Rs. 199",
//         img: "/menu/snack-2.jpg"
//       }
//     ],
//     soups: [
//       {
//         name: "Chicken Corn Soup",
//         desc: "Creamy soup with sweet corn",
//         price: "Rs. 249",
//         img: "/menu/soup-1.jpg"
//       },
//       {
//         name: "Hot & Sour Soup",
//         desc: "Traditional Chinese style",
//         price: "Rs. 249",
//         img: "/menu/soup-2.jpg"
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
//           <img
//               src="/about/flower2.png"
//               alt="flower"
//               className="absolute z-10 left-1/2 transform -translate-x-1/2"
//             />
//             <h2 className="food-menu-title text-4xl font-bold">
//               Our Food Menu
//             </h2>
//             <p className="text-gray-600 mt-2 mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
//               sed pharetra dictum neque massa congue.
//             </p>
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
//             <div className="space-y-4 md:space-y-8 m-2">
//               {menuData[selectedCategory].slice(0, Math.ceil(menuData[selectedCategory].length / 2)).map((item:any, index:number) => (
//                 <div className="flex items-center space-x-4" key={index}>
//                     <h3 className="text-xl font-bold">{item.name}</h3>
//                     <p className="text-gray-400">{item.desc}</p>
//                     <p className="text-[#FF9F0D] font-bold">{item.price}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }