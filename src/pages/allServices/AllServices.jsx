import { useEffect } from "react";
import { useState } from "react";
import AllServicesCard from "./AllServicesCard";


const AllServices = () => {

    const [allServices, setAllServices] = useState([])
    const [dataLength, setDataLength] = useState(6);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setAllServices(data))
    }, [])


    return (
        <div className="mb-14">
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mt-14">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Services</p>
                <h1 className="text-3xl font-semibold dark:text-white">Our All Services</h1>
                <p className="text-xs dark:text-white">Explore the essence of our verdant oasis through expert garden design and care. Our passion and precision nurture your outdoor space. Dive into a spectrum of services cultivating nature's beauty at your doorstep.</p>
            </div>

            <div className="flex justify-center mx-auto mt-14">
                <input className="rounded-full text-center border-[#05ac39] border-2" type="search" name="search" placeholder="Search by Name" id="" />
            </div>

            <div className="grid grid-cols-1 lg:mx-40 md:mx-10 mx-5 gap-10 mt-7">
                {
                    allServices?.slice(0, dataLength).map(allService => <AllServicesCard key={allService._id}
                        allService={allService}></AllServicesCard>)
                }
            </div>

            {allServices.length > 6 && dataLength < allServices.length && (
                <div>
                    <button onClick={() => setDataLength(allServices.length)} className="bg-[#05ac39] text-white flex justify-center mx-auto my-14 text-sm rounded-full px-6 py-3 hover:bg-gray-300 hover:text-black">See More</button>
                </div>
            )}
        </div>
    );
};

export default AllServices;