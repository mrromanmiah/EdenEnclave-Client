import { MdMore } from "react-icons/md";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const {
    _id,
    ServiceImage,
    ServiceName,
    ServicePrice,
    ServiceDescription,
    ServiceProviderImage,
    ServiceProviderName,
  } = service || {};

  return (
    <div
      className="shadow-2xl dark:shadow-2xl dark:shadow-[#05ac39] rounded-3xl overflow-hidden pb-2"
      data-aos="fade-up"
    >
      <div className="relative group">
        <img
          src={ServiceImage}
          alt=""
          className="transition-transform transform scale-100 group-hover:scale-105"
        />
      </div>

      <div className="p-5 space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img
              className="w-10 h-10 rounded-full"
              src={ServiceProviderImage}
              alt=""
            />
            <h3 className="text-gray-500 font-semibold dark:text-white">
              {ServiceProviderName}
            </h3>
          </div>
          <h3 className="text-2xl font-bold dark:text-white">
            ${ServicePrice}.00
          </h3>
        </div>

        <div className="space-y-3 pb-3">
          <h1 className="text-2xl text-[#05ac39] font-semibold">
            {ServiceName}
          </h1>
          <p className="text-gray-500 text-sm dark:text-white mb-4">
            {ServiceDescription}
          </p>
        </div>
        <Link to={`/details/${_id}`}>
          <button className="bg-[#05ac39] text-white w-full text-sm rounded-xl px-6 py-3 hover:bg-gray-300 hover:text-black mt-4 flex items-center gap-2 justify-center" data-aos="zoom-in">
            Details <MdMore />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
