
import AOS from "aos";
import "aos/dist/aos.css"

import { useEffect } from "react";

const Choose = () => {
    useEffect(()=>{
        AOS.init({duration:1200})
    })
  return (
    <div className="m-20  ">
     
      <h1>WHY US.......</h1>
      <h1  className="text-5xl text-orange-400 py-4 data-aos=flip-left " >
        Why Choose Our Restaurant
      </h1>
      <div className="grid md:grid-cols-1  lg:grid-cols-3 gap-5 ">
        <div className="p-16 mr-5 mb-10 bg-stone-900 hover:bg-orange-400 hover:text-white   " data-aos="flip-left" >
          <h1 className="text-2xl text-orange-400 hover:text-white ">01</h1>
          <h1 className="text-xl text-white" >Lorem Ipsum</h1>
          <p>
            <small className="text-white">
              Ulamco laboris nisi ut aliquip ex ea commodo <br /> consequat. Et
              consectetur ducimus bero placeat
            </small>
          </p>
        </div>
        <div className="p-16 mr-5 mb-10 bg-stone-900 hover:bg-orange-400 hover:text-white" data-aos="flip-left">
          <h1 className="text-2xl text-orange-400 hover:text-white ">02</h1>
          <h1 className="text-xl text-white">Repellat Nihil</h1>
          <p>
            <small className="text-white">
              Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis
              dolor quod et vel dire leno para dest
            </small>
          </p>
        </div>
        <div className="p-16 mr-5 mb-10 bg-stone-900 hover:bg-orange-400 hover:text-white" data-aos="flip-left">
          <h1 className="text-2xl text-orange-400 hover:text-white ">03</h1>
          <h1 className="text-xl text-white">Ad ad velit qui</h1>
          <p>
            <small className="text-white">
              Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt
              debitis quo vel nam quis
            </small>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choose;
