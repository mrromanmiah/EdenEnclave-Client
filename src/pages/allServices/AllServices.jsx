import { useEffect } from "react";
import { useState } from "react";
import AllServicesCard from "./AllServicesCard";



const AllServices = () => {

    const [allServices, setAllServices] = useState([])
    const [dataLength, setDataLength] = useState(6);
    const [search, setSearch] = useState("");

    

    useEffect(() => {
        fetch('https://eden-enclave-server.vercel.app/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])

    const filteredServices = allServices.filter((service) =>
        service.ServiceName.toLowerCase().includes(search.toLowerCase())
    );


    document.title = "EdenEnclave | All Services";

    return (
        <div className="mb-14">
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mt-14">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Services</p>
                <h1 className="text-3xl font-semibold dark:text-white">Our All Services</h1>
                <p className="text-xs dark:text-white">Explore the essence of our verdant oasis through expert garden design and care. Our passion and precision nurture your outdoor space. Dive into a spectrum of services cultivating nature's beauty at your doorstep.</p>
            </div>

            <div className="flex justify-center mx-auto mt-14">
                <input className="rounded-full text-center border-[#05ac39] border-2" type="search" name="search" placeholder="Search by Name" id="" value={search}
                    onChange={(e) => setSearch(e.target.value)} />
            </div>

            <div className="grid grid-cols-1 lg:mx-40 md:mx-10 mx-5 gap-10 mt-7">
                {
                    filteredServices?.slice(0, dataLength).map(service => <AllServicesCard key={service._id}
                        service={service}></AllServicesCard>)
                }
            </div>

            {
                filteredServices.length > 6 && dataLength < filteredServices.length && (
                    <div>
                        <button onClick={() => setDataLength(filteredServices.length)} className="bg-[#05ac39] text-white flex justify-center mx-auto my-14 text-sm rounded-full px-6 py-3 hover:bg-gray-300 hover:text-black">See More</button>
                    </div>
                )}

            {
                filteredServices.length === 0 && (
                    <div>
                        <img className="w-40 flex justify-center mx-auto" src="https://i.ibb.co/ZdMSXnJ/Asset-1.png" alt="" />
                        <p className="text-[#D80032] text-center mt-4 text-xl font-semibold">No Service Found</p>
                    </div>

                )}
        </div>
    );
};

export default AllServices;