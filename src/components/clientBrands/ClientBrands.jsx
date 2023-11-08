import Slider from "react-slick";

const ClientBrands = () => {
    var settings = {
        dots: false,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
    };
    return (
        
                <Slider {...settings} className="bg-[#05ac39] py-14 px-10 md:px-20 lg:px-40 overflow-hidden mt-14">
                    
                    <div>
                        <img className="w-1/2 object-cover" src="https://i.ibb.co/Gtxm1V1/Logo1.png" alt="" />
                    </div>
                    <div>
                        <img className="w-1/2 object-cover" src="https://i.ibb.co/zJgCXZy/Logo4.png" alt="" />
                    </div>
                    <div>
                        <img className="w-1/2 object-cover" src="https://i.ibb.co/xCsXWWB/Logo5.png" alt="" />
                    </div>
                    <div>
                        <img className="w-1/2 object-cover" src="https://i.ibb.co/2YRV4H6/partnexr7.png" alt="" />
                    </div>
                    <div>
                        <img className="w-1/2 object-cover" src="https://i.ibb.co/fqky8Gt/partnexr7.png" alt="" />
                    </div>
                    <div>
                        <img className="w-1/2 object-cover" src="https://i.ibb.co/d6NDSkP/partnezr8.png" alt="" />
                    </div>
                    <div>
                        <img className="w-1/2 object-cover" src="https://i.ibb.co/X2hfk2H/pazrtner6.png" alt="" />
                    </div>                  
                </Slider>        
        
    );
};

export default ClientBrands;
