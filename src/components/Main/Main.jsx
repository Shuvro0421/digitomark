import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Home/Footer/Footer';
import Navbar from '../Navbar/Navbar';

const Main = () => {
    return (
        <div className=''>
            <div className="flex flex-col min-h-screen ">
                {/* navbar */}
                <div className="fixed left-0 right-0 z-[99999999999]">
                    <Navbar />
                </div>
                {/* body */}
                <div className=" mt-40 mb-40">
                    <Outlet />
                </div>
                {/* footer */}
                <div className="mb-5">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Main;