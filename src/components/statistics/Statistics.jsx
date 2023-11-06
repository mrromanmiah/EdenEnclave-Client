import CountUp from 'react-countup';

const Statistics = () => {
    return (
        <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-20 gap-6 
        lg:-mt-12 md:mt-14 mt-14'>
            <div className="flex items-center gap-4 bg-gradient-to-r from-black via-[#02250e] to-[#036424] p-6 rounded-2xl">           
                <div>
                    <img className='w-10' src="https://i.ibb.co/DpjnwDB/counter-img-1.png" alt="" />
                </div>
                <div>
                <h1 className="text-3xl text-white font-semibold"><CountUp
                    end={90}
                    duration={4}
                />+</h1>
                <p className="text-xs text-white font-medium">Successful Projects</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-gradient-to-r from-black via-[#02250e] to-[#036424] p-6 rounded-2xl">           
                <div>
                    <img className='w-10' src="https://i.ibb.co/mtBWsrH/gardening-counter-2.png" alt="" />
                </div>
                <div>
                <h1 className="text-3xl text-white font-semibold"><CountUp
                    end={70}
                    duration={4}
                />+</h1>
                <p className="text-xs text-white font-medium">Satisfied Clients</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-gradient-to-r from-black via-[#02250e] to-[#036424] p-6 rounded-2xl">           
                <div>
                    <img className='w-10' src="https://i.ibb.co/9qPWL9f/gardening-like.png" alt="" />
                </div>
                <div>
                <h1 className="text-3xl text-white font-semibold"><CountUp
                    end={20}
                    duration={4}
                />+</h1>
                <p className="text-xs text-white font-medium">Year of experience</p>
                </div>
            </div>
            <div className="flex items-center gap-4 bg-gradient-to-r from-black via-[#02250e] to-[#036424] p-6 rounded-2xl">           
                <div>
                    <img className='w-10' src="https://i.ibb.co/vmXb4N8/gardening-winner.png" alt="" />
                </div>
                <div>
                <h1 className="text-3xl text-white font-semibold"><CountUp
                    end={17}
                    duration={4}
                />+</h1>
                <p className="text-xs text-white font-medium">Awards Winning</p>
                </div>
            </div>
        </div>
    );
};

export default Statistics;