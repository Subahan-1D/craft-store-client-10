import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleSignOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    const navLinks = <div className="flex justify-center items-center font-poppins">
        <li className='text-[18px]' ><NavLink to='/'>Home</NavLink></li>
        <li className='text-[18px]'><NavLink to='/allart'>All Art & craft Items</NavLink></li>
        <li className='text-[18px]'><NavLink to='/addcraft'>Add Craft Item</NavLink></li>
        {/* <li><NavLink to='/myart'>My Art&Craft List</NavLink></li> */}
        <li className='text-[18px]'><NavLink to='/login'>Login</NavLink></li>
    </div>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex">
                    <NavLink to="/" className="btn   font-playfair-display text-3xl font-poppins"><span><img className='w-11 rounded-full' src='https://i.ibb.co/1TfrqkD/images.jpg'/></span>Spruce <span className='text-[#3eceb4]'>CRAFTS</span></NavLink>
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
                        <button onClick={handleSignOut} className="btn btn-secondary">Sign Out</button>
                        : <Link to='/login'>
                            <button className="btn btn-success">Login</button>
                        </Link>
                }
            </div>
        </div>
    );
};

export default Navbar;