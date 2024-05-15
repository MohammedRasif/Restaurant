import img from "../../img/gallery/gallery-1.jpg"
import img1 from "../../img/gallery/gallery-2.jpg"
import img2 from "../../img/gallery/gallery-3.jpg"
import img3 from "../../img/gallery/gallery-4.jpg"
import img4 from "../../img/gallery/gallery-5.jpg"
import img5 from "../../img/gallery/gallery-6.jpg"
import img6 from "../../img/gallery/gallery-7.jpg"
import img7 from "../../img/gallery/gallery-8.jpg"


const Gallary = () => {
    return (
        <div className="bg-black ">
            <div className="pl-20 pt-20">
                <h1 className="text-xl pb-2">GALLERY ......................</h1>
                <h1 className="text-5xl text-orange-400 pb-10">Some photos from Our Restaurant</h1>
            </div>
            <div>
                <div className="grid lg:grid-cols-4 grid-cols-1">
                    <img src={img} alt="" />
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                    <img src={img4} alt="" />
                    <img src={img5} alt="" />
                    <img src={img6} alt="" />
                    <img src={img7} alt="" />

                
                </div>
            </div>
        </div>
    );
};

export default Gallary;