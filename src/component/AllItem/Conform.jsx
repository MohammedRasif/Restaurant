import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";

const Conform = () => {
    const booking = useLoaderData();
    const {name,email,phone,time,date,people,photo,pdf,description,_id} = booking


    const handleUpdate= event =>{
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

        const updated = {name,email,phone,time,date,people,photo,pdf,description}
        // console.log(updated);

        fetch(`http://localhost:5000s/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updated)
        })
        .then(res => res.json())
        .then(data => {
            // console.log(data)
           if(data.modifiedCount > 0){
            toast.success('Updated Complete.........')
           }
        })


    }

    return (
        <div>
            <h1 className="text-5xl text-orange-400 text-center py-10">Update{name}</h1>
            <form onSubmit={handleUpdate} className="card-body">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Foot Name"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email"  defaultValue={email} placeholder="email"  className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Phone</span>
                        </label>
                        <input type="text" name="phone"  defaultValue={phone} placeholder="Your Phone" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Time</span>
                        </label>
                         <input type="time" name="time"  defaultValue={time} placeholder="Time" className="input input-bordered" required  />
                        </div>
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">Date</span>
                        </label>
                        <input type="date" name="date"  defaultValue={date} className="input input-bordered" required />
                        </div>


                        
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text">People</span>
                        </label>
                        <input type="text" name="people"  defaultValue={people} placeholder="# of people" className="input input-bordered" required />
                        </div>
                    </div>
                   <div  className="grid lg:grid-cols-2 gap-4">
                     <div className="form-control" >
                     <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                    <input type="url" name="photo"  defaultValue={photo} placeholder="Photo Url" className="input input-bordered" id="" />
                     </div>
                     <div className="form-control">
                     <label className="label">
                            <span className="label-text">PDF</span>
                        </label>
                    <input type="url" name="pdf"  defaultValue={pdf} placeholder="PDF Doc." className="input input-bordered" id="" />
                     </div>
                   </div>
                   
                   <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                   <textarea className="textarea textarea-primary " name="description" defaultValue={description}  placeholder="Short description"></textarea>
                    
                   <button className="btn glass bg-orange-400 text-black hover:bg-orange-400 mt-5 mx-[620px]">Conform now...</button>
                </form>
        </div>
    );
};

export default Conform;