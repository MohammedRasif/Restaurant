import { useLoaderData } from "react-router-dom";
import MyListed from "./MyListed";

const MyList = () => {
    const booking = useLoaderData();
    console.log(booking)
    return (
        <div className="pt-32">
            {
                 booking.map(bookings =><MyListed  key={bookings._id} bookings={bookings}></MyListed>)
            }
        </div>
       
    );
};

export default MyList;