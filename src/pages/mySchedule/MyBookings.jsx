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
        <div className="flex items-center justify-between p-4 border border-gray-300 rounded-xl shadow-md">
    <div className="flex items-center">
        <img className="w-28 rounded-xl overflow-hidden" src={ServiceImage} alt="" />
        <div className="ml-4">
            <h3 className="text-2xl text-[#05ac39] font-bold">{ServiceName}</h3>
            <p className="text-gray-500 text-sm">{ServiceDate}</p>
        </div>
    </div>
    <div className="flex items-center gap-20">
        <p className="text-xl font-extrabold">${ServicePrice}.00</p>
        <p className="text-xl font-extrabold">${ServicePrice}.00</p>
        <button onClick={() => handleDelete(_id)} className="ml-4 bg-[#D80032] btn-sm btn btn-circle text-white hover:bg-gray-300 hover:text-black">
            <FaTrashAlt />
        </button>
    </div>
</div>


    );
};

export default MyBookings;