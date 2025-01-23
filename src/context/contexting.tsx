// // // components/Menu.tsx
// // import { useFood } from '../context/FoodContext';
// // import { LoadingSpinner } from './LoadingSpinner';
// // import { ErrorMessage } from './ErrorMessage';

// export default function Menu() {
//   const {
//     categories,
//     selectedCategory,
//     setSelectedCategory,
//     isLoading,
//     error,
//     getItemsByCategory
//   } = useFood();

//   if (isLoading) return <LoadingSpinner />;
//   if (error) return <ErrorMessage message={error} />;

//   const currentItems = getItemsByCategory(selectedCategory);
//   const featuredItem = currentItems.find(item => item.featured) || currentItems[0];
//   const regularItems = currentItems.filter(item => item !== featuredItem);

//   return (
//     <section className="bg-black text-white py-20">
//       <div className="container mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-12">
//           <h2 className="text-[#FF9F0D] italic text-2xl mb-2">
//             Choose & pick
//           </h2>
//           <h1 className="text-5xl font-bold">
//             <span className="text-[#FF9F0D]">Fr</span>om Our Menu
//           </h1>
//         </div>

//         {/* Categories */}
//         <div className="flex justify-center mb-12">
//           <ul className="flex flex-wrap gap-8 text-lg">
//             <li
//               className={`cursor-pointer px-4 py-2 rounded-full ${
//                 selectedCategory === 'all' ? 'text-[#FF9F0D] bg-[#FF9F0D]/10' : ''
//               }`}
//               onClick={() => setSelectedCategory('all')}
//             >
//               All
//             </li>
//             {categories.map(category => (
//               <li
//                 key={category._id}
//                 className={`cursor-pointer px-4 py-2 rounded-full ${
//                   selectedCategory === category.name.toLowerCase()
//                     ? 'text-[#FF9F0D] bg-[#FF9F0D]/10'
//                     : ''
//                 }`}
//                 onClick={() => setSelectedCategory(category.name.toLowerCase())}
//               >
//                 {category.name}
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Menu Grid */}
//         <div className="grid lg:grid-cols-2 gap-8">
//           {/* Featured Item */}
//           {featuredItem && (
//             <div className="lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]">
//               <div className="relative group">
//                 <img
//                   src={featuredItem.image.asset.url}
//                   alt={featuredItem.name}
//                   className="w-full h-[600px] object-cover rounded-2xl"
//                 />
//                 <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
//                   <h3 className="text-2xl font-bold">{featuredItem.name}</h3>
//                   <p className="text-gray-300">{featuredItem.description}</p>
//                   <p className="text-[#FF9F0D] font-bold text-xl mt-2">
//                     Rs. {featuredItem.price}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           )}

//           {/* Regular Items */}
//           <div className="space-y-4">
//             {regularItems.map((item:any) => (
//               <div
//                 key={item._id}
//                 className="flex items-center space-x-4 p-4 hover:bg-gray-900 rounded-lg"
//               >
//                 <img
//                   src={item.image.asset.url}
//                   alt={item.name}
//                   className="w-20 h-20 rounded-lg object-cover"
//                 />
//                 <div>
//                   <h3 className="text-xl font-bold">{item.name}</h3>
//                   <p className="text-gray-400 text-sm">{item.description}</p>
//                   <p className="text-[#FF9F0D] font-bold mt-1">
//                     Rs. {item.price}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }