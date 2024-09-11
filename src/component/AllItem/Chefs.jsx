import img from "../../img/chefs/chefs-1.jpg";
import img1 from "../../img/chefs/chefs-2.jpg";
import img2 from "../../img/chefs/chefs-3.jpg";

import { FaFacebook, FaInstagramSquare, FaTwitter, FaLinkedin } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Chefs = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    });

    return (
        <div className="m-7 lg:m-20">
            {/* Heading Section */}
            <div className="pb-10 text-center">
                <h1 className="text-2xl">WHY US.......</h1>
                <h1 className="text-4xl lg:text-5xl text-orange-400 py-4">Why Choose Our Restaurant</h1>
            </div>

            {/* Chefs Cards Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Chef 1 */}
                <div className="text-center" data-aos="flip-left">
                    <img src={img} className="h-[350px] w-full object-cover rounded-lg mb-5" alt="Chef Walter White" />
                    <h1 className="text-2xl text-orange-400">Walter White</h1>
                    <h1 className="font-bold text-white">Master Chef</h1>
                    <div className="flex justify-center space-x-4 text-2xl text-orange-400 mt-4">
                        <FaFacebook />
                        <FaInstagramSquare />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>

                {/* Chef 2 */}
                <div className="text-center" data-aos="flip-left">
                    <img src={img1} className="h-[350px] w-full object-cover rounded-lg mb-5" alt="Chef Sarah Johnson" />
                    <h1 className="text-2xl text-orange-400">Sarah Jhonson</h1>
                    <h1 className="font-bold text-white">Patissier</h1>
                    <div className="flex justify-center space-x-4 text-2xl text-orange-400 mt-4">
                        <FaFacebook />
                        <FaInstagramSquare />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>

                {/* Chef 3 */}
                <div className="text-center" data-aos="flip-left">
                    <img src={img2} className="h-[350px] w-full object-cover rounded-lg mb-5" alt="Chef William Anderson" />
                    <h1 className="text-2xl text-orange-400">William Anderson</h1>
                    <h1 className="font-bold text-white">Cook</h1>
                    <div className="flex justify-center space-x-4 text-2xl text-orange-400 mt-4">
                        <FaFacebook />
                        <FaInstagramSquare />
                        <FaTwitter />
                        <FaLinkedin />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chefs;
