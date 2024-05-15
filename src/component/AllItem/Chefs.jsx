import img from "../../img/chefs/chefs-1.jpg"
import img1 from "../../img/chefs/chefs-2.jpg"
import img2 from "../../img/chefs/chefs-3.jpg"




import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";



const Chefs = () => {
    return (
        <div className="m-20">
                <div className=" pb-10">
                    <h1 className="text-2xl">WHY US.......</h1>
                    <h1 className="text-5xl text-orange-400 py-4">Why Choose Our Restaurant</h1>
                </div>
                <div className="mb-10">
                    <div className="grid lg:grid-cols-3 grid-cols-1 gap-6 mb-10">
                        <div>
                            <img src={img} className="h-[400px]" alt="" />
                            <div className=" ml-32">
                                <h1 className="text-2xl text-orange-400">Walter White</h1>
                                <h1 className="font-bold text-white ml-4">Master Chef</h1>
                                <div className="flex space-x-2 text-2xl text-orange-400 mt-4">
                                    <FaFacebook></FaFacebook>
                                    <FaInstagramSquare></FaInstagramSquare>
                                    <FaTwitter></FaTwitter>
                                    <FaLinkedin></FaLinkedin>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={img1} className="h-[400px]" alt="" />
                            <div className=" ml-32">
                                <h1 className="text-2xl text-orange-400">Sarah Jhonson</h1>
                                <h1 className="font-bold text-white ml-10">Patissier</h1>
                                <div className="flex space-x-2 text-2xl text-orange-400 mt-4 ml-5">
                                    <FaFacebook></FaFacebook>
                                    <FaInstagramSquare></FaInstagramSquare>
                                    <FaTwitter></FaTwitter>
                                    <FaLinkedin></FaLinkedin>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={img2} className="h-[400px]" alt="" />
                            <div className=" ml-32">
                                <h1 className="text-2xl text-orange-400">William Anderson</h1>
                                <h1 className="font-bold text-white ml-16">Cook</h1>
                                <div className="flex space-x-2 text-2xl text-orange-400 mt-4 ml-7">
                                    <FaFacebook></FaFacebook>
                                    <FaInstagramSquare></FaInstagramSquare>
                                    <FaTwitter></FaTwitter>
                                    <FaLinkedin></FaLinkedin>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default Chefs;