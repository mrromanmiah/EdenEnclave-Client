import CountUp from 'react-countup';
import { BsFillCheckCircleFill } from "react-icons/bs";

const About = () => {





    document.title = "EdenEnclave | About";
    return (
        <div>
            <div className="lg:flex items-center my-16 lg:mx-20 md:mx-10 mx-5 gap-12">

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
                        <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">About Us</p>
                        <h1 className="text-3xl font-semibold dark:text-white">Explore More About EdenEnclave</h1>
                        <p className="text-xs dark:text-white">Welcome to EdenEnclave, where our passion for greenery meets your gardening dreams. We're more than just a service-sharing agency; we're cultivators of lush landscapes and vibrant gardens. Our team of dedicated professionals is committed to bringing the beauty of nature to your doorstep. Join us in creating a greener, more vibrant world, one garden at a time.</p>

                    </div>
                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <span className="flex items-center gap-2"><BsFillCheckCircleFill className="text-[#05ac39]"></BsFillCheckCircleFill> <p className="text-xs font-medium dark:text-white">Repairing faulty wiring, fixing</p></span>
                            <span className="flex items-center gap-2"><BsFillCheckCircleFill className="text-[#05ac39]"></BsFillCheckCircleFill> <p className="text-xs font-medium dark:text-white">Fixing leaks, unclogging drains</p></span>
                            <span className="flex items-center gap-2"><BsFillCheckCircleFill className="text-[#05ac39]"></BsFillCheckCircleFill> <p className="text-xs font-medium dark:text-white">Replacing damaged shingles</p></span>
                            <span className="flex items-center gap-2"><BsFillCheckCircleFill className="text-[#05ac39]"></BsFillCheckCircleFill> <p className="text-xs font-medium dark:text-white">Providing miscellaneous repairs</p></span>

                        </div>
                        <div className="bg-gradient-to-bl from-black via-[#02250e] to-[#036424] p-6 text-center rounded-3xl">
                            <h1 className="text-3xl text-white font-semibold"><CountUp
                                end={20}
                                duration={4}
                            />+</h1>
                            <p className="text-sm text-white font-medium">Year of working experiance</p>
                        </div>
                    </div>
                    <button className="bg-[#05ac39] text-white text-sm rounded-full lg:px-6 md:px-4 px-2 lg:py-3 md:py-2 py-1 hover:bg-gray-300 hover:text-black mt-4">Contact Us</button>
                </div>
            </div>

            <div className='lg:mx-40 md:mx-10 mx-5 mb-14 space-y-10'>
                <div className='space-y-1'>
                    <h3 className="text-3xl font-semibold text-[#05ac39]">Our Vision</h3>
                    <p className="text-sm dark:text-white font-medium text-justify">In the heart of our mission lies a vision to transform every patch of land into a green oasis. We believe in the power of nature to rejuvenate, inspire, and connect.</p>
                </div>
                <div className='space-y-1'>
                    <h3 className="text-3xl font-semibold text-[#05ac39]">Meet the Green Team</h3>
                    <p className="text-sm dark:text-white font-medium text-justify">Behind every blooming garden is a dedicated team of professionals. Our horticulturists, landscapers, and gardening enthusiasts are passionate about creating landscapes that mirror your vision.</p>
                </div>
                <div className='space-y-1'>
                    <h3 className="text-3xl font-semibold text-[#05ac39]">Services We Offer</h3>
                    <p className="text-sm dark:text-white font-medium text-justify">From meticulous lawn care to exotic plant installations, our services cater to every aspect of garden enrichment. Explore our range of offerings designed to bring your garden aspirations to life.</p>
                </div>
                <div className='space-y-1'>
                    <h3 className="text-3xl font-semibold text-[#05ac39]">Client Testimonials</h3>
                    <p className="text-sm dark:text-white font-medium text-justify">Don't just take our word for it – hear what our clients have to say. Discover the stories of transformed lawns and flourishing flower beds that stand testament to the EdenEnclave touch.</p>
                </div>
                <div className='space-y-1'>
                    <h3 className="text-3xl font-semibold text-[#05ac39]">Green Tips and Tricks</h3>
                    <p className="text-sm dark:text-white font-medium text-justify">Knowledge is the key to a thriving garden. Explore our blog section for expert advice, seasonal tips, and DIY projects that will empower you to become a green thumb in your own right.</p>
                </div>
                <div className='space-y-1'>
                    <h3 className="text-3xl font-semibold text-[#05ac39]">Join the EdenEnclave Community</h3>
                    <p className="text-sm dark:text-white font-medium text-justify">Connect with fellow gardening enthusiasts, share your success stories, and seek advice from our community. Together, let's foster a culture of green living.</p>
                </div>
                <div className='space-y-1'>
                    <h3 className="text-3xl font-semibold text-[#05ac39]">Contact Us</h3>
                    <p className="text-sm dark:text-white font-medium text-justify">Ready to embark on a journey of botanical bliss? Reach out to us for personalized consultations, quotes, or simply to share your green aspirations. Your garden, our expertise – a partnership that blossoms.</p>
                </div>

                <p className="text-lg dark:text-white font-bold text-justify">Eden<span className='text-[#05ac39]'>Enclave</span> – Where Gardens Grow, Dreams Flourish.</p>
            </div>
        </div>

    );
};

export default About;