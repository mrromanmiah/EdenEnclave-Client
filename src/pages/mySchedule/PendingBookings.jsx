const PendingBookings = ({ pendingBookings, handleStatus }) => {
    const { _id, ServiceImage, ServiceName, ServiceDate, email, status } = pendingBookings || {};

    return (
        <div className="lg:flex md:flex-none items-center justify-between border-2 p-4 rounded-3xl lg:space-y-0 md:space-y-3 space-y-3">
            <div className="flex items-center lg:justify-between lg:gap-6 md:gap-6 gap-3">
                <img className="w-28 h-20 rounded-2xl" src={ServiceImage} alt="" />
                <div className="space-y-1">
                    <h3 className="text-xl font-semibold text-[#05ac39]">{ServiceName}</h3>
                    <p className="text-sm font-medium dark:text-white">{email}</p>
                    <div><p className="text-base font-bold dark:text-white">{ServiceDate}</p></div>
                </div>
            </div>
            
            <div className="flex items-center justify-between gap-6 ">
                
                <select
                    value={status}
                    onChange={(e) => handleStatus(_id, e.target.value)}
                    className="select border-[#05ac39] w-1/2"
                >
                    <option value="pending">Pending</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
                <button
                    
                    className={`w-52 text-center mx-auto rounded-full px-5 py-3 font-semibold flex justify-center items-center text-sm text-white hover:bg-gray-300 hover:text-black ${
                        status === 'completed' ? 'bg-[#05ac39]' : status === 'inProgress' ? 'bg-[#FFA500]' : 'bg-[#D80032]'
                    }`}
                >
                    {status === 'completed' ? 'Completed' : status === 'inProgress' ? 'In Progress' : 'Pending'}
                </button>
            </div>
        </div>
    );
};

export default PendingBookings;
