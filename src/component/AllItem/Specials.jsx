import img from "../../img/specials-1.png";

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Specials = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    });

    return (
        <div className="p-5 md:p-10 lg:p-20 bg-black">
            {/* Heading */}
            <div className="py-5">
            <h1 className="text-xl pb-2 text-center">SPECIALS ......................</h1>
            <h1 className="lg:text-6xl text-4xl text-orange-400 pb-10 text-center">Check Our Specials</h1>
            </div>

            {/* Specials Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 items-center">
                {/* List Section */}
                <div className="space-y-5 font-bold border-r border-orange-400 hidden  lg:block" data-aos="fade-right">
                    <h1 className="py-2 pl-4 bg-orange-400 text-black">Modi sit est</h1>
                    <h1 className="pl-4">Unde praesentium sed</h1>
                    <h1 className="pl-4">Pariatur explicabo vel</h1>
                    <h1 className="pl-4">Nostrum qui quasi</h1>
                    <h1 className="pl-4">Iusto ut expedita aut</h1>
                </div>

                {/* Text Section */}
                <div className="lg:px-5 px-5  space-y-2 lg:col-span-1">
                    <h1 className="text-2xl">Architecto ut aperiam autem id</h1>
                    <p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center lg:justify-end" data-aos="fade-left">
                    <img src={img} className="h-64 md:h-80 object-cover" alt="Special" />
                </div>
            </div>

            {/* Specials List for Smaller Screens */}
            <div className="lg:hidden mt-5 space-y-3">
                <h1 className="text-xl">Specials List</h1>
                <div className="space-y-2 font-bold text-gray-700">
                    <h1 className="py-2 pl-4 bg-orange-400 text-black">Modi sit est</h1>
                    <h1 className="pl-4">Unde praesentium sed</h1>
                    <h1 className="pl-4">Pariatur explicabo vel</h1>
                    <h1 className="pl-4">Nostrum qui quasi</h1>
                    <h1 className="pl-4">Iusto ut expedita aut</h1>
                </div>
            </div>
        </div>
    );
};

export default Specials;
