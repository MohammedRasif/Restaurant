import { useLoaderData } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";

const BookingDetails = () => {
    const booking = useLoaderData()
    const {name,email,phone,time,date,people,photo,pdf,description,_id}=booking
    // console.log(booking) 
    return (
        <div className="card w-[600px] ml-[500px] glass">
        <figure><img src={photo} alt="car!"/></figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p>{description}</p>

            <div className="pt-5 flex ">
                    <div className="space-y-5 mr-10">
                        <div className="flex items-center space-x-2">
                            <MdMarkEmailRead className="text-orange-400"></MdMarkEmailRead>
                            <h1>{email}</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <IoMdTime className="text-orange-400"></IoMdTime>
                            <h1>{time}</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <MdOutlineDateRange className="text-orange-400"></MdOutlineDateRange>
                            <h1>{date}</h1>
                        </div>
                     </div>
                     <div className="space-y-5">
                        <div className="flex items-center space-x-2">
                            <FaPhoneAlt className="text-orange-400"></FaPhoneAlt>
                            <h1>{phone}</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <IoPeopleSharp className="text-orange-400"></IoPeopleSharp>
                            <h1>{people}</h1>
                        </div>
                        <div className="flex items-center space-x-2">
                            <FaFilePdf className="text-orange-400"></FaFilePdf>
                            <h1>{pdf}</h1>
                        </div>
                     </div>  
                    
                </div>
            
        </div>
        </div>
    );
};

export default BookingDetails;