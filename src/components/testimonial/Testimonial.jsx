import { BiSolidQuoteLeft } from "react-icons/bi";

const Testimonial = () => {
    return (
        <div className='bg-[url(https://i.ibb.co/qmMZbm2/Asset-2-100.jpg)] bg-cover bg-no-repeat rounded-3xl overflow-hidden lg:mx-40 md:mx-10 mx-5 mt-14'>
            <div className="items-center lg:pt-10 md:pt-10 pt-7 lg:pb-32 md:pb-24 pb-16 lg:px-20 md:px-20 px-10">
                <div className="space-y-2">
                    <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Testimonials</p>
                    <h1 className="text-3xl text-white font-semibold dark:text-white">Our Client Reviews</h1>
                    <div className="lg:w-1/2 md:w-1/2 w-full">
                        <swiper-container>
                            <swiper-slide><div className="p-5">
                                <BiSolidQuoteLeft className="text-5xl text-white mb-5"></BiSolidQuoteLeft>
                                <p className="text-white  w-full text-sm italic">EdenEnclave turned my yard into an exceptional garden. Their attention to detail and personalized touch brought life to my space. Thanks, EdenEnclave!</p>
                                <div className=" flex items-center gap-4 pt-4">
                                    <img className="h-12 w-12 rounded-full border-2 border-white" src="https://i.ibb.co/2j2rWXb/pleased-young-caucasian-superhero-girl-standing-with-closed-posture-smiling-isolated-green-wall-with.jpg" alt="" />

                                    <div>
                                        <h3 className="text-[#05ac39] font-medium">Grace Emily</h3>
                                        <p className="text-white text-xs font-light">Nature Enthusiast</p>
                                    </div>
                                </div>
                            </div></swiper-slide>
                            <swiper-slide><div className="p-5">
                                <BiSolidQuoteLeft className="text-5xl text-white mb-5"></BiSolidQuoteLeft>
                                <p className="text-white  w-full text-sm italic">EdenEnclave consistently surpasses my landscaping expectations. Their creative designs and expert maintenance elevated our outdoor spaces at Grand Horizon Hotel. Highly recommended!</p>
                                <div className=" flex items-center gap-4 pt-4">
                                    <img className="h-12 w-12 rounded-full border-2 border-white" src="https://i.ibb.co/6YH0W72/young-gardener-jumpsuit-hat-holding-shovel-potted-plant-looking-front-smiling-with-happy-face-standi.jpg" alt="" />

                                    <div>
                                        <h3 className="text-[#05ac39] font-medium">David Bloomington</h3>
                                        <p className="text-white text-xs font-light">Head of Landscaping, Grand Horizon Hotel</p>
                                    </div>
                                </div>
                            </div></swiper-slide>
                            <swiper-slide><div className="p-5">
                                <BiSolidQuoteLeft className="text-5xl text-white mb-5"></BiSolidQuoteLeft>
                                <p className="text-white  w-full text-sm italic">EdenEnclave made gardening a joy! Their skilled and friendly team transformed my home garden into a beautiful, charming space. Kudos to the entire team at EdenEnclave!</p>
                                <div className=" flex items-center gap-4 pt-4">
                                    <img className="h-12 w-12 rounded-full border-2 border-white" src="https://i.ibb.co/LxkgqKS/smiling-young-pretty-woman-standing-with-closed-posture-looking-front-isolated-green-wall-with-copy.jpg" alt="" />

                                    <div>
                                        <h3 className="text-[#05ac39] font-medium">Sarah Thompson</h3>
                                        <p className="text-white text-xs font-light">Homeowner</p>
                                    </div>
                                </div>
                            </div></swiper-slide>
                            <swiper-slide><div className="p-5">
                                <BiSolidQuoteLeft className="text-5xl text-white mb-5"></BiSolidQuoteLeft>
                                <p className="text-white  w-full text-sm italic">In my role as a horticulturist, EdenEnclave's commitment to sustainability stands out. Their knowledge and dedication to eco-friendly practices make them the perfect choice. </p>
                                <div className=" flex items-center gap-4 pt-4">
                                    <img className="h-12 w-12 rounded-full border-2 border-white" src="https://i.ibb.co/wcv0JFh/happy-bearded-man-brown-suit-wearing-glasses-looking-smiling-cheerfully.jpg" alt="" />

                                    <div>
                                        <h3 className="text-[#05ac39] font-medium">Dr. Michael Robert</h3>
                                        <p className="text-white text-xs font-light">Horticulturist</p>
                                    </div>
                                </div>
                            </div></swiper-slide>
                        </swiper-container>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Testimonial;