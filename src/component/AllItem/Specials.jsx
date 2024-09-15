import img1 from "../../img/specials-1.png";
import img2 from "../../img/specials-2.png";
import img3 from "../../img/specials-3.png"; // Add other images

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

const Specials = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  // State to track the selected special item (default is "Modi sit est")
  const [selectedSpecial, setSelectedSpecial] = useState({
    title: "Modi sit est",
    description: "This special dish blends traditional flavors with modern culinary techniques to create a truly unique experience. Fresh, high-quality ingredients are paired with carefully selected spices, resulting in a harmonious fusion of textures and flavors. Each bite offers a dynamic contrast, from crispy to tender, and from savory to subtly sweet. Whether you're a foodie or simply someone who appreciates fine cuisine, this dish promises an unforgettable journey through taste. A must-try for those craving innovation in their culinary adventures.",
    image: img1
  });

  // List of specials
  const specials = [
    {
      title: "Modi sit est",
      description: "This special dish blends traditional flavors with modern culinary techniques to create a truly unique experience. Fresh, high-quality ingredients are paired with carefully selected spices, resulting in a harmonious fusion of textures and flavors. Each bite offers a dynamic contrast, from crispy to tender, and from savory to subtly sweet. Whether you're a foodie or simply someone who appreciates fine cuisine, this dish promises an unforgettable journey through taste. A must-try for those craving innovation in their culinary adventures.",
      image: img1
    },
    {
      title: "Unde praesentium sed",
      description: "The Unde Praesentium Sed dish is a fresh and healthy option for those seeking a nutritious meal. Packed with vibrant vegetables and lean proteins, it offers a light yet satisfying dining experience. The natural flavors of the ingredients are enhanced with a touch of subtle seasoning, making it both delicious and guilt-free. Perfect for health-conscious eaters, this dish provides essential nutrients without compromising on taste. Enjoy a wholesome and flavorful meal that supports your well-being and dietary goals.",
      image: img2
    },
    {
      title: "Pariatur explicabo vel",
      description: "The Pariatur Explicabo Vel dish is a delicious choice for food lovers, featuring a rich and flavorful sauce that elevates every bite. This dish combines tender, perfectly cooked ingredients with a savory sauce that is bursting with flavor. The sauce adds a velvety texture and enhances the dish’s overall taste, making it a delightful option for anyone craving a fulfilling meal. Whether enjoyed alone or shared, this dish promises to leave a lasting impression with its mouthwatering combination of textures and tastes.",
      image: img3
    },
    {
      title: "Nostrum qui quasi",
      description: "The Nostrum Qui Quasi is a mouth-watering delight crafted especially for seafood lovers. Packed with fresh, succulent seafood, this dish offers a rich, oceanic flavor that tantalizes the palate. The seafood is expertly prepared, maintaining its natural tenderness while being perfectly seasoned. A light, flavorful sauce complements the seafood, enhancing every bite. Whether you enjoy shrimp, crab, or other delicacies from the sea, this dish promises to satisfy with its fresh ingredients and impeccable balance of flavors. A true seafood feast!",
      image: img1
    },
    {
      title: "Iusto ut expedita aut",
      description: "Iusto Ut Expedita Aut is a crispy and delightful dish, perfect for those who crave texture and flavor in every bite. The dish features a golden, crispy exterior that contrasts beautifully with its tender, flavorful interior. Lightly seasoned to perfection, it delivers a satisfying crunch that pairs well with its subtle, rich flavors. Ideal as a snack or appetizer, this dish promises to please your taste buds with its delightful crispiness.",
      image: img2
    }
  ];

  return (
    <div className="p-5 md:p-10 bg-black overflow-x-hidden mx-auto">
      {/* Heading */}
      <div className="py-5">
        <h1 className="text-xl pb-2 text-center">SPECIALS ......................</h1>
        <h1 className="lg:text-6xl text-4xl text-orange-400 pb-10 text-center">Check Our Specials</h1>
      </div>

      {/* Specials Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 items-center">
        {/* List Section */}
        <div className="space-y-5 font-bold border-r border-orange-400 hidden lg:block" data-aos="fade-right">
          {specials.map((special, index) => (
            <h1
              key={index}
              className={`py-2 pl-4 cursor-pointer ${special.title === selectedSpecial.title ? 'bg-orange-400 text-black' : ''}`}
              onClick={() => setSelectedSpecial(special)}
            >
              {special.title}
            </h1>
          ))}
        </div>

        {/* Text Section */}
        <div className="lg:px-5 px-5 space-y-2 lg:col-span-1">
          <h1 className="text-2xl">{selectedSpecial.title}</h1>
          <p>{selectedSpecial.description}</p>
        </div>

        {/* Image Section */}
        <div className="flex justify-center lg:justify-center" data-aos="fade-left">
          <img src={selectedSpecial.image} className="h-64 md:h-80 object-cover" alt="Special" />
        </div>
      </div>

      {/* Specials List for Smaller Screens */}
      <div className="lg:hidden mt-5 space-y-3">
        <h1 className="text-xl">Specials List</h1>
        <div className="space-y-2 font-bold text-gray-700">
          {specials.map((special, index) => (
            <h1
              key={index}
              className={`py-2 pl-4 cursor-pointer ${special.title === selectedSpecial.title ? 'bg-orange-400 text-black' : ''}`}
              onClick={() => setSelectedSpecial(special)}
            >
              {special.title}
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Specials;
