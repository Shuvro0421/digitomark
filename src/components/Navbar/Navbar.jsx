import { GoArrowRight } from "react-icons/go";
import Hamburger from 'hamburger-react'
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // const [openSubMenu, setOpenSubMenu] = useState(false)
    // const [submenuText, setSubmenuText] = useState('');
    const location = useLocation();

    const routes = [
        { path: '/', name: 'Home' },
        { path: '/about', name: 'About' },
        { path: '/portfolios', name: 'Portfolios' }
    ];

    // const handleOpenSubMenu = (text) => {
    //     setOpenSubMenu(!openSubMenu);
    //     setSubmenuText(text);
    // };
    const activeRoute = routes.find(route => route.path === location.pathname)?.name || '';

    const links = (
        <ul className="relative">
            <li>
                <ul className="flex flex-col text-left w-full  space-y-2 items-start">
                    <li className=" w-full">
                        <Link className="flex items-center gap-2 group" to={'/'}>
                            Home <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                    </li>
                    <li className=" w-full">
                        <Link className="flex items-center gap-2 group" to={'/about'}>
                            About Us <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                    </li>
                    <li className=" w-full">
                        <Link className="flex items-center gap-2 group" to={'/'}>
                            Portfolios <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                    </li>
                    <li className="lg:hidden block w-full">
                        <Link className="flex items-center gap-2 group" to={'/'}>
                            Join Us <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                        </Link>
                    </li>
                    <li className="w-full">
                        <ul className="space-y-2 mt-5 lg:bg-[#2626267A] lg:w-64  lg:ml-3 lg:mt-3 lg:rounded-lg lg:p-5">
                            <li className="">Services</li>
                            <div className="w-full border "></div>
                            <li  className="text-lg w-full">
                                <button className="flex items-center gap-2 group" to={'/'}>
                                    Insight & Strategy <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                                </button>
                            </li>
                            <li  className="text-lg w-full">
                                <button className="flex items-center gap-2 group" to={'/'}>
                                    Brand Identity <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                                </button>
                            </li>
                            <li className="text-lg w-full">
                                <button className="flex items-center gap-2 group" to={'/'}>
                                    Organic Marketing <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                                </button>
                            </li>
                            <li className="text-lg w-full">
                                <button className="flex items-center gap-2 group" to={'/'}>
                                    Paid Marketing <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                                </button>
                            </li>
                            <li className="text-lg w-full">
                                <button className="flex items-center gap-2 group" to={'/'}>
                                    Digital Design <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                                </button>
                            </li>
                            <li className="text-lg w-full">
                                <button className="flex items-center gap-2 group" to={'/'}>
                                    Photography & Video <GoArrowRight className="opacity-0 text-sm group-hover:opacity-100 transition-opacity duration-200" />
                                </button>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            {/* <li className={`lg:block hidden absolute text-xl  bg-black rounded-lg p-5 top-1/2 -right-64 ${openSubMenu ? '-translate-x-0' : '-translate-x-full opacity-0 duration-1000'} ease-out transition-transform duration-1000`}>
                {
                    openSubMenu && (
                        <div>
                            <h1>{submenuText}</h1>
                        </div>
                    )
                }
            </li> */}
        </ul>

    );

    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className="lg:px-24 px-10 ">
            <div className="lg:flex items-start hidden justify-between m-10">
                <div className="flex gap-5">
                    <Link to={'/'} className="bg-[#2626267A] w-24 rounded-lg backdrop-blur-lg h-12">
                        <img className="w-full m-auto p-auto pt-1 pr-2" src="https://i.ibb.co/HhhbWMZ/snapedit-1709805727461.png" alt="" />
                    </Link>
                    <div className={`bg-[#2626267A] w-[330px] pl-5 h-12 ${!open ? 'h-12' : 'h-[580px]'} ease-in-out duration-500 rounded-lg backdrop-blur-lg`} >
                        <div className="flex items-start justify-between">
                            <div className="flex flex-col items-start py-3 justify-center">
                                <div>
                                    <h1>{activeRoute}</h1>
                                </div>
                                <div className="mt-5 mb-5 text-2xl font-normal">
                                    {open && (
                                        <div className="space-y-5">
                                            <div className="w-full">
                                                {links}
                                            </div>
                                            <div className="bg-[#2626267A] text-lg  w-64 h-12  ml-3 mt-3  rounded-lg block ">
                                                <button className="flex gap-[140px] items-center  hover:gap-[150px] py-3 px-2 w-full  ease-in-out duration-500">Join Us <GoArrowRight /></button>
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>
                            <div className="">
                                <Hamburger toggled={open} toggle={handleMenu} size={15} direction="left" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#2626267A] w-40 h-12 py-3 pl-5 rounded-lg backdrop-blur-lg">
                    <button className="flex items-center gap-6 hover:gap-7 ease-in-out duration-500">Contact Us <GoArrowRight /></button>
                </div>
            </div>
            {/* md sm */}
            <div className="lg:hidden block">
                <div className="flex w-11/12 justify-between bg-[#2626267A] p-2 rounded-lg backdrop-blur-lg items-center m-auto mt-10">
                    <Link to={'/'} className="">
                        <img className="w-24 h-12" src="https://i.ibb.co/HhhbWMZ/snapedit-1709805727461.png" alt="" />
                    </Link>
                    <div className="">
                        <Hamburger size={15} toggled={open} toggle={handleMenu} direction="left" />
                    </div>
                </div>
                <div className={`fixed  right-0 h-full w-full bg-[#0A0E12]  transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className=" w-1/2 mt-5 md:ml-7 ml-5">
                        <Link to={'/'} className="bg-white rounded-full block px-2 w-full py-2 text-black ">Contact Us</Link>
                    </div>
                    <div>
                        <ul className="font-normal text-2xl  mx-2 mt-5 ml-7">
                            <li>{links}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
