import { useEffect, useState } from "react";
import { GoArrowLeft, GoArrowRight, GoPlay } from "react-icons/go";
import { Link, useLoaderData, useParams } from "react-router-dom";


const SinglePortfolio = () => {
    const portfolios = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const portfolio = portfolios.find(single => single?.id === idInt);
    const points = portfolio.points
    const images = [
        'https://dm-weteam.vercel.app/images/dynamic/b1.jpg',
        'https://dm-weteam.vercel.app/images/dynamic/s1.jpg'
    ]
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextSlide = () => {
        const newIndex = (currentIndex + 1) % images.length;
        setCurrentIndex(newIndex);
    };

    const prevSlide = () => {
        const newIndex = (currentIndex - 1 + images.length) % images.length;
        setCurrentIndex(newIndex);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // Change image every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on component unmount
    }, [currentIndex]);

    return (
        <div>
            {/* flex */}
            <div className="flex md:flex-row flex-col items-start justify-center w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto lg:px-24 px-10 gap-5">
                {/* reel star */}
                <div className="">
                    <h1 className='lg:text-6xl md:text-4xl text-2xl font-semibold'>Reel Star</h1>
                    <h1 className="text-gray-500 my-10">ReelStar is the first decentralized, multi-blockchain, and Web3 integrated platform with live streaming, video sharing, peer-to-peer chat, audio video calling, NFT Minting and MarketPlace, and Digital Wallet capabilities.</h1>
                    <div className="mt-20 mb-10">
                        <h1 className="text-gray-500 text-xs">Services</h1>
                        <div className="flex flex-col mt-2 space-y-1">
                            {points.map((point, index) => (
                                <h1 key={index} className=" font-semibold">{point}</h1>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button className='rounded-full hover:bg-gray-500 hover:text-white ease-in-out duration-300 flex items-center gap-3 bg-white text-black py-3 font-semibold px-7'>Visit Website <GoArrowRight /></button>
                    </div>
                </div>
                <div className=" my-10">
                    <div className="">
                        <div>
                            <img className="rounded-xl" src="https://dm-weteam.vercel.app/images/dynamic/b1.jpg" alt="" />
                        </div>
                        <div className="flex md:flex-row flex-col  items-center md:gap-2 gap-5 my-10 w-full ">
                            <img className="rounded-xl md:w-1/2" src="https://dm-weteam.vercel.app/images/dynamic/g1.jpg" alt="" />
                            <img className="rounded-xl md:w-1/2" src="https://dm-weteam.vercel.app/images/dynamic/g2.jpg" alt="" />
                        </div>
                        <div className="my-10">
                            <h1>ReelStar was looking for an experienced team of designers and social media moderators to ensure high-quality creatives were posted on its social media platforms in the appropriate way.</h1>
                        </div>
                        {/* video */}
                        <div>
                            <Link to={'https://www.youtube.com/watch?v=oVChWwAhjSw'} target="_blank">
                                <div className="card w-full relative">
                                    <figure className="rounded-xl cursor-pointer">
                                        <img className="hover:scale-105 transition-transform ease-in duration-200" src="https://dm-weteam.vercel.app/images/dynamic/v1.jpg" alt="" />
                                        <GoPlay className="text-7xl absolute hover:scale-105 transition-transform ease-in duration-200" />
                                    </figure>
                                </div>
                            </Link>
                        </div>
                        {/* carousel */}
                        <div className="">
                            <div className="my-16">
                                {images.map((image, index) => (
                                    <div key={index} style={{ display: index === currentIndex ? 'block' : 'none' }}>
                                        <img className="rounded-xl" src={image} alt="" />
                                    </div>
                                ))}
                            </div>
                            {/* buttons */}
                            <div className="">
                                <div className='flex items-center justify-end gap-4 flex-1'>
                                    <button onClick={prevSlide} className='rounded-full bg-transparent border-white border-2 hover:bg-white hover:text-black ease-in-out duration-300 text-white py-5 px-5' ><GoArrowLeft /> </button>
                                    <button onClick={nextSlide} className='rounded-full bg-transparent border-white border-2 hover:bg-white hover:text-black ease-in-out duration-300 text-white py-5 px-5' ><GoArrowRight /></button>
                                </div>
                            </div>
                        </div>
                        {/* image */}
                        <div className="my-10">
                            <img className="rounded-xl" src="https://dm-weteam.vercel.app/images/dynamic/w1.jpg" alt="" />
                        </div>
                        {/* image 2 */}
                        <div className="my-10">
                            <img className="rounded-xl" src="https://dm-weteam.vercel.app/images/dynamic/b2.jpg" alt="" />
                        </div>
                        <div className="my-10 w-full h-[1px] border border-gray-500"></div>
                        {/* comment */}
                        <div className="my-20 relative">
                            <h1 className="text-3xl">I’ve been impressed by how well they’ve been able to manage the project.</h1>
                            <h1 className="my-5">The Dcastalia Limited team over delivered on each sprint they embarked on with the company, who are quite pleased with the partnership. The team did everything to make sure that the project is always organized and on track.</h1>
                            <div className="my-10">
                                <h1>Shafiqul Huq Shajal</h1>
                                <h1 className=" text-gray-500">Sr. Manager, Elite Paint & Chemical Industries Ltd.</h1>
                            </div>
                            <img className="opacity-20 absolute -top-2  -left-5" src="https://dm-weteam.vercel.app/images/static/quotes.svg" alt="" />

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePortfolio;