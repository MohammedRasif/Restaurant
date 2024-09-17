import img1 from "../../img/menu/bread-barrel.jpg";
import img2 from "../../img/menu/caesar.jpg";
import img3 from "../../img/menu/cake.jpg";
import img4 from "../../img/menu/greek-salad.jpg";
import img5 from "../../img/menu/lobster-bisque.jpg";
import img6 from "../../img/menu/lobster-roll.jpg";
import img7 from "../../img/menu/mozzarella.jpg";
import img8 from "../../img/menu/spinach-salad.jpg";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Menu = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  return (
    <div className="bg-stone-900  px-4 lg:px-20 py-10 text-white ">
      <h1 className="text-xl pb-2 text-center">MENU</h1>
      <h1 className="lg:text-6xl text-4xl text-orange-400 pb-10 text-center">
        Check Our Tasty Menu
      </h1>

      <div className="grid lg:grid-cols-2 gap-y-10 gap-x-8">
        {/* Item 1 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start" data-aos="zoom-in">
          <div className="sm:pr-5 pb-4 sm:pb-0">
            <img
              src={img1}
              className="h-20 w-20 p-1 bg-orange-400 rounded-full"
              alt="Bread Barrel"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-orange-400 font-bold">
              Bread Barrel .................................................... $6.95
            </h1>
            <p>Lorem, deren, trataro, filede, nerada</p>
          </div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start" data-aos="zoom-in">
          <div className="sm:pr-5 pb-4 sm:pb-0">
            <img
              src={img2}
              className="h-20 w-20 p-1 bg-orange-400 rounded-full"
              alt="Caesar Selections"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-orange-400 font-bold">
              Caesar Selections ............................................. $6.95
            </h1>
            <p>Lorem, deren, trataro, filede, nerada</p>
          </div>
        </div>

        {/* Remaining menu items */}
        
        {/* Item 3 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start" data-aos="zoom-in">
          <div className="sm:pr-5 pb-4 sm:pb-0">
            <img
              src={img3}
              className="h-20 w-20 p-1 bg-orange-400 rounded-full"
              alt="Mozzarella Stick"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-orange-400 font-bold">
              Mozzarella Stick ................................................... $6.95
            </h1>
            <p>Lorem, deren, trataro, filede, nerada</p>
          </div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start" data-aos="zoom-in">
          <div className="sm:pr-5 pb-4 sm:pb-0">
            <img
              src={img4}
              className="h-20 w-20 p-1 bg-orange-400 rounded-full"
              alt="Spinach Salad"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-orange-400 font-bold">
              Spinach Salad .................................................... $6.95
            </h1>
            <p>Fresh spinach with mushrooms, hard-boiled egg, and warm bacon vinaigrette</p>
          </div>
        </div>

        {/* Item 5 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start" data-aos="zoom-in">
          <div className="sm:pr-5 pb-4 sm:pb-0">
            <img
              src={img5}
              className="h-20 w-20 p-1 bg-orange-400 rounded-full"
              alt="Lobster Bisque"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-orange-400 font-bold">
              Lobster Bisque ................................................... $6.95
            </h1>
            <p>Lorem, deren, trataro, filede, nerada</p>
          </div>
        </div>

        {/* Item 6 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start" data-aos="zoom-in">
          <div className="sm:pr-5 pb-4 sm:pb-0">
            <img
              src={img6}
              className="h-20 w-20 p-1 bg-orange-400 rounded-full"
              alt="Lobster Roll"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-orange-400 font-bold">
              Lobster Roll ....................................................... $6.95
            </h1>
            <p>Plump lobster meat, mayo, and crisp lettuce on a toasted bulky roll</p>
          </div>
        </div>

        {/* Item 7 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start" data-aos="zoom-in">
          <div className="sm:pr-5 pb-4 sm:pb-0">
            <img
              src={img7}
              className="h-20 w-20 p-1 bg-orange-400 rounded-full"
              alt="Mozzarella Stick"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-orange-400 font-bold">
              Mozzarella Stick ................................................... $6.95
            </h1>
            <p>Lorem, deren, trataro, filede, nerada</p>
          </div>
        </div>

        {/* Item 8 */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start" data-aos="zoom-in">
          <div className="sm:pr-5 pb-4 sm:pb-0">
            <img
              src={img8}
              className="h-20 w-20 p-1 bg-orange-400 rounded-full"
              alt="Spinach Salad"
            />
          </div>
          <div className="text-center sm:text-left">
            <h1 className="text-orange-400 font-bold">
              Spinach Salad .................................................... $6.95
            </h1>
            <p>Fresh spinach with mushrooms, hard-boiled egg, and warm bacon vinaigrette</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
