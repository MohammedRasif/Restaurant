 import img1 from "../../img/hero-bg.jpg"


const Header = () => {
    return (
        <div >
        <div  className=" relative w-full  ">
            <img src={img1} className=""  />
            <div className="absolute flex items-center h-full left-0 top-0 bg-gradient-to-r from-[#151515]  ">
            <div className="text-white space-y-7 pl-20 ">
                <h1 className="text-6xl font-bold  ">Welcome To <span className="text-orange-500">Restaurantly</span></h1>
                <p className="text-2xl">Delivering great food for more than 18 years!</p>
                <div>
                    <button className="btn btn-outline text-white hover:bg-orange-400 rounded-3xl px-5 mr-6">OUR MANU....</button>
                    <button className="btn btn-outline text-white hover:bg-orange-400 rounded-3xl px-5 ">BOOK A TABIL...</button>
                </div>
            </div>
            </div>
           
            
        </div> 
        </div>
    );
};

export default Header;