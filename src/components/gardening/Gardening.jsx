

import CountUp from 'react-countup';
import { BsFillCheckCircleFill } from "react-icons/bs";


const Gardening = () => {
    return (
        <div className="lg:flex items-center mt-16 lg:mx-20 md:mx-20 mx-5 gap-12">

            <div className="grid grid-cols-2 gap-3 lg:w-1/2">
                <div className="row-span-2 relative overflow-hidden group rounded-l-3xl">
                    <img src="https://i.ibb.co/x1gsyKG/young-handsome-cheerful-gardener-smiling-taking-care-flowers-1-1.jpg" alt="Image 1" className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-110 rounded-l-3xl" />
                </div>
                <div className="relative overflow-hidden group rounded-r-3xl rounded-bl-3xl">
                    <img src="https://i.ibb.co/cN1hZGt/beautiful-redhead-smiling-florist-apron-working-with-flowers-young-lady-standing-with-big-flower-han.jpg" alt="Image 2" className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-110 rounded-r-3xl rounded-bl-3xl" />
                </div>
                <div className="relative overflow-hidden group rounded-r-3xl rounded-tl-3xl">
                    <img src="https://i.ibb.co/2SLwrFj/plants-gardening-tools-close-up-1.jpg" alt="Image 3" className="w-full h-full object-cover transition-transform transform scale-100 group-hover:scale-110 rounded-r-3xl rounded-tl-3xl" />
                </div>
            </div>


            <div className="lg:w-1/2 space-y-4">
                <div className="space-y-4">
                    <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5" data-aos="fade-down">About Gardening</p>
                    <h1 className="text-3xl font-semibold dark:text-white" data-aos="fade-up">Everything We to Know About Gardening</h1>
                    <p className="text-xs dark:text-white" data-aos="zoom-in">Gardening is the practice of cultivating and nurturing plants, often outdoor spaces like gardens, yards, or even balconies. vegetables, or flowers. here produce their own fruits, vegetables some key aspects of gardening</p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="space-y-2">
                        <span className="flex items-center gap-2" ><BsFillCheckCircleFill className="text-[#05ac39]"></BsFillCheckCircleFill> <p className="text-xs font-medium dark:text-white" data-aos="fade-up"
     data-aos-duration="500">Repairing faulty wiring, fixing</p></span>

                        <span className="flex items-center gap-2"><BsFillCheckCircleFill className="text-[#05ac39]"></BsFillCheckCircleFill> <p className="text-xs font-medium dark:text-white" data-aos="fade-up"
     data-aos-duration="1000">Fixing leaks, unclogging drains</p></span>

                        <span className="flex items-center gap-2"><BsFillCheckCircleFill className="text-[#05ac39]"></BsFillCheckCircleFill> <p className="text-xs font-medium dark:text-white" data-aos="fade-up"
     data-aos-duration="1500">Replacing damaged shingles</p></span>

                        <span className="flex items-center gap-2"><BsFillCheckCircleFill className="text-[#05ac39]"></BsFillCheckCircleFill> <p className="text-xs font-medium dark:text-white" data-aos="fade-up"
     data-aos-duration="2000">Providing miscellaneous repairs</p></span>

                    </div>
                    <div className="bg-gradient-to-bl from-black via-[#02250e] to-[#036424] p-6 text-center rounded-3xl" data-aos="zoom-in">
                        <h1 className="text-3xl text-white font-semibold"><CountUp
                            end={20}
                            duration={4}
                        />+</h1>
                        <p className="text-sm text-white font-medium">Year of working experiance</p>
                    </div>
                </div>
                <button className="bg-[#05ac39] text-white text-sm rounded-full lg:px-6 md:px-4 px-2 lg:py-3 md:py-2 py-1 hover:bg-gray-300 hover:text-black mt-4" data-aos="fade-up"
     data-aos-duration="2500">Contact Us</button>
            </div>
        </div>
    );
};

export default Gardening;