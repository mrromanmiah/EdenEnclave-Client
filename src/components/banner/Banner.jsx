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
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
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
                        'background-image':
                            'url(https://i.ibb.co/t2Dn8vd/image-2.jpg)',
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="lg:text-3xl md:text-xl text-lg font-bold text-[#05ac39]" data-swiper-parallax="-300">
                        Slide 1
                    </div>
                    <div className="lg:mb-3 md:mb-2 mb-1 lg:text-xl md:text-sm text-sm" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text lg:w-1/2 md:w-1/2 w-2/3 text-center" data-swiper-parallax="-100">
                        <p className='lg:text-sm md:text-xs text-xs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                        </p>
                    </div>
                    <button className="bg-[#05ac39] text-white lg:text-base md:text-sm text-xs font-bold rounded-md lg:px-6 md:px-4 px-2 lg:py-3 md:py-2 py-1 hover:bg-gray-300 hover:text-[#05ac39] mt-4">Explore</button>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="lg:text-3xl md:text-xl text-lg font-bold text-[#05ac39]" data-swiper-parallax="-300">
                        Slide 1
                    </div>
                    <div className="lg:mb-3 md:mb-2 mb-1 lg:text-xl md:text-sm text-sm" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text lg:w-1/2 md:w-1/2 w-2/3 text-center" data-swiper-parallax="-100">
                        <p className='lg:text-sm md:text-xs text-xs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                        </p>
                    </div>
                    <button className="bg-[#05ac39] text-white lg:text-base md:text-sm text-xs font-bold rounded-md lg:px-6 md:px-4 px-2 lg:py-3 md:py-2 py-1 hover:bg-gray-300 hover:text-[#05ac39] mt-4">Explore</button>
                    </div>
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="flex flex-col items-center justify-center h-full text-center">
                    <div className="lg:text-3xl md:text-xl text-lg font-bold text-[#05ac39]" data-swiper-parallax="-300">
                        Slide 1
                    </div>
                    <div className="lg:mb-3 md:mb-2 mb-1 lg:text-xl md:text-sm text-sm" data-swiper-parallax="-200">
                        Subtitle
                    </div>
                    <div className="text lg:w-1/2 md:w-1/2 w-2/3 text-center" data-swiper-parallax="-100">
                        <p className='lg:text-sm md:text-xs text-xs'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                            dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
                            laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
                            Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
                        </p>
                    </div>
                    <button className="bg-[#05ac39] text-white lg:text-base md:text-sm text-xs font-bold rounded-md lg:px-6 md:px-4 px-2 lg:py-3 md:py-2 py-1 hover:bg-gray-300 hover:text-[#05ac39] mt-4">Explore</button>
                    </div>
                    
                </SwiperSlide>             
            </Swiper>
        </div>
    );
};

export default Banner;