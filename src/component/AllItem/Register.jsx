import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";


const Register = () => {

    const navigate = useNavigate()
    const{createUser,user} = useContext(AuthContext)

    const handleregister = async event =>{
        event.preventDefault ()
        const form = event.target 
        const name = form.name.value
        const email = form.email.value 
        const password = form.password.value 
        // console.log(email,password,name)
        try {
            const result = await createUser(email,password)
            // console.log(result)
           
            // navigate('/')
            toast.success('SignIn Successfully')
        } catch (error){
            // console.log(error)
            toast.error(error?.massage)
        }
    }


    return (
        <div className="hero min-h-screen bg-base-200 pt-20">
        <div className="hero-content flex-col text-orange-400">
            <div className="text-center ">
            <h1 className="text-5xl font-bold ">Register Now...!</h1>
            </div>
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleregister}   className="card-body">
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input type="text" placeholder="Your Name" name="Name" className="input input-bordered" required/>
                </div>

              

                <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>

                
                <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input type="password" placeholder="password" name="password"  className="input input-bordered"required />
                <label className="label">
                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
                </div>
                <div className="form-control mt-6">
                <button className="btn btn-primary">register</button>
                </div>
            </form>
                
                <p className="mx-8">Already have Account ? please 
            <Link to="/login">
             <button className="btn btn-link">Login</button>
            </Link> </p>
            </div>
        </div>
        </div>
    );
};

export default Register;