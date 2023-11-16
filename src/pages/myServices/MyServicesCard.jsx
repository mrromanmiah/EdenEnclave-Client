
import { FaLocationDot } from "react-icons/fa6";
import { ImPriceTag } from "react-icons/im";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";


const MyServicesCard = ({ service, updateServices }) => {

    const { _id,
        ServiceImage,
        ServiceName,
        ServiceDescription,
        ServiceProviderImage,
        ServiceProviderName,
        ServiceProviderLocation,
        ServicePrice } = service || {};

    const handleDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#D80032',
            cancelButtonColor: '#05ac39',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myServices/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your service has been deleted.',
                                'success'
                            );
                            updateServices(_id);
                        }
                    })
                    .catch(error => console.error("Error deleting service:", error));
            }
        });
    };



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

                    <div className="flex gap-6 justify-between mx-auto">
                        <Link to={`/updateService/${_id}`} className="flex-grow">
                            <button className="w-full bg-[#05ac39] text-white text-sm rounded-xl px-6 py-2 hover:bg-gray-300 hover:text-black mt-4 flex justify-center items-center mx-auto gap-3">
                                Update <FaEdit />
                            </button>
                        </Link>
                        <button onClick={() => handleDelete(_id)} className="flex-grow bg-[#D80032] text-white text-sm rounded-xl px-6 py-2 hover:bg-gray-300 hover:text-black mt-4 flex justify-center items-center mx-auto gap-3">
                            Delete <FaTrashAlt />
                        </button>
                    </div>



                </div>
            </div>
        </div>
    );
};

export default MyServicesCard;