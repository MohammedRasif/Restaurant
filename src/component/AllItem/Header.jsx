import img1 from "../../img/hero-bg.jpg";
import 'animate.css';



const Header = () => {
  return (
    <div id="slide1" className="carousel-item relative w-full">
      <img src={img1} className="w-full rounded-xl" />
      <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-7 pl-12 w-2/3">
          <h2 className="text-6xl font-bold">
            Welcome To <span className="text-orange-400 animate__animated animate__flipInY " >Restaurantly</span>
          </h2>
         


          <p>Delivering great food for more than 18 years!</p>
          <div>
            <button className="btn bg-orange-500 text-white hover:text-orange-500 mr-5">Discover More</button>
            <button className="btn btn-outline text-orange-400 hover:text-white hover:bg-orange-500">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
