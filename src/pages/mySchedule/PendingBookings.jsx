

const PendingBookings = ({ pendingBookings, handleStatus }) => {

    const { _id, ServiceImage,
        ServiceName,
        ServiceDate,
        email, status } = pendingBookings || {};

    return (
        <div className="lg:flex md:flex-none items-center justify-between border-2 p-4 rounded-3xl lg:space-y-0 md:space-y-3 space-y-3" >

            <div className="flex items-center lg:justify-between gap-6">
                <img className="w-24 rounded-2xl" src={ServiceImage} alt="" />
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#05ac39]">{ServiceName}</h3>
                    <p className="text-sm font-medium dark:text-white">{email}</p>
                </div>
            </div>
            <div className="flex items-center justify-between gap-6">
                <p className="text-base w-full font-bold dark:text-white">{ServiceDate}</p>
                <select className="select border-[#05ac39] w-full">
                    <option disabled selected>Set Status</option>
                    <option>Pending</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                </select>
                {
                    status === 'confirm' ? <span className="text-green-500">Confirmed</span> :
                <button onClick={()=>handleStatus(_id)} className="ml-4 bg-[#D80032] rounded-full px-5 py-2 flex items-center text-xs text-white hover:bg-gray-300 hover:text-black">
                    Pending
                </button>}
            </div>

        </div>
    );
};

export default PendingBookings;