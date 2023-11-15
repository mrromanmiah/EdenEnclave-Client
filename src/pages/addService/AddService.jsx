import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const AddService = () => {

    const {user} = useContext(AuthContext);



    return (
        <div className="mx-40 mb-14">
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mt-14">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Add Service</p>
                <h1 className="text-3xl font-semibold dark:text-white">Blossom Your Expertise</h1>
                <p className="text-xs dark:text-white">Become a part of our flourishing community by adding your unique gardening service to our diverse bouquet. Share your expertise in crafting vibrant landscapes and nurturing nature's beauty.</p>
            </div>
            <form className="flex flex-col justify-center items-center mx-auto mt-10 space-y-3">

                <div className="flex justify-between mx-auto gap-4 w-full">
                <div className="w-full flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Service Image</p>
                <input className="rounded-lg text-sm" type="url" name="ServiceImage" id="" placeholder="Service Image URL"/>
                </div>

                <div className="w-full flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Service Name</p>
                <input className="rounded-lg text-sm" type="text" name="ServiceName" id="" placeholder="Service Name"/>
                </div>
                </div>

                <div className="w-1/2 flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Service Description</p>
                <textarea className="rounded-lg text-sm" name="ServiceDescription" id="" cols="30" rows="2" placeholder="Write your service description"></textarea>
                </div>

                <div className="w-1/2 flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Service Price</p>
                <input className="rounded-lg text-sm" type="number" name="ServicePrice" id="" placeholder="Service Price"/>
                </div>

                <div className="w-1/2 flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Service Provider Image</p>
                <input className="rounded-lg text-sm" type="url" name="ServiceProviderImage" id="" placeholder="Service Provider Image"/>
                </div>

                <div className="w-1/2 flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Service Provider Name</p>
                <input className="rounded-lg text-sm" type="text" name="ServiceProviderName" id="" placeholder="Service Provider Name"/>
                </div>

                <div className="w-1/2 flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Service Provider Location</p>
                <input className="rounded-lg text-sm" type="text" name="ServiceProviderLocation" id="" placeholder="Service Provider Location"/>
                </div>

                <div className="w-1/2 flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Service Provider Email</p>
                <input className="rounded-lg text-sm" type="email" name="ServiceProviderEmail" id="" placeholder="Service Provider Email"/>
                </div>

                <div className="w-1/2 flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Service Provider Description</p>
                <textarea className="rounded-lg text-sm" name="ShortDescription" id="" cols="30" rows="2" placeholder="Write a description about service provider"></textarea>
                </div>

                <div className="w-1/2 flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Your Email</p>
                <input className="rounded-lg text-sm" type="email" name="email" id="" value={user.email} readOnly/>
                </div>

                <div className="w-1/2 flex flex-col justify-center space-y-1">
                <p className="text-xs font-medium text-[#05ac39]">Your Name</p>
                <input className="rounded-lg text-sm" type="text" name="displayName" id="" value={user.displayName} readOnly />
                </div>

                
                
                
                




            </form>
            
            
            
            
            
        </div>
    );
};

export default AddService;