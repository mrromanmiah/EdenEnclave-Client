import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { Link } from "react-router-dom";

const DetailsCard = ({ details }) => {

    const { ServiceImage,
        ServiceName,
        ServiceDescription,
        ServicePrice,
        ServiceProviderImage,
        ServiceProviderName,
        ServiceProviderLocation,
        ShortDescription } = details || {};


    return (
        <div className="lg:flex md:flex flex-none gap-6">
            <div className="lg:w-1/3 md:w-1/2 w-full lg:mb-0 md:mb-0 mb-6"> 
                <div className="flex items-center gap-3  p-5 border-2 rounded-3xl dark:text-white">
                    <img className="w-32 rounded-lg overflow-hidden" src={ServiceProviderImage} alt="" />
                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold">{ServiceProviderName}</h3>
                        <span className="flex items-center gap-1 text-gray-500 dark:text-white"><FaLocationDot></FaLocationDot> <p className="text-sm font-medium">{ServiceProviderLocation}</p></span>
                        <p className="text-xs text-gray-500 dark:text-white">{ShortDescription}</p>
                    </div>
                </div>
            </div>


            <div className="lg:w-2/3 md:w-2/3 w-full">
                <div className="lg:flex items-center gap-8 p-8 border-2 rounded-3xl shadow-2xl dark:shadow-2xl dark:shadow-[#05ac39] overflow-hidden">
                    <img className="lg:w-1/2 rounded-3xl overflow-hidden" src={ServiceImage} alt="" />
                    <div className="lg:w-1/2 lg:mt-0 md:mt-6 mt-6 space-y-4">
                        <h1 className="text-[#05ac39] font-semibold text-2xl">{ServiceName}</h1>
                        <p className="text-sm text-justify dark:text-white">{ServiceDescription}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img className="w-10 h-10 rounded-full" src={ServiceProviderImage} alt="" />
                                <h3 className="text-gray-500 font-semibold dark:text-white">{ServiceProviderName}</h3>
                            </div>
                            <p className="flex items-center gap-2 text-gray-500 text-xl font-semibold dark:text-white"><ImPriceTag></ImPriceTag> ${ServicePrice}.00</p>
                        </div>
                        <Link>
                            <button className="bg-[#05ac39] text-white w-full text-sm rounded-xl px-6 py-2 hover:bg-gray-300 hover:text-black mt-4 flex items-center gap-2 justify-center">Book Now <BsFillBookmarkPlusFill></BsFillBookmarkPlusFill> </button>
                        </Link>
                    </div>
                </div>
            </div>














        </div>
    );
};

export default DetailsCard;