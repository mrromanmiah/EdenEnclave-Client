import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";


const MyBookings = ({ booking, updateBookings }) => {

    const { _id,
        ServiceImage,
        ServiceName,
        ServiceDate,
        ServicePrice } = booking || {};

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
                fetch(`http://localhost:5000/myBookings/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your booking has been deleted.',
                                'success'
                            );
                            updateBookings(_id);
                        }
                    })
                    .catch(error => console.error("Error deleting booking:", error));
            }
        });
    };

    return (
        <div className="lg:flex md:flex items-center justify-between border-2 p-4 rounded-3xl lg:space-y-0 md:space-y-0 space-y-3" >
            <div className="flex items-center lg:justify-between md:justify-between gap-6">
                <img className="w-24 rounded-2xl" src={ServiceImage} alt="" />
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#05ac39]">{ServiceName}</h3>
                    <p className="text-sm font-medium dark:text-white">{ServiceDate}</p>
                </div>
            </div>
            <div className="flex items-center justify-between gap-6">
                <p className="text-2xl font-bold dark:text-white">${ServicePrice}.00</p>
                <button onClick={() => handleDelete(_id)} className="ml-4 bg-[#D80032] rounded-full p-3 flex items-center text-xs text-white hover:bg-gray-300 hover:text-black">
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default MyBookings;
