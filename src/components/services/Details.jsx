import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";


const Details = () => {
const {id} = useParams();
const details = useLoaderData();




    return (
        <div>
            <DetailsCard details={details}></DetailsCard>
        </div>
    );
};

export default Details;