import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useEffect, useState } from "react";
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

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



    return (
        <div>

            <nav className="bg-white border-gray-200 dark:bg-gray-900 lg:px-14 md:px-10 px-3">
                <div className="lg:flex md:flex justify-between items-center mx-auto p-4 lg:space-y-0 md:space-y-0 space-y-3">
                    <a href="/" className="flex items-center">
                        <img src="https://i.ibb.co/bK8WP9x/favicon.png" className="h-8 mr-3" alt="Flowbite Logo" />
                        <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eden<span className='text-[#05ac39]'>Enclave</span></h1>
                    </a>
                    <div className="flex items-center gap-4">
                        <div className='flex items-center gap-4'>
                            <div className="relative">
                                <img className="w-8 h-8 rounded-full" src={"https://i.ibb.co/JKgdVyn/27470334-7309681.jpg"} alt="" />
                                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-[#05ac39] border-2 border-white dark:border-gray-800 rounded-full"></span>
                            </div>
                            <div>
                                <p className='text-xs font-bold dark:text-white'>Sakir Ahmed Roman</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-3'>
                            <Link to='/login'><button className="bg-[#05ac39] text-white font-bold rounded-md lg:px-4 md:px-2 px-2 lg:py-1 md:py-1 py-1 hover:bg-gray-300 hover:text-[#05ac39] ">Login</button></Link>
                            <button onClick={changeTheme} className="bg-[#05ac39] text-white dark:bg-white dark:text-black px-2 py-2 rounded-full font-medium">
                                {
                                    mode === "dark" ? <BsFillSunFill></BsFillSunFill> : <BsFillMoonFill></BsFillMoonFill>
                                }
                            </button>
                        </div>
                    </div>

                </div>
            </nav>
            <nav className="bg-gray-50 dark:bg-gray-700 lg:px-14 md:px-10 px-3">
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
                            <li>
                                <details className="dropdown ">
                                    <summary className="">Dashboard</summary>
                                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded w-52">
                                        <li><a>My Services</a></li>
                                        <li><a>My Schedule</a></li>
                                        <hr className='my-2' />
                                        <li><a className='text-[#05ac39]'>Add Service</a></li>
                                    </ul>
                                </details>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Navbar;