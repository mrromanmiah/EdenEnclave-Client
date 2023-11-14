import { FaLocationDot } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { Link } from "react-router-dom";


const AllServicesCard = ({ service }) => {
    const { _id,
        ServiceImage,
        ServiceName,
        ServicePrice,
        ServiceDescription,
        ServiceProviderImage,
        ServiceProviderName,
        ServiceProviderLocation

    } = service || {};



    return (
        <div className="lg:flex items-center gap-8 p-8 border-2 rounded-3xl shadow-2xl dark:shadow-2xl dark:shadow-[#05ac39] overflow-hidden">
            <img className="lg:w-1/2 rounded-3xl overflow-hidden" src={ServiceImage} alt="" />
            <div className="lg:w-1/2 lg:mt-0 md:mt-6 mt-6 space-y-4">
                <h1 className="text-[#05ac39] font-semibold text-2xl">{ServiceName}</h1>
                <p className="text-sm text-justify dark:text-white">{ServiceDescription}</p>
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-full" src={ServiceProviderImage} alt="" />
                    <h3 className="text-gray-500 font-semibold dark:text-white">{ServiceProviderName}</h3>
                </div>
                <div className="flex items-center justify-between text-gray-500 font-semibold dark:text-white">
                    <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot> {ServiceProviderLocation}</p>
                    <p className="flex items-center gap-2"><ImPriceTag></ImPriceTag> ${ServicePrice}.00</p>
                </div>
                <Link to={`/details/${_id}`}>
                <button className="bg-[#05ac39] text-white w-full text-sm rounded-xl px-6 py-2 hover:bg-gray-300 hover:text-black mt-4">Details</button>
                </Link>

                
            </div>
        </div>
    );
};

export default AllServicesCard;