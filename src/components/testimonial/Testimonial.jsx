import { BiSolidQuoteLeft } from "react-icons/bi";

const Testimonial = () => {
    return (
        <div className='bg-[url(https://i.ibb.co/JK4VWBY/two-monastera-leaves-black-background.jpg)] bg-cover bg-no-repeat rounded-3xl overflow-hidden mx-40 mt-14'>
            <div className="items-center py-20 pl-10">
            <div className="space-y-2">
                    <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Testimonials</p>
                    <h1 className="text-3xl text-white font-semibold dark:text-white">Our Client Reviews</h1>  
                    <BiSolidQuoteLeft className="text-5xl text-white"></BiSolidQuoteLeft>
                    <p className="text-white w-1/2 text-sm italic">EdenEnclave turns garden dreams into reality! Easy, efficient, and my garden has never looked better. A green thumbs-up from me!</p> 
                    <div className=" flex items-center gap-4 pt-4">
                       <img className="h-12 w-12 rounded-full border-2" src="https://i.ibb.co/2j2rWXb/pleased-young-caucasian-superhero-girl-standing-with-closed-posture-smiling-isolated-green-wall-with.jpg" alt="" /> 

                       <div>
                        <h3 className="text-[#05ac39] font-medium">Grace Emily</h3>
                        <p className="text-white text-xs font-medium">Customer (NY, USA)</p>
                       </div>
                    </div>              
                </div>
            </div>
            <div>
               

                
            </div>
        </div>
    );
};

export default Testimonial;