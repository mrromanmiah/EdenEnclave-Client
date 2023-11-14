

const DetailsCard = ({details}) => {

const {ServiceImage, 
    ServiceName, 
    ServiceDescription, 
    ServicePrice, 
    ServiceProviderImage, 
    ServiceProviderName, 
    ServiceProviderLocation, 
    ShortDescription} = details || {};


    return (
        <div>
            <h1>{ServiceName}</h1>
        </div>
    );
};

export default DetailsCard;