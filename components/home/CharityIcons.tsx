import Image from 'next/image';
import React from 'react';

import {iconsData} from '@/lib/data';

const CharityIcons = () => {
    return (
        <>
            <h1 className='text-3xl font-bold text-cyan-950 w-1/2 m-auto py-16'>
                Welcome to AHD
            </h1>
            <div className='w-4/5 m-auto grid md:grid-cols-4 grid-cols-1 py-6 gap-8'>
                {iconsData?.map((item, index: number) => (
                    <div
                        className='group bg-cyan-950 text-xl p-2 duration-300 border-2 flex flex-col items-center rounded-2xl gap-2 hover:shadow-xl shadow-gray-800 hover:bg-white cursor-pointer hover:scale-105'
                        key={index}
                    >
                        <Image
                            src={item.image}
                            className='scale-105 group-hover:scale-90 duration-300'
                            alt=''
                            width={100}
                            height={100}
                        />
                        <span className='text-2xl'>Become a</span>
                        <strong>Volunteer</strong>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CharityIcons;
