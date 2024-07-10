import img1 from "../../img/menu/bread-barrel.jpg"
import img2 from "../../img/menu/caesar.jpg"
import img3 from "../../img/menu/cake.jpg"
import img4 from "../../img/menu/greek-salad.jpg"
import img5 from "../../img/menu/lobster-bisque.jpg"
import img6 from "../../img/menu/lobster-roll.jpg"
import img7 from "../../img/menu/mozzarella.jpg"
import img8 from "../../img/menu/spinach-salad.jpg"

import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from "react";



const Menu = () => {
    useEffect(()=>{
        AOS.init({duration:1200})
    })
    return (
        <div className=" bg-stone-900 p-20">
            <h1 className="text-xl pb-2">MENU......................</h1>
            <h1 className="text-4xl text-orange-400 pb-10">Check Our Tasty Menu</h1>
            <br />
            <div className="grid lg:grid-cols-2 grid-cols-1">
                <div className="space-y-10">
                    <div className="flex items-center" data-aos="zoom-in">
                        <div className="pr-5" >
                            <img src={img1} className="h-20 p-1 bg-orange-400 rounded-full" alt="" />
                        </div>
                        <div>
                            <h1 className="text-orange-400 font-bold">Bread Barrel  ...................................................................................... $6.95</h1>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className="flex items-center " data-aos="zoom-in" >
                        <div className="pr-5" >
                            <img src={img2} className="h-20 p-1 bg-orange-400 rounded-full" alt="" />
                        </div>
                        <div>
                            <h1 className="text-orange-400 font-bold">Caesar Selections  ............................................................................. $6.95</h1>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className="flex items-center" data-aos="zoom-in">
                        <div className="pr-5" >
                            <img src={img3} className="h-20 p-1 bg-orange-400 rounded-full" alt="" />
                        </div>
                        <div>
                            <h1 className="text-orange-400 font-bold">Mozzarella Stick  ................................................................................. $6.95</h1>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className="flex items-center" data-aos="zoom-in">
                        <div className="pr-5" >
                            <img src={img4} className="h-20 p-1 bg-orange-400 rounded-full" alt="" />
                        </div>
                        <div>
                            <h1 className="text-orange-400 font-bold">Spinach Salad  ...................................................................................... $6.95</h1>
                            <p>Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette</p>
                        </div>
                    </div>
                </div>
                <div className="space-y-10">
                    <div className="flex items-center" data-aos="zoom-in">
                        <div className="pr-5" >
                            <img src={img5} className="h-20 p-1 bg-orange-400 rounded-full" alt="" />
                        </div>
                        <div>
                            <h1 className="text-orange-400 font-bold">Lobster Bisque  ...................................................................................... $6.95</h1>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className="flex items-center " data-aos="zoom-in" >
                        <div className="pr-5" >
                            <img src={img6} className="h-20 p-1 bg-orange-400 rounded-full" alt="" />
                        </div>
                        <div>
                            <h1 className="text-orange-400 font-bold">Lobaster Roll  ............................................................................................ $6.95</h1>
                            <p>Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll</p>
                        </div>
                    </div>
                    <div className="flex items-center" data-aos="zoom-in">
                        <div className="pr-5" >
                            <img src={img7} className="h-20 p-1 bg-orange-400 rounded-full" alt="" />
                        </div>
                        <div>
                            <h1 className="text-orange-400 font-bold">Mozzarella Stick  ......................................................................................... $6.95</h1>
                            <p>Lorem, deren, trataro, filede, nerada</p>
                        </div>
                    </div>
                    <div className="flex items-center" data-aos="zoom-in">
                        <div className="pr-5" >
                            <img src={img8} className="h-20 p-1 bg-orange-400 rounded-full" alt="" />
                        </div>
                        <div>
                            <h1 className="text-orange-400 font-bold">Spinach Salad  .............................................................................................. $6.95</h1>
                            <p>Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Menu;