import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { IoMdTime } from "react-icons/io";
import { MdOutlineDateRange } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const MyListed = ({bookings}) => {
  
    const {name,email,phone,time,date,people,photo,pdf,description,_id} = bookings
    // console.log(_id);

    const handelDelete = _id => {
        // console.log(_id);

        
        Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
        }).then((result) => {
        if (result.isConfirmed) {
          
            fetch(`http://localhost:5000/${_id}`,{
                method:'DELETE'
            })
            .then(res=>res.json())
            .then(data => {
                if(data.deletedCount >0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                        });
                }
            })
        }
        });
        
    }
    return (
        <div className="px-96 my-10  text-white ">
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} className="h-80 pl-10" alt="Movie"/></figure>
            <div className="p-5">
                <h2 className="card-title">{name} </h2>
                <p>{description.substring(0,100)}...</p>
                <div className="pt-5">
                    <div>
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
                <div className=" flex items-center  ">
                <Link to={`/conform/${_id}`}><button className="btn btn-primary bg-orange-400 hover:bg-orange-600 text-white mt-7">Update...</button></Link>
                <button onClick={() => handelDelete(_id)} className="btn btn-primary bg-orange-400 hover:bg-orange-600 text-white mt-7 ml-5">Delete...</button>
                <Link to={`/bookingDetails/${_id}`}><button className="btn btn-primary bg-orange-400 hover:bg-orange-600 text-white mt-7 ml-5">See more...</button></Link>
                <div className=" ml-5 mt-6 mr-10">
                <Link ><h1>Is it <span className="font-bold text-orange-400 mt-20">confrom...?</span></h1></Link>
                 </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MyListed;