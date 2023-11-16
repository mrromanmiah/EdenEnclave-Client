import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { useState } from "react";
import { useEffect } from "react";
import MyBookings from "./MyBookings";


const MySchedule = () => {
    const { user } = useContext(AuthContext)
    const [myBookings, setMyBookings] = useState([])

    const updateBookings = (deletedBookingId) => {
        const updatedBookings = myBookings.filter(booking => booking._id !== deletedBookingId);
        setMyBookings(updatedBookings);
    };

    useEffect(() => {
        fetch(`http://localhost:5000/myBookings?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyBookings(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [user.email]);




    document.title = "EdenEnclave | My Schedule";
    return (
        <div className="mb-14">
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto mt-14">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">My Services</p>
                <h1 className="text-3xl font-semibold dark:text-white">Tending to Nature's Palette</h1>
                <p className="text-xs dark:text-white">Explore and manage your garden of added services in one place. This is your canvas, where each service is a stroke in creating a masterpiece. Track, edit, delete, and showcase your expertise in cultivating nature's beauty.</p>
            </div>


            <div className="lg:mx-40 md:mx-10 mx-5 mt-10 grid grid-cols-1 gap-8">
            {myBookings.length > 0 ? (
                    myBookings.map(booking => (
                        <MyBookings key={booking._id}
                        booking={booking}
                        updateBookings={updateBookings}></MyBookings>
                    ))
                ) : (
                    <div>
                        <img className="w-40 flex justify-center mx-auto" src="https://i.ibb.co/smCRw4N/not-booked-1.png" alt="" />
                        <p className="text-[#D80032] text-center mt-4 text-xl font-semibold">No Service Booked</p>
                    </div>
                )}
            </div>



        </div>
    );
};

export default MySchedule;