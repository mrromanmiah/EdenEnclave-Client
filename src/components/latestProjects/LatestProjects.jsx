import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '/styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const LatestProjects = () => {
    return (
        <div className='mt-14'>
            <div className="space-y-2 text-center w-1/2 flex flex-col justify-center mx-auto">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Latest Projects</p>
                <h1 className="text-3xl font-semibold dark:text-white">Complete Projects</h1>
                <p className="text-xs dark:text-white">Gardening is the practice of cultivating and nurturing plants, often outdoor spaces like gardens, yards, or even balconies. vegetables, or flowers. here produce their own fruits, vegetables some key aspects of gardening</p>
            </div>




            <div className='mt-10'>
                <Swiper
                    effect={'coverflow'}
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
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <div className='mt-4 px-4'>
                            <p className='text-xs'>Residential</p>
                            <h1 className='text-lg font-medium'>Drywall Installation</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <div className='mt-4 px-4'>
                            <p className='text-xs'>Residential</p>
                            <h1 className='text-lg font-medium'>Drywall Installation</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <div className='mt-4 px-4'>
                            <p className='text-xs'>Residential</p>
                            <h1 className='text-lg font-medium'>Drywall Installation</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <div className='mt-4 px-4'>
                            <p className='text-xs'>Residential</p>
                            <h1 className='text-lg font-medium'>Drywall Installation</h1>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
                        <div className='mt-4 px-4'>
                            <p className='text-xs'>Residential</p>
                            <h1 className='text-lg font-medium'>Drywall Installation</h1>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default LatestProjects;