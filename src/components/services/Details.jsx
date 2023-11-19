import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useEffect } from "react";
import OtherServices from "./OtherServices";

const Details = () => {
    const { user } = useContext(AuthContext)
    const { id } = useParams();
    const details = useLoaderData();
    const [otherServices, setAOtherServices] = useState([])

    useEffect(() => {
        fetch(`https://eden-enclave-server.vercel.app/otherServices?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setAOtherServices(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [user.email]);

    document.title = "EdenEnclave | Details";
    return (
        <div>
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mt-14">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Details</p>
                <h1 className="text-3xl font-semibold dark:text-white">About This Service</h1>
                <p className="text-xs dark:text-white">Elevate your outdoor spaces with EdenEnclave. Our skilled team offers tailored gardening services, from meticulous lawn care to custom designs. Experience the joy of a vibrant garden effortlessly with us.</p>
            </div>
            <div className="lg:mx-20 md:mx-10 mx-5 my-14">
                <DetailsCard details={details}></DetailsCard>
            </div>

            <div className="lg:px-20 md:px-10 px-5 pb-16">
                {otherServices && otherServices.length > 0 && (
                    <div className="pb-10 space-y-3">
                        <h1 className="text-2xl font-semibold dark:text-white">
                            Other Services
                        </h1>
                        <hr className="border-2 border-[#05ac39]" />
                    </div>
                )}
                <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6">
                    {otherServices?.map((service) => (
                        <OtherServices key={service._id} service={service}></OtherServices>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Details;