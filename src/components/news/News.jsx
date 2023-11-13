import { MdDateRange } from "react-icons/md";

const News = () => {
    return (
        <div className='mt-14'>
            <div className="space-y-2 text-center lg:w-1/2 md:w-1/2 w-2/3 flex flex-col justify-center mx-auto">
                <p className="text-[#05ac39] font-medium lg:mt-0 md:mt-5 mt-5">Latest News & Blog</p>
                <h1 className="text-3xl font-semibold dark:text-white">Latest News Post & Articles</h1>
                <p className="text-xs dark:text-white">Dive into our Latest News and Articles for a green journey filled with gardening tips, plant care wisdom, and landscaping inspiration. Stay in the loop with trends, expert advice, and captivating stories that nurture your passion for all things botanical.</p>
            </div>

            <div>

                <div className="grid lg:grid-cols-4 md:grid-cols-1 grid-cols-1 gap-3 mt-14 lg:mx-40 md:mx-10 mx-5">

                    <div className="lg:row-span-2 lg:col-span-2 relative bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className="w-full h-full rounded-xl" src="https://i.ibb.co/chpLBgS/tuxpi-com-1699420614.jpg" alt="News Image" />
                        <div className="absolute bottom-0 start-0 end-0">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-2">
                                    <MdDateRange className="text-[#05ac39]"></MdDateRange>
                                    <p className="text-xs text-white">Jul 7, 2023</p>

                                </div>
                                <h1 className="lg:text-xl md:text-lg text-lg text-white font-semibold mt-2 hover:text-[#05ac39]">Swift Home Repairs Timely Solutions to Keep Your Home in Tip-Top</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 col-span-1 relative bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className="w-full h-full rounded-xl" src="https://i.ibb.co/Pcpr0CX/tuxpi-com-1699420641.jpg" alt="News Image" />
                        <div className="absolute bottom-0 start-0 end-0">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-2">
                                    <MdDateRange className="text-[#05ac39]"></MdDateRange>
                                    <p className="text-xs text-white">Jul 22, 2023</p>

                                </div>
                                <h1 className="lg:text-sm md:text-lg text-lg text-white font-semibold mt-2 hover:text-[#05ac39]">Effortlessly transforming and replacing old tiling</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 col-span-1 relative bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className="w-full h-full rounded-xl" src="https://i.ibb.co/Wg212L9/tuxpi-com-1699420681.jpg" alt="News Image" />
                        <div className="absolute bottom-0 start-0 end-0">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-2">
                                    <MdDateRange className="text-[#05ac39]"></MdDateRange>
                                    <p className="text-xs text-white">Jun 3, 2023</p>

                                </div>
                                <h1 className="lg:text-sm md:text-lg text-lg text-white font-semibold mt-2 hover:text-[#05ac39]">Efficiently utilize advance machinery for home</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 col-span-1 relative bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className="w-full h-full rounded-xl" src="https://i.ibb.co/XLC4G3Z/tuxpi-com-1699420698.jpg" alt="News Image" />
                        <div className="absolute bottom-0 start-0 end-0">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-2">
                                    <MdDateRange className="text-[#05ac39]"></MdDateRange>
                                    <p className="text-xs text-white">Jun 12, 2023</p>

                                </div>
                                <h1 className="lg:text-sm md:text-lg text-lg text-white font-semibold mt-2 hover:text-[#05ac39]">A Peek into Seasonal Garden Trends</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row-span-1 col-span-1 relative bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                        <img className="w-full h-full rounded-xl" src="https://i.ibb.co/qRvgJKv/tuxpi-com-1699420659.jpg" alt="News Image" />
                        <div className="absolute bottom-0 start-0 end-0">
                            <div className="p-4 md:p-5">
                                <div className="flex items-center gap-2">
                                    <MdDateRange className="text-[#05ac39]"></MdDateRange>
                                    <p className="text-xs text-white">Apr 25, 2023</p>

                                </div>
                                <h1 className="lg:text-sm md:text-lg text-lg text-white font-semibold mt-2 hover:text-[#05ac39]">Equipping researchers in the developing world with</h1>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default News;