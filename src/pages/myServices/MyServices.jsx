import { useLoaderData, useParams } from "react-router-dom";
import { useState } from "react";
import MyServicesCard from "./MyServicesCard";


const MyServices = () => {
const serviceData = useLoaderData();
const { email } = useParams();



    return (
        <div>
            {serviceData.length > 0 ? (
                    serviceData.map((myServices) => (
                        // <Cart key={cart._id} cart={cart} reset={reset} setReset={setReset}></Cart>
                        <MyServicesCard key={myServices._id} myServices={myServices}></MyServicesCard>
                    ))
                ) : (
                    <div className="space-y-4">
                        <img className="w-32 flex justify-center mx-auto" src="https://i.ibb.co/jGFMCF0/cart.png" alt="" />
                        <p className="text-xl font-bold dark:text-white">Your Cart is Empty</p>
                    </div>
                )}
        </div>
    );
};

export default MyServices;