import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";


const AddService = () => {
    const { user } = useContext(AuthContext);

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;

        const ServiceName = form.ServiceName.value;
        const ServiceImage = form.ServiceImage.value;
        const ServicePrice = form.ServicePrice.value;
        const ServiceDescription = form.ServiceDescription.value;
        const ServiceProviderImage = form.ServiceProviderImage.value;
        const ServiceProviderName = form.ServiceProviderName.value;
        const ServiceProviderLocation = form.ServiceName.value;
        const ServiceProviderEmail = form.ServiceProviderEmail.value;
        const ShortDescription = form.ShortDescription.value;
        const email = form.email.value;
        const displayName = form.displayName.value;

        const newService = {
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

        fetch('https://eden-enclave-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good job!',
                        'You added this service successfully!',
                        'success'
                    )
                    form.reset();
                }
            })


    }


document.title = "EdenEnclave | Add Service";
    return (
        <div className="lg:mx-40 md:mx-10 mx-5 mb-14">
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mt-14">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Add Service</p>
                <h1 className="text-3xl font-semibold dark:text-white">Blossom Your Expertise</h1>
                <p className="text-xs dark:text-white">Become a part of our flourishing community by adding your unique gardening service to our diverse bouquet. Share your expertise in crafting vibrant landscapes and nurturing nature's beauty.</p>
            </div>
            <form onSubmit={handleAddService} className="flex flex-col justify-center items-center mx-auto mt-10 space-y-8">

                <div className="flex justify-between mx-auto w-full gap-4">

                    <div className="w-2/3 space-y-3">

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Name</p>
                            <input className="rounded-lg text-sm" type="text" name="ServiceName" id="" placeholder="Service Name" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Image</p>
                            <input className="rounded-lg text-sm" type="url" name="ServiceImage" id="" placeholder="Service Image URL" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Price</p>
                            <input className="rounded-lg text-sm" type="number" name="ServicePrice" id="" placeholder="Service Price" />
                        </div>
                    </div>

                    <div className="w-1/3 flex flex-col justify-center space-y-1">
                        <p className="text-xs font-medium text-[#05ac39]">Service Description</p>
                        <textarea className="rounded-lg text-sm" name="ServiceDescription" id="" cols="30" rows="8" placeholder="Write your service description"></textarea>
                    </div>

                </div>



                <div className="flex justify-between mx-auto w-full gap-4">

                    <div className="w-2/3 space-y-3">

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Image</p>
                            <input className="rounded-lg text-sm" type="url" name="ServiceProviderImage" id="" placeholder="Service Provider Image URL" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Name</p>
                            <input className="rounded-lg text-sm" type="text" name="ServiceProviderName" id="" placeholder="Service Provider Name" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Location</p>
                            <input className="rounded-lg text-sm" type="text" name="ServiceProviderLocation" id="" placeholder="Service Provider Location" />
                        </div>

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Email</p>
                            <input className="rounded-lg text-sm" type="email" name="ServiceProviderEmail" id="" placeholder="Service Provider Email" />
                        </div>

                    </div>

                    <div className="w-1/3 space-y-3">

                        <div className="w-full flex flex-col justify-center space-y-1">
                            <p className="text-xs font-medium text-[#05ac39]">Service Provider Description</p>
                            <textarea className="rounded-lg text-sm" name="ShortDescription" id="" cols="30" rows="4" placeholder="Write about service provider"></textarea>
                        </div>

                        <div className="pt-1 space-y-3">
                            <div className="w-full flex flex-col justify-center space-y-1">
                                <p className="text-xs font-medium text-[#05ac39]">Your Email</p>
                                <input className="rounded-lg text-sm border-2 border-[#05ac39]" type="email" name="email" id="" value={user.email} readOnly />
                            </div>

                            <div className="w-full flex flex-col justify-center space-y-1">
                                <p className="text-xs font-medium text-[#05ac39]">Your Name</p>
                                <input className="rounded-lg text-sm border-2 border-[#05ac39]" type="text" name="displayName" id="" value={user.displayName} readOnly />
                            </div>
                        </div>
                    </div>
                </div>

                <div>

                    <input className="bg-[#05ac39] text-white w-full text-sm rounded-full px-6 py-2 hover:bg-gray-300 hover:text-black mt-4 flex items-center gap-2 justify-center" type="submit" value="Add This Service" />

                </div>

            </form>
        </div>
    );
};

export default AddService;