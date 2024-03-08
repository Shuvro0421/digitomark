import React from 'react';
import { GoArrowRight } from 'react-icons/go';

const Body = () => {
    return (
        <div>
            {/* title */}
            <div className='px-10'>
                <h1 className='lg:text-7xl md:text-5xl text-3xl'>We’re obsessed <br /> withgrowth, your growthin <br /> particular</h1>
            </div>
            {/* details */}
            <div className='mt-10 px-10 flex lg:flex-row flex-col lg:items-center lg:justify-between w-full gap-10'>
                <div className='lg:w-1/2 w-full'>
                    <button className='rounded-full hover:bg-gray-500 hover:text-white ease-in-out duration-300 flex items-center gap-3 bg-white text-black py-3 px-3'>Start your digital journey <GoArrowRight /></button>
                </div>
                <div className='lg:w-1/2 w-full'>
                    <h1 className='text-gray-500 text-2xl'>Digitomark is a growth-first marketing studio with an obsession for mixing brand and digital media to boost your business in new and exciting ways.</h1>
                </div>
            </div>
            {/* transaction */}
            <div className='mt-20 px-10 flex items-center justify-between flex-wrap gap-5'>
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


        </div>
    );
};

export default Body;