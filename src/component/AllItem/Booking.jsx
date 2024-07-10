import toast from "react-hot-toast";

const Booking = () => {

    const handleBooking = event =>{
        event.preventDefault()
        const form = event.target ;

        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;
        const time = form.time.value;
        const date = form.date.value;
        const people = form.people.value;
        const photo = form.photo.value;
        const pdf = form.pdf.value;
        const description = form.description.value;

        const allbooking = {name,email,phone,time,date,people,photo,pdf,description}
        // console.log(allbooking);

        fetch('http://localhost:5000',{credentials:"include"},{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(allbooking)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
           if(data.insertedId){
            toast.success('SignIn Successfully')
           }
        })
}
    return (
        <div className="pt-20">
            <h1 className="text-5xl text-orange-400 text-center py-10">Book a Table</h1>
            <form onSubmit={handleBooking}  className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Foot Name"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email"   className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name="phone" placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                        {/* <input type="text" name="time" placeholder="Time" className="input input-bordered" required /> */}
                         <input type="time" name="time"  placeholder="Time" className="input input-bordered" required  />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date" className="input input-bordered" required />
                        </div>


                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">People</span>
                        </label>
                        <input type="text" name="people" placeholder="# of people" className="input input-bordered" required />
                        </div>
                    </div>
                   <div  className="grid lg:grid-cols-2 gap-4">
                     <div className="form-control" >
                     <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                    <input type="url" name="photo" placeholder="Photo Url" className="input input-bordered" id="" />
                     </div>
                     <div className="form-control">
                     <label className="label">
                            <span className="label-text">PDF</span>
                        </label>
                    <input type="url" name="pdf" placeholder="PDF Doc." className="input input-bordered" id="" />
                     </div>
                   </div>
                   
                   <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                   <textarea className="textarea textarea-primary " name="description" placeholder="Short description"></textarea>
                    
                   <button className="btn glass bg-orange-400 text-black hover:bg-orange-400 mt-5 mx-[620px]">Booking Now</button>
                </form>
        </div>
    );
};


export default Booking;