// import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
// import Swal from "sweetalert2";


const MyServicesCard = ({ myServices}) => {
    // const [localReset, setLocalReset] = useState(setReset);

    const { 
        ServiceImage, 
        ServiceName, 
        ServiceDescription, 
        ServiceProviderImage,
        ServiceProviderName, 
        ServiceProviderLocation, 
        ServicePrice } = myServices || {};


        // const handleDelete = email => {
        //     console.log(email);
        //     Swal.fire({
        //         title: 'Are you sure?',
        //         text: "You won't be able to revert this!",
        //         icon: 'warning',
        //         showCancelButton: true,
        //         confirmButtonColor: '#3085d6',
        //         cancelButtonColor: '#d33',
        //         confirmButtonText: 'Yes, delete it!'
        //     }).then((result) => {
        //         if (result.isConfirmed) {
        //             fetch(`http://localhost:5000/myServices/${email}`, {
        //                 method: 'DELETE'
        //             })
        //                 .then(res => res.json())
        //                 .then(data => {
        //                     console.log(data);
        //                     if (data.deletedCount > 0) {
        //                         Swal.fire(
        //                             'Deleted!',
        //                             'Your service has been deleted.',
        //                             'success'
        //                         )
                                
        //                             const remaining = localReset.filter(del => del.email !== email);
        //                             setLocalReset(remaining);
        //                             setReset(remaining);                          
        //                     }
        //                 })
        //         }
        //     })
        // };



    return (
        <div>
            <div className="lg:flex items-center gap-8 p-8 border-2 rounded-3xl shadow-2xl dark:shadow-2xl dark:shadow-[#05ac39] overflow-hidden">
            <img className="lg:w-1/2 rounded-3xl overflow-hidden" src={ServiceImage} alt="" />
            <div className="lg:w-1/2 lg:mt-0 md:mt-6 mt-6 space-y-4">
                <h1 className="text-[#05ac39] font-semibold text-2xl">{ServiceName}</h1>
                <p className="text-sm text-justify dark:text-white">{ServiceDescription}</p>
                <div className="flex items-center gap-2">
                    <img className="w-10 h-10 rounded-full" src={ServiceProviderImage} alt="" />
                    <h3 className="text-gray-500 font-semibold dark:text-white">{ServiceProviderName}</h3>
                </div>
                <div className="flex items-center justify-between text-gray-500 font-semibold dark:text-white">
                    <p className="flex items-center gap-2"><FaLocationDot></FaLocationDot> {ServiceProviderLocation}</p>
                    <p className="flex items-center gap-2"><ImPriceTag></ImPriceTag> ${ServicePrice}.00</p>
                </div>
                
                <div className="flex gap-4 justify-between mx-auto">
                <button className="bg-[#05ac39] text-white w-full text-sm rounded-xl px-6 py-2 hover:bg-gray-300 hover:text-black mt-4">Edit</button>
                <button  className="bg-[#05ac39] text-white w-full text-sm rounded-xl px-6 py-2 hover:bg-gray-300 hover:text-black mt-4">Delete</button>
                </div>
                

                
            </div>
        </div>
        </div>
    );
};

export default MyServicesCard;


// onClick={() => handleDelete(_id)}