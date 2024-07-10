import img from "../../img/about-bg.jpg"
import img1 from "../../img/about.jpg"
import { CgCheckO } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from "react";


const Main = () => {
    useEffect(()=>{
        AOS.init({duration:1200})
    })
    return (
        <div className="carousel w-full h-[600px] ">
        <div id="slide1" className="carousel-item relative w-full   ">
            <img src={img} className="w-full " />
            <div className="absolute flex hero-overlay bg-black-100 pl-32   ">
            <div className="text-white space-y-7 pt-20 pr-20 pb-10 w-1/2   ">
                <h1 className="text-4xl font-bold">Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className="flex items-center">
                    <CgCheckO className="text-orange-400 text-xl mr-2"></CgCheckO>
                    <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </div>
                <div className="flex items-center">
                    <CgCheckO className="text-orange-400 text-xl mr-2"></CgCheckO>
                    <p>  Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                </div>
                <div className="flex items-center">
                    <CgCheckO className="text-orange-400 text-2xl mr-2"></CgCheckO>
                    <p> Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</p>
                </div>
                <p className="pb-10">Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
            </div>
            <div className=" pr-20 ">
                <img src={img1} className="h-[450px] w-[650px] ml-10 mt-20 " alt="" data-aos="zoom-in-left" />
            </div>
            </div>
            
            
        </div> 
    </div>
    );
};

export default Main;