import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";
import OtherServices from "./OtherServices";
import { useState } from "react";
import { useEffect } from "react";


const Details = () => {
const {id, ServiceProviderEmail} = useParams();
const details = useLoaderData();

const [others, setOthers] = useState()

useEffect(() => {
    fetch(`http://localhost:5000/services/${ServiceProviderEmail}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data); // Check the console log to see the structure of the response
        setOthers(data); // Set the state with the response data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [ServiceProviderEmail]);

    



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
            <div>
        {others?.map((ServiceProviderEmail) => (
          <OtherServices key={ServiceProviderEmail._id} ServiceProviderEmail={ServiceProviderEmail} />
        ))}
      </div>
        </div>

        <div>
        {others?.map((ServiceProviderEmail) => (
          <OtherServices key={ServiceProviderEmail._id} ServiceProviderEmail={ServiceProviderEmail} />
        ))}
      </div>

        </div>
    );
};

export default Details;