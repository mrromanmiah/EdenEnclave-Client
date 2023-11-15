import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {
    const { user, signOutUser } = useContext(AuthContext)
    const [mode, setMode] = useState("light")

    function changeTheme() {
        const html = document.documentElement
        if (mode === "light") {
            html.classList.remove("light")
            html.classList.add("dark")
            setMode("dark")
            localStorage.setItem("mode", "dark")
        }
        else {
            html.classList.remove("dark")
            html.classList.add("light")
            setMode("light")
            localStorage.setItem("mode", "light")
        }
    }

    useEffect(() => {
        const currentMode = localStorage.getItem("mode") || "light"
        setMode(currentMode)
        document.documentElement.classList.add(currentMode)
    }, [])


    document.addEventListener('click', function (event) {
        const dropdown = document.querySelector('.dropdown');
        if (dropdown && !dropdown.contains(event.target)) {
            dropdown.removeAttribute('open');
        }
    });

    const closeDropdown = () => {
        const dropdown = document.querySelector('.dropdown');
        dropdown.removeAttribute('open');
    };

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                Swal.fire(
                    'Good job!',
                    'Successfully logged out',
                    'success'
                )
            })
            .catch(error => {
                console.error(error);
            })
    }


    return (
        <div>

            <nav className="bg-white  dark:bg-[#00160c] lg:px-14 md:px-10 px-3">
                <div className="lg:flex md:flex justify-between items-center mx-auto p-4 lg:space-y-0 md:space-y-0 space-y-3">
                    <a href="/" className="flex items-center">
                        <img src="https://i.ibb.co/bK8WP9x/favicon.png" className="h-12 mr-3" alt="EdenEnclave Logo" />
                        <div>
                        <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eden<span className='text-[#05ac39]'>Enclave</span></h1>
                        <p className='text-xs tracking-wider text-gray-400 dark:text-gray-400'>ELEVATE YOUR GREENERY</p>
                        </div>
                    </a>
                    <div className="flex items-center gap-4">
                        {
                            user ? <div className='flex items-center gap-4'>
                            <div className="relative">
                                <img className="w-10 h-10 rounded-full" src={user.photoURL} alt="" />
                                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-[#05ac39] border-2 border-white dark:border-gray-800 rounded-full"></span>
                            </div>
                            <div>
                                <p className='text-xs font-bold dark:text-white'>{user.displayName}</p>
                            </div>
                            <button onClick={handleSignOut} className="bg-[#05ac39] text-white lg:text-sm md:text-sm text-xs font-bold rounded-full px-4 py-2  hover:bg-gray-300 hover:text-black fon">Logout</button>
                        </div>
                        :
                        <div>
                        <Link to='/login'><button className="bg-[#05ac39] text-white lg:text-sm md:text-sm text-xs font-bold rounded-full px-4 py-2  hover:bg-gray-300 hover:text-black ">Login</button></Link>
                        </div>
                        }
                        <div className='flex items-center gap-3'>
                            
                            <div>
                                <button onClick={changeTheme} className="bg-[#05ac39] text-white dark:bg-white dark:text-black px-2 py-2 rounded-full font-medium">
                                {
                                    mode === "dark" ? <BsFillSunFill></BsFillSunFill> : <BsFillMoonFill></BsFillMoonFill>
                                }
                            </button>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <nav className="bg-gray-100 dark:bg-[#003c20] lg:px-14 md:px-10 px-3">
                <div className="max-w-screen-xl px-4 py-3 mx-auto">
                    <div className="flex items-center">
                        <ul className="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#05ac39] underline dark:text-[#05ac39]" : "hover:text-[#05ac39] hover:underline dark:text-white"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/about"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#05ac39] underline dark:text-[#05ac39]" : "hover:text-[#05ac39] hover:underline dark:text-white"
                                    }
                                >
                                    About
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/services"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "text-[#05ac39] underline dark:text-[#05ac39]" : "hover:text-[#05ac39] hover:underline dark:text-white"
                                    }
                                >
                                    Services
                                </NavLink>
                            </li>
                            { user &&
                                <>
                                <li>
                                <details className="dropdown dark:text-white">
                                    <summary className="list-none cursor-pointer flex items-center hover:text-[#05ac39]">
                                        Dashboard<RiArrowDropDownLine className='text-lg'></RiArrowDropDownLine>
                                    </summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[10] bg-base-100 rounded-md w-52 dark:bg-gray-700 origin-left right-0 left-auto">
                                        <li>
                                            <NavLink to={`/myServices/${user.email}`} className='dark:hover:text-[#05ac39]' onClick={closeDropdown}>
                                                My Services
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink to="/mySchedule" className='dark:hover:text-[#05ac39]' onClick={closeDropdown}>
                                                My Schedule
                                            </NavLink>
                                        </li>
                                        <hr className='my-2' />
                                        <li>
                                            <NavLink to="/addService" className='text-[#05ac39] dark:hover:text-white' onClick={closeDropdown}>
                                                Add Service
                                            </NavLink>
                                        </li>
                                    </ul>
                                </details>
                            </li>
                                </>
                            }
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;