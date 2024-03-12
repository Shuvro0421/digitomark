import React, { useEffect, useState } from "react";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const Portfolios = () => {
    const [datas, setData] = useState([]);
    const [showFilter, setShowFilter] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState("");

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    const toggleFilter = () => {
        setShowFilter(!showFilter);
    };

    const selectCategory = (category) => {
        setSelectedCategory(category);
        setShowFilter(false);
    };


    const uniqueCategories = ['All Categories', ...new Set(datas.flatMap(data => data.points))];

    const filteredData = datas.filter(data => {
        // If no category is selected, show all data
        if (!selectedCategory || selectedCategory === 'All Categories') {
            return true;
        }
        // Check if any of the points match the selected category
        return data.points.includes(selectedCategory);
    });

    return (
        <div className="relative">
            {/* success of client */}
            <div className=" w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto lg:px-24 px-10">
                <h1 className='lg:text-7xl md:text-5xl text-3xl'>The success of<br /> our clients</h1>
                <div className="my-20">
                    <div className='grid md:grid-cols-3 items-center justify-center grid-cols-1 m-auto  lg:gap-0 gap-5'>
                        {filteredData.map((singleData, index) => (
                            <div key={index} className={`${index % 3 === 1 ? 'md:mt-40' : ''}`}>
                                <Link to={`/singlePortfolio/${singleData?.id}`}>
                                    <div className='flex hover:scale-105 ease-in-out duration-300 cursor-pointer flex-col items-start lg:ml-20 justify-start space-y-2'>
                                        <div className='rounded-xl'>
                                            <img className='lg:h-[400px] lg:w-full h-full w-full rounded-xl' src={singleData?.imageLink} alt="" />
                                        </div>
                                        <div className='flex items-start flex-col'>
                                            <div className='text-gray-500'>
                                                <ul className='flex items-start ml-5 lg:gap-7 gap-5 flex-wrap'>
                                                    {singleData?.points.map((point, index) => (
                                                        <li className='list-disc' key={index}>
                                                            {point}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div>
                                                <h1 className='md:text-2xl text-xl'>{singleData?.title}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
            {/* sign in for our newsletter */}
            <div>
                <div className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://dm-weteam.vercel.app/images/dynamic/cta.jpg')" }}>
                    <div className="py-80  w-full lg:w-[1200px] 2xl:w-[1400px] mx-auto lg:px-24 px-10 ">

                        <h1 className='lg:text-7xl md:text-5xl text-3xl'>Sign up for our newsletter <br /> and never miss a thing!</h1>
                        <div className="mt-10 lg:w-1/2 relative">
                            <input type="text" placeholder="Your Email Address" className="bg-transparent outline-none border border-gray-500 placeholder-gray-500 w-full p-2 rounded-full focus:border-white ease-in-out duration-300 text-white" />
                            <button className="rounded-full absolute -top-[39px] right-0 mt-10 hover:bg-gray-500 cursor-pointer hover:text-white ease-in-out duration-300 flex items-center gap-3 bg-white text-black py-2 px-10">Subscribe</button>
                        </div>

                    </div>
                </div>
            </div>
            {/* filter bar */}
            <div className="fixed  bottom-0 w-2/3 left-0 right-0 rounded-t-xl px-10 m-auto h-16 bg-gray-500 backdrop-blur-2xl bg-opacity-10 ">
                <div className="text-lg pt-5 flex font-semibold items-center justify-around gap-5">
                    <h1 className="flex items-center gap-1 cursor-default">Filters <IoFilter /></h1>
                    <h1 className="flex items-center gap-1 cursor-pointer" onClick={toggleFilter}>Category <IoIosArrowUp className={`${showFilter ? 'rotate-180' : ''} ease-in-out duration-300`} /></h1>
                </div>
            </div>
            {/* filter bar option */}
            <div>

                <div className={`bg-gray-500 backdrop-blur-2xl bg-opacity-10 fixed ${showFilter ? 'scale-100' : 'scale-0'}  ease-in-out duration-300 overflow-auto bottom-20 left-1/4 lg:w-1/4 md:w-1/3 w-2/3 m-auto  right-0 rounded-xl mt-2 py-2 px-4 shadow-lg`}>
                    <ul>
                        {uniqueCategories.map((category, index) => (
                            <li key={index} onClick={() => selectCategory(category)} className="cursor-pointer py-1 text-white">{category}</li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Portfolios;
