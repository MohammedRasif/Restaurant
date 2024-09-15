import img1 from "../../img/hero-bg.jpg";
import 'animate.css';

const Header = () => {
  return (
    <div  className="carousel-item relative w-full">
      {/* Background Image */}
      <img src={img1} className="w-full h-[500px] lg:h-[700px] object-cover rounded-xl" alt="Restaurant Background" />

      {/* Overlay with Gradient */}
      <div className="absolute rounded-xl flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className="text-white space-y-5 lg:space-y-7 px-5 lg:pl-12 w-full lg:w-2/3">
          {/* Heading */}
          <h2 className="text-3xl lg:text-6xl font-bold animate__animated animate__fadeInDown">
            Welcome To <span className="text-orange-400 animate__animated animate__flipInY">Restaurantly</span>
          </h2>

          {/* Subheading */}
          <p className="text-sm lg:text-lg animate__animated animate__fadeInUp">
            Delivering great food for more than 18 years!
          </p>

          {/* Buttons */}
          <div className="animate__animated animate__fadeInUp">
            <button className="btn bg-orange-500 text-white hover:bg-white hover:text-orange-500 mr-3 lg:mr-5">
              Discover More
            </button>
            <button className="btn btn-outline border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white">
              Latest Project
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
