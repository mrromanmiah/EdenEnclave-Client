import { BiSolidPhoneCall } from "react-icons/bi";


const Contact = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center bg-[url(https://i.ibb.co/WKY7MrF/image-4.jpg)] bg-cover bg-fixed bg-center bg-no-repeat h-[60vh] mt-16">
                <h1 className="text-white lg:text-3xl md:text-xl text-lg font-semibold mb-4" data-aos="fade-right">Create Your Beautiful Garden With Us</h1>
                <h1 className="text-white lg:text-3xl md:text-xl text-lg font-semibold mb-4" data-aos="fade-left">Please Call : (+88) 01234 56 78 90</h1>
                <button className="bg-[#05ac39] text-white text-sm rounded-full p-4  hover:bg-gray-300 hover:text-black mt-3" data-aos="zoom-in"><BiSolidPhoneCall className="text-3xl"></BiSolidPhoneCall></button>
            </div>

        </div>
    );
};

export default Contact;