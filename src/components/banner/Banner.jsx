import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '/styles.css';
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    return (
        <div>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#05ac39',
                    '--swiper-pagination-color': '#05ac39',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        'backgroundImage':
                            'url(https://i.ibb.co/t2Dn8vd/image-2.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="lg:text-5xl md:text-3xl text-2xl font-bold text-[#05ac39]" data-swiper-parallax="-300">
                    BlossomConnect
                    </div>
                    <div className="lg:my-3 md:my-2 my-1 lg:text-xl md:text-lg text-base" data-swiper-parallax="-200">
                    Cultivating Green Communities
                    </div>
                    <div className="text lg:w-1/2 md:w-1/2 w-2/3 text-center mx-auto" data-swiper-parallax="-100">
                        <p className='lg:text-sm md:text-xs text-xs'>
                        Join BlossomConnect and discover a thriving network of passionate gardeners. Share your gardening journey, exchange tips, and watch your community bloom with vibrant colors and lush landscapes.
                        </p>
                    </div>
                    <button className="bg-[#05ac39] text-white text-sm rounded-full lg:px-6 md:px-4 px-2 lg:py-3 md:py-2 py-1 hover:bg-gray-300 hover:text-black mt-4">Explore</button>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="lg:text-5xl md:text-3xl text-2xl font-bold text-[#05ac39]" data-swiper-parallax="-300">
                    GreenThumb Hub
                    </div>
                    <div className="lg:my-3 md:my-2 my-1 lg:text-xl md:text-lg text-base" data-swiper-parallax="-200">
                    Your Gateway to Gardening Glory
                    </div>
                    <div className="text lg:w-1/2 md:w-1/2 w-2/3 text-center mx-auto" data-swiper-parallax="-100">
                        <p className='lg:text-sm md:text-xs text-xs'>
                        Dive into the world of horticultural wonders with GreenThumb Hub. Connect with expert gardeners, access exclusive resources, and turn your backyard into a botanical masterpiece. Unearth the secrets to a flourishing garden today!
                        </p>
                    </div>
                    <button className="bg-[#05ac39] text-white text-sm rounded-full lg:px-6 md:px-4 px-2 lg:py-3 md:py-2 py-1 hover:bg-gray-300 hover:text-black mt-4">Explore</button>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="lg:text-5xl md:text-3xl text-2xl font-bold text-[#05ac39]" data-swiper-parallax="-300">
                    GardenGurus Collective
                    </div>
                    <div className="lg:my-3 md:my-2 my-1 lg:text-xl md:text-lg text-base" data-swiper-parallax="-200">
                    Growing Together, Growing Strong
                    </div>
                    <div className="text lg:w-1/2 md:w-1/2 w-2/3 text-center mx-auto" data-swiper-parallax="-100">
                        <p className='lg:text-sm md:text-xs text-xs'>
                        Cultivate a sense of belonging with GardenGurus Collective. Share your gardening triumphs, seek advice from seasoned enthusiasts, and foster a community where every green dream takes root. Join us in sowing the seeds of a greener tomorrow.
                        </p>
                    </div>
                    <button className="bg-[#05ac39] text-white text-sm rounded-full lg:px-6 md:px-4 px-2 lg:py-3 md:py-2 py-1 hover:bg-gray-300 hover:text-black mt-4">Explore</button>
                    </div>
                    
                </SwiperSlide>             
            </Swiper>
        </div>
    );
};

export default Banner;