import { useEffect, useRef } from "react";
import { useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const AboutUs = () => {
    const [missions, setMissions] = useState([])
    const [cultures, setCultures] = useState([])
    const [currentSlide, setCurrentSlide] = useState(0);
    const [teams, setTeams] = useState([])
    const [logos, setLogos] = useState([])


    const nextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === cultures.length - 1 ? 0 : prevSlide + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? cultures.length - 1 : prevSlide - 1));
    };

    useEffect(() => {
        fetch('mission.json')
            .then(res => res.json())
            .then(data => setMissions(data))
    }, [])
    useEffect(() => {
        fetch('culture.json')
            .then(res => res.json())
            .then(data => setCultures(data))
    }, [])
    useEffect(() => {
        fetch('teams.json')
            .then(res => res.json())
            .then(data => setTeams(data))
    }, [])
    useEffect(() => {
        fetch('logos.json')
            .then(res => res.json())
            .then(data => setLogos(data))
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prevIndex) => (prevIndex === cultures.length - 1 ? 0 : prevIndex + 1));
        }, 5000);

        return () => clearInterval(interval);
    }, [cultures.length]);
    return (
        <div className="">
            {/* title and description */}
            <div className='lg:px-24 px-10 '>
                <h1 className='lg:text-7xl md:text-5xl text-3xl'>We are a full-service<br /> digital marketing agency</h1>
                <h1 className="text-gray-500 md:w-3/4 my-10 lg:ml-96 md:ml-48">Digitomark is the brand new concern of Dcastalia Limited. Today Digital Marketing is one of the crucial tools to build trust for a business. This is because, today, the customers look for the best on search engines and rely on reviews from their friends and family on social media. A combination of design, good content, photos, and videos are the backbones that build that trust.</h1>
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
            {/* mission vision */}
            <div className="">
                <div className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://dm-weteam.vercel.app/images/static/mission-bg.jpg')" }}>
                    <div className="lg:px-24 px-10  py-20 ">
                        <div>
                            <h1 className="text-2xl font-thin md:w-2/3">
                                Our main aim is to help businesses add value and trust on digital platforms with transparency and efficiency. As more people rely on search engine results and reviews on social media platforms to grow interested in a company, the online platform is becoming ultra-competitive for brands. <br /><br />

                                As an aspiring digital marketing agency in Bangladesh, we have talented and creative professionals who are charged up and ready to take ownership of their work and commit to taking your business to the next level.
                            </h1>
                            <div className="mt-20  grid md:grid-cols-2 grid-cols-1 gap-5  lg:ml-96 md:ml-5 ">
                                {
                                    missions.map((mission, index) => (
                                        <div key={index}>
                                            <div className="flex md:flex-row flex-col gap-5 items-start justify-start">
                                                <div>
                                                    <h1 className="text-5xl font-thin text-gray-500">{mission.number}</h1>
                                                </div>
                                                <div className="flex flex-col">
                                                    <h1 className="text-2xl">{mission.title}</h1>
                                                    <h1 className="pt-3">{mission.description}</h1>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* apply today */}
            <div>
                <div className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://dm-weteam.vercel.app/images/dynamic/cta2.jpg')" }}>
                    <div className="py-80 lg:px-24 px-10 ">

                        <h1 className='lg:text-7xl md:text-5xl text-3xl'>Join a team of passionate <br /> individuals</h1>
                        <button>
                            <label htmlFor="my-drawer-4" className="rounded-full mt-10 hover:bg-gray-500 cursor-pointer hover:text-white ease-in-out duration-300 flex items-center gap-3 bg-white text-black py-3 px-5">Apply Today! <GoArrowRight /></label>
                        </button>
                    </div>
                </div>
                {/* drawer */}
                <div className="drawer drawer-end z-[99999999999999]">
                    <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                    <div className="drawer-side">
                        <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                        <div className="menu p-4 pt-10 lg:w-2/5 md:w-2/3 w-4/5 min-h-full bg-white text-black">
                            <h1 className="text-center  lg:text-5xl md:text-4xl text-2xl">Get in Touch!</h1>
                            <div className="mt-10">
                                <form onSubmit={(e) => e.preventDefault()} action="" className="space-y-7">
                                    <input className="text-lg  border-transparent border border-b-gray-400 w-11/12 lg:ml-10 py-2 px-1 outline-none focus:border-b-black ease-in-out duration-300" type="text" placeholder="Adib Arman*" />
                                    <input className="text-lg  border-transparent border border-b-gray-400 w-11/12 lg:ml-10 py-2 px-1 outline-none focus:border-b-black ease-in-out duration-300" type="text" placeholder="Email*" />
                                    <input className="text-lg  border-transparent border border-b-gray-400 w-11/12 lg:ml-10 py-2 px-1 outline-none focus:border-b-black ease-in-out duration-300" type="text" placeholder="Phone Number*" />
                                    <input className="text-lg  border-transparent border border-b-gray-400 w-11/12 lg:ml-10 py-2 px-1 outline-none focus:border-b-black ease-in-out duration-300" type="text" placeholder="Organization Name*" />
                                    <textarea className="text-lg  border-transparent border border-b-gray-400 w-11/12 lg:ml-10 py-2 px-1 outline-none focus:border-b-black ease-in-out " type="text" placeholder="Message*" />
                                    <input type="submit" className="rounded-full mt-10 lg:ml-10 hover:bg-transparent border border-black cursor-pointer hover:text-black ease-in-out duration-300 flex items-center gap-3 bg-black text-white py-3 px-5" value="Submit Message" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* values and culture */}
            <div>
                <div className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://dm-weteam.vercel.app/images/dynamic/values-bg.jpg')" }}>
                    <div className="lg:px-24 px-10   py-40">
                        <h1 className='lg:text-7xl md:text-5xl text-3xl'>Our values culture, guide, and<br /> define our commitment to <br />excellence.</h1>

                        <div>
                            {/* buttons */}
                            <div className="my-10 flex md:flex-row flex-col md:items-center items-start md:justify-between gap-5 w-full ">
                                <div>
                                    <h1 className="text-white text-2xl">{currentSlide + 1} / {cultures.length}</h1>
                                </div>
                                <div className='flex items-center justify-end gap-4 flex-1'>
                                    <button className='rounded-full bg-transparent border-white border-2 hover:bg-white hover:text-black ease-in-out duration-300 text-white py-5 px-5' onClick={prevSlide}><GoArrowLeft /> </button>
                                    <button className='rounded-full bg-transparent border-white border-2 hover:bg-white hover:text-black ease-in-out duration-300 text-white py-5 px-5' onClick={nextSlide}><GoArrowRight /></button>
                                </div>

                            </div>
                            {/* carousel */}
                            <div>
                                {cultures.map((culture, index) => (
                                    <div key={index} className={`text-2xl flex-col  ${index === currentSlide ? '' : 'hidden'}`}>
                                        <div>
                                            <h1>{culture.upperText}</h1>
                                        </div>
                                        <div className="border-[1px] my-5 border-white w-full"></div>
                                        <div className="flex justify-end text-right">
                                            <div className="lg:w-1/2 h-20">
                                                <h1>{culture.lowerText}</h1>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* teams */}
            <div className="lg:px-24 px-10 mt-20">
                <div className="flex lg:items-center lg:flex-row flex-col items-start gap-5 justify-between">
                    <div>
                        <h1 className='lg:text-7xl md:text-5xl text-3xl'>A team of passionate <br /> individuals</h1>
                    </div>
                    {/* buttons */}
                    {/* <div className="">
                        <div className='flex items-center justify-end gap-4 flex-1'>
                            <button className='rounded-full bg-transparent border-white border-2 hover:bg-white hover:text-black ease-in-out duration-300 text-white py-5 px-5' ><GoArrowLeft /> </button>
                            <button className='rounded-full bg-transparent border-white border-2 hover:bg-white hover:text-black ease-in-out duration-300 text-white py-5 px-5' ><GoArrowRight /></button>
                        </div>
                    </div> */}
                </div>
                {/* team card */}
                <div className="mt-20">
                    <div className=''>
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
                            {
                                teams.map((team, index) => (
                                    <div key={index}>
                                        <Link to={`/singlePerson/${team.id}`}>
                                            <div className="card lg:w-96 md:w-80 w-full bg-[#0A0E12] border shadow-xl cursor-pointer">
                                                <figure><img className='w-full hover:scale-110 ease-in-out duration-500' src={team?.imageLink} alt="Shoes" /></figure>
                                                <div className="card-body">
                                                    <h2 className="card-title">{team?.name}</h2>
                                                    <div className="card-actions flex flex-col  justify-start">
                                                        <h1 className='text-gray-500'>{team.position}</h1>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))
                            }
                        </Carousel>
                    </div>
                </div>

            </div>
            {/* working alongside */}
            <div className="lg:px-24 px-10 my-20">
                <h1 className='lg:text-7xl md:text-5xl text-3xl'>Working alongside</h1>
                <div className="my-20">
                    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2">
                        {
                            logos.map((logo, index) => (
                                <div key={index}>
                                    <div className="border-[1px] flex items-center justify-center h-48">
                                        <img className=" m-auto" src={logo.imageLink} alt="" />
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

export default AboutUs;