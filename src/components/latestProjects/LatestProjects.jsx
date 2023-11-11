import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import '/styles.css';
import { Autoplay, EffectCoverflow, Pagination } from 'swiper/modules';

const LatestProjects = () => {
    return (
        <div className='mt-14 lg:mx-40'>
            <div className="space-y-2 text-center w-1/2 flex flex-col justify-center mx-auto">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Latest Projects</p>
                <h1 className="text-3xl font-semibold dark:text-white">Complete Projects</h1>
                <p className="text-xs dark:text-white">Check out our latest projects where we've transformed ordinary spaces into lush paradises. From vibrant flower beds to serene landscapes, our gardening experts bring dreams to bloom. Explore the beauty we've sown, one garden at a time.</p>
            </div>

            <div>
                <Swiper
                
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    effect={'coverflow'}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[Autoplay, EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg-[url(https://i.ibb.co/CWxkDV8/tuxpi-com-1699374923.jpg)] relative rounded-3xl overflow-hidden'>
                        <div className='absolute bottom-0 left-0 mt-4 px-4 pb-4'>
                            <p className='text-xs hover:text-[#05ac39]'>Residential</p>
                            <h1 className='text-lg font-medium hover:text-[#05ac39]'>Drywall Installation</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url(https://i.ibb.co/R7x4Tw6/tuxpi-com-1699374942.jpg)] relative rounded-3xl overflow-hidden'>
                        <div className='absolute bottom-0 left-0 mt-4 px-4 pb-4'>
                            <p className='text-xs hover:text-[#05ac39]'>Decking</p>
                            <h1 className='text-lg font-medium hover:text-[#05ac39]'>Reliable Hands</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url(https://i.ibb.co/FqPxtqD/tuxpi-com-1699374955.jpg)] relative rounded-3xl overflow-hidden'>
                        <div className='absolute bottom-0 left-0 mt-4 px-4 pb-4'>
                            <p className='text-xs hover:text-[#05ac39]'>Efficiency</p>
                            <h1 className='text-lg font-medium hover:text-[#05ac39]'>Home Help</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url(https://i.ibb.co/86Hh0W9/tuxpi-com-1699374972.jpg)] relative rounded-3xl overflow-hidden'>
                        <div className='absolute bottom-0 left-0 mt-4 px-4 pb-4'>
                            <p className='text-xs hover:text-[#05ac39]'>Residential</p>
                            <h1 className='text-lg font-medium hover:text-[#05ac39]'>Fix Masters</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='bg-[url(https://i.ibb.co/DpqZ8bw/tuxpi-com-1699374990.jpg)] relative rounded-3xl overflow-hidden'>
                        <div className='absolute bottom-0 left-0 mt-4 px-4 pb-4'>
                            <p className='text-xs hover:text-[#05ac39]'>Efficiency</p>
                            <h1 className='text-lg font-medium hover:text-[#05ac39]'>Skill Works</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default LatestProjects;