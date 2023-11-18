

const OtherServices = ({ServiceProviderEmail}) => {
   const [ServiceName, ServicePrice] = ServiceProviderEmail
  
    return (
      <div>
        <h1 className="text-2xl font-black text-black">{ServicePrice}</h1>
        {/* Render other details as needed */}
      </div>
    );
  };
  
  export default OtherServices;