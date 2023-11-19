import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateService = () => {
    const update = useLoaderData();

    const {
        _id,
        ServiceName,
        ServiceImage,
        ServicePrice,
        ServiceDescription,
        ServiceProviderImage,
        ServiceProviderName,
        ServiceProviderLocation,
        ServiceProviderEmail,
        ShortDescription,
        email, 
        displayName
    } = update || {};


    const handleUpdateService = event => {
        event.preventDefault();
        const form = event.target;

        const ServiceName = form.ServiceName.value;
        const ServiceImage = form.ServiceImage.value;
        const ServicePrice = form.ServicePrice.value;
        const ServiceDescription = form.ServiceDescription.value;
        const ServiceProviderImage = form.ServiceProviderImage.value;
        const ServiceProviderName = form.ServiceProviderName.value;
        const ServiceProviderLocation = form.ServiceProviderLocation.value;
        const ServiceProviderEmail = form.ServiceProviderEmail.value;
        const ShortDescription = form.ShortDescription.value;
        const email = form.email.value;
        const displayName = form.displayName.value;

        const serviceUpdate = {
            ServiceName,
            ServiceImage,
            ServicePrice,
            ServiceDescription,
            ServiceProviderImage,
            ServiceProviderName,
            ServiceProviderLocation,
            ServiceProviderEmail,
            ShortDescription,
            email,
            displayName
        }

        fetch(`https://eden-enclave-server.vercel.app/updateService/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(serviceUpdate)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Good job!',
                        'You updated this service successfully!',
                        'success'
                    )
                }
                else {
                    Swal.fire(
                        'Oops!',
                        'No changes were made. Please make sure to modify the service.',
                        'error'
                    );
                }
            })



    }


    document.title = "EdenEnclave | Update Service";

    return (
        <div className="lg:mx-40 md:mx-10 mx-5 mb-14">
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mt-14">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Update Service</p>
                <h1 className="text-3xl font-semibold dark:text-white">Refine Your Green Signature</h1>
                <p className="text-xs dark:text-white">Craft and perfect your gardening service with precision. Edit and fine-tune the details in our Update Service page to ensure your expertise blossoms seamlessly in the shared garden of services.</p>
            </div>
            <form onSubmit={handleUpdateService} className="flex flex-col justify-center items-center mx-auto mt-10 space-y-8">

                <div className="flex justify-between mx-auto w-full gap-4">

                    <div className="w-2/3 space-y-3">

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Name</p>
                            <input className="rounded-lg text-sm" defaultValue={ServiceName} type="text" name="ServiceName" id="" placeholder="Service Name" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Image</p>
                            <input className="rounded-lg text-sm" defaultValue={ServiceImage} type="url" name="ServiceImage" id="" placeholder="Service Image URL" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Price</p>
                            <input className="rounded-lg text-sm" defaultValue={ServicePrice} type="number" name="ServicePrice" id="" placeholder="Service Price" />
                        </div>
                    </div>

                    <div className="w-1/3 flex flex-col justify-center space-y-1">
                        <p className="text-xs font-medium text-[#05ac39]">Service Description</p>
                        <textarea className="rounded-lg text-sm" defaultValue={ServiceDescription} name="ServiceDescription" id="" cols="30" rows="8" placeholder="Write your service description"></textarea>
                    </div>

                </div>



                <div className="flex justify-between mx-auto w-full gap-4">

                    <div className="w-2/3 space-y-3">

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Image</p>
                            <input className="rounded-lg text-sm" defaultValue={ServiceProviderImage} type="url" name="ServiceProviderImage" id="" placeholder="Service Provider Image URL" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Name</p>
                            <input className="rounded-lg text-sm" defaultValue={ServiceProviderName} type="text" name="ServiceProviderName" id="" placeholder="Service Provider Name" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Location</p>
                            <input className="rounded-lg text-sm" defaultValue={ServiceProviderLocation} type="text" name="ServiceProviderLocation" id="" placeholder="Service Provider Location" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Email</p>
                            <input className="rounded-lg text-sm" defaultValue={ServiceProviderEmail} type="email" name="ServiceProviderEmail" id="" placeholder="Service Provider Email" />
                        </div>

                    </div>

                    <div className="w-1/3 space-y-3">

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Description</p>
                            <textarea className="rounded-lg text-sm" defaultValue={ShortDescription} name="ShortDescription" id="" cols="30" rows="4" placeholder="Write about service provider"></textarea>
                        </div>

                        <div className="pt-1 space-y-3">
                            <div className="w-full flex flex-col justify-center space-y-1">
                                <p className="text-xs font-medium text-[#05ac39]">Your Email</p>
                                <input className="rounded-lg text-sm border-2 border-[#05ac39]" type="email" name="email" id="" defaultValue={email} readOnly />
                            </div>

                            <div className="w-full flex flex-col justify-center space-y-1">
                                <p className="text-xs font-medium text-[#05ac39]">Your Name</p>
                                <input className="rounded-lg text-sm border-2 border-[#05ac39]" type="text" name="displayName" id="" defaultValue={displayName} readOnly />
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                    <input className="bg-[#05ac39] text-white w-full text-sm rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black mt-4 flex items-center gap-2 justify-center" type="submit" value="Update" />

                </div>

            </form>
        </div>
    );
};

export default UpdateService;