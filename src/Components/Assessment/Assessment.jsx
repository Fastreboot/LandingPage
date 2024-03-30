import React from 'react';
import { useEffect, useState } from 'react';

const Assessment = () => {
    const datas = [
        {
            issue: "Depression",
            id: 1,
            img: "https://picsum.photos/seed/picsum/200/300",
            duration: "5min",
            title: "Assessment",
            href: "/fastreboot-website/test",
        },
        {
            issue: "Anxiety",
            id: 2,
            img: "https://picsum.photos/seed/picsum/200/300",
            duration: "5min",
            title: "Assessment",
            href: "/fastreboot-website/test",
        },
        {
            issue: "Stress",
            id: 3,
            img: "https://picsum.photos/seed/picsum/200/300",
            duration: "5min",
            title: "Assessment",
            href: "/fastreboot-website/test",
        },
        {
            issue: "Genaral",
            id: 4,
            img: "https://picsum.photos/seed/picsum/200/300",
            duration: "5min",
            title: "Assessment",
            href: "/fastreboot-website/test",
        },
    ];

    return (
        <div className='container mx-auto max-w-full bg-gray-200 pb-20 pt-5'>
            <h4 className='text-gray-500  font-bold text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 text-center'>Assessment</h4>
            <h3 className='font-bold text-md sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-3 text-center px-5'>Take the First Step Towards Healing</h3>
            <p className='font-semibold text-sm sm:text-md md:text-xl lg:text-2xl xl:text-3xl mb-5 text-center px-5'>Take our assessment and analyze your mental health score.</p>
            <div className="container mx-auto  justify-center">
                <div className=" grid grid-cols-2 sm:grid-cols-4 md:h-64 md:grid-cols-4 lg:grid-cols-4 gap-y-4  ">
                    {datas.map((data) => (
                        <a key={data.id} href={data.href}>
                        <div className='test-card h-auto w-auto mx-2 rounded-xl shadow-2xl border bg-white border-gray-300 p-3 pb-8 flex flex-col justify-between' key={data.id}>
                            <div className="card-img h-36 overflow-hidden rounded-xl">
                                <img src={data.img} alt="" className="w-full h-full object-cover" />
                            </div>
                            <div className="card-contents flex flex-col gap-2 px-1 pt-5">
                                    <h5 className='text-sm   text-blue-400 font-semibold'>{data.title}</h5>
                                <h3 className="card-head text-gray-600 font-bold text-xs  sm:text-sm md:text-md lg:lg xl:text-xl">
                                    {data.issue}
                                </h3>
                                <div className="duration text-gray-500 flex justify-between items-center">
                                    <span className='text-xs  sm:text-sm md:text-md lg:lg xl:text-xl'>{data.duration}</span>
                                    <button className='assessment-btn text-sm bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 focus:outline-none'>Test</button>
                                </div>
                            </div>
                        </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Assessment;
