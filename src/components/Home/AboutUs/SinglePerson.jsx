import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const SinglePerson = () => {
    const persons = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const person = persons.find(single => single?.id === idInt);
    return (
        <div className=''>
            <div className='lg:px-24 px-10 flex items-start justify-center lg:flex-row flex-col gap-10'>
                <div className='space-y-2 lg:w-1/2'>
                    <img className='mg:w-[400px] md:h-96 rounded-lg' src={person.imageLink} alt="" />
                    <h1 className='text-2xl'>{person.name}</h1>
                    <h1 className='text-gray-500'>{person.position}</h1>
                </div>
                <div className='lg:w-2/3 space-y-3'>
                    <h1 className='text-2xl'>{person.title}</h1>
                    <div className='space-y-3'>
                        <h1 className=''>{person.title1}</h1>
                        <h1 className=''>{person.title2}</h1>
                        <h1 className=''>{person.title3}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <div className=" bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('https://dm-weteam.vercel.app/images/dynamic/detail-cta.jpg')" }}>
                    <div className="py-80 lg:px-24 px-10 ">

                        <h1 className='lg:text-7xl md:text-5xl text-3xl'>Join a team of passionate <br /> individuals</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SinglePerson;