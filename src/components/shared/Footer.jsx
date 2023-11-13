import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="divide-y bg-black text-white">
            <div className="lg:px-20 md:px-10 px-5 container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <a href="/" className="flex items-center">
                        <img src="https://i.ibb.co/bK8WP9x/favicon.png" className="h-12 mr-3" alt="EdenEnclave Logo" />
                        <div>
                            <h1 className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eden<span className='text-[#05ac39]'>Enclave</span></h1>
                            <p className='text-xs tracking-wider text-gray-400 dark:text-gray-400'>ELEVATE YOUR GREENERY</p>
                        </div>
                    </a>
                    <p className="text-xs font-light mt-4 lg:w-64">Your journey to a greener world starts here, rooted in connection and blooming with collaborative care.</p>
                    <h3 className="mt-4 mb-2 font-semibold text-[#05ac39]">Social Media</h3>
                    <div className="flex gap-2">
                        <button className="rounded-full bg-[#05ac39] p-2 hover:bg-white hover:text-[#05ac39] text-xs"><FaFacebookF></FaFacebookF></button>
                        <button className="rounded-full bg-[#05ac39] p-2 hover:bg-white hover:text-[#05ac39] text-xs"><FaInstagram></FaInstagram></button>
                        <button className="rounded-full bg-[#05ac39] p-2 hover:bg-white hover:text-[#05ac39] text-xs"><FaXTwitter></FaXTwitter></button>
                        <button className="rounded-full bg-[#05ac39] p-2 hover:bg-white hover:text-[#05ac39] text-xs"><FaLinkedinIn></FaLinkedinIn></button>
                    </div>
                </div>


                <div className="grid lg:grid-cols-4 md:grid-cols-4 text-sm gap-x-3 gap-y-8 lg:w-2/3 grid-cols-2">
                    <div className="space-y-3">
                        <h3 className="font-semibold text-[#05ac39]">About Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a className="text-xs hover:text-[#05ac39]" rel="noopener noreferrer" href="#">About Us</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#05ac39]" rel="noopener noreferrer" href="#">Our Team</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#05ac39]" rel="noopener noreferrer" href="#">Pricing Plan</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-[#05ac39]">Useful Information</h3>
                        <ul className="space-y-1">
                            <li>
                                <a className="text-xs hover:text-[#05ac39]" rel="noopener noreferrer" href="#">Contact Us</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#05ac39]" rel="noopener noreferrer" href="#">FAQ</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#05ac39]" rel="noopener noreferrer" href="#">Cost Calculator</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="font-semibold text-[#05ac39]">Additional Links</h3>
                        <ul className="space-y-1">
                            <li>
                                <a className="text-xs hover:text-[#05ac39]" rel="noopener noreferrer" href="#">Services</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#05ac39]" rel="noopener noreferrer" href="#">Our Projects</a>
                            </li>
                            <li>
                                <a className="text-xs hover:text-[#05ac39]" rel="noopener noreferrer" href="#">Work Process</a>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-6">

                        <div className="flex flex-col justify-start">
                            <h4 className="font-semibold text-[#05ac39]">Download APP</h4>
                            <img className="w-28" src="https://i.ibb.co/z4qBFWY/pngwing-com-copy.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:px-20 md:px-10 px-5  flex justify-between py-6 lg:gap-0 md:gap-0 gap-6 text-xs dark:text-gray-400 bg-[#00160c]">
                <p>© 2023 EdenEnclave. Designed By Roman</p>
                <ul className="flex gap-6">
                    <li className="cursor-pointer hover:text-[#05ac39]">Site Index</li>
                    <li className="cursor-pointer hover:text-[#05ac39]">Privacy Policy</li>
                    <li className="cursor-pointer hover:text-[#05ac39]">Terms of Use</li>
                </ul>
            </div>
        </footer>
    );
};

export default Footer;