import { useState } from "react";
import ServiceCard from "./ServiceCard";
import { useEffect } from "react";
import { Link } from "react-router-dom";



const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])

    return (
        <div>
<div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mt-14">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Core Services</p>
                <h1 className="text-3xl font-semibold dark:text-white">Our Core Services</h1>
                <p className="text-xs dark:text-white">Discover the heart of our green haven from expert garden design and care, we nurture your outdoor space with passion and precision. Explore a spectrum of services that cultivate the beauty of nature right at your doorstep.</p>
            </div>

            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 lg:mx-40 md:mx-10 mx-5 gap-10 mt-14">
                {
                    services?.slice(0, 4).map(service => <ServiceCard 
                    key={service._id}
                    service={service}
                    ></ServiceCard>)
                }
            </div>
            <Link to='/services'>
            <button className="bg-[#05ac39] text-white flex justify-center mx-auto mt-14 text-sm rounded-full px-6 py-3 hover:bg-gray-300 hover:text-black">See All Services</button>
            </Link>
        </div>
    );
};

export default Services;