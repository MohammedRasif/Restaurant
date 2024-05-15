import img from "../../img/specials-1.png"

const Specials = () => {
    return (
        <div className="p-20 ">
            <h1 className="text-xl pb-2">SPECIALS ......................</h1>
            <h1 className="text-4xl text-orange-400 pb-10">Check Our Specials</h1>
            <div className="flex items-center">
                <div className="w-1/4 space-y-5 font-bold border-r-orange-400 ">
                    <h1 className="py-2 pl-4 bg-orange-400 text-black">Modi sit est</h1>
                    <h1 className="pl-4">Unde praesentium sed</h1>
                    <h1 className="pl-4">Pariatur explicabo vel</h1>
                    <h1 className="pl-4">Nostrum qui quasi</h1>
                    <h1 className="pl-4">Iusto ut expedita aut</h1>
                </div>
                <div className="w-2/4 px-5 space-y-2">
                    <h1 className="text-2xl">Architecto ut aperiam autem id</h1>
                    <p>Qui laudantium consequatur laborum sit qui ad sapiente dila parde sonata raqer a videna mareta paulona marka</p>
                    <p>Et nobis maiores eius. Voluptatibus ut enim blanditiis atque harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut molestiae aut qui. Est repellat minima eveniet eius et quis magni nihil. Consequatur dolorem quaerat quos qui similique accusamus nostrum rem vero</p>
                </div>
                <div>
                    <img src={img} className="h-80" alt="" />
                </div>
            </div>
            
        </div>
    );
};

export default Specials;