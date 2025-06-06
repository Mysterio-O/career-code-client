import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../contexts/AuthContext/AuthContext';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const links = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/clock'><li>Clock</li></NavLink>
        {
            user && <NavLink to='/applications'><li>My Applications</li></NavLink>
        }
        {
            user && <NavLink to='/addJob'><li>Add Job</li></NavLink>
        }
        {
            user && <NavLink to='/myJobs'><li>My Jobs</li></NavLink>
        }
    </>

    const handleLogOut = () => {
        logOutUser().then(() => {
            console.log('user logged out successfully');
            navigate('/login')
        }).catch(err => {
            console.error(err.code, err.message);
        })
    }

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 space-x-2">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handleLogOut} className='btn'>LogOut</button>
                        : <div className=' space-x-2'>
                            <NavLink
                                className='btn'
                                to='/register'>Register</NavLink>
                            <NavLink
                                className='btn'
                                to='/login'>Login</NavLink>
                        </div>
                }
            </div>
        </div>
    );
};

export default Navbar;