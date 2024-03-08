import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { GoArrowLeft, GoArrowRight } from 'react-icons/go';
import './Body.css'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Body = () => {
    const [datas, setData] = useState([])
    const [slides, setSlides] = useState([])
    // const [currentIndex, setCurrentIndex] = useState(0);
    const [cards, setCards] = useState([])

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    //     }, 5000);

    //     return () => clearInterval(interval);
    // }, [slides.length]);

    // const prevSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    // };

    // const nextSlide = () => {
    //     setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
    // };


    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    useEffect(() => {
        fetch('slide.json')
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [])
    useEffect(() => {
        fetch('card.json')
            .then(res => res.json())
            .then(data => setCards(data))
    }, [])
    console.log(slides);
    return (
        <div>
            {/* title */}
            <div className='lg:px-24 px-10 '>
                <h1 className='lg:text-7xl md:text-5xl text-3xl'>We’re obsessed <br /> withgrowth, your growthin <br /> particular</h1>
            </div>
            {/* details */}
            <div className='mt-10 lg:px-24 px-10  flex lg:flex-row flex-col lg:items-center lg:justify-between w-full gap-10'>
                <div className='lg:w-1/2 w-full'>
                    <button className='rounded-full hover:bg-gray-500 hover:text-white ease-in-out duration-300 flex items-center gap-3 bg-white text-black py-3 px-5'>Start your digital journey <GoArrowRight /></button>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <h1 className='text-gray-500 text-2xl'>Digitomark is a growth-first marketing studio with an obsession for mixing brand and digital media to boost your business in new and exciting ways.</h1>
                </div>
            </div>
            {/* transaction */}
            <div className='mt-20 lg:px-24 px-10  flex items-center justify-between flex-wrap gap-5'>
                <img src="https://dm-weteam.vercel.app/images/dynamic/logo1.png" alt="" />
                <img src="https://dm-weteam.vercel.app/images/dynamic/logo4.png" alt="" />
                <img src="https://dm-weteam.vercel.app/images/dynamic/logo3.png" alt="" />
                <img src="https://dm-weteam.vercel.app/images/dynamic/logo1.png" alt="" />
                <img src="https://dm-weteam.vercel.app/images/dynamic/logo4.png" alt="" />
                <img src="https://dm-weteam.vercel.app/images/dynamic/logo3.png" alt="" />
            </div>
            {/* video */}
            <div className='mt-32'>
                <div style={{ position: 'relative', width: '100%', height: '0px', paddingBottom: '56.250%' }}>
                    <iframe
                        allow="fullscreen;autoplay"
                        allowFullScreen
                        height="100%"
                        src="https://staging.streamable.com/e/l4ov1f?autoplay=1&muted=1&nocontrols=1"
                        width="100%"
                        style={{ border: 'none', width: '100%', height: '100%', position: 'absolute', left: '0px', top: '0px', overflow: 'hidden' }}
                    ></iframe>
                </div>
            </div>
            {/* success clients */}
            <div className='mt-10 lg:px-24 px-10 '>
                <div>
                    <h1 className='lg:text-7xl md:text-5xl text-3xl'>The Success <br /> <span className='md:ml-20 '>of Our Clients</span></h1>
                </div>
                <div className='grid md:grid-cols-2  items-center justify-center grid-cols-1 m-auto md:gap-20 lg:gap-0 gap-5'>
                    {datas.map((singleData, index) => (
                        <div key={index} className={`${index % 2 === 0 ? 'md:mt-40' : ''}`}>
                            <div className='flex hover:scale-105 ease-in-out duration-300 cursor-pointer flex-col items-start lg:ml-20 justify-start space-y-2'>
                                <div className='rounded-lg '>
                                    <img className='lg:h-[550px]  lg:w-[500px] h-full w-full rounded-lg ' src={singleData?.imageLink} alt="" />
                                </div>
                                <div className='flex items-start flex-col'>
                                    <div className='text-gray-500'>
                                        <ul className='flex items-start ml-5 lg:gap-7  gap-5 flex-wrap'>
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
                        </div>
                    ))}
                </div>

            </div>
            {/* 360 solution growth */}
            <div className='mt-10 lg:px-24 px-10 '>
                <div>
                    <h1 className='lg:text-7xl md:text-5xl text-3xl'>We provide 360° solutions<br /> <span className=''>perfect for promoting growth</span></h1>
                </div>
                <div className='mt-10 flex items-center justify-between'>
                    <div className='flex-1'>
                        <button className='rounded-full hover:bg-gray-500 hover:text-white ease-in-out duration-300 flex items-center gap-3 bg-white text-black py-3 px-5'>What We Do <GoArrowRight /></button>
                    </div>
                    {/* <div className='flex items-center justify-end gap-4 flex-1'>
                        <button className='rounded-full bg-transparent border-white border-2 hover:bg-white hover:text-black ease-in-out duration-300 text-white py-5 px-5 ' onClick={prevSlide}><GoArrowLeft /></button>
                        <button className='rounded-full bg-transparent border-white border-2 hover:bg-white hover:text-black ease-in-out duration-300 text-white py-5 px-5 ' onClick={nextSlide}><GoArrowRight /></button>
                    </div> */}
                </div>
                <div className='my-10'>
                    <Carousel
                        additionalTransfrom={0}
                        arrows
                        autoPlaySpeed={3000}
                        centerMode={false}
                        className=""
                        containerClass="container-with-dots"
                        dotListClass=""
                        draggable
                        focusOnSelect={false}
                        infinite
                        itemClass=""
                        keyBoardControl
                        minimumTouchDrag={10}
                        pauseOnHover
                        renderArrowsWhenDisabled={false}
                        renderButtonGroupOutside={false}
                        renderDotsOutside={false}
                        responsive={{
                            desktop: {
                                breakpoint: {
                                    max: 3000,
                                    min: 1024
                                },
                                items: 3,
                                partialVisibilityGutter: 40
                            },
                            mobile: {
                                breakpoint: {
                                    max: 464,
                                    min: 0
                                },
                                items: 1,
                                partialVisibilityGutter: 30
                            },
                            tablet: {
                                breakpoint: {
                                    max: 1024,
                                    min: 464
                                },
                                items: 2,
                                partialVisibilityGutter: 30
                            }
                        }}
                        rewind={false}
                        rewindWithAnimation={false}
                        rtl={false}
                        shouldResetAutoplay
                        showDots={false}
                        sliderClass=""
                        slidesToSlide={1}
                        swipeable
                    >
                        {slides.map((slide, index) => (
                            <div className=' flex flex-col m-10' key={index}>
                                <img className='w-full rounded-lg' src={slide.imageLink} alt='' />
                                <h1 className='text-2xl'>{slide.title}</h1>
                                <p>{slide.description}</p>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
            {/* insights */}
            <div className='lg:px-24 px-10  mt-20'>
                <div>
                    <h1 className='lg:text-7xl md:text-6xl text-4xl'>Insights</h1>
                </div>
                <div className='mt-20'>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-5 '>
                        {
                            cards.map((card, index) => (
                                <div key={index}>
                                    <div className="card lg:w-96 md:w-80 w-full bg-[#0A0E12] border shadow-xl cursor-pointer">
                                        <figure><img className='w-full hover:scale-110 ease-in-out duration-500' src={card?.imageLink} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title">{card?.title}</h2>
                                            <div className="card-actions flex flex-col mt-5 justify-start">
                                                <h1 className='text-gray-500'>{card.date}</h1>
                                                <h1>{card.title1}</h1>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Body;