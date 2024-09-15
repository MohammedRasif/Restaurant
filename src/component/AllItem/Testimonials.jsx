import img from "../../img/testimonials/testimonials-1.jpg";
import img1 from "../../img/testimonials/testimonials-2.jpg";
import img2 from "../../img/testimonials/testimonials-3.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });
  return (
    <div className=" bg-stone-900 lg:p-20 p-5">
      <h1 className="text-2xl">WHY US.......</h1>
      <h1 className="text-5xl text-orange-400 py-4">
        Why Choose Our Restaurant
      </h1>
      <div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-5">
          <div>
            <div className="bg-stone-800 lg:p-10 p-3 text-white rounded-xl">
              <p>
                {" "}
                Proin laculis punus consequat sem cure digni ssim donec
                prottitore entum suscipit eget id allquam eget nibh et maecen
                allquam elsus ot semper{" "}
              </p>
            </div>
            <div className="ml-10" data-aos="fade-up" data-aos-duration="6000">
              <img
                src={img}
                className="h-28 p-2 bg-orange-400 rounded-full"
                alt=""
              />
              <h1 className="font-bold text-xl">Saul Goodman</h1>
              <p>CEO & FOUNDER</p>
            </div>
          </div>
          <div>
            <div className="bg-stone-800 p-10 text-white rounded-xl">
              <p>
                {" "}
                Export tempor illum tamen malls malls eram quae irure esse
                labore quem cillum quid cillum eram malls quorum vellt fore eram{" "}
              </p>
            </div>
            <div className="ml-10" data-aos="fade-up" data-aos-duration="6000">
              <img
                src={img1}
                className="h-28 p-2 bg-orange-400 rounded-full"
                alt=""
              />
              <h1 className="font-bold text-xl">Sara Wilsson</h1>
              <p>DESIGNER</p>
            </div>
          </div>
          <div>
            <div className="bg-stone-800 p-10 text-white rounded-xl">
              <p>
                {" "}
                Enim nisi export duis labire chilum quae quee magna sint quem
                quorum nulla quem veniam duis minim tempor labore quem eram{" "}
              </p>
            </div>
            <div className="ml-10" data-aos="fade-up" data-aos-duration="6000">
              <img
                src={img2}
                className="h-28 p-2 bg-orange-400 rounded-full"
                alt=""
              />
              <h1 className="font-bold text-xl">Jena Karlis</h1>
              <p>STORE OWNER</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
