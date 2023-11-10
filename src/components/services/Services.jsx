import ServiceCard from "./ServiceCard";


const Services = () => {
    return (
        <div>
<div className="space-y-2 text-center w-1/2 flex flex-col justify-center mx-auto mt-14">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Core Services</p>
                <h1 className="text-3xl font-semibold dark:text-white">Our Core Services</h1>
                <p className="text-xs dark:text-white">Discover the heart of our green haven from expert garden design and care, we nurture your outdoor space with passion and precision. Explore a spectrum of services that cultivate the beauty of nature right at your doorstep.</p>
            </div>

            <div>
                <ServiceCard></ServiceCard>
            </div>
        </div>
    );
};

export default Services;