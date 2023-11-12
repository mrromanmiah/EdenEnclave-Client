

const ServiceCard = ({ service }) => {
    const {
        ServiceImage,
        ServiceName,
        ServicePrice,
        ServiceDescription,
        ServiceProviderImage,
        ServiceProviderName
    } = service || {};
    return (

        <div className="shadow-2xl dark:shadow-2xl dark:shadow-[#05ac39] rounded-3xl overflow-hidden pb-2">

            <div>
                <img src={ServiceImage} alt="" />
            </div>

            <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img className="w-10 h-10 rounded-full" src={ServiceProviderImage} alt="" />
                        <h3 className="text-gray-500 font-semibold dark:text-white">{ServiceProviderName}</h3>
                    </div>
                    <h3 className="text-2xl font-bold dark:text-white">${ServicePrice}.00</h3>
                </div>

                <div className="space-y-3 pb-3">
                    <h1 className="text-2xl text-[#05ac39] font-semibold">{ServiceName}</h1>
                    <p className="text-gray-500 text-sm dark:text-white mb-4">{ServiceDescription}</p>
                </div>
                <button className="bg-[#05ac39] text-white w-full text-sm rounded-xl lg:px-6 md:px-4 px-2 lg:py-3 md:py-2 py-1 hover:bg-gray-300 hover:text-black mt-4">Details</button>
            </div>
        </div>
    );
};

export default ServiceCard;