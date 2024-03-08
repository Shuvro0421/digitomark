import { CiFacebook, CiInstagram, CiLinkedin, CiTwitter, CiYoutube } from "react-icons/ci";
import { FiFacebook } from "react-icons/fi";
const Footer = () => {
    return (
        <div className="mb-10 px-10">
            <div className="flex md:flex-row flex-col items-start justify-between">
                <div>
                    <div>
                        <h1 className="lg:text-7xl w-full  md:text-5xl text-3xl ">Let's talk about <br /> your next project</h1>
                    </div>
                    <div className="md:mt-60 mt-20">
                        <h1 className=" lg:text-4xl md:text-2xl text-lg"><span className="hover:text-gray-500 ease-in-out duration-200 cursor-pointer">+88 014 0707 1199</span> <br /> <span className="hover:text-gray-500 ease-in-out duration-200 cursor-pointer">info@digitomark.com</span></h1>
                    </div>
                </div>
                <div className=" flex md:flex-col flex-row  items-center md:items-end justify-around mt-5 gap-5">
                    <div>
                        <FiFacebook className="text-4xl border hover:bg-gray-500 text-white ease-in-out duration-200 cursor-pointer border-white rounded-full p-2" />
                    </div>
                    <div>
                        <CiTwitter className="text-4xl border hover:bg-gray-500 text-white ease-in-out duration-200 cursor-pointer border-white rounded-full p-2" />
                    </div>
                    <div>
                        <CiLinkedin className="text-4xl border hover:bg-gray-500 text-white ease-in-out duration-200 cursor-pointer border-white rounded-full p-2" />
                    </div>
                    <div>
                        <CiInstagram className="text-4xl border hover:bg-gray-500 text-white ease-in-out duration-200 cursor-pointer border-white rounded-full p-2" />
                    </div>
                    <div>
                        <CiYoutube className="text-4xl border hover:bg-gray-500 text-white ease-in-out duration-200 cursor-pointer border-white rounded-full p-2" />
                    </div>
                </div>
            </div>
            <div className="border w-full h-[1px] my-5"></div>
            <div className="my-5 flex md:flex-row flex-col  md:items-center items-start gap-10 flex-wrap  justify-start">
                <h1>Organic Marketing</h1>
                <h1>Paid Marketing</h1>
                <h1>Creative Design</h1>
                <h1>Web Design</h1>
                <h1>Copy Writing</h1>
                <h1>Visual Arts</h1>
            </div>
        </div>
    );
};

export default Footer;