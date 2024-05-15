// import Aos from "aos";
// import { useEffect } from "react";

const Choose = () => {
    
    return (
        <div className="m-20  ">
            <h1>WHY US.......</h1>
            <h1 className="text-5xl text-orange-400 py-4">Why Choose Our Restaurant</h1>
            <div className="grid md:grid-cols-1  lg:grid-cols-3 gap-5 ">
                <div className="p-16 mr-5 mb-10 bg-stone-900 hover:bg-orange-400 hover:text-white " >
                    <h1 className="text-2xl text-orange-400 hover:text-white ">01</h1>
                    <h1 className="text-xl">Lorem Ipsum</h1>
                    <p><small>Ulamco laboris nisi ut aliquip ex ea commodo <br /> consequat. Et consectetur ducimus bero placeat</small></p>
                </div>
                <div className="p-16 mr-5 mb-10 bg-stone-900 hover:bg-orange-400 hover:text-white">
                    <h1 className="text-2xl text-orange-400 hover:text-white ">02</h1>
                    <h1 className="text-xl">Repellat Nihil</h1>
                    <p><small>Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest</small></p>
                </div>
                <div className="p-16 mr-5 mb-10 bg-stone-900 hover:bg-orange-400 hover:text-white">
                    <h1 className="text-2xl text-orange-400 hover:text-white ">03</h1>
                    <h1 className="text-xl">Ad ad velit qui</h1>
                    <p><small>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</small></p>
                </div>
                
            </div>
        </div>
    );
};

export default Choose;