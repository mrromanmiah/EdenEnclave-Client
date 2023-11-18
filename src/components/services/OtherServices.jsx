import { MdMore } from "react-icons/md";
import { Link } from "react-router-dom";



const OtherServices = ({ service }) => {

  const { _id,
    ServiceImage,
    ServiceName,
    ServiceDescription
     } = service || {};





  return (
    <div className="shadow-2xl dark:shadow-2xl dark:shadow-[#05ac39] rounded-3xl overflow-hidden p-5">

      <div>
        <img className="rounded-3xl" src={ServiceImage} alt="" />
      </div>

      <div className=" space-y-3">


        <div className="space-y-3 py-3">
          <h1 className="text-lg text-[#05ac39] font-semibold text-center">{ServiceName}</h1>
          <p className="text-gray-500 text-xs dark:text-white mb-4 text-center">
            {ServiceDescription && ServiceDescription.length > 50
              ? `${ServiceDescription.slice(0, 50)}...`
              : ServiceDescription}
          </p>
        </div>
        <Link to={`/details/${_id}`} >
          <button className="bg-[#05ac39] text-white w-full text-sm rounded-xl px-4 py-2 hover:bg-gray-300 hover:text-black mt-4 flex items-center gap-2 justify-center">Details <MdMore></MdMore></button>
        </Link>
      </div>
    </div>
  );
};

export default OtherServices;