import { useEffect, useState } from "react";
import MyServicesCard from "./MyServicesCard";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";



const MyServices = () => {
    const { user } = useContext(AuthContext)
    const [myServices, setMyServices] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myServices?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setMyServices(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, [user.email]);
    

    return (
        <div>
            {
                myServices.map(service => <MyServicesCard key={service._id}
                    service={service}></MyServicesCard>)
            }
        </div>
    );
};

export default MyServices;