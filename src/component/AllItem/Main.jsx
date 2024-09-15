import bgimg from "../../img/about-bg.jpg";
import img1 from "../../img/about.jpg";
import { CgCheckO } from "react-icons/cg";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Main = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div className="carousel w-full h-auto md:h-[600px]">
            <div
                id="slide1"
                className="carousel-item relative w-full bg-cover bg-center h-[600px] md:h-[400px] lg:h-[600px]"
                style={{ backgroundImage: `url(${bgimg})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col lg:flex-row items-center lg:items-start px-5 lg:px-32 py-10 lg:py-20">
                    <div className="text-white space-y-4 lg:space-y-7 lg:pr-20 lg:w-1/2">
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold">
                            Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.
                        </h1>
                        <p className="text-sm md:text-base">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <CgCheckO className="text-orange-400 text-xl pr-2" />
                                <p> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div className="flex items-start">
                                <CgCheckO className="text-orange-400 text-xl pr-2" />
                                <p> Duis aute irure dolor in reprehenderit in voluptate velit.</p>
                            </div>
                            <div className="flex items-start">
                                <CgCheckO className="text-orange-400 text-xl pr-2" />
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda
                                    mastiro dolore eu fugiat nulla pariatur.
                                </p>
                            </div>
                        </div>
                        <p className="text-sm md:text-base">
                            Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>
                    <div className="pt-10 lg:pt-0 lg:px-10 w-full lg:w-auto">
                        <img
                            src={img1}
                            className="w-full lg:h-[500px] lg:w-[800px] h-auto md:w-10/12 lg:max-w-lg px-auto"
                            alt=""
                            data-aos="zoom-in-left"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
