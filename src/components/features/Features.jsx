

const Features = () => {
    return (
        <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-center gap-6 lg:mx-20 md:mx-20 mx-5 pt-14">
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform rounded-3xl space-y-3 p-10 items-center text-center mx-auto bg-black hover:bg-gradient-to-b from-black via-[#02250e] to-[#036424]" data-aos="zoom-in">
                <img className="icon-image hover:scale-105 transition-transform flex items-center justify-center mx-auto w-16 h-16" src="https://i.ibb.co/L98mCP3/service-icon-1.png" alt="" />
                <h3 className="text-white text-lg font-semibold">Gardening</h3>
                <p className="text-white text-xs">Nurturing beauty through skilled care, cultivating vibrant blooms and lush greenery for perfect harmony</p>
            </div>
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform rounded-3xl space-y-3 p-10 items-center text-center mx-auto bg-black hover:bg-gradient-to-b from-black via-[#02250e] to-[#036424]" data-aos="zoom-in">
                <img className="icon-image hover:scale-105 transition-transform flex items-center justify-center mx-auto w-16 h-16" src="https://i.ibb.co/XVz9j1Q/gardening-service-icon-2.png" alt="" />
                <h3 className="text-white text-lg font-semibold">Landscaping</h3>
                <p className="text-white text-xs">Transforming outdoor spaces into enchanting havens, blending artistry with nature's elegance seamlessly</p>
            </div>
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform rounded-3xl space-y-3 p-10 items-center text-center mx-auto bg-black hover:bg-gradient-to-b from-black via-[#02250e] to-[#036424]" data-aos="zoom-in">
                <img className="icon-image hover:scale-105 transition-transform flex items-center justify-center mx-auto w-16 h-16" src="https://i.ibb.co/Y8GS5my/gardening-service-icon-3.png" alt="" />
                <h3 className="text-white text-lg font-semibold">Maintenance</h3>
                <p className="text-white text-xs">Sustaining the allure, our meticulous upkeep ensures gardens thrive in perpetual splendor and vitality</p>
            </div>
            <div className="feature-card group overflow-hidden hover:scale-105 transition-transform rounded-3xl space-y-3 p-10 items-center text-center mx-auto bg-black hover:bg-gradient-to-b from-black via-[#02250e] to-[#036424]" data-aos="zoom-in">
                <img className="icon-image hover:scale-105 transition-transform flex items-center justify-center mx-auto w-16 h-16" src="https://i.ibb.co/t3sMVTy/gareening-service-icon-4.png" alt="" />
                <h3 className="text-white text-lg font-semibold">Pruning Plants</h3>
                <p className="text-white text-xs">Trimming for growth; sculpting, boosting health, fostering vibrant, resilient gardens with precision care</p>
            </div>


        </div>
    );
};

export default Features;