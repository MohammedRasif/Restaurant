import { Link, NavLink } from "react-router-dom"
import img from "../../img/Removebg-preview.png"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const NavBar = () => {
    const { user,logOut }=useContext(AuthContext)
    const navLinks = 
    <>
    <li> <NavLink to="/">Home</NavLink> </li>
    {
        user?.email ? <>
        <li> <NavLink to="/booking">Booking Now </NavLink></li>
    
    <li> <NavLink to="/Mylist">pending</NavLink> </li>
        </>
        : <li> <NavLink to="/register">Register</NavLink> </li>
        
    }
   
    {/* <li> <NavLink to="/conform">Update</NavLink> </li> */}
    <li> <NavLink to="/contact">Contact Us</NavLink> </li>
    </>
    return (
        <div >

        <div className="navbar text-white bg-stone-700  ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <div className=" flex  font-bold">
                        <img src={img} className="h-20 ml-10" alt="" />
                    </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                  

{
                        user ?

                            <>
                                <div className="dropdown dropdown-end">
                                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10  ring ring-black rounded-full">
                                            <img className="" alt="User Image" src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul tabIndex={0} className="mt-3 z-10 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                        <li> <p>{user?.displayName}</p>
                                        </li>
                                        <li><button onClick={logOut} className="btn text-white">Logout</button></li>
                                    </ul>
                           </div>
                            </>
                            :
                            <Link to="/login"><button className='btn border-none font-inter text-white'>Login</button></Link>
                    }       

                {/* {
                    user && 
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                      <div className="w-10 rounded-full">
                        <img alt="Tailwind CSS Navbar component" src={user?.photoURL} />
                      </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                     
                      <Link to="/login"><li><a>Logout</a></li></Link>
                    </ul>
                  </div>
               
                }              */}
            </div>

            

            </div>
        




        {/* <div className="navbar text-white  ">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </div>
                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                    {navLinks}
                </ul>
                </div>
                <div className=" flex  font-bold">
                        <img src={img} className="h-20 ml-10" alt="" />
                    </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
            <Link to="/login"><button className=" btn font-bold text-2xl mr-5">Login</button></Link>
                
            </div>

            

            </div> */}
            </div>
    );
};

export default NavBar;