import { useContext } from "react";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";

const DetailsCard = ({ details }) => {
    const { user } = useContext(AuthContext)
    const { ServiceImage,
        ServiceName,
        ServiceDescription,
        ServicePrice,
        ServiceProviderImage,
        ServiceProviderName,
        ServiceProviderLocation,
        ServiceProviderEmail,
        ShortDescription } = details || {};

    const handleBookings = event => {
        event.preventDefault();
        const form = event.target;

        const ServiceName = form.ServiceName.value;
        const ServiceImage = form.ServiceImage.value;
        const ServiceProviderEmail = form.ServiceProviderEmail.value;
        const email = form.email.value;
        const ServicePrice = form.ServicePrice.value;
        const ServiceDate = form.ServiceDate.value;
        const Instructions = form.Instructions.value;

        const bookedService = { ServiceName, ServiceImage, ServiceProviderEmail, email, ServicePrice, ServiceDate, Instructions }

        fetch('https://eden-enclave-server.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You have booked the service successfully!',
                        'success'
                    )
                }
            })



        const modal = document.getElementById('my_modal_3');
        modal.close();

    }





    return (
        <div className="lg:flex md:flex flex-none gap-6">
            <div className="lg:w-1/3 md:w-1/2 w-full lg:mb-0 md:mb-0 mb-6">
                <div className="flex items-center gap-3  p-5 border-2 rounded-3xl dark:text-white">
                    <img className="w-32 rounded-lg overflow-hidden" src={ServiceProviderImage} alt="" />
                    <div className="space-y-1">
                        <h3 className="text-xl font-semibold">{ServiceProviderName}</h3>
                        <span className="flex items-center gap-1 text-gray-500 dark:text-white"><FaLocationDot></FaLocationDot> <p className="text-sm font-medium">{ServiceProviderLocation}</p></span>
                        <p className="text-xs text-gray-500 dark:text-white">{ShortDescription}</p>
                    </div>
                </div>
            </div>



            <div method="dialog" className="lg:w-2/3 md:w-2/3 w-full">
                <div className="lg:flex items-center gap-8 p-8 border-2 rounded-3xl shadow-2xl dark:shadow-2xl dark:shadow-[#05ac39] overflow-hidden">
                    <img className="lg:w-1/2 rounded-3xl overflow-hidden" src={ServiceImage} alt="" />
                    <div className="lg:w-1/2 lg:mt-0 md:mt-6 mt-6 space-y-4">
                        <h1 className="text-[#05ac39] font-semibold text-2xl">{ServiceName}</h1>
                        <p className="text-sm text-justify dark:text-white">{ServiceDescription}</p>
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <img className="w-10 h-10 rounded-full" src={ServiceProviderImage} alt="" />
                                <h3 className="text-gray-500 font-semibold dark:text-white">{ServiceProviderName}</h3>
                            </div>
                            <p className="flex items-center gap-2 text-gray-500 text-xl font-semibold dark:text-white"><ImPriceTag></ImPriceTag> ${ServicePrice}.00</p>
                        </div>
                        <button onClick={() => document.getElementById('my_modal_3').showModal()} className="bg-[#05ac39] text-white w-full text-sm rounded-xl px-6 py-2 hover:bg-gray-300 hover:text-black mt-4 flex items-center gap-2 justify-center">Book Service <BsFillBookmarkPlusFill></BsFillBookmarkPlusFill> </button>

                        <dialog id="my_modal_3" className="modal">


                            <form onSubmit={handleBookings} className="modal-box">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                </form>
                                <h3 className="font-bold text-lg mb-2 text-[#05ac39]">Please fill in the required fields.</h3>

                                <div className="space-y-3">
                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">Service Name</p>
                                        <input className="w-full rounded-lg" type="text" name="ServiceName" id="" value={ServiceName} readOnly />
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">Service Image</p>
                                        <input className="w-full rounded-lg" type="url" name="ServiceImage" id="" value={ServiceImage} readOnly />
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">Service Provider E-mail</p>
                                        <input className="w-full rounded-lg" type="email" name="ServiceProviderEmail" id="" value={ServiceProviderEmail} readOnly />
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">User E-mail</p>
                                        <input className="w-full rounded-lg" type="email" name="email" id="" value={user.email} readOnly />
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">Service Price</p>
                                        <input className="w-full rounded-lg" type="number" name="ServicePrice" id="" value={ServicePrice} readOnly />
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">Service Taking Date</p>
                                        <input className="w-full rounded-lg border-2 border-[#05ac39]" type="date" name="ServiceDate" id="" />
                                    </div>

                                    <div className="space-y-1">
                                        <p className="text-sm font-bold">Special Instructions</p>
                                        <input className="w-full rounded-lg border-2 border-[#05ac39]" type="text" name="Instructions" id="" placeholder="Give any instruction" />
                                    </div>
                                </div>


                                <input className="modal-action bg-[#05ac39] text-white w-full text-sm rounded-xl px-6 py-2 hover:bg-gray-300 hover:text-black mt-4 flex items-center gap-2 justify-center" method="dialog" type="submit" value="Book Now" />

                            </form>
                        </dialog>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsCard;